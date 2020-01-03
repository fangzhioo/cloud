/**
 * @description async
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.BaseResult();

export async function request(data: defs.BlogFileBO): Promise<any> {
  return Request('/server/file/async', {
    data,
    method: 'POST',
  });
}
