# Processo de Release / Release Process

## 🇧🇷 Português

### Visão Geral

Este documento descreve o processo de release para a documentação e código do Marola RP, garantindo consistência, qualidade e rastreabilidade em todas as mudanças.

### Versionamento

Seguimos o [Versionamento Semântico](https://semver.org/lang/pt-BR/):

* **MAJOR.MINOR.PATCH** (ex: 1.2.3)
* **MAJOR**: Mudanças incompatíveis
* **MINOR**: Novas funcionalidades compatíveis
* **PATCH**: Correções de bugs compatíveis
* Sufixos para pré-releases: `-alpha`, `-beta`, `-rc.1`

#### Exemplos:
* `v1.0.0` - Release inicial estável
* `v1.1.0` - Adição de nova funcionalidade
* `v1.1.1` - Correção de bug
* `v2.0.0-beta` - Pré-release com mudanças incompatíveis

### Ciclo de Release

#### 1. Planejamento
* Definição do escopo para o próximo release
* Priorização de issues e features
* Criação de milestone no GitHub
* Atribuição de responsáveis

#### 2. Desenvolvimento
* Criação de branches de feature (`feature/nome-feature`)
* Desenvolvimento e testes locais
* Revisão de código via Pull Requests
* Documentação correspondente

#### 3. Preparação para Release
* Merge de features em `develop`
* Testes de integração
* Atualização do CHANGELOG.md
* Criação de branch de release (`release/vX.Y.Z`)
* Revisão final e ajustes

#### 4. Release
* Merge da branch de release em `main`
* Tag da versão no Git (`vX.Y.Z`)
* Publicação dos binários/documentação
* Anúncio para a comunidade

#### 5. Pós-Release
* Monitoramento de problemas
* Coleta de feedback
* Documentação de lições aprendidas
* Planejamento do próximo ciclo

### Branches e Fluxo

* `main`: Código em produção, sempre estável
* `develop`: Integração para o próximo release
* `feature/*`: Desenvolvimento de funcionalidades
* `release/*`: Preparação para release
* `hotfix/*`: Correções urgentes para produção

```
    ┌─── feature/a
    │
    ├─── feature/b      ┌─── release/v1.0.0     ┌─── hotfix/critical-bug
develop ─────────────────┼──────────────────────┼───────────────────── develop
    │                    │                      │
    └─── feature/c       │                      │
                         v                      v
main ─────────────────────────────────────────────────────────────────── main
                         ^                      ^
                    tag: v1.0.0           tag: v1.0.1
```

### Changelog

O CHANGELOG.md deve ser atualizado a cada release, seguindo o formato:

```markdown
## [1.2.0] - YYYY-MM-DD

### Adicionado
- Nova funcionalidade X
- Suporte para Y

### Alterado
- Comportamento de Z melhorado
- Interface de usuário refinada

### Corrigido
- Bug no sistema de login
- Problema de desempenho em consultas
```

### Verificação de Qualidade

Antes de cada release, verificar:

1. **Testes**: Todos os testes passando
2. **Linting**: Código e documentação sem erros de estilo
3. **Documentação**: Atualizada e sincronizada
4. **Segurança**: Scan de vulnerabilidades
5. **Performance**: Benchmark crítico

### Deployment

#### Ambiente de Documentação
* Publicação automática via GitHub Actions
* Atualização do site de documentação

#### Ambiente de Produção (Servidor)
* Backup pré-deployment
* Janela de manutenção agendada
* Deployment com possibilidade de rollback
* Verificações pós-deployment

### Comunicação

#### Interna
* Notificação na área de desenvolvimento
* Registro detalhado de mudanças

#### Externa
* Anúncio no Discord
* Post detalhado de changelog
* Destaque de novidades principais

---

## 🇬🇧 English

### Overview

This document describes the release process for Marola RP documentation and code, ensuring consistency, quality, and traceability across all changes.

### Versioning

We follow [Semantic Versioning](https://semver.org/):

* **MAJOR.MINOR.PATCH** (e.g., 1.2.3)
* **MAJOR**: Incompatible changes
* **MINOR**: New backwards-compatible features
* **PATCH**: Backwards-compatible bug fixes
* Pre-release suffixes: `-alpha`, `-beta`, `-rc.1`

#### Examples:
* `v1.0.0` - Initial stable release
* `v1.1.0` - Addition of new feature
* `v1.1.1` - Bug fix
* `v2.0.0-beta` - Pre-release with incompatible changes

### Release Cycle

#### 1. Planning
* Define scope for next release
* Prioritize issues and features
* Create milestone in GitHub
* Assign responsibilities

#### 2. Development
* Create feature branches (`feature/feature-name`)
* Local development and testing
* Code review via Pull Requests
* Corresponding documentation

#### 3. Release Preparation
* Merge features into `develop`
* Integration testing
* Update CHANGELOG.md
* Create release branch (`release/vX.Y.Z`)
* Final review and adjustments

#### 4. Release
* Merge release branch into `main`
* Tag version in Git (`vX.Y.Z`)
* Publish binaries/documentation
* Announce to community

#### 5. Post-Release
* Monitor for issues
* Gather feedback
* Document lessons learned
* Plan next cycle

### Branches and Flow

* `main`: Production code, always stable
* `develop`: Integration for next release
* `feature/*`: Feature development
* `release/*`: Release preparation
* `hotfix/*`: Urgent fixes for production

```
    ┌─── feature/a
    │
    ├─── feature/b      ┌─── release/v1.0.0     ┌─── hotfix/critical-bug
develop ─────────────────┼──────────────────────┼───────────────────── develop
    │                    │                      │
    └─── feature/c       │                      │
                         v                      v
main ─────────────────────────────────────────────────────────────────── main
                         ^                      ^
                    tag: v1.0.0           tag: v1.0.1
```

### Changelog

CHANGELOG.md should be updated with each release, following this format:

```markdown
## [1.2.0] - YYYY-MM-DD

### Added
- New feature X
- Support for Y

### Changed
- Improved Z behavior
- Refined user interface

### Fixed
- Bug in login system
- Performance issue in queries
```

### Quality Verification

Before each release, verify:

1. **Tests**: All tests passing
2. **Linting**: Code and documentation without style errors
3. **Documentation**: Updated and synchronized
4. **Security**: Vulnerability scan
5. **Performance**: Critical benchmarking

### Deployment

#### Documentation Environment
* Automatic publishing via GitHub Actions
* Documentation site update

#### Production Environment (Server)
* Pre-deployment backup
* Scheduled maintenance window
* Deployment with rollback capability
* Post-deployment verifications

### Communication

#### Internal
* Development area notification
* Detailed change log

#### External
* Discord announcement
* Detailed changelog post
* Highlight of main new features