import { Component,Input } from '@angular/core';
import { Subject } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appBootstrap';
  
  closeResult: string;
  
  constructor(private modalService: NgbModal) {}
    
  open(content) {
    this.modalService.open(content).result.then((result) => {
        this.c()
    });
  }
  c(){
      console.log("hi")
      return
  }
  p(){
    console.log("hey")
    return
  }
}