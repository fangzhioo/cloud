/**
 * @description publish comment
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.BaseResult();

export async function request(data: defs.BlogCommentBO): Promise<any> {
  return Request('/server/comment/publish', {
    data,
    method: 'POST',
  });
}
