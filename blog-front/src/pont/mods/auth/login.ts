/**
 * @description login
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.BaseResult();

export async function request(data: defs.BlogUserLoginBO): Promise<any> {
  return Request('/server/auth/login', {
    data,
    method: 'POST',
  });
}
