/**
 * @description 根据节点id获取子类
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** parentId */
  parentId?: number;
}
export const init = new defs.BaseResult();

export async function request(params: Params): Promise<any> {
  return Request('/server/cate/get', {
    params,
    method: 'GET',
  });
}
