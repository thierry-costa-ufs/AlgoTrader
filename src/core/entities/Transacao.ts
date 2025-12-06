export class Transacao {
    constructor(
        public readonly id: string,
        public readonly precoExecucao: number,
        public readonly volumeExecutado: number,
        public readonly timestamp: Date
    ) {

    }
}