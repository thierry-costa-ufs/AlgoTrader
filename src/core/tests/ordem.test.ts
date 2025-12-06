import { TipoOrdem } from "../types/TipoOrdem.ts";
import { Ordem } from "../entities/Ordem.ts";

const ordem = new Ordem("0001", "STOCK_A", TipoOrdem.COMPRA, 0.99,100);
console.log(ordem.getVolume());
ordem.reduzirVolume(50);
console.log(ordem.getVolume());
console.log(ordem.isExecutada());
ordem.reduzirVolume(50);
console.log(ordem.getVolume());
console.log(ordem.isExecutada());