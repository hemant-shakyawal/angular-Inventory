import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`This is the Request ${req.url}`)
  const authReq=req.clone({

    headers:req.headers.set('Authorization','Bearer the token')
  })
  return next(req);
};
