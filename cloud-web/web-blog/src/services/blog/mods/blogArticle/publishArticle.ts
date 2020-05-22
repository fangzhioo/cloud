/**
 * @description publishArticle
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.blog.CommonResult();

export async function request({
  params = {},
  data,
}: {
  params: Params;
  data: defs.blog.BlogArticleDTO;
}): Promise<any> {
  return Request('/api/article/publishArticle', {
    method: 'POST',
    params,
    data,
  });
}
