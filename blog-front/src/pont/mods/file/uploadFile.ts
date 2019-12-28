/**
 * @description upload
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** file */
  file: File;
}
export const init = new defs.BaseResult();

export async function request(params: Params): Promise<any> {
  return Request('/server/file/upload', {
    params,
    method: 'POST',
  });
}
