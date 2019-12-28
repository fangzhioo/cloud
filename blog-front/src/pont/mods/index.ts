import * as article from './article';
import * as auth from './auth';
import * as comment from './comment';
import * as file from './file';
import * as main from './main';
import * as sysConf from './sysConf';
import * as user from './user';

const API: any = {};
API.article = article;
API.auth = auth;
API.comment = comment;
API.file = file;
API.main = main;
API.sysConf = sysConf;
API.user = user;
(window as any).API = API;
