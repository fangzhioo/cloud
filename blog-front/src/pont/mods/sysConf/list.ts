/**
 * @description list
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** current */
  current?: number;
  /** pageSize */
  pageSize?: number;
  /** key */
  key?: string;
}
export const init = new defs.BasePages();

export async function request(params: Params): Promise<any> {
  return Request('/server/sys/list', {
    params,
    method: 'GET',
  });
}
