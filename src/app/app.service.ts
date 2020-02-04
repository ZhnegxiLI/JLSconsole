import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { timeout, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export abstract class appServiceBase {

    public host : string = "http://localhost/JLSConsoleApplication/";

    constructor(
        protected _httpClient: HttpClient,
        protected _matSnackBar: MatSnackBar,
        protected _router : Router){

    }

    checkNetWork() : boolean{
        if(false){
            this._matSnackBar.open('Please Check your netWork','Ok', {
                verticalPosition: 'top',
                duration        : 2000
            });
            return false;
        }
        return true;
    }

    checkResult(result : any) : boolean{
        console.log(result.type);
        if(result.success){
            return true;
        }else{
            if(result.type == "500"){
                this._router.navigateByUrl('/apps/errors/error-500');
                //this._location.go('/apps/errors/error-500');
            }
            else if(result.Type == "404"){
                this._router.navigateByUrl('/apps/errors/error-500');
                //this._location.go('/apps/errors/error-404');
            }
            return false;
        }
    }

    protected postUrl(url : string, body : any) : Observable<any>{
        return this._httpClient.post(url, body)
            .pipe(
                timeout(20000),
            )
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
      }

    private handleError(error: Response | any) {
        let errMsg: string;
        // if (error instanceof Response) {
        //   const body = error.json() || '';
        //   const err = body.error || JSON.stringify(body);
        //   errMsg = `${error.status}-${error.statusText || ''} ${err}`;
        // }
        // else {
        //   errMsg = error.message ? error.message : error.tostring();
        // }
        // console.error(errMsg);
        // return Observable.throw(errMsg);
        if(error.name!=null &&error.name =="TimeoutError"){
            //超时信息
            return Observable.throw({Msg:"连接超时请检查网络连接",Success :false});
          }
          else{
        
        console.error(JSON.parse(error._body));
        return Observable.throw(JSON.parse(error._body));
      }
    }
}