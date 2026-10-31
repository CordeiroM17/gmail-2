import { Correo } from "./Correo";

export class Bandeja {
  private _nombre: string;
  private _correos: Correo[];

  constructor() {
    this._nombre = "";
    this._correos = [];
  }

  getNombre(): string {
    return this._nombre;
  }

  setNombre(nombre: string): void {
    this._nombre = nombre;
  }

  getCorreos(): Correo[] {
    return [...this._correos];
  }

  contiene(correo: Correo): boolean {
    return this._correos.some((c) => c.getId() === correo.getId());
  }

  agregarCorreo(correo: Correo): void {
    if (this.contiene(correo)) {
      return;
    }
    this._correos.push(correo);
  }

  quitarCorreo(correo: Correo): void {
    this._correos = this._correos.filter((c) => c.getId() !== correo.getId());
  }
}
