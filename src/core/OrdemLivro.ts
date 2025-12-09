import { Ordem } from "./entities/Ordem.ts";
import { TipoOrdem } from "./types/TipoOrdem.ts";

// estrutura de dados Map vai ser essencial!

export class OrdemLivros {
    // Armazena { Preço: [Ordem1, Ordem2, ...] }
    private readonly bids: Map<number,Ordem[]> = new Map // Permite acesso rápido por Preço. Ex: Se dois traders querem comprar a $100, eles estarão na lista (o Ordem[]) da chave 100
    private readonly asks: Map<number,Ordem[]> = new Map// organiza as ordens de venda também por preço. Similar ao bids


    public submitOrder(order:Ordem):void{
        //const targetMap = (order.tipo == TipoOrdem)
        const targetMap = (order.tipo === TipoOrdem.COMPRA) ? this.bids : this.asks;
        const preco = order.preco;

        if (targetMap.has(preco)) {
            targetMap.get(preco)!.push(order); 
        } else {
            targetMap.set(preco, [order]);
        }
    }

    public getBids():Map<number, Ordem[]>{
        return this.bids;
    }

     public getAsks():Map<number, Ordem[]>{
        return this.asks;
    }
}

/*  Breve resumo sobre o que são Bids e Asks
No mundo do trading,
Bid e Ask referem-se, respetivamente, aos preços de compra e venda de um ativo em um determinado momento. Eles são os elementos centrais do livro de ofertas (book de ofertas), que reflete a lei da oferta e demanda no mercado financeiro. 
O que são Bid e Ask?

    Bid (Oferta de Compra): É o preço mais alto que um comprador está disposto a pagar por um ativo (ação, moeda, etc.) em um determinado momento. No livro de ofertas, as bids representam o lado da demanda.
    Ask (Oferta de Venda): Também conhecido como offer (oferta), é o preço mais baixo que um vendedor está disposto a aceitar para vender o mesmo ativo. No livro de ofertas, os asks representam o lado da oferta. 

Como funcionam na prática?
A diferença entre o preço de Bid e o preço de Ask é chamada de spread bid-ask. 

    Para o trader que compra: Se você deseja comprar um ativo imediatamente (ordem a mercado), você executará sua ordem no preço de ask, pois estará "agredindo" a melhor oferta de venda disponível no mercado.
    Para o trader que vende: Se você deseja vender um ativo imediatamente (ordem a mercado), você executará sua ordem no preço de bid, pois estará "agredindo" a melhor oferta de compra disponível. 


*/