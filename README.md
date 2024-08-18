# Catalog-api

Catalog style app

## Definition of Don
To eacth functionality, the DOR includes: Repository, use-case, factory, controller and route.

## Débito técnico
[] - Atualizar todos os repositórios que criam registros, implementando o método do prisma createOrUpdate. 

## Requisitos funcionais(RFs)
<!-- RF to Users -->
- [x] 1 - Deve ser possível se cadastrar como membro;
- [x] 2 - Deve ser possível se autenticar como membro;
- [x] 3 - Deve ser possível visualizar o próprio perfil;
- [x] 4 - Deve ser possível atualizar o próprio perfil;
- [x] 7 - Deve ser possível cadastrar seu próprio serviço;
- [x] 5 - Deve ser possível listar os próprios serviços;
- [x] 6 - Deve ser possível listar todos os serviços da comunidade;
- [x] 8 - Deve ser possível buscar um serviço pelo seu id;
- [x] 9 - Deve ser possível um membro gostar de um serviço;

<!-- feats futuras -->
- [ ] Deve ser possível buscar um serviço pelo nome;

<!-- Tudo que um usuário ADM pode fazer -->
- [ ] Deve ser possível visualizar todos os membros que precisam ser verificados;
- [ ] Deve ser possível verificar um usuário;
- [ ] Deve ser possível visualizar os serviços que aguardam validação;
- [ ] Deve ser possível aprovar a ativação de um serviço;
- [ ] Deve ser possível um usuário ADM inativar qualquer serviço;

## Regras de negócio(RNs)
<!-- PARA RF 1 -->
- [x] Todo novo registro de usuário, deve ser criado com status de não verificado;
- [ ] A atualização do seu status de verificado só pode ser feita por um administrador;
- [ ] Um usuário não verificado não pode visualizar nenhum serviço da comunidade;
- [ ] Um usuário não verificado não pode criar nenhum serviço;
- [ ] Todo status de verificação só pode ser atualizado por um administrador;
- [ ] Todo processo de verificação, requer preenchimento de campos de identificação/localização
- [x] O usuário não pode ter o mesmo número de celular de outra pessoa;
  
  <!-- PARA RF 02-->
  <!-- PARA RF 03-->
  <!-- PARA RF 04-->
  <!-- PARA RF 05-->
  <!-- PARA RF 06-->
  <!-- PARA RF 07-->
  <!-- PARA RF 08-->
  <!-- PARA RF 09-->
  <!-- PARA RF 10-->

- [x] Todas as ações chamadas pelo user devem ser authenticadas com o token jwt
- [ ] Apenas usuários ADM's pode verificar os usuários recém criados;
- [ ] Usuário não pode visualizar nada sem estar logado;
- [ ] O login inicialmente possuirá um time de 20 minutos para expirar;
- [x] Não pode haver serviço com nome duplicado;
- [ ] Criação de serviços só pode ser aprovado por adms;
- [ ] Usuário não pode curtir um serviço mais de uma vez;

## Requisitos não funcionais(RFNs)
<!-- não parte do cliente -->
- [x] Senhas dos users precisam ter no mínimo 6 caracteres;
- [x] Senhas dos users precisam estar criptografadas;
- [x] Os dados da aplicação precisam persistir em um banco PostgreSQL;
- [x] O user deve ser ideentificado por meio de um JWT;

## To developer
- VS-code min version: 1.89

## Patterns utilizados
- Repository
- Factory
- Sut