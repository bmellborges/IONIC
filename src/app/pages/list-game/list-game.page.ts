import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service.service';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.page.html',
  styleUrls: ['./list-game.page.scss'],
})
export class ListGamePage implements OnInit {

  protected game: any;

  constructor(
    protected GameService: GameService

  ) { }

  ngOnInit() {
    this.GameService.gelAll().subscribe(
      res => {
        this.game = res;
      }
    )
  }

  async doRefresh(event) {
    //console.log('Begin async operation');
    this.GameService.gelAll().subscribe(
      res => {
         this.game = res;
        setTimeout(() => {
          //console.log('Async operation has ended');
          event.target.complete();
        }, 500);
      }
    );
  }
}
