import { NovoUsuarioService } from './novo-usuario.service';
import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { first, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  usuarioExiste(): any | string {
    throw new Error('Method not implemented.');
  }
  constructor(private novoUsuarioService: NovoUsuarioService) {}

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.novoUsuarioService.verificarUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }
}
