import { ComidaDePet } from "../interfaces/ComidaDePet";
import { PequenoRoedor } from "./PequenoRoedor";

export class Furao extends PequenoRoedor {

    constructor() {
        super("Furão")
    }

    cavar(): void {
        this.felicidade += 1
    }
    comer(comida: ComidaDePet): boolean {
        return super.comer(comida)
    }
}