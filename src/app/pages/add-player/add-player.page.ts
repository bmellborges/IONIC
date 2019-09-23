import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.page.html',
  styleUrls: ['./add-player.page.scss'],
})
export class AddPlayerPage implements OnInit {

  protected player: Player = new Player;

  constructor(
    protected playerService:PlayerService,
  ) { }

  ngOnInit() {
  }

  onsubmit(form){
    this.playerService.save(this.player).then(
      res=>{
        console.log("Cadastrado!");
      },
      erro=>{
        console.log("Erro: " + erro);
      }
    )
  }

}
