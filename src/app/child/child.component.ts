import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  greeting: string;

  @Input()
  user: {name:string};

  @Input()
  stock: {name:string};

  message:string = "初始化信息";

  oldUserkName: string;

  changeDtected: boolean;

  changeCount:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
    
  }

  ngDoCheck(): void {
    if (this.user.name !== this.oldUserkName) {
      this.changeDtected = true;
      console.log("DoCheck: user.name 从" +this.oldUserkName + " 变为" + this.user.name);
      this.oldUserkName = this.user.name;
    }

    if (this.changeDtected) {
      this.changeCount = 0;
    } else {
      this.changeCount ++;
      console.log("DoCheck: user.name 没变化时， ngDoCheck方法被调用了" + this.changeCount + "次");

    }

    this.changeDtected = false;
  }

}
