/**
 * @description countArticleByQuery
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** current */
  current?: number;
  /** limit */
  limit?: number;
  /** offset */
  offset?: number;
  /** pageSize */
  pageSize?: number;
}
export const init = new defs.blog.CommonResult();

export async function request({
  params = {},
}: {
  params: Params;
}): Promise<any> {
  return Request('/api/article/countArticleByQuery', {
    method: 'GET',
    params,
  });
}