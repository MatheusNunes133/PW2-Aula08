import { ComidaDePet } from "../interfaces/ComidaDePet"

export class PequenoRoedor {
    readonly especie: string;
    felicidade: number = 0;

    constructor(especie: string) {
        this.especie = especie;
    }

    comer(comida: ComidaDePet): boolean {
        if (comida != undefined) {
            return true;
        } else {
            return false;
        }
    }

    estaFeliz() {
        if (this.felicidade > 0) {
            return true;
        } else {
            return false;
        }
    }
}
