import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
<<<<<<< HEAD
import { GameService } from 'src/app/services/game.service.service';
import { ActivatedRoute } from '@angular/router';
=======
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute } from '@angular/router';

>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c
@Component({
  selector: 'app-perfil-game',
  templateUrl: './perfil-game.page.html',
  styleUrls: ['./perfil-game.page.scss'],
})
export class PerfilGamePage implements OnInit {

  protected game: Game = new Game;
  private id: string = null;

  constructor(
<<<<<<< HEAD
    protected GameService: GameService,
=======
    protected gameService: GameService,
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c
    protected activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id){
<<<<<<< HEAD
      this.GameService.get(this.id).subscribe(
=======
      this.gameService.get(this.id).subscribe(
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c
        res=>{
          this.game = res
        }
      )
    }
  }

}
