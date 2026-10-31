import { randomUUID } from "node:crypto";
import { Contacto } from "./Contacto";

export class Correo {
  private _id: string;
  private _asunto: string;
  private _contenido: string;
  private _remitente: Contacto;

  private _destinatarios: Contacto[];
  private _destinarariosCC: Contacto[];
  private _destinarariosCCO: Contacto[];

  private _leido: boolean;
  private _favorito: boolean;

  private _fechaEnvio: Date | null; /* Date */
  private _fechaCreacion: Date; /* Date */

  constructor() {
    this.setId(randomUUID());
    this._fechaCreacion = new Date();

    this.setAsunto("");
    this.setContenido("");
    this.setRemitente(new Contacto());

    this.setDestinatarios([]);
    this.setDestinatariosCC([]);
    this.setDestinatariosCCO([]);

    this.setLeido(false);
    this.setFavorito(false);

    this.setFechaEnvio(null);
  }

  /* Get y Set */
  getId(): string {
    return this._id;
  }

  setId(id: string): void {
    this._id = id;
  }

  getAsunto(): string {
    return this._asunto;
  }

  setAsunto(asunto: string): void {
    this._asunto = asunto;
  }

  getContenido(): string {
    return this._contenido;
  }

  setContenido(contenido: string): void {
    this._contenido = contenido;
  }

  getRemitente(): Contacto {
    return this._remitente;
  }

  setRemitente(remitente: Contacto): void {
    this._remitente = remitente;
  }

  getDestinatarios(): Contacto[] {
    return this._destinatarios;
  }

  setDestinatarios(destinatarios: Contacto[]): void {
    this._destinatarios = destinatarios;
  }

  getDestinatariosCC(): Contacto[] {
    return this._destinarariosCC;
  }

  setDestinatariosCC(destinatariosCC: Contacto[]): void {
    this._destinarariosCC = destinatariosCC;
  }

  getDestinatariosCCO(): Contacto[] {
    return this._destinarariosCCO;
  }

  setDestinatariosCCO(destinatariosCCO: Contacto[]): void {
    this._destinarariosCCO = destinatariosCCO;
  }

  getLeido(): boolean {
    return this._leido;
  }

  setLeido(leido: boolean): void {
    this._leido = leido;
  }

  getFavorito(): boolean {
    return this._favorito;
  }

  setFavorito(favorito: boolean): void {
    this._favorito = favorito;
  }

  getFechaEnvio(): Date | null {
    return this._fechaEnvio;
  }

  setFechaEnvio(fechaEnvio: Date | null): void {
    this._fechaEnvio = fechaEnvio;
  }

  getFechaCreacion(): Date {
    return this._fechaCreacion;
  }

  setFechaCreacion(fechaCreacion: Date): void {
    this._fechaCreacion = fechaCreacion;
  }
}
