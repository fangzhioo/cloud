/**
 * @description undefined
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** query */
  query: defs.blog.BlogArticleQuery;
}
export const init = new defs.blog.CommonResultListBlogArticleVO();

export async function request({
  params = {},
}: {
  params: Params;
}): Promise<any> {
  return Request('/api/article/listArticleByQuery', {
    method: 'GET',
    params,
  });
}
