/**
 * @description login
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** redirect_url */
  redirect_url?: string;
}
export const init = new defs.blog.CommonResult();

export async function request({
  params = {},
}: {
  params: Params;
}): Promise<any> {
  return Request('/api/login', {
    method: 'GET',
    params,
  });
}
