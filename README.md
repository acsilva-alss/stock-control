# Controle de Estoque
Repositório que implementa a lógica de controle de estoque.

# Ideia do projeto
Este repositório faz parte da minha rotina de estudos sobre filas e eventos.

A ideia é criar uma lógica de controle de estoque para um determinado tipo de produto. 

Essa implementação vai conter a lógica de controle de estoque de forma procedural e acoplada com o caso de uso que faz pedido.

## Controle de estoque de forma procedural, sem begin e commit
- Vantagens
  - Simplicidade da implementação
- Desvantagens
  - Fere o single responsability principle
  - Não tem resiliência, se a energia cair corremos o risco de ter pedidos salvos sem o estoque ter sido debitado.
