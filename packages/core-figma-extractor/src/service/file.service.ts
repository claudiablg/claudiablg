import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { ExtractOptions } from '..';
import { log, logError } from './logging.service';

const projectJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf-8')
);

export function createExportFile(args: { path: string; data?: string }, options: ExtractOptions) {
  if (args.data) {
    fs.writeFileSync(path.join(args.path), args.data);
    return;
  }

  const date = options.outputDate
    ? new Date()
        .toLocaleDateString('en', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .split('/')
        .join('-')
    : '';
  const version = options.outputVersion ? `v${projectJson.version}` : '';
  const fileHeader = `/** auto-generated by ${projectJson.name} ${version} - ${date} */\n`;

  const fileData = fileHeader;

  fs.writeFileSync(path.join(args.path), fileData);
}

export function createExportJSONFile(options: { path: string; data?: string }) {
  // no comments are allowed in JSON
  fs.writeFileSync(path.join(options.path), options.data ? options.data : ``);
}

/**
 * Append content to existing files
 */
export function appendFile(options: { path: string; data?: string }) {
  if (!options.data) {
    const msg = chalk.red(`no data to append to file ${options.path}`);
    logError(msg);
    throw new Error(msg);
  }

  fs.appendFile(options.path, options.data, (err) => {
    if (err) {
      logError(chalk.red(`CSS color tokens failed ❌ `));
      throw err;
    }
    log(chalk.green(`updated file: ${options.path}`));
  });
}
