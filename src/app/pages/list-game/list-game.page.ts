import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { GameService } from 'src/app/services/game.service.service';
=======
import { GameService } from 'src/app/services/game.service';
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.page.html',
  styleUrls: ['./list-game.page.scss'],
})
export class ListGamePage implements OnInit {

<<<<<<< HEAD
  protected game: any;

  constructor(
    protected GameService: GameService

  ) { }

  ngOnInit() {
    this.GameService.gelAll().subscribe(
      res => {
        this.game = res;
=======
  protected games: any;

  constructor(
    protected gameService: GameService
  ) { }

  ngOnInit() {
    this.gameService.gelAll().subscribe(
      res => {
        this.games = res;
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c
      }
    )
  }

  async doRefresh(event) {
    //console.log('Begin async operation');
<<<<<<< HEAD
    this.GameService.gelAll().subscribe(
      res => {
         this.game = res;
=======
    this.gameService.gelAll().subscribe(
      res => {
         this.games = res;
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c
        setTimeout(() => {
          //console.log('Async operation has ended');
          event.target.complete();
        }, 500);
      }
    );
  }
<<<<<<< HEAD

=======
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c
}
