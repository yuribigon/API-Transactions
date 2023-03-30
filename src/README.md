>>> OK:

- Validação por CPF (unico por usuario)

- Classe Transaction

- GET /users/:id (não pode aparecer as transações)

- GET /users (filtrar por nome, email, cpf)

- POST /user/:userId/transactions

- GET /user/:userId/transactions/:id (PRONTO)

- GET /users/:userId/transactions (PRONTO)

- PUT/DELETE /users/:userId/transactions/:id
Devem editar ou deletar transações.

>>> TESTAR:

- TODAS AS ROTAS


>>> PENDENTE (users):


---->>> Para todas as rotas envolvendo as transações devem conter um
middleware para verificar se o usuário informado na rota existe. <<<-----