export class Correo {
  private _id: string;
  private _asunto: string;
  private _contenido: string;
  private _remitente: string; /* TIENE QUE SER DE TIPO CONTACTO */

  private _destinatario: string; /* TIENE QUE SER UNA COLLECION DE CONTACTO */
  private _destinarariosCC: string[]; /* TIENE QUE SER UNA COLLECION DE CONTACTO */
  private _destinarariosCCO: string[]; /* TIENE QUE SER UNA COLLECION DE CONTACTO */

  private _leido: boolean;
  private _favorito: boolean;

  private _fechaEnvio: string; /* Date */
  private _fechaCreacion: string; /* Date */

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

  getRemitente(): string {
    return this._remitente;
  }

  protected setRemitente(remitente: string): void {
    this._remitente = remitente;
  }

  getDestinatario(): string {
    return this._destinatario;
  }

  protected setDestinatario(destinatario: string): void {
    this._destinatario = destinatario;
  }

  getDestinatariosCC(): string[] {
    return this._destinarariosCC;
  }

  protected setDestinatariosCC(destinatariosCC: string[]): void {
    this._destinarariosCC = destinatariosCC;
  }

  getDestinatariosCCO(): string[] {
    return this._destinarariosCCO;
  }

  protected setDestinatariosCCO(destinatariosCCO: string[]): void {
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

  getFechaEnvio(): string {
    return this._fechaEnvio;
  }

  protected setFechaEnvio(fechaEnvio: string): void {
    this._fechaEnvio = fechaEnvio;
  }

  getFechaCreacion(): string {
    return this._fechaCreacion;
  }

  protected setFechaCreacion(fechaCreacion: string): void {
    this._fechaCreacion = fechaCreacion;
  }
}
