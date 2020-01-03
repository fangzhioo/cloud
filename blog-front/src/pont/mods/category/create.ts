/**
 * @description 添加分类节点
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.BaseResult();

export async function request(data: defs.BlogCategoryBO): Promise<any> {
  return Request('/server/cate/create', {
    data,
    method: 'POST',
  });
}
