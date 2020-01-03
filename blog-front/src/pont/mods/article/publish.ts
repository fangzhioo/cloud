/**
 * @description publish
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.BaseResult();

export async function request(data: defs.BlogArticleBO): Promise<any> {
  return Request('/server/article/publish', {
    data,
    method: 'POST',
  });
}
