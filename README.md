

# RecipesPerIngredient

## Estrutura do Projeto

### Apps
Esta pasta contém todos os serviços do sistema

- Persistence rest api
    - Serviço que faz conexão com o banco de dados postgres através da biblioteca database-connection
- Retrieve rest api
    - Serviço que monta os filtros necessários para a interface e faz a requisição ao serviço de persistence
- Web interface
    - Interface SSR construida com React 

### Libraries
Esta pasta contém todos as bibliotecas necessárias para a execução do sistema

- database-connection
    - Biblioteca de interface com um banco Postgres, utilizando a ORM Prisma
        - prisma/schema.postgres.prima: Arquivo com as definições do DB
        - Exporta tipos para interação com o banco
- recipes-models
    - Biblioteca responsável por declarar os tipos (interfaces/classes) primárias do sistema
        - Podemos considera-la como a camada de modelos :)
- recipes-components
    - Biblioteca de componentes de alto nível para construção da interface
        - Atualmente utiliza Material-UI (Google) 
- contract-types
    - Biblioteca responsável por definir os tipos de resposta dos serviços REST, assim, dois serviços sabem, com algum grau de certeza, como será a resposta do outro.
