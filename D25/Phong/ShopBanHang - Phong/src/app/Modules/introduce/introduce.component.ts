import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClientService,  } from 'src/app/Service/http-client.service';


@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
  
})
export class IntroduceComponent implements OnInit {
  
  form!: FormGroup;

  public name = '';
  public des = '';
  public price = 0;
  public quantity = 0;
  public photoURL = '';
  public collectName = '';
  // public id = '';

    // constructor(public httpSv:HttpClientService) {
    //   console.log(this.getData('produce/produce'));
    //  }


    // ngOnInit(): void {
    // }

    // public async getData(apiPath: string){
    //  (await this.httpSv.getHelloWorld(apiPath)).subscribe(console.log);
    // }

    // public async addData(){
    //   await (await this.httpSv.postData(this.name,'produce')).subscribe((value:any) =>{
    //     alert(value['message']);
    //   });
    // }
    constructor(
      public httpSv: HttpClientService,public FormBuilder: FormBuilder
    ) {
      this.getData('produce/produce');
  
      this.form = this.FormBuilder.group({
        collectName: ['', Validators.required],
        Id: ['', Validators.required],
        Name: ['', Validators.required],
        Price: ['', Validators.required],
        Des: ['', Validators.required],
        Quantity: ['', Validators.required],
        photoURL: ['', Validators.required],
      });
    }
  
    ngOnInit(): void {}
  
    public async getData(apiPath: string) {
      (await this.httpSv.getHelloWorld(apiPath)).subscribe(console.log);
    }
  
    public async addData() {
      await (
        await this.httpSv.postData(
          this.name,
          this.collectName,
          this.des,
          this.price,
          this.photoURL,
          this.quantity
     
        )
      ).subscribe((value: any) => {
        alert(value['message']);
      });
    }
  
    public async test() {
      let form = this.form.value;
      if (this.form.valid) {
        console.log(this.form.valid);
        alert(
          `Name: ${form.name}\n Collection: ${form.collectName}\n Price: ${form.price}\n Des: ${form.des}\n Quantity: ${form.quantity}\n Image: ${form.photoURL}`
        );
      }
      await (
        await this.httpSv.postData(
          this.form.value.Name,
          this.form.value.collectName,
          this.form.value.des,
          this.form.value.Price,
          this.form.value.photoURL,
          this.form.value.Quantity
        )
      ).subscribe((value: any) => {
        alert(value['message']);
      });
    }
  
}
// function Collection(Collection: any, $: any, arg2: { form: any; "": any; }, n: any, ID: any, $: any, arg6: { form: any; "": any; }, n: any, Name: any, $: any, arg10: { form: any; "": any; }, n: any, Price: any, $: any, arg14: { form: any; "": any; }, n: any, Des: any, $: any, arg18: { form: any; "": any; }, n: any, Quantity: any, $: any, arg22: { form: any; "": any; }, n: any, Image: new (width?: number | undefined, height?: number | undefined) => HTMLImageElement, $: any, arg26: { form: any; "": any; }) {
//   throw new Error('Function not implemented.');
// }

// function n(Collection: any, $: any, arg2: { form: any; "": any; }, n: any, ID: any, $: any, arg6: { form: any; "": any; }, n: any, Name: any, $: any, arg10: { form: any; "": any; }, n: any, Price: any, $: any, arg14: { form: any; "": any; }, n: any, Des: any, $: any, arg18: { form: any; "": any; }, n: any, Quantity: any, $: any, arg22: { form: any; "": any; }, n: any, Image: new (width?: number | undefined, height?: number | undefined) => HTMLImageElement, $: any, arg26: { form: any; "": any; }) {
//   throw new Error('Function not implemented.');
// }

// function ID(Collection: any, $: any, arg2: { form: any; "": any; }, n: any, ID: any, $: any, arg6: { form: any; "": any; }, n: any, Name: any, $: any, arg10: { form: any; "": any; }, n: any, Price: any, $: any, arg14: { form: any; "": any; }, n: any, Des: any, $: any, arg18: { form: any; "": any; }, n: any, Quantity: any, $: any, arg22: { form: any; "": any; }, n: any, Image: new (width?: number | undefined, height?: number | undefined) => HTMLImageElement, $: any, arg26: { form: any; "": any; }) {
//   throw new Error('Function not implemented.');
// }

// function Price(Collection: any, $: any, arg2: { form: any; "": any; }, n: any, ID: any, $: any, arg6: { form: any; "": any; }, n: any, Name: any, $: any, arg10: { form: any; "": any; }, n: any, Price: any, $: any, arg14: { form: any; "": any; }, n: any, Des: any, $: any, arg18: { form: any; "": any; }, n: any, Quantity: any, $: any, arg22: { form: any; "": any; }, n: any, Image: new (width?: number | undefined, height?: number | undefined) => HTMLImageElement, $: any, arg26: { form: any; "": any; }) {
//   throw new Error('Function not implemented.');
// }

// function Des(Collection: any, $: any, arg2: { form: any; "": any; }, n: any, ID: any, $: any, arg6: { form: any; "": any; }, n: any, Name: any, $: any, arg10: { form: any; "": any; }, n: any, Price: any, $: any, arg14: { form: any; "": any; }, n: any, Des: any, $: any, arg18: { form: any; "": any; }, n: any, Quantity: any, $: any, arg22: { form: any; "": any; }, n: any, Image: new (width?: number | undefined, height?: number | undefined) => HTMLImageElement, $: any, arg26: { form: any; "": any; }) {
//   throw new Error('Function not implemented.');
// }

// function Quantity(Collection: any, $: any, arg2: { form: any; "": any; }, n: any, ID: any, $: any, arg6: { form: any; "": any; }, n: any, Name: any, $: any, arg10: { form: any; "": any; }, n: any, Price: any, $: any, arg14: { form: any; "": any; }, n: any, Des: any, $: any, arg18: { form: any; "": any; }, n: any, Quantity: any, $: any, arg22: { form: any; "": any; }, n: any, Image: new (width?: number | undefined, height?: number | undefined) => HTMLImageElement, $: any, arg26: { form: any; "": any; }) {
//   throw new Error('Function not implemented.');
// }

