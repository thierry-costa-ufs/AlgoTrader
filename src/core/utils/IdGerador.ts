import {nanoid} from 'nanoid/non-secure'

const ID_TAMANHO = 10; 

export class IdGerador {

    gerar ():string{
        return nanoid(ID_TAMANHO);
    }

}