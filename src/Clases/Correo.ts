import { Contacto } from "./Contacto";

export class Correo {
  private _id: string;
  private _asunto: string;
  private _contenido: string;
  private _remitente: Contacto;

  private _destinatario: Contacto;
  private _destinarariosCC: Contacto[];
  private _destinarariosCCO: Contacto[];

  private _leido: boolean;
  private _favorito: boolean;

  private _fechaEnvio: Date; /* Date */
  private _fechaCreacion: Date; /* Date */

  constructor() {}

  /* Get y Set */
  getId(): string {
    return this._id;
  }

  protected setId(id: string): void {
    this._id = id;
  }

  getAsunto(): string {
    return this._asunto;
  }

  protected setAsunto(asunto: string): void {
    this._asunto = asunto;
  }

  getContenido(): string {
    return this._contenido;
  }

  protected setContenido(contenido: string): void {
    this._contenido = contenido;
  }

  getRemitente(): Contacto {
    return this._remitente;
  }

  protected setRemitente(remitente: Contacto): void {
    this._remitente = remitente;
  }

  getDestinatario(): Contacto {
    return this._destinatario;
  }

  protected setDestinatario(destinatario: Contacto): void {
    this._destinatario = destinatario;
  }

  getDestinatariosCC(): Contacto[] {
    return this._destinarariosCC;
  }

  protected setDestinatariosCC(destinatariosCC: Contacto[]): void {
    this._destinarariosCC = destinatariosCC;
  }

  getDestinatariosCCO(): Contacto[] {
    return this._destinarariosCCO;
  }

  protected setDestinatariosCCO(destinatariosCCO: Contacto[]): void {
    this._destinarariosCCO = destinatariosCCO;
  }

  getLeido(): boolean {
    return this._leido;
  }

  protected setLeido(leido: boolean): void {
    this._leido = leido;
  }

  getFavorito(): boolean {
    return this._favorito;
  }

  protected setFavorito(favorito: boolean): void {
    this._favorito = favorito;
  }

  getFechaEnvio(): Date {
    return this._fechaEnvio;
  }

  protected setFechaEnvio(fechaEnvio: Date): void {
    this._fechaEnvio = fechaEnvio;
  }

  getFechaCreacion(): Date {
    return this._fechaCreacion;
  }

  protected setFechaCreacion(fechaCreacion: Date): void {
    this._fechaCreacion = fechaCreacion;
  }
}
