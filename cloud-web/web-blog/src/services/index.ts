import { defs as blogDefs, blog } from './blog';

(window as any).defs = {
  blog: blogDefs,
};
(window as any).API = {
  blog,
};
