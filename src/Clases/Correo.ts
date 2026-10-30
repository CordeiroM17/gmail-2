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
}
