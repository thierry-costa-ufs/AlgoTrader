import { TipoOrdem } from '../types/TipoOrdem.ts';

export class Ordem {
    constructor(
        public readonly id: string, 
        public readonly ativo: string, 
        public readonly tipo: TipoOrdem, 
        public readonly preco: number, 
        private volume: number
    ) {

    }

    public reduzirVolume(volumeExecutado: number):void {
        this.volume -= volumeExecutado;
    }

    public getVolume():number {
        return this.volume;
    }

    public isExecutada():boolean {
        return this.volume <= 0;
    }
}