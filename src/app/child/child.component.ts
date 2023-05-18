import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
 {
    @Input() public messagefromparent="";

    @Output() public MyEvent=new EventEmitter();
    public SendEvent()
     {
        this.MyEvent.emit("hello from child");
     }
  }
