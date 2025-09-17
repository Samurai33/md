# Marola RP — Índice de ADRs

Este diretório contém os Architecture Decision Records (ADRs) do projeto Marola RP. Os ADRs são documentos que capturam decisões arquiteturais importantes feitas ao longo do desenvolvimento do projeto.

## O que é um ADR?

Um ADR (Architecture Decision Record) é um documento que captura uma decisão arquitetural importante, incluindo o contexto, as opções consideradas, a decisão tomada e suas consequências.

## Índice de ADRs

| ID | Título | Status | Data | Resumo |
|----|--------|--------|------|--------|
| [ADR-001](001-estrutura-bilingue.md) | Adoção de Estrutura Bilíngue PT/EN | Aceito | 2025-09-01 | Decisão de usar arquivos separados com sufixos .pt.md e .en.md para documentação bilíngue |
| [ADR-002](002-vrpex-framework.md) | Adoção do vRPex Framework | Aceito | 2025-09-05 | Escolha do vRPex como framework base para desenvolvimento do servidor |

## Template para Novos ADRs

```markdown
# ADR 00N: Título da Decisão

* Status: [Proposto | Aceito | Rejeitado | Depreciado | Substituído]
* Decisores: [Lista de decisores]
* Data: YYYY-MM-DD

## Contexto e Problema

[Descrição do contexto e problema a ser resolvido]

## Opções Consideradas

* [Opção 1]
* [Opção 2]
* [Opção 3]

## Decisão

Escolhida a opção: "[opção]", porque [justificativa].

## Consequências

### Positivas

* [consequência positiva 1]
* ...

### Negativas

* [consequência negativa 1]
* ...

### Neutras

* [consequência neutra 1]
* ...

## Alternativas

[Descrição de alternativas consideradas mas não selecionadas]

## Compliance

[Alinhamento com políticas/padrões]

## Notas

[Informações adicionais relevantes]
```