/**
 * @description register
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** username */
  username?: string;
  /** password */
  password?: string;
  /** phone */
  phone?: string;
  /** code */
  code?: string;
}
export const init = new defs.BaseResult();

export async function request(params: Params): Promise<any> {
  return Request('/server/auth/register', {
    params,
    method: 'POST',
  });
}
