#  Tarefas Detalhadas do Marques: Engenheiro do Motor de Matching - Sprint 1

O principal desafio do Marques é garantir que as ordens sejam armazenadas e acessadas da maneira mais rápida e eficiente possível, pois em um mercado de ações simulado, a velocidade é tudo.
1. Construir a Estrutura de Dados Central (O Order Book)

A tarefa mais importante é implementar a classe OrderBook (src/core/OrderBook.ts). Este não é apenas um lugar para armazenar ordens, mas sim a estrutura que as organiza para o matching.

    O Que é: O Order Book (Livro de Ordens) é a lista de todas as ordens de compra e venda pendentes para um ativo.

    Implementação POO: A classe OrderBook encapsulará a lógica de manipulação das ordens.

    Estruturas Internas: Em vez de usar arrays simples (que são lentos para buscar e inserir), o Marques deve usar Mapas (Map<number, Ordem[]>) em TypeScript:

        bids (Compras): Armazena ordens de compra.

        asks (Vendas): Armazena ordens de venda.

        Chave (Key): O preço da ordem.

        Valor (Value): Uma lista (Ordem[]) de ordens que estão naquele preço (porque várias pessoas podem querer comprar pelo mesmo preço).

2. Implementar o Fluxo de Entrada de Ordens

Ele deve criar o mecanismo que recebe a ordem criada pelo Costa e a insere corretamente na estrutura:

    Método submitOrder(order: Ordem):

        Recebe um objeto Ordem (que já terá tipo, preço, etc.).

        Verifica se é Compra (COMPRA) ou Venda (VENDA).

        Adiciona a ordem à estrutura de dados (bids ou asks) do preço correspondente.

        Foco na Sprint 1: Nesta fase, ele apenas armazena. A lógica de matching (executar a ordem) virá na Sprint 2.

3. Criar a Utilidade de Baixo Nível

O Marques é responsável por garantir que cada ordem no sistema seja única.

    Gerador de IDs (IdGenerator): Ele deve criar uma função simples que garanta que toda nova Ordem criada pelo sistema tenha um ID único. Isso é vital para rastrear a ordem durante o matching e as transações.

## 🎯 Tarefas Específicas para o Marques na Sprint 1
Tarefa	Arquivo	Entregável Esperado	Conceito Principal
1. Estrutura do Livro	src/core/OrderBook.ts	Criação da classe OrderBook com as propriedades bids: Map e asks: Map.	Estruturas de Dados (Mapas)
2. Gerador de IDs	src/core/utils/IdGenerator.ts	Uma função que retorna um string ou number único para ser usado pela classe Ordem.	Utilidades / Baixo Nível
3. Armazenamento	src/core/OrderBook.ts	Implementação do método submitOrder() (apenas armazenamento e organização).	POO (Métodos de Manipulação)
4. Testabilidade	src/core/OrderBook.ts	Implementação dos getters getBids() e getAsks() para que o Costa possa verificar a integridade da submissão.	Test Driven Development (TDD) Básico