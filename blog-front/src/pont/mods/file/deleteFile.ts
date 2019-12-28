/**
 * @description delete
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** ossKey */
  ossKey: string;
}
export const init = new defs.BaseResult();

export async function request(params: Params): Promise<any> {
  return Request('/server/file/delete', {
    params,
    method: 'GET',
  });
}
