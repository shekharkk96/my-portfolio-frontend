import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  intervalId : any;
  countDown : string = '';
  finalDate = new Date("April 30, 2024 12:00:00").getTime();

  constructor() { }

  ngOnInit(): void {
    this.startCountDown();
  }

  calculateCountDown() : void{
    const presentDate = new Date().getTime();
    const distance = this.finalDate - presentDate;

    if(distance < 0){
      this.countDown = "Wait for little more"
    }else{
      const days = Math.floor(distance/(1000*60*60*24));
      const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
      const minute = Math.floor((distance % (1000*60*60))/(1000*60));
      const second = Math.floor((distance % (1000*60))/(1000));
      this.countDown = days + "d " + hours + "h " + minute + "m " + second+ "s";
    }
  }

  startCountDown(): void{
    this.intervalId = setInterval(() =>{
      this.calculateCountDown();
    },1000);
  }

}
