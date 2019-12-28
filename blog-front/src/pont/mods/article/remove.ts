/**
 * @description delete
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** id */
  id: number;
}
export const init = new defs.BaseResult();

export async function request(params: Params): Promise<any> {
  return Request('/server/article/delete', {
    params,
    method: 'GET',
  });
}
