import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(public http:HttpClient) {}
  public async getHelloWorld(apiPath:string):Promise<Observable<any>>{
    let result = await this.http.get(environment.endpoint+apiPath);
    return result;
  }

  public async postData(name: string,collectName: string, des: string, price: number,photoURL: string,quantity: number){
    return this.http.post(environment.endpoint+'produce',{data:{name:name,description:des, price:price,photoURL:photoURL,quantity:quantity},
    collectionName:collectName});
  }
}
