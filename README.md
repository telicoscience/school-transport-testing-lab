# School Transport Testing Lab

Interface web em React + TypeScript para praticar testes unitários com Jest, testes de componentes com React Testing Library e testes end-to-end com Cypress.

O projeto simula um painel de monitoramento de transporte escolar com dashboard, alunos, rotas e ocorrências. A proposta é servir como laboratório técnico e projeto de portfólio.

## Objetivo

Demonstrar capacidade de:

- estruturar uma aplicação frontend com React e TypeScript;
- separar regra de negócio da camada visual;
- criar testes unitários com Jest;
- testar componentes com React Testing Library;
- validar fluxos reais de usuário com Cypress;
- organizar documentação técnica;
- executar testes em pipeline com GitHub Actions.

## Stack

- React
- TypeScript
- Vite
- Jest
- React Testing Library
- Cypress
- GitHub Actions

## Funcionalidades

- Dashboard com indicadores operacionais.
- Lista de alunos com busca e filtro por status.
- Detalhamento de rotas.
- Cadastro de ocorrências com validação.
- Lista de ocorrências abertas.
- Layout visual com aparência de SaaS.

## Estratégia de testes

### Jest

Usado para testar regras de negócio, funções puras e validações.

Arquivos principais:

```txt
src/tests/filters.test.ts
src/tests/validators.test.ts
src/tests/formatters.test.ts
```

### React Testing Library

Usada para testar componentes pelo comportamento visível ao usuário.

Arquivos principais:

```txt
src/tests/DashboardCard.test.tsx
src/tests/OccurrenceForm.test.tsx
```

### Cypress

Usado para testar fluxos completos no navegador.

Arquivos principais:

```txt
cypress/e2e/dashboard.cy.ts
cypress/e2e/students.cy.ts
cypress/e2e/occurrences.cy.ts
cypress/e2e/routes.cy.ts
```

## Como rodar

```bash
npm install
npm run dev
```

A aplicação roda em:

```txt
http://127.0.0.1:5173
```

## Rodar testes unitários

```bash
npm run test
```

## Rodar testes com cobertura

```bash
npm run test:coverage
```

## Abrir Cypress

```bash
npm run cy:open
```

## Rodar Cypress em modo headless

```bash
npm run test:e2e
```

## Rodar verificação completa

```bash
npm run check
```

## Critérios de conclusão do MVP

- [x] Dashboard com indicadores.
- [x] Lista de alunos com busca.
- [x] Filtro por status.
- [x] Cadastro de ocorrência.
- [x] Detalhes de rotas.
- [x] Testes unitários com Jest.
- [x] Testes de componentes com React Testing Library.
- [x] Testes E2E com Cypress.
- [x] Workflow de CI com GitHub Actions.

## Melhorias futuras

- Adicionar login fake.
- Adicionar MSW para simular API.
- Adicionar relatório visual de cobertura.
- Publicar deploy na Vercel.
- Gravar GIF dos testes rodando para colocar no README.
