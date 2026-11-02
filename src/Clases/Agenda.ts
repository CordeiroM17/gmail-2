import { Contacto } from "./Contacto";

export class Agenda {
  private contactos: Contacto[] = [];

  // Alta
  public agregarContacto(contacto: Contacto): void {
    if (!contacto.getNombre() || !contacto.getEmail()) {
      throw new Error("El contacto debe tener nombre y email");
    }
    if (this.buscarPorEmail(contacto.getEmail())) {
      throw new Error("Ya existe un contacto con ese email");
    }
    this.contactos.push(contacto);
  }

  // Consulta
  public getContactos(): Contacto[] {
    return [...this.contactos];
  }

  public buscarPorEmail(email: string): Contacto | null {
    const buscado = email.toLowerCase();
    const encontrado = this.contactos.find(
      (contacto) => contacto.getEmail().toLowerCase() === buscado,
    );
    return encontrado ?? null;
  }

  // Modificación
  public modificarContacto(email: string, nuevoNombre: string, nuevoEmail: string): void {
    const contacto = this.buscarPorEmail(email);
    if (!contacto) {
      throw new Error("No existe un contacto con ese email");
    }
    if (!nuevoNombre || !nuevoEmail) {
      throw new Error("El contacto debe tener nombre y email");
    }
    const otro = this.buscarPorEmail(nuevoEmail);
    if (otro && otro !== contacto) {
      throw new Error("Ya existe un contacto con ese email");
    }
    contacto.setNombre(nuevoNombre);
    contacto.setEmail(nuevoEmail);
  }

  // Baja
  public eliminarContacto(email: string): void {
    const contacto = this.buscarPorEmail(email);
    if (!contacto) {
      throw new Error("No existe un contacto con ese email");
    }
    this.contactos = this.contactos.filter((c) => c !== contacto);
  }
}
