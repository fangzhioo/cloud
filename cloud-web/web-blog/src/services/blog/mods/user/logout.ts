/**
 * @description logout
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = undefined;

export async function request({
  params = {},
}: {
  params: Params;
}): Promise<any> {
  return Request('/api/logout', {
    method: 'GET',
    params,
  });
}
