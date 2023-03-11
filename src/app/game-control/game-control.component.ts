import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalCount=new EventEmitter<number>();
  count:number=0;
  interval:any;
  stoppingCondition:boolean=false;
  values:any=0;

  onStart(){
    this.stoppingCondition=false;
    this.values=0;
    this.interval=setInterval(()=>{
      this.intervalCount.emit(this.count+1);
      this.count++;
      if(this.count===7) this.onStop();
    },1000);
  }

  onStop(){
    clearInterval(this.interval);
    this.count=0;
    this.stoppingCondition=true;
  }
  
  onCount(){
    this.values=this.values+1;
  }
  constructor(){ }

  ngOnInit(){

  }
}
