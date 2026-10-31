import { describe, expect, test } from "vitest";
import { Contacto } from "../Clases/Contacto";
import { Correo } from "../Clases/Correo";

describe("RQ-1", () => {
  test("Se podrán crear múltiples correos con diferentes remitentes y destinatarios.", () => {
    const ana = new Contacto();
    ana.setNombre("Ana");
    ana.setEmail("ana@mail.com");

    const luis = new Contacto();
    luis.setNombre("Luis");
    luis.setEmail("luis@mail.com");

    const marta = new Contacto();
    marta.setNombre("Marta");
    marta.setEmail("marta@mail.com");

    const correo1 = new Correo();
    correo1.setAsunto("Parcial");
    correo1.setContenido("Mañana hay parcial de programación");
    correo1.setRemitente(ana);
    correo1.setDestinatarios([luis]);

    const correo2 = new Correo();
    correo2.setAsunto("Sprints");
    correo2.setContenido("Adjunto los sprints del proyecto");
    correo2.setRemitente(luis);
    correo2.setDestinatarios([ana, marta]);

    expect(correo1.getRemitente()).toBe(ana);
    expect(correo1.getDestinatarios()).toEqual([luis]);

    expect(correo2.getRemitente()).toBe(luis);
    expect(correo2.getDestinatarios()).toEqual([ana, marta]);

    expect(correo1.getRemitente()).not.toBe(correo2.getRemitente());
    expect(correo1.getDestinatarios()).not.toEqual(correo2.getDestinatarios());
  });

  test("Cada correo tendrá una identidad que permita distinguirlo de los demás.", () => {
    const correo1 = new Correo();
    const correo2 = new Correo();

    expect(correo1.getId()).toBeTruthy();
    expect(correo2.getId()).toBeTruthy();
    expect(correo1.getId()).not.toBe(correo2.getId());

    // El id no cambia al modificar el correo
    const idOriginal = correo1.getId();
    correo1.setAsunto("Nuevo asunto");
    correo1.setLeido(true);
    expect(correo1.getId()).toBe(idOriginal);
  });

  test("Se deberán validar los datos obligatorios cuando corresponda.", () => {});

  test("Se deberá demostrar que los objetos creados mantienen correctamente su información.", () => {});

  test("Las colecciones de destinatarios no deberán exponer modificaciones que comprometan las reglas del dominio", () => {});
});
