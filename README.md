# Controle de Estoque
Repositório que implementa a lógica de controle de estoque.

# Ideia do projeto
Este repositório faz parte da minha rotina de estudos sobre filas e eventos.

A ideia é criar uma lógica de controle de estoque para um determinado tipo de produto. 

Essa implementação vai seguir os seguintes passos:

[ ] Criar a lógica de controle de estoque de forma procedural e acoplada com o caso de uso que faz pedido.
[ ] Depois a ideia é implementar o padrão unit of work para transformarmos a operação em uma transação.
[ ]  Depois vou evoluir essa ideia e implementar uma versão utilizando o padrão mediator com uma fila em memória
[ ] E por fim, vou adicionar o rabbitmq

# Análise de cada implementação

## Controle de estoque de forma procedural, sem begin e commit
- Vantagens
  - Simplicidade da implementação
- Desvantagens
  - Fere o single responsability principle
  - Não tem resiliência, se a energia cair corremos o risco de ter pedidos salvos sem o estoque ter sido debitado.
