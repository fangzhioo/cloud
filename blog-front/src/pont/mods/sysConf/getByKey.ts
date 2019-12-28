/**
 * @description getByKey
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {
  /** key */
  key: string;
}
export const init = new defs.BaseResult();

export async function request(params: Params): Promise<any> {
  return Request('/server/sys/getByKey', {
    params,
    method: 'GET',
  });
}
