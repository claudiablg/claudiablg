import { APIResponseBody, API_RESPONSE_STATUS, AppError, ERROR_TYPE } from '@newrade/core-common';
import {
  CreatePatientAPIRequestBody,
  CreatePatientAPIResponseBody,
  getPatientClinikoModel,
  PatientClinikoModel,
  PatientClinikoValidation,
} from '@newrade/vsb-common';
import debug from 'debug';
import { RequestHandler, Response } from 'express';
import { ValidationError } from 'yup';
import { env } from '../server-express';
import { fetchCliniko } from '../services/cliniko.service';
import { sendEmail } from '../services/email.service';

export const log = debug('newrade:vsb-api:cliniko');
const logWarn = log.extend('warn');
export const logError = log.extend('error');

/**
 * Messages
 */
export const systemError = `Une erreur s'est produite dans nos système, notre équipe technique s'occupe de l'incident, si l'erreur persiste, veuillez nous contacter.`;
const validationError = `Veuillez vérifier tout les champs du formulaire et soumettre à nouveau.`;

/**
 * Create a new patient from our form.
 */
export const postPatient: RequestHandler<
  any,
  CreatePatientAPIResponseBody,
  CreatePatientAPIRequestBody
> = async (req, res) => {
  try {
    log(`request to create a patient`);

    const payload = req.body?.payload?.patient;

    if (!req.body?.payload?.patient) {
      logError(`missing payload`);

      res.status(400).send({
        api: 'vsb-api',
        status: API_RESPONSE_STATUS.ERROR,
        message: validationError,
        errors: [{ name: ERROR_TYPE.DTO_VALIDATION_ERROR, message: 'Empty payload' }],
        payload: {},
      });
      return;
    }

    const clinikoPatient = getPatientClinikoModel(payload);

    PatientClinikoValidation.validateSync(clinikoPatient, {
      abortEarly: false,
    });

    log(`validation passed, sending request to cliniko`);

    const result = await fetchCliniko<PatientClinikoModel, any>({
      method: 'POST',
      route: 'patients',
      payload: clinikoPatient,
    });

    log(`patient successfully created`);

    try {
      await sendEmail({
        from: env.API_VSB_STMP_USER,
        to: 'info@vasectomie-pierre-boucher.ca',
        subject: 'Message automatique de VSB',
        text: `Ceci est un message automatique`,
      });
    } catch (error) {}

    return res.status(200).send(result);
  } catch (error) {
    logError(`request failed`);
    const yupError = error as ValidationError;

    // handle error thrown from yup
    if (yupError.inner) {
      logError(`request did not pass yup validation`);

      const appError = new AppError({
        name: ERROR_TYPE.DTO_VALIDATION_ERROR,
        message: 'Invalid dto',
      });
      res.status(400).send({
        api: 'vsb-api',
        status: API_RESPONSE_STATUS.ERROR,
        message: validationError,
        errors: [appError],
        payload: { yupValidationErrors: yupError.inner },
      });
      return;
    }

    handleUnhandledError(res, error, { yupValidationErrors: yupError.inner });
  }
};

export function handleUnhandledError(
  res: Response<APIResponseBody<any>>,
  error?: Error,
  payload?: any
) {
  logError(`request failed to an unhandled error`);
  res.status(500).send({
    api: 'vsb-api',
    status: API_RESPONSE_STATUS.ERROR,
    message: `Une erreur système s'est produite, notre équipe est avertie`,
    errors: [{ name: ERROR_TYPE.UNHANDLED_ERROR, message: error?.message || '' }],
    payload: payload,
  });
}
