# Runbooks Operacionais

![Status](https://img.shields.io/badge/status-mantido-brightgreen)
![Última Atualização](https://img.shields.io/badge/última_atualização-2025--09--17-informational)
![Revisão](https://img.shields.io/badge/revisão-mensal-blue)

## Visão Geral
Este documento fornece procedimentos passo a passo para lidar com vários cenários operacionais no Marola RP. Cada runbook inclui etapas detalhadas, responsabilidades e resultados esperados.

## Níveis de Prioridade de Incidentes

### Definições de Prioridade
| Nível | Descrição | Tempo de Resposta | Frequência de Atualização |
|-------|-----------|-------------------|--------------------------|
| P0 | Indisponibilidade total do serviço ou violação crítica de segurança | 15 minutos | A cada 30 minutos |
| P1 | Recurso principal indisponível ou degradação severa de performance | 30 minutos | A cada 2 horas |
| P2 | Recurso não crítico indisponível ou exploit descoberto | 2 horas | A cada 4 horas |
| P3 | Bug menor ou problema não urgente | 24 horas | Diária |
| P4 | Problema cosmético ou solicitação de melhoria | 72 horas | Semanal |

## P0 - Resposta a Queda Crítica

### Resposta Inicial (0-15 minutos)
1. **Verificação de Alerta (2 min)**
   - Confirmar autenticidade do alerta
   - Verificar painéis de monitoramento
   - Verificar escopo do impacto

2. **Mobilização da Equipe (3 min)**
   - Alertar engenheiro de plantão
   - Notificar comandante do incidente
   - Ativar sala de guerra

3. **Avaliação Inicial (5 min)**
   - Verificar status do sistema
   - Revisar mudanças recentes
   - Identificar componentes afetados

4. **Comunicação (5 min)**
   - Atualizar página de status
   - Postar anúncio inicial
   - Notificar stakeholders principais

### Fase de Investigação (15-30 minutos)
1. **Análise do Sistema**
   - Revisar logs de erro
   - Verificar métricas do servidor
   - Analisar tráfego de rede

2. **Avaliação de Impacto**
   - Documentar serviços afetados
   - Quantificar impacto no usuário
   - Identificar sistemas dependentes

3. **Busca da Causa Raiz**
   - Revisar logs de implantação
   - Verificar mudanças de configuração
   - Analisar métricas do sistema

### Fase de Resolução (30-60 minutos)
1. **Ações Imediatas**
   ```bash
   # Verificar status do sistema
   systemctl status marola-services
   
   # Revisar logs recentes
   tail -n 1000 /var/log/marola/error.log
   
   # Monitorar uso de recursos
   top -b -n 1
   ```

2. **Passos de Recuperação**
   - Implementar correção ou rollback
   - Verificar restauração do serviço
   - Testar funções críticas

3. **Verificação de Serviço**
   - Executar verificações de saúde
   - Verificar integridade dos dados
   - Testar funções do usuário

### Pós-Incidente (48 horas)
1. **Documentação**
   - Linha do tempo dos eventos
   - Ações tomadas
   - Análise de impacto

2. **Análise de Causa Raiz**
   - Identificar gatilho
   - Documentar fatores contribuintes
   - Desenvolver plano de prevenção

## P1 - Resposta a DDoS

### Fase de Detecção (0-15 minutos)
1. **Análise de Tráfego**
   ```bash
   # Verificar tráfego de rede
   tcpdump -i any -n
   
   # Monitorar conexões
   netstat -ant | grep ESTABLISHED | wc -l
   ```

2. **Avaliação de Impacto**
   - Monitorar carga do servidor
   - Verificar disponibilidade do serviço
   - Analisar padrões de tráfego

### Fase de Mitigação (15-45 minutos)
1. **Filtragem de Tráfego**
   - Ativar proteção DDoS
   - Ajustar regras de firewall
   - Implementar limitação de taxa

2. **Ajuste de Infraestrutura**
   - Escalar recursos
   - Rotacionar endpoints
   - Ativar sistemas de backup

### Fase de Recuperação (45-90 minutos)
1. **Restauração de Serviço**
   - Verificar tráfego normal
   - Retomar operações regulares
   - Monitorar recorrência

2. **Documentação**
   - Características do ataque
   - Efetividade da mitigação
   - Necessidades de melhoria

## P2 - Resposta a Exploit

### Resposta Inicial (0-30 minutos)
1. **Contenção**
   - Isolar sistemas afetados
   - Bloquear vetores de exploit
   - Preservar evidências

2. **Avaliação**
   - Documentar detalhes do exploit
   - Identificar usuários afetados
   - Avaliar escopo do dano

### Fase de Investigação (30-120 minutos)
1. **Coleta de Evidências**
   ```bash
   # Capturar estado do sistema
   ps aux > evidencias/processos.txt
   netstat -ant > evidencias/conexoes.txt
   
   # Coletar logs
   tar -czf evidencias/logs.tar.gz /var/log/marola/
   ```

2. **Análise**
   - Revisar dados de log
   - Identificar método do exploit
   - Rastrear ações do usuário

### Fase de Resolução (2-4 horas)
1. **Desenvolvimento de Patch**
   - Criar correção rápida
   - Testar efetividade da correção
   - Preparar implantação

2. **Implementação**
   - Implantar patches
   - Verificar correção
   - Monitorar variantes

3. **Aplicação**
   - Identificar violadores
   - Preparar onda de banimentos
   - Documentar evidências

## P3 - Gestão de Bugs

### Processo de Triagem (0-24 horas)
1. **Verificação de Bug**
   - Reproduzir problema
   - Documentar passos
   - Avaliar impacto

2. **Classificação**
   - Atribuir prioridade
   - Marcar componentes
   - Definir prazo

### Trilha de Resolução
1. **Desenvolvimento**
   - Atribuir desenvolvedor
   - Criar branch
   - Escrever testes

2. **Testes**
   - Verificar correção
   - Testes de regressão
   - Aceitação do usuário

## Monitoramento e Alertas

### Métricas Principais
| Métrica | Limite de Aviso | Limite Crítico | Ação |
|---------|----------------|----------------|-------|
| Uso de CPU | 80% | 90% | Escalar recursos |
| Uso de Memória | 85% | 95% | Investigar vazamentos |
| I/O de Rede | 70% capacidade | 90% capacidade | Análise de tráfego |
| Taxa de Erro | 1% | 5% | Debugar e corrigir |
| Tempo de Resposta | 200ms | 500ms | Revisão de performance |

### Matriz de Resposta a Alertas
| Tipo de Alerta | Prioridade | Resposta Inicial | Caminho de Escalação |
|----------------|------------|------------------|---------------------|
| Serviço Fora | P0 | Reinício imediato | Tech Lead → CTO |
| Alta Taxa de Erro | P1 | Análise de log | Dev → Tech Lead |
| Aviso de Recurso | P2 | Revisão de capacidade | DevOps → Tech Lead |
| Alerta de Performance | P2 | Otimização | Dev → DevOps |

## Requisitos de Documentação

### Relatórios de Incidente
1. **Resumo**
   - ID do Incidente
   - Nível de prioridade
   - Duração
   - Impacto

2. **Linha do Tempo**
   - Hora de detecção
   - Tempo de resposta
   - Tempo de resolução
   - Eventos principais

3. **Detalhes Técnicos**
   - Causa raiz
   - Passos de resolução
   - Medidas de prevenção

4. **Análise de Impacto**
   - Usuários afetados
   - Impacto nos dados
   - Interrupção do serviço
   - Impacto no negócio

## Controle de Versão
- Última Atualização: 2025-09-17
- Próxima Revisão: 2025-10-17
- Frequência de Revisão: Mensal
