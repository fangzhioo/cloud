/**
 * @description undefined
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.blog.CommonResultInteger();

export async function request({
  params = {},
}: {
  params: Params;
}): Promise<any> {
  return Request('/api/article/publishArticle', {
    method: 'POST',
    params,
  });
}
