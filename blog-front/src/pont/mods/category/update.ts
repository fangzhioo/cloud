/**
 * @description update cate
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.BaseResult();

export async function request(data: defs.BlogCategoryBO): Promise<any> {
  return Request('/server/cate/update', {
    data,
    method: 'POST',
  });
}
