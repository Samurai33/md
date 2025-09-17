# Deployment Guide — Marola RP

Este documento descreve o processo completo de deployment para o servidor Marola RP, desde o ambiente de desenvolvimento até a produção.

## 🇧🇷 Português

### Ambientes

#### Desenvolvimento Local
- **Propósito**: Desenvolvimento individual, teste de recursos
- **Acesso**: Somente desenvolvedores
- **Banco de Dados**: SQLite local ou MySQL em container Docker
- **Deploy**: Manual, via scripts de desenvolvimento

#### Staging
- **Propósito**: Testes integrados, verificação de estabilidade, testes de carga
- **Acesso**: Equipe interna + testadores convidados
- **Banco de Dados**: Réplica da estrutura de produção
- **Deploy**: Automático via GitHub Actions após merge em `develop`

#### Produção
- **Propósito**: Ambiente de jogo ao vivo
- **Acesso**: Público (com whitelist)
- **Banco de Dados**: MySQL/MariaDB cluster com alta disponibilidade
- **Deploy**: Semi-automático via GitHub Actions após aprovação

### Processo de Deployment

#### Preparação
1. **Verificação de Pré-requisitos**:
   - Todos os testes passando
   - Code review completo
   - Aprovação do Product Owner
   - Documentação atualizada

2. **Criação de Release**:
   - Bump de versão em `config.lua` e `package.json`
   - Geração de changelog via Release Drafter
   - Tag de versão no Git

3. **Anúncio de Manutenção**:
   - Notificação no Discord (24h antes para major releases)
   - Banner in-game (1h antes)
   - Mensagens periódicas de contagem regressiva

#### Execução
1. **Backup**:
   - Snapshot completo do banco de dados
   - Backup dos arquivos de configuração
   - Arquivamento de logs relevantes

2. **Deploy**:
   - Servidor em modo de manutenção
   - Execução de scripts de migração de banco de dados
   - Atualização de arquivos do servidor
   - Restart do FXServer

3. **Verificações**:
   - Checklist de smoke test
   - Verificação de logs de erro
   - Monitoramento de métricas críticas

#### Pós-Deploy
1. **Validação**:
   - Testes manuais de funcionalidades críticas
   - Verificação de conexão dos jogadores
   - Monitoramento inicial intensificado (1h)

2. **Comunicação**:
   - Anúncio de conclusão no Discord
   - Publicação de changelog detalhado
   - Comunicado in-game de retorno

3. **Monitoramento**:
   - Alertas configurados para métricas críticas
   - Equipe de suporte em prontidão
   - Feedback dos jogadores em canal específico

### Rollback
Em caso de problemas graves:

1. **Decisão**:
   - Tech Lead ou SRE/DevOps Lead autoriza rollback
   - Comunicado de extensão da manutenção

2. **Execução**:
   - Reversão para versão anterior do código
   - Restauração do banco de dados do backup pré-deploy
   - Reinicialização dos serviços

3. **Análise**:
   - Investigação da causa raiz
   - Documentação do incidente
   - Ajustes no processo de testes

### Hotfixes
Para correções urgentes:

1. **Branch**: Criada a partir de `main` ou `production`
2. **Aprovação**: Tech Lead + pelo menos 1 revisor
3. **Deploy**: Procedimento simplificado, mas com backup obrigatório
4. **Comunicação**: Anúncio breve com mínima interrupção

### Ferramentas de Deployment
- **Versionamento**: Git/GitHub
- **CI/CD**: GitHub Actions
- **Orquestração**: Ansible/Terraform
- **Monitoramento**: Prometheus/Grafana
- **Logs**: Loki/Elastic Stack

### Runbooks de Deployment
Para procedimentos detalhados, consulte:
- [Runbook: Deploy Padrão](../annexes/Runbooks.pt.md#deploy-padrão)
- [Runbook: Deploy de Emergência](../annexes/Runbooks.pt.md#deploy-de-emergência)
- [Runbook: Rollback](../annexes/Runbooks.pt.md#procedimento-de-rollback)

---

## 🇬🇧 English

### Environments

#### Local Development
- **Purpose**: Individual development, feature testing
- **Access**: Developers only
- **Database**: Local SQLite or MySQL in Docker container
- **Deployment**: Manual, via development scripts

#### Staging
- **Purpose**: Integrated testing, stability verification, load testing
- **Access**: Internal team + invited testers
- **Database**: Replica of production structure
- **Deployment**: Automatic via GitHub Actions after merge to `develop`

#### Production
- **Purpose**: Live game environment
- **Access**: Public (with whitelist)
- **Database**: MySQL/MariaDB cluster with high availability
- **Deployment**: Semi-automatic via GitHub Actions after approval

### Deployment Process

#### Preparation
1. **Prerequisites Check**:
   - All tests passing
   - Code review complete
   - Product Owner approval
   - Documentation updated

2. **Release Creation**:
   - Version bump in `config.lua` and `package.json`
   - Changelog generation via Release Drafter
   - Version tag in Git

3. **Maintenance Announcement**:
   - Discord notification (24h before for major releases)
   - In-game banner (1h before)
   - Periodic countdown messages

#### Execution
1. **Backup**:
   - Complete database snapshot
   - Configuration files backup
   - Archiving of relevant logs

2. **Deploy**:
   - Server in maintenance mode
   - Database migration scripts execution
   - Server files update
   - FXServer restart

3. **Checks**:
   - Smoke test checklist
   - Error logs verification
   - Critical metrics monitoring

#### Post-Deploy
1. **Validation**:
   - Manual testing of critical features
   - Player connection verification
   - Intensified initial monitoring (1h)

2. **Communication**:
   - Completion announcement on Discord
   - Detailed changelog publication
   - In-game return announcement

3. **Monitoring**:
   - Alerts configured for critical metrics
   - Support team on standby
   - Player feedback in specific channel

### Rollback
In case of serious problems:

1. **Decision**:
   - Tech Lead or SRE/DevOps Lead authorizes rollback
   - Maintenance extension announcement

2. **Execution**:
   - Reversion to previous code version
   - Database restoration from pre-deploy backup
   - Services restart

3. **Analysis**:
   - Root cause investigation
   - Incident documentation
   - Testing process adjustments

### Hotfixes
For urgent fixes:

1. **Branch**: Created from `main` or `production`
2. **Approval**: Tech Lead + at least 1 reviewer
3. **Deploy**: Simplified procedure, but with mandatory backup
4. **Communication**: Brief announcement with minimal interruption

### Deployment Tools
- **Versioning**: Git/GitHub
- **CI/CD**: GitHub Actions
- **Orchestration**: Ansible/Terraform
- **Monitoring**: Prometheus/Grafana
- **Logs**: Loki/Elastic Stack

### Deployment Runbooks
For detailed procedures, see:
- [Runbook: Standard Deploy](../annexes/Runbooks.en.md#standard-deploy)
- [Runbook: Emergency Deploy](../annexes/Runbooks.en.md#emergency-deploy)
- [Runbook: Rollback](../annexes/Runbooks.en.md#rollback-procedure)