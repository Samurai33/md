# Guia de Gerenciamento de Projetos — Marola RP

## 🇧🇷 Português

### Introdução

Este documento estabelece as práticas de gerenciamento de projetos para o desenvolvimento do Marola RP, combinando princípios ágeis adaptados às necessidades específicas de um servidor de roleplay com equipe distribuída.

### Metodologia

Adotamos uma abordagem híbrida com elementos de:
- **Scrum**: Para desenvolvimento de novas funcionalidades
- **Kanban**: Para manutenção e operações contínuas
- **DevOps**: Para integração entre desenvolvimento e operações

### Papéis e Responsabilidades

#### Papéis Principais
- **Product Owner**: Responsável pela visão do produto e priorização do backlog
- **Tech Lead**: Responsável pela arquitetura técnica e padrões de desenvolvimento
- **Game Design Lead**: Responsável pelo balanceamento e experiência do jogador
- **SRE/DevOps Lead**: Responsável pela infraestrutura e operações
- **Community Manager**: Responsável pela interação com a comunidade

#### Matriz RACI
Para decisões específicas, consulte a [Matriz RACI](../annexes/RACI.pt.md) que detalha responsabilidades para diferentes tipos de decisão.

### Ciclo de Desenvolvimento

#### Sprints
- **Duração**: 2 semanas
- **Planejamento**: Segunda-feira (início da sprint)
- **Review**: Quinta-feira (fim da sprint)
- **Retrospectiva**: Sexta-feira (fim da sprint)
- **Grooming**: Contínuo com sessão dedicada na quarta-feira (meio da sprint)

#### Fluxo de Trabalho
1. **Backlog do Produto**: Mantido pelo Product Owner
2. **Refinamento**: Detalhamento e estimativa pelo time
3. **Sprint Backlog**: Itens comprometidos para a sprint
4. **Em Progresso**: Desenvolvimento ativo
5. **Revisão de Código**: Verificação por pares
6. **QA**: Testes em ambiente de staging
7. **Pronto para Deploy**: Verificado e aprovado
8. **Concluído**: Em produção com feedback positivo

### Artefatos

#### Backlog do Produto
Mantido como GitHub Projects com labels para:
- **Feature**: Novas funcionalidades
- **Enhancement**: Melhorias em funcionalidades existentes
- **Bug**: Correções de problemas
- **Technical Debt**: Refatorações e melhorias técnicas
- **Documentation**: Atualizações na documentação

#### Épicos e User Stories
- **Épico**: Ex: "Sistema de Economia"
- **User Story**: Ex: "Como jogador, quero poder depositar dinheiro no banco para guardá-lo com segurança"
- **Critérios de Aceitação**: Lista de requisitos específicos para considerar a story concluída

#### Documentação Técnica
- **ADRs**: Para decisões arquiteturais significativas
- **Especificações**: Para interfaces e componentes complexos
- **Runbooks**: Para processos operacionais

### Métricas e KPIs

#### Métricas de Processo
- **Velocidade**: Story points concluídos por sprint
- **Tempo de Ciclo**: Tempo desde o início do desenvolvimento até a entrega
- **Débito Técnico**: Percentual de esforço dedicado à refatoração
- **Taxa de Defeitos**: Bugs por story point entregue

#### KPIs de Produto
Consulte o documento [KPIs](../KPIs.pt.md) para métricas específicas de:
- Performance técnica
- Experiência do usuário
- Engajamento da comunidade
- Resultados financeiros

### Ferramentas

- **Gestão de Projeto**: GitHub Projects
- **Código e Versionamento**: GitHub
- **CI/CD**: GitHub Actions
- **Documentação**: Markdown/GitHub Pages
- **Comunicação**: Discord (assíncrona) e Meets (síncrona)
- **Monitoramento**: Prometheus/Grafana

### Gerenciamento de Riscos

#### Matriz de Riscos
| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Instabilidade do servidor | Média | Alto | Testes de carga, monitoramento 24/7, rollback automatizado |
| Exploits/cheats | Alta | Alto | Anti-cheat multicamadas, validação server-side, monitoramento de métricas |
| Perda de dados | Baixa | Crítico | Backup diário, replicação em tempo real, testes de restauração |
| Rotatividade da equipe | Média | Médio | Documentação completa, pair programming, knowledge sharing |

### Release Management

#### Tipos de Release
- **Patches**: Correções rápidas (hotfixes)
- **Minor Releases**: Novas funcionalidades compatíveis
- **Major Releases**: Mudanças significativas (requer comunicação antecipada)

#### Processo de Release
Para detalhes completos, consulte o [Processo de Release](../processes/RELEASE_PROCESS.md).

### Comunicação

#### Interna
- **Daily Standup**: Assíncrono via Discord (15 minutos máximo)
- **Sprint Planning/Review**: Video call com toda a equipe
- **Documentação**: Atualizada continuamente como parte da Definition of Done

#### Externa
- **Anúncios**: Discord, site e redes sociais
- **Changelog**: Público para cada release
- **Roadmap**: Visão geral compartilhada trimestralmente
- **Feedback Loop**: Canais dedicados para sugestões/bugs

### Priorização

Utilizamos modelo RICE para priorização:
- **Reach**: Quantos jogadores serão impactados
- **Impact**: Grau de impacto positivo na experiência
- **Confidence**: Confiança na estimativa
- **Effort**: Esforço necessário para implementação

Score = (Reach × Impact × Confidence) ÷ Effort

---

## 🇬🇧 English

### Introduction

This document establishes project management practices for Marola RP development, combining agile principles adapted to the specific needs of a roleplay server with a distributed team.

### Methodology

We adopt a hybrid approach with elements from:
- **Scrum**: For new feature development
- **Kanban**: For maintenance and continuous operations
- **DevOps**: For integration between development and operations

### Roles and Responsibilities

#### Key Roles
- **Product Owner**: Responsible for product vision and backlog prioritization
- **Tech Lead**: Responsible for technical architecture and development standards
- **Game Design Lead**: Responsible for balancing and player experience
- **SRE/DevOps Lead**: Responsible for infrastructure and operations
- **Community Manager**: Responsible for community interaction

#### RACI Matrix
For specific decisions, see the [RACI Matrix](../annexes/RACI.en.md) which details responsibilities for different types of decisions.

### Development Cycle

#### Sprints
- **Duration**: 2 weeks
- **Planning**: Monday (start of sprint)
- **Review**: Thursday (end of sprint)
- **Retrospective**: Friday (end of sprint)
- **Grooming**: Continuous with dedicated session on Wednesday (mid-sprint)

#### Workflow
1. **Product Backlog**: Maintained by Product Owner
2. **Refinement**: Detailing and estimation by team
3. **Sprint Backlog**: Items committed for sprint
4. **In Progress**: Active development
5. **Code Review**: Peer verification
6. **QA**: Testing in staging environment
7. **Ready for Deploy**: Verified and approved
8. **Done**: In production with positive feedback

### Artifacts

#### Product Backlog
Maintained as GitHub Projects with labels for:
- **Feature**: New functionality
- **Enhancement**: Improvements to existing functionality
- **Bug**: Problem fixes
- **Technical Debt**: Refactorings and technical improvements
- **Documentation**: Documentation updates

#### Epics and User Stories
- **Epic**: Ex: "Economy System"
- **User Story**: Ex: "As a player, I want to deposit money in the bank to keep it safe"
- **Acceptance Criteria**: List of specific requirements to consider the story done

#### Technical Documentation
- **ADRs**: For significant architectural decisions
- **Specifications**: For interfaces and complex components
- **Runbooks**: For operational processes

### Metrics and KPIs

#### Process Metrics
- **Velocity**: Story points completed per sprint
- **Cycle Time**: Time from development start to delivery
- **Technical Debt**: Percentage of effort dedicated to refactoring
- **Defect Rate**: Bugs per story point delivered

#### Product KPIs
See the [KPIs document](../KPIs.en.md) for specific metrics on:
- Technical performance
- User experience
- Community engagement
- Financial results

### Tools

- **Project Management**: GitHub Projects
- **Code and Versioning**: GitHub
- **CI/CD**: GitHub Actions
- **Documentation**: Markdown/GitHub Pages
- **Communication**: Discord (asynchronous) and Meets (synchronous)
- **Monitoring**: Prometheus/Grafana

### Risk Management

#### Risk Matrix
| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Server instability | Medium | High | Load testing, 24/7 monitoring, automated rollback |
| Exploits/cheats | High | High | Multi-layered anti-cheat, server-side validation, metrics monitoring |
| Data loss | Low | Critical | Daily backup, real-time replication, restoration testing |
| Team turnover | Medium | Medium | Complete documentation, pair programming, knowledge sharing |

### Release Management

#### Release Types
- **Patches**: Quick fixes (hotfixes)
- **Minor Releases**: New compatible features
- **Major Releases**: Significant changes (requires advance communication)

#### Release Process
For complete details, see the [Release Process](../processes/RELEASE_PROCESS.md).

### Communication

#### Internal
- **Daily Standup**: Asynchronous via Discord (15 minutes maximum)
- **Sprint Planning/Review**: Video call with whole team
- **Documentation**: Continuously updated as part of the Definition of Done

#### External
- **Announcements**: Discord, website and social networks
- **Changelog**: Public for each release
- **Roadmap**: Overview shared quarterly
- **Feedback Loop**: Dedicated channels for suggestions/bugs

### Prioritization

We use the RICE model for prioritization:
- **Reach**: How many players will be impacted
- **Impact**: Degree of positive impact on experience
- **Confidence**: Confidence in the estimate
- **Effort**: Effort required for implementation

Score = (Reach × Impact × Confidence) ÷ Effort