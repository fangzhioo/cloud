import { parse } from 'querystring';
import _ from 'lodash';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const isString = (str: any): boolean => typeof str === 'string';

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

/**
 * 获取 url params
 */
export function getUrlParam(param: string, location?: any) {
  const urlSearchParams = new URLSearchParams(
    !_.isEmpty(location) ? location.search : window.location.search,
  );
  return urlSearchParams.get(param);
}
