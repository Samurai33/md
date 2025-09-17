# Matriz RACI

![Status](https://img.shields.io/badge/status-mantido-brightgreen)
![Última Atualização](https://img.shields.io/badge/última_atualização-2025--09--17-informational)
![Revisão](https://img.shields.io/badge/revisão-mensal-blue)

## Visão Geral
RACI é uma matriz de atribuição de responsabilidades que descreve a participação de vários papéis na conclusão de tarefas ou entregas. A sigla significa:

- **R (Responsável)**: Quem executa a tarefa
- **A (Autoridade)**: Quem é responsável final pela tarefa
- **C (Consultado)**: Quem fornece entrada antes das decisões
- **I (Informado)**: Quem é mantido atualizado sobre o progresso

## Decisões Estratégicas

### Direção do Projeto
| Decisão/Tarefa | Direção | Tech Lead | Game Design | SRE/DevOps | Moderação | Comunidade | Jurídico |
|----------------|----------|------------|-------------|------------|------------|------------|----------|
| Visão & Estratégia | R/A | C | C | C | C | C | I |
| Planejamento de Roadmap | A | C | R | C | C | C | I |
| Recursos Principais | A | C | R | C | I | C | C |
| Alocação de Recursos | R/A | C | C | C | I | I | I |
| Decisões de Parceria | R/A | C | C | I | I | C | C |
| Mudanças de Política | A | C | C | C | R | C | C |

### Operações Técnicas
| Decisão/Tarefa | Direção | Tech Lead | Game Design | SRE/DevOps | Moderação | Comunidade | Jurídico |
|----------------|----------|------------|-------------|------------|------------|------------|----------|
| Mudanças de Arquitetura | I | R/A | C | C | I | I | I |
| Deploys Críticos | A | R | C | R | I | I | I |
| Incidentes de Segurança | A | R | I | R | C | I | C |
| Problemas de Performance | I | A | C | R | I | I | I |
| Planejamento de Infraestrutura | A | R | C | R | I | I | I |
| Gestão de Banco de Dados | I | A | C | R | I | I | C |

### Desenvolvimento do Jogo
| Decisão/Tarefa | Direção | Tech Lead | Game Design | SRE/DevOps | Moderação | Comunidade | Jurídico |
|----------------|----------|------------|-------------|------------|------------|------------|----------|
| Mecânicas do Jogo | A | C | R | I | C | C | I |
| Mudanças Econômicas | A | C | R | I | I | C | I |
| Atualizações de Conteúdo | A | C | R | C | I | C | C |
| Mudanças de Balanceamento | I | C | R/A | I | C | C | I |
| Correções de Bugs | I | A | R | C | I | I | I |
| Teste de Recursos | I | A | R | C | C | C | I |

### Gestão da Comunidade
| Decisão/Tarefa | Direção | Tech Lead | Game Design | SRE/DevOps | Moderação | Comunidade | Jurídico |
|----------------|----------|------------|-------------|------------|------------|------------|----------|
| Atualizações de Regras | A | I | C | I | R | C | C |
| Recursos de Ban | I | I | I | I | R/A | C | C |
| Eventos da Comunidade | A | I | C | I | R | C | I |
| Moderação de Conteúdo | I | I | C | I | R/A | C | C |
| Suporte ao Jogador | I | C | C | C | R/A | C | I |
| Mídias Sociais | A | I | C | I | C | R | C |

### Gestão de Riscos
| Decisão/Tarefa | Direção | Tech Lead | Game Design | SRE/DevOps | Moderação | Comunidade | Jurídico |
|----------------|----------|------------|-------------|------------|------------|------------|----------|
| Ban-wave/Exploit | A | C | I | C | R | I | C |
| Conformidade Legal | A | C | I | C | C | I | R |
| Privacidade de Dados | A | R | I | R | C | I | C |
| Gestão de Crises | R/A | C | C | C | R | C | C |
| Resposta a Auditorias | A | R | C | R | C | I | R |
| Avaliação de Riscos | A | R | C | R | C | I | R |

## Definições dos Papéis

### Direção
- **Responsabilidades Estratégicas:**
  - Decisão final em questões estratégicas
  - Responsável pelo sucesso geral do projeto
  - Define visão e objetivos
  - Alocação de recursos
  - Gestão de stakeholders
- **Envolvimento Operacional:**
  - Aprovação de recursos principais
  - Liderança em gestão de crises
  - Negociações de parcerias
  - Ponto final de escalação

### Tech Lead
- **Liderança Técnica:**
  - Decisões de arquitetura
  - Padrões de qualidade de código
  - Documentação técnica
  - Arquitetura de segurança
- **Gestão de Desenvolvimento:**
  - Planejamento de releases
  - Gestão de dívida técnica
  - Estratégia de infraestrutura
  - Otimização de performance

### Game Design
- **Sistemas do Jogo:**
  - Design de mecânicas
  - Balanceamento da economia
  - Planejamento de conteúdo
  - Progressão do jogador
- **Processo de Design:**
  - Especificações de recursos
  - Testes de balanceamento
  - Documentação de design
  - Coordenação de playtest

### SRE/DevOps
- **Infraestrutura:**
  - Manutenção de servidores
  - Monitoramento de performance
  - Implementação de segurança
  - Gestão de backup
- **Operações:**
  - Automação de deploy
  - Sistemas de monitoramento
  - Resposta a incidentes
  - Planejamento de capacidade

### Moderação
- **Gestão da Comunidade:**
  - Aplicação das regras
  - Suporte ao jogador
  - Gestão de bans
  - Resolução de conflitos
- **Moderação de Conteúdo:**
  - Monitoramento de chat
  - Revisão de conteúdo
  - Tratamento de denúncias
  - Segurança da comunidade

### Comunidade
- **Engajamento:**
  - Organização de eventos
  - Feedback da comunidade
  - Mídias sociais
  - Comunicações com jogadores
- **Suporte:**
  - Orientação de novos jogadores
  - Recursos da comunidade
  - Coleta de feedback
  - Participação em eventos

### Jurídico
- **Conformidade:**
  - Revisão legal
  - Conformidade com políticas
  - Revisão de contratos
  - Avaliação de riscos
- **Proteção:**
  - Proteção de IP
  - Conformidade com privacidade
  - Aplicação de termos
  - Documentação legal

## Diretrizes de Fluxo de Decisão

### Decisões Críticas
1. Identificação do Problema
2. Notificação dos Stakeholders
3. Avaliação de Impacto
4. Proposta de Solução
5. Revisão dos Stakeholders
6. Planejamento de Implementação
7. Execução
8. Revisão & Documentação

### Decisões Regulares
1. Submissão da Proposta
2. Revisão Inicial
3. Consulta aos Stakeholders
4. Tomada de Decisão
5. Implementação
6. Comunicação

## Requisitos de Comunicação

### Frequência de Atualizações
| Prioridade | Canal de Comunicação | Frequência de Atualização |
|------------|---------------------|--------------------------|
| Crítica | Mensagem Instantânea | Em 15 minutos |
| Alta | Email + Reunião | Em 2 horas |
| Média | Email | Em 24 horas |
| Baixa | Relatórios Regulares | Semanal |

### Padrões de Documentação
- Todas as decisões devem ser documentadas
- Incluir justificativa e stakeholders
- Registrar opiniões divergentes
- Acompanhar status de implementação
- Documentar lições aprendidas

## Controle de Versão
- Última Atualização: 2025-09-17
- Próxima Revisão: 2025-10-17
- Frequência de Revisão: Mensal
