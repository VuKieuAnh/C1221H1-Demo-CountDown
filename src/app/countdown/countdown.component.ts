import {Component, EventEmitter,Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  seconds: any;
  startTimer: any;

  @Input('times')

  get seconds1() {
    return this.seconds;
  }

  set seconds1(value) {
    const v = Number(value);
    this.seconds = Number.isNaN(v)?10: v;
  }
  constructor() { }

  ngOnInit(): void {
  }

  start(){

    this.startTimer = setInterval(()=>{
      this.seconds --;
      console.log(this.seconds);
      this.isDone();
    }, 1000);
  }
  stop(){
    clearInterval(this.startTimer);
  }

  @Output()
  finish = new EventEmitter<boolean>();
  isDone(){
    if (this.seconds==0){
      this.stop();
      this.finish.emit(true);
    }
  }


}
