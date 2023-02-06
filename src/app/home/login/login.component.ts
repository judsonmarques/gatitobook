import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  senha= '';

  constructor(
    private authService:AutenticacaoService,
    private router: Router) {}

  ngOninit(): void {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next: (value) => {
        this.router.navigate(["animais"]);
      },
      error(erro) {
        console.log(erro);
      },
      complete: () => {
        console.log("");
      },
    });
  }
  }



