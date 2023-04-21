import { ComidaDePet } from "../interfaces/ComidaDePet";
import { PequenoRoedor } from "./PequenoRoedor";

export class Hamster extends PequenoRoedor {

    constructor() {
        super("Hamster")
    }

    correr() {
        this.felicidade += 1
    }

    comer(comida: ComidaDePet): boolean {
        return true;
    }
}