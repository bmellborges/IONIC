import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
<<<<<<< HEAD
import { GameService } from 'src/app/services/game.service.service';
=======
import { GameService } from 'src/app/services/game.service';
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.page.html',
  styleUrls: ['./add-game.page.scss'],
})
export class AddGamePage implements OnInit {

  protected game: Game = new Game;

  constructor(
<<<<<<< HEAD
    protected GameService: GameService,
    protected alertControler: AlertController,
    protected router: Router,


=======
    protected gameService: GameService,
    protected alertController: AlertController,
    protected router:Router
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c
  ) { }

  ngOnInit() {
  }

  onsubmit(form) {
<<<<<<< HEAD
    this.GameService.save(this.game).then(
=======
    this.gameService.save(this.game).then(
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c
      res => {
        form.reset();
        this.game = new Game;
        //+console.log("Cadastrado!");
        this.presentAlert("Aviso", "Cadastrado!")
<<<<<<< HEAD
        this.router.navigate(['/tabs/listPlayer']);
=======
        this.router.navigate(['/tabs/listGame']);
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c
      },
      erro => {
        console.log("Erro: " + erro);
        this.presentAlert("Erro", "Não foi possivel cadastrar!")
      }
    )
  }
  //Alerts-------------------
  async presentAlert(tipo: string, texto: string) {
<<<<<<< HEAD
    const alert = await this.alertControler.create({
=======
    const alert = await this.alertController.create({
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c
      header: tipo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }
<<<<<<< HEAD

=======
>>>>>>> 7ab34fae268103f5db7a6b4824bac95098af186c
}
