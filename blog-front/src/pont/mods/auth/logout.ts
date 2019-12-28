/**
 * @description logout
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.BaseResult();

export async function request(params: Params): Promise<any> {
  return Request('/server/auth/logout', {
    params,
    method: 'GET',
  });
}
