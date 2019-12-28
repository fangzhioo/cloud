/**
 * @description update
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.BaseResult();

export async function request(data: defs.BlogArticleBo): Promise<any> {
  return Request('/server/article/update', {
    data,
    method: 'POST',
  });
}
