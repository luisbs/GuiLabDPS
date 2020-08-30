import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio01';

  // Descuentos(porcentajes)
  descIsss = 0.073
  descRenta = 0.11
  descAfp = 0.051

  salario = 0

  public get montoIsss(): number {
    return this.salario * this.descIsss
  }
  public get montoRenta(): number {
    return this.salario * this.descRenta
  }
  public get montoAfp(): number {
    return this.salario * this.descAfp
  }

  public get salarioNeto(): number {
    return this.salario - (this.montoIsss + this.montoRenta + this.montoAfp)
  }

  onChange(event: any) {
    this.salario = event.target.value
    console.log(event.target.value);

  }
}
