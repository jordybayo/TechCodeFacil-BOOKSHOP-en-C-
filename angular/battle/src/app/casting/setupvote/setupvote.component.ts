import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setupvote',
  templateUrl: './setupvote.component.html',
  styleUrls: ['./setupvote.component.css']
})
export class SetupvoteComponent implements OnInit {

  goBtnStatus = 'eteint';
  finishBtnStatus = 'eteint';
  matchRounds = 0;
  player1 = '';
  player2 = '';
  colorP1 = '';
  colorP2 = '';

  constructor() { }

  ngOnInit() {
  }

  getGoBtnStatus(){
    return this.goBtnStatus;
  }

  getFinishBtnStatus(){
    return this.goBtnStatus;
  }

}
