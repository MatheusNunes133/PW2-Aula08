// 2. Questão 2

import { IFilhote } from "../interfaces/FilhoteInterface";

export class Filhote implements IFilhote {
    readonly cores: string[];
    readonly pelagem: number;
    tutor: string | undefined;

    constructor(cores: string[], pelagem: number) {
        this.cores = cores;
        this.pelagem = pelagem;
        this.tutor = undefined;
    }

    adotar(tutor: string): string {
        this.tutor = tutor;
        return this.tutor;
    }

}