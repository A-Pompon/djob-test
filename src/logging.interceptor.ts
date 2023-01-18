import { BadGatewayException, CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, Observable, tap, throwError } from "rxjs";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                tap({
                    next: (data) => console.log("ok"),
                    error: (err) => console.log(uuidv4() + "  -  " + err)
                }));
    }
}