# Contributing Guidelines

Thank you for considering contributing to Marola RP Documentation! This document provides guidelines and information for contributors.

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🚀 Getting Started

### Prerequisites
- Git knowledge
- Markdown proficiency
- Understanding of FiveM/roleplay terminology
- Basic knowledge of project management documentation

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/md.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Install development tools (optional):
   ```bash
   npm install -g markdownlint-cli
   npm install -g markdown-link-check
   ```

## 📝 Contributing Process

### 1. Issue Creation
- Use our [issue templates](.github/ISSUE_TEMPLATE/)
- Provide clear, descriptive titles
- Include relevant context and examples
- Tag with appropriate labels

### 2. Pull Request Process
1. **Branch Naming**: Use descriptive names
   - `feature/add-security-guidelines`
   - `fix/broken-link-in-readme`
   - `docs/update-architecture-diagram`

2. **Commit Messages**: Follow conventional commits
   ```
   feat: add security audit checklist
   fix: correct typo in governance document
   docs: update API documentation
   style: improve markdown formatting
   ```

3. **Pull Request Requirements**:
   - Fill out the [PR template](.github/PULL_REQUEST_TEMPLATE/pull_request.md)
   - Link related issues
   - Ensure all checks pass
   - Request review from 2+ maintainers

### 3. Review Process
- All PRs require 2+ approvals
- Address all review comments
- Ensure CI/CD checks pass
- Maintain documentation quality standards

## 📋 Documentation Standards

### Writing Style
- **Language**: Primary in Portuguese (PT), secondary in English (EN)
- **Tone**: Professional, clear, and concise
- **Audience**: Technical and non-technical stakeholders
- **Consistency**: Follow existing document patterns

### Markdown Guidelines
- Use consistent heading hierarchy
- Include table of contents for long documents
- Use relative links for internal references
- Add alt text for images
- Follow markdownlint rules

### File Organization
```
docs/
├── assets/          # Images, diagrams, assets
├── adr/            # Architecture Decision Records
├── annexes/        # Supporting documents
├── public/         # Player-facing documentation
└── *.md           # Core documentation files
```

### Document Templates
- **New Feature**: Use ADR template for architectural decisions
- **Process Changes**: Update relevant SOPs
- **Policy Updates**: Review legal/compliance implications
- **Public Docs**: Ensure bilingual content

## 🔍 Quality Assurance

### Pre-submission Checklist
- [ ] Spell check completed
- [ ] Grammar reviewed
- [ ] Links verified
- [ ] Code examples tested
- [ ] Bilingual consistency (PT/EN)
- [ ] No sensitive information exposed
- [ ] Follows style guide

### Automated Checks
Our CI/CD pipeline includes:
- Markdown linting
- Link validation
- Spell checking
- Image optimization
- Security scanning

## 📚 Documentation Types

### 1. Core Documentation
**Purpose**: Essential project information
**Audience**: All stakeholders
**Examples**: Vision, Governance, Architecture

### 2. Technical Documentation
**Purpose**: Implementation details
**Audience**: Developers, DevOps, Technical leads
**Examples**: API docs, deployment guides, runbooks

### 3. Process Documentation
**Purpose**: Operational procedures
**Audience**: Staff, moderators, managers
**Examples**: SOPs, incident response, escalation

### 4. Public Documentation
**Purpose**: Player/community information
**Audience**: Players, community members
**Examples**: Rules, guides, FAQ

## 🛠️ Tools and Resources

### Recommended Tools
- **Editor**: VS Code with Markdown extensions
- **Linting**: markdownlint
- **Link Checking**: markdown-link-check
- **Spell Check**: cspell
- **Diagramming**: Mermaid.js, Draw.io

### Useful Extensions (VS Code)
- Markdown All in One
- Markdown Lint
- Code Spell Checker
- Mermaid Preview
- GitLens

## 🏷️ Labeling System

### Issue Labels
- `bug`: Documentation errors or broken links
- `enhancement`: New features or improvements
- `documentation`: Pure documentation changes
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed
- `priority/high`: Critical issues
- `type/security`: Security-related changes

### PR Labels
- `ready for review`: Ready for maintainer review
- `work in progress`: Still being worked on
- `breaking change`: Requires version bump
- `backport`: Needs backporting to other branches

## 📊 Metrics and KPIs

We track documentation quality through:
- **Completeness**: Coverage of all systems
- **Accuracy**: Regular review and updates
- **Usability**: User feedback and testing
- **Accessibility**: Clear language and structure

## 🔐 Security Considerations

### Sensitive Information
Never include:
- Passwords, API keys, or tokens
- Internal IP addresses or server details
- Personal information
- Proprietary business logic
- Security vulnerabilities (use private channels)

### Review Process
- Security-related changes require additional review
- Consult security team for compliance documents
- Regular security audits of documentation

## 📞 Getting Help

### Community Support
- **Discord**: #documentation channel
- **GitHub Discussions**: For general questions
- **Issue Tracker**: For bugs and feature requests

### Maintainer Contact
- **Primary**: @tech-lead
- **Secondary**: @game-design-lead
- **Security**: @security-team

## 🎯 Contribution Areas

### High Priority
1. **API Documentation**: Complete missing endpoints
2. **Deployment Guides**: Detailed setup instructions
3. **Troubleshooting**: Common issues and solutions
4. **Performance Tuning**: Optimization guidelines

### Medium Priority
1. **Examples**: More code samples and use cases
2. **Translations**: Improve bilingual consistency
3. **Visuals**: Diagrams and flowcharts
4. **Integration**: Third-party service documentation

### Low Priority
1. **Style Improvements**: Better formatting
2. **Historical Context**: Background information
3. **Advanced Topics**: Deep-dive technical content

## 📅 Release Process

### Documentation Versioning
- Follow semantic versioning (SemVer)
- Tag releases with Git tags
- Maintain CHANGELOG.md
- Archive old versions

### Release Schedule
- **Major**: Quarterly (breaking changes)
- **Minor**: Monthly (new features)
- **Patch**: As needed (bug fixes)

## 🏆 Recognition

### Contributors
- Listed in CONTRIBUTORS.md
- Featured in release notes
- Community recognition program
- Annual contributor awards

### Maintainers
Regular contributors may be invited to become maintainers with:
- Commit access
- Review responsibilities
- Decision-making authority
- Community leadership role

---

## 📋 Quick Reference

### Commands
```bash
# Check markdown formatting
markdownlint docs/

# Validate links
markdown-link-check docs/**/*.md

# Spell check
cspell "docs/**/*.md"

# Preview changes locally
# (Use VS Code with Markdown Preview Enhanced)
```

### Shortcuts
- **New Issue**: [Create Issue](../../issues/new/choose)
- **New PR**: [Create PR](../../compare)
- **Discussions**: [GitHub Discussions](../../discussions)
- **Wiki**: [Project Wiki](../../wiki)

---

Thank you for contributing to Marola RP Documentation! Your efforts help create a better experience for our entire community.

For questions or suggestions about these guidelines, please open an issue or start a discussion.