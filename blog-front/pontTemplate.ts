import { CodeGenerator, Interface } from 'pont-engine';

export default class MyGenerator extends CodeGenerator {
  getInterfaceContent(inter: Interface) {
    const paramsCode = inter.getParamsCode();
    const bodyParamsCode = inter.getBodyParamsCode();
    const method = inter.method.toUpperCase();
    const requestParams = bodyParamsCode ? `data: ${bodyParamsCode}` : `params: Params`;

    return `
      /**
      * @description ${inter.description}
      */
    
    import Request from '@/utils/request';
    import * as defs from '../../baseClass';

    export ${paramsCode};

    export const init = ${inter.response.initialValue};

    export async function request(${requestParams}): Promise<any> {
      return Request('${inter.path}',{
        ${bodyParamsCode ? 'data' : 'params'},
        method: '${method}',
      });
    }
    
   `;
  }
}
