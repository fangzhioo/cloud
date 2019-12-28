/**
 * @description getCaptcha
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** phone */
  phone: string;
}
export const init = new defs.BaseResult();

export async function request(params: Params): Promise<any> {
  return Request('/server/auth/getCaptcha', {
    params,
    method: 'GET',
  });
}
