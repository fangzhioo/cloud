/**
 * @description list by article
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** current */
  current?: number;
  /** pageSize */
  pageSize?: number;
  /** articleId */
  articleId?: number;
  /** parentId */
  parentId?: number;
  /** status */
  status?: string;
}
export const init = new defs.BasePages();

export async function request(params: Params): Promise<any> {
  return Request('/server/comment/list', {
    params,
    method: 'GET',
  });
}
