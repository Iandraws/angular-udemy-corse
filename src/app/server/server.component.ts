import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  showPassword:boolean=false
  log:any|undefined =[]

  

  constructor(){

  }
  ngOnInit(){

  }

showToggle(){
  this.showPassword=!this.showPassword;
 this.log.push(new Date)
  
  
}

}
