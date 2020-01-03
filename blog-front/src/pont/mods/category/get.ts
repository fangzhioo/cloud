/**
 * @description 获取节点详情
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** cateId */
  cateId: number;
}
export const init = new defs.BaseResult();

export async function request(params: Params): Promise<any> {
  return Request('/server/cate/getCateById', {
    params,
    method: 'GET',
  });
}
