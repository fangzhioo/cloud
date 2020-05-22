/**
 * @description antdPolicy
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.blog.CommonResult();

export async function request({
  params = {},
}: {
  params: Params;
}): Promise<any> {
  return Request('/api/aliyun/antdPolicy', {
    method: 'GET',
    params,
  });
}
