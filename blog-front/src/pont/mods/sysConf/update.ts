/**
 * @description update
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.BaseResult();

export async function request(data: defs.BlogConfigBO): Promise<any> {
  return Request('/server/sys/update', {
    data,
    method: 'POST',
  });
}
