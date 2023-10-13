import { Component } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent {
userData = {

name: '',
lastname: '',
email: '',

  
 

};

onSubmit(){

console.log(this.userData);

}


}
