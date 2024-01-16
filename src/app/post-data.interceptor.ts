import { HttpInterceptorFn } from '@angular/common/http';

export const postDataInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`"Help is here" from ${req.url}`);
  
  return next(req);
};
