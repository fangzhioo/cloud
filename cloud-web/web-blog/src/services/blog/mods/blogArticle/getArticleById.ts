/**
 * @description undefined
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** articleId */
  articleId: any;
}
export const init = new defs.blog.CommonResultBlogArticleVO();

export async function request({
  params = {},
}: {
  params: Params;
}): Promise<any> {
  return Request('/api/article/getArticleById', {
    method: 'GET',
    params,
  });
}
