// 1. Questão 01

export class Animal {
    private name: string;
    private caracteristicas: string[];

    constructor(name: string) {
        this.name = name;
        this.caracteristicas = [];
    }

    exibirAnimal(): string {
        return this.name;
    }

    cadastrar(caracteristica: string): void {
        this.caracteristicas.push(caracteristica)
    }

    exibirCaracteristica(): string {
        let indexAleatorio = Math.floor(Math.random() * this.caracteristicas.length)
        return this.caracteristicas[indexAleatorio];
    }
}