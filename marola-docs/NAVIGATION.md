# Guia de Navegação / Navigation Guide

Este documento ajuda a navegar pela estrutura completa da documentação do Marola RP.

## 📁 Estrutura de Pastas / Folder Structure

```
/
├── docs/                 # Documentação principal / Main documentation
│   ├── adr/              # Architecture Decision Records
│   ├── annexes/          # Anexos / Annexes
│   ├── assets/           # Imagens e recursos / Images and assets
│   ├── processes/        # Processos técnicos / Technical processes
│   └── public/           # Documentação pública / Public documentation
├── .github/              # Configurações do GitHub / GitHub settings
│   ├── ISSUE_TEMPLATE/   # Templates de issues / Issue templates
│   ├── PULL_REQUEST_TEMPLATE/ # Templates de PR / PR templates
│   └── workflows/        # GitHub Actions workflows
└── docs gerais/          # Documentos de alto nível / High-level documents
```

## 🔍 Mapa de Documentos / Document Map

### Documentação Core / Core Documentation
- [Visão / Vision](Vision.pt.md)
- [Governança / Governance](Governance.pt.md)
- [GDD / Game Design Document](GDD.pt.md)
- [Sistemas / Systems](Systems.pt.md)
- [Arquitetura / Architecture](Architecture.pt.md)
- [Segurança / Security](Security.pt.md)
- [DevOps](DevOps.pt.md)
- [Finanças / Finance](Finance.pt.md)

### Documentação Técnica / Technical Documentation
- [ADR 001: Estrutura Bilíngue](ADR/001-estrutura-bilingue.md)
- [ADR 002: vRPex Framework](ADR/002-vrpex-framework.md)
- [Guia de Estilo / Style Guide](Processes/STYLE_GUIDE.md)
- [Processo de Release / Release Process](Processes/RELEASE_PROCESS.md)

### Documentos para Jogadores / Player Documents
- [Regras / Rules](Public-Docs/Rules.pt.md)
- [Código Penal / Penal Code](Public-Docs/PenalCode.pt.md)
- [Guia do Jogador / Player Guide](docs/public/Guide.pt.md)
- [FAQ / Perguntas Frequentes](docs/public/FAQ.pt.md)
- [Política de Privacidade / Privacy Policy](docs/public/PrivacyPolicy.pt.md)

### Anexos / Annexes
- [Tabelas Econômicas / Economy Tables](docs/annexes/Economy-Tables.pt.md)
- [Penalidades / Penalties](docs/annexes/Penalties.pt.md)
- [Matriz RACI / RACI Matrix](docs/annexes/RACI.pt.md)
- [Licenças de Ativos / Asset Licenses](docs/annexes/Assets-Licenses.pt.md)
- [Templates de Comunicação / Communication Templates](docs/annexes/Communication-Templates.pt.md)
- [Runbooks](docs/annexes/Runbooks.pt.md)

### Meta-Documentação / Meta-Documentation
- [README](README.md)
- [Guia de Contribuição / Contributing Guide](CONTRIBUTING.md)
- [Código de Conduta / Code of Conduct](CODE_OF_CONDUCT.md)
- [Changelog](CHANGELOG.md)
- [Guia de Navegação / Navigation Guide](NAVIGATION.md)

## 🔄 Workflows e Automação / Workflows and Automation

### CI/CD
- [Documentação CI](.github/workflows/docs-ci.yml) - Validação de Markdown / Markdown validation
- [Auto Assign](.github/workflows/auto-assign.yml) - Atribuição automática de revisores / Auto-assignment of reviewers
- [Release Drafter](.github/workflows/release-drafter.yml) - Geração automática de release notes / Automatic release notes generation

### Templates
- [Template de PR / PR Template](.github/PULL_REQUEST_TEMPLATE/pull_request.md)
- [Template de Bug / Bug Template](.github/ISSUE_TEMPLATE/bug_report.md)
- [Template de Feature / Feature Template](.github/ISSUE_TEMPLATE/feature_request.md)
- [Template de Mudança de Regra / Rule Change Template](.github/ISSUE_TEMPLATE/rule_change.md)

## 🔗 Links Rápidos / Quick Links

### Para Jogadores / For Players
- [Discord](https://discord.gg/marola-rp)
- [Regras / Rules](docs/public/Rules.pt.md)
- [Guia / Guide](docs/public/Guide.pt.md)
- [FAQ](docs/public/FAQ.pt.md)

### Para Desenvolvedores / For Developers
- [Arquitetura / Architecture](docs/Architecture.pt.md)
- [Guia de Contribuição / Contributing Guide](CONTRIBUTING.md)
- [ADRs](docs/adr/)
- [DevOps](docs/DevOps.pt.md)

### Para Gestores / For Managers
- [Governança / Governance](docs/Governance.pt.md)
- [KPIs](docs/KPIs.pt.md)
- [Finanças / Finance](docs/Finance.pt.md)
- [Roadmap](docs/Roadmap.pt.md)