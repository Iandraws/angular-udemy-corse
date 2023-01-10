import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
buuton:boolean=false
  username=''
  serverIsCreated=false
 
  constructor(){
 
  }
  ngOnInit(){

  }
  addServer():any{
this.serverIsCreated=true;
this.username=""
}

getColor(){
  return this.serverIsCreated===
}
}
