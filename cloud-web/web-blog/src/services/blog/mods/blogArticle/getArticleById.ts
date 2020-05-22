/**
 * @description getArticleById
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** articleId */
  articleId: number;
}
export const init = new defs.blog.CommonResult();

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
