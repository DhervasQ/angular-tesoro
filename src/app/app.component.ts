import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tesoro';
  public posicionTesoro = { x: 0, y: 0 };
  public rows = prompt('Introduce número de elementos');
  // public cols = prompt('Introduce número de columnas');
  public filas = [0];
  public columnas = [0];

  public intentos = 0;

  public colocarTesoro(rows: any) {
    this.posicionTesoro.x = Math.floor(Math.random() * rows);
  }
  public tesoro: number = 0;

  public puntos: number = 0;
  public seleccionada: number = 99999;
  public setMessage(message: any): void {
    this.seleccionada = message.message.id;
    this.intentos++;
    if(this.seleccionada===this.posicionTesoro.x)
    alert("Enhorabuena! Has acertado con "+this.intentos+" intentos");
  }
  ngOnInit(): void {
    this.colocarTesoro(this.rows);
    for (let i = 1; i < Number(this.rows); i++) {
      this.filas.push(i);
    }
  }
}
