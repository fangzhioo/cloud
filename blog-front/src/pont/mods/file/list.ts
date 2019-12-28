/**
 * @description list
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** current */
  current?: number;
  /** pageSize */
  pageSize?: number;
}
export const init = new defs.BaseResult();

export async function request(params: Params): Promise<any> {
  return Request('/server/file/list', {
    params,
    method: 'GET',
  });
}
