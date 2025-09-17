# RACI Matrix — EN

## Overview
RACI is a responsibility assignment matrix that describes the participation of various roles in completing tasks or deliverables. The acronym stands for:

- **R (Responsible)**: Who performs the task
- **A (Accountable)**: Who is ultimately accountable for the task
- **C (Consulted)**: Who provides input before decisions
- **I (Informed)**: Who is kept updated on progress

## Decision Matrix

| Decision/Task | Direction | Tech Lead | Game Design | SRE/DevOps | Moderation | Community |
|--------------|-----------|-----------|-------------|------------|------------|-----------|
| Ban-wave/Exploit | A | C | I | C | R | I |
| Critical deploy | A | R | C | C | I | I |
| Economic change | A | C | R | I | I | I |
| Game mechanics | A | C | R | I | C | I |
| Server maintenance | I | A | I | R | I | I |
| Rules update | A | I | C | I | R | C |
| Content release | A | C | R | C | I | I |
| Community events | A | I | C | I | R | C |
| Performance issues | I | A | C | R | I | I |
| Security incidents | A | R | I | R | C | I |

## Role Definitions

### Direction
- Final decision maker on strategic matters
- Accountable for overall project success
- Sets vision and objectives

### Tech Lead
- Technical architecture decisions
- Code quality standards
- Infrastructure planning

### Game Design
- Game mechanics and balance
- Economy design
- Content planning

### SRE/DevOps
- Server maintenance
- Performance monitoring
- Security implementation

### Moderation
- Rules enforcement
- Player support
- Community management

### Community
- Player feedback
- Event participation
- Content suggestions

## Common Scenarios

### Security Incident Response
1. **SRE/DevOps**: Detects and initially responds (R)
2. **Tech Lead**: Oversees resolution (A/R)
3. **Direction**: Kept informed and approves major actions (A)
4. **Moderation**: Handles player communication (R)
5. **Game Design**: Consulted if gameplay affected (C)
6. **Community**: Kept informed of status (I)

### Economic Changes
1. **Game Design**: Proposes and designs changes (R)
2. **Direction**: Reviews and approves (A)
3. **Tech Lead**: Technical feasibility review (C)
4. **SRE/DevOps**: Implementation support (I)
5. **Moderation**: Prepares for player questions (I)
6. **Community**: Receives updates (I)

## Decision Flow
1. Issue identification
2. Initial assessment by Responsible role
3. Consultation with required parties
4. Proposal to Accountable role
5. Decision and communication
6. Implementation
7. Follow-up and monitoring
