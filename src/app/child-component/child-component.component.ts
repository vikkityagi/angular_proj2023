import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, SimpleChanges, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent  {
  // @Input() parentData: any;
  // @Output() childData =  new EventEmitter<string>();


  // changeChildComponent(data: string){
  //   this.childData.emit(data);
  // }

  // changeChildComponent2(){
  //   console.log('call')
  // }



  // ngOnInit(){
  //   console.log("ngOnInit call");

  // }

  // ngOnChanges(changes: SimpleChanges){
  //   console.log("ngOnChange call>"+JSON.stringify(changes));
  // }

  // ngAfterContentInit(){
  //   console.log("ngAfterContentInit check call");
  // }

  // ngDoCheck(){
  //   console.log("ngDo check call");
  // }
}
