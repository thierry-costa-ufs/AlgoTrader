# 🤝 Divisão de Tarefas: Sprint 1 (POO e Estruturas)

## 🧑‍💻 Costa: Modelagem de Entidades e Transações (Foco em POO)

O Costa se concentrará na definição de todas as entidades (modelos de dados) do nosso sistema. Este é um trabalho essencialmente de Programação Orientada a Objetos (POO).
Tarefa (Item de Backlog)	Arquivo	Foco e Aprendizado
1. Ordem (Modelo Principal)	src/core/entities/Ordem.ts	Finalizar a classe Ordem. Deve incluir o enum TipoOrdem (COMPRA/VENDA) e o método reduzirVolume(), garantindo o encapsulamento do volumeRestante.
2. Ativo/Ação (Modelo)	src/core/entities/Acao.ts	Criar a classe Acao (ou Ativo) com atributos básicos (symbol: string, nome: string). Simples no MVP, mas crucial para a abstração.
3. Transação (Modelo)	src/core/entities/Transacao.ts	Criar a classe Transacao para registrar negociações bem-sucedidas (precoExecucao, volumeExecutado, timestamp).
4. Ponto de Entrada	src/main.ts	Preparar o arquivo principal. Será o cliente que instanciará as classes (OrderBook, Ordem) e fará chamadas de teste.

Entrega do Costa: Um conjunto de classes POO prontas para serem usadas pelo Motor de Matching (Marques).



## 🧑‍💻 Marques: Estrutura de Dados e Lógica de Armazenamento

O Marques se concentrará na estrutura de dados central do sistema e nas utilidades de base. Este trabalho envolve a aplicação de Estruturas de Dados para garantir a eficiência futura.
Tarefa (Item de Backlog)	Arquivo	Foco e Aprendizado
1. Order Book (Estrutura Central)	src/core/OrderBook.ts	Criar a classe OrderBook. Dentro dela, usar dois Mapas (Map) em TypeScript para armazenar ordens de compra (Bids) e ordens de venda (Asks). Use o preço como chave para simplificar o acesso.
2. Método de Submissão	src/core/OrderBook.ts	Implementar o método submitOrder(order: Ordem). Deve adicionar a ordem à lista (Mapa) de Bids ou Asks apropriada. Sem lógica de matching ainda, apenas armazenamento.
3. Getter Básico	src/core/OrderBook.ts	Implementar métodos para retornar o estado atual do livro, como getBids().
4. ID Generator (Utilidade)	src/core/utils/IdGenerator.ts	Criar uma função simples para gerar um ID único para cada nova ordem, garantindo que não haja duplicidade.

Entrega do Marques: Um motor de armazenamento de ordens capaz de receber e organizar as ordens criadas pelo Costa.
🎯 Ponto de Merge da Sprint 1

O ponto de integração (o merge das branches costa e marques na main ou develop) ocorre quando as seguintes condições forem atendidas:

    Marques implementa OrderBook.submitOrder() aceitando uma instância de Ordem (criada pelo Costa).

    Costa usa o OrderBook do Marques no main.ts para testar se as instâncias de Ordem criadas são armazenadas corretamente.

### Próxima Sprint (Sprint 2): A lógica de matching (Algoritmos de Casamento) será construída dentro do OrderBook.submitOrder() do Marques, e o Costa trabalhará na implementação do Padrão Observer usando a classe Transacao