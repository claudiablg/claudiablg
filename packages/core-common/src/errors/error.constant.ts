export enum ERROR_TYPE {
  //
  // HTTP
  //
  HTTP_BAD_REQUEST_400 = 'HTTP_BAD_REQUEST_400',
  HTTP_UNAUTHORIZED_401 = 'HTTP_UNAUTHORIZED_401',
  HTTP_FORBIDDEN_403 = 'HTTP_FORBIDDEN_403',
  HTTP_NOT_FOUND_404 = 'HTTP_NOT_FOUND_404',
  HTTP_CONFLICT_409 = 'HTTP_CONFLICT_409',
  HTTP_SERVER_500 = 'HTTP_SERVER_500',
  //
  // tooling
  //
  LIB_ERROR = 'LIB_ERROR',
  WEBPACK_ERROR = 'WEBPACK_ERROR',
  GATSBY_ERROR = 'GATSBY_ERROR',
  //
  // client side
  //
  FETCH_CANCELLED = 'FETCH_CANCELLED',
  REDUX_ERROR = 'REDUX_ERROR',
  SERVICE_ERROR = 'SERVICE_ERROR',
  SERVICE_WORKER_ERROR = 'SERVICE_WORKER_ERROR',
  LOCAL_STORAGE_ERROR = 'LOCAL_STORAGE_ERROR',
  COMPONENT_ERROR = 'COMPONENT_ERROR',
  AUTH_ERROR = 'AUTH_ERROR',
  APP_ERROR = 'APP_ERROR',
  ROUTER_ERROR = 'ROUTER_ERROR',
  USER_CONFIGURATION_ERROR = 'USER_CONFIGURATION_ERROR',
  INVALID_RESPONSE = 'INVALID_RESPONSE',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  EXTERNAL_SERVER_ERROR = 'EXTERNAL_SERVER_ERROR',
  //
  // server side
  //
  DTO_VALIDATION_ERROR = 'DTO_VALIDATION_ERROR',
  RATE_LIMITING_ERROR = 'RATE_LIMITING_ERROR',
  UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY',
  //
  // others
  //
  UNHANDLED_ERROR = 'UNHANDLED_ERROR', // errors that were unhandled
}
