import request from '@/utils/request';

export async function queryAntdPolicy(): Promise<any> {
  return request('/api/aliyun/antdPolicy');
}
