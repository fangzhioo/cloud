/**
 * @description 获取aliyun OSS上传签名
 */

import Request from '@/utils/request';
import * as defs from '../../baseClass';

export class Params {}
export const init = new defs.BaseResult();

export async function request(params: Params): Promise<any> {
  return Request('/server/file/policy', {
    params,
    method: 'GET',
  });
}
