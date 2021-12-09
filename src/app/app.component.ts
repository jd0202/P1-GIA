import { Component } from '@angular/core';
import { withLatestFrom } from 'rxjs';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombres: string[] = ['JD','NJ'];

  public nombres2: string[] = ['DJ'];

  public listusuario: Usuario[] = [];

  constructor(){
    this.addFirstElement('A');
    this.addLastElement('B')
    this.deleteElement();
    this.nombres = this.concat(this.nombres2)
    console.log(this.nombres);

    console.log(this.nombres.sort());
    console.log(this.nombres.reverse());

    console.log(this.nombres.splice(this.nombres.indexOf("DJ"),1))

    let usuario: Usuario = new Usuario();
    usuario.idUsuario = 1;
    usuario.edad = 20;
    usuario.nombre = "Ricardo";
    usuario.estado = true;

    let usuario2: Usuario = new Usuario();
    usuario2.idUsuario = 1;
    usuario2.edad = 20;
    usuario2.nombre = "Jose";
    usuario2.estado = true;

    this.listusuario.push(usuario2);

  }

public addFirstElement(nombre: string){
  this.nombres.unshift(nombre);
}

public addLastElement(nombre: string): void{
  this.nombres.push(nombre);
}

public concat(list:string[]): string[]{
  return this.nombres.concat(list)
}

public deleteElement(): void{
  let res=this.nombres.pop();
  console.log("se elimino el registro " + res);
}

}