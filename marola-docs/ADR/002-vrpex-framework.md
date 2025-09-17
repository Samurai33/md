# ADR 002: Adoção do vRPex Framework

* Status: Aceito
* Decisores: Direção, Tech Lead, Game Design Lead
* Data: 2025-09-05

## Contexto e Problema

Para o desenvolvimento de um servidor de roleplay no FiveM, precisamos de um framework que atenda aos requisitos de desempenho, flexibilidade e suporte ao modelo de jogo proposto. A escolha deste framework afeta diretamente a capacidade técnica do projeto, a experiência dos jogadores e a facilidade de desenvolvimento.

## Opções Consideradas

1. **ESX**: Framework popular com grande comunidade e muitos recursos disponíveis
2. **QBCore**: Framework moderno com design mais limpo e extensível
3. **vRP**: Framework brasileiro robusto, bem otimizado para servidores de alta capacidade
4. **vRPex**: Fork brasileiro do vRP com funcionalidades estendidas e maior suporte à localização
5. **Framework próprio**: Desenvolvimento de solução personalizada do zero

## Decisão

Escolhido o **vRPex Framework** como base técnica principal do servidor.

## Justificativa

* Melhor suporte para português brasileiro e cultura local
* Otimização comprovada para servidores de alta capacidade (1000+ CCU)
* Comunidade brasileira ativa de desenvolvedores e recursos
* Arquitetura extensível que permite personalização sem refatoração completa
* Experiência prévia da equipe técnica com este framework
* Balanceamento adequado entre recursos prontos e capacidade de customização
* Economia significativa de tempo de desenvolvimento em comparação com solução própria
* Mecanismos de inventário e economia já alinhados com nosso GDD

## Consequências

### Positivas

* Aceleração do desenvolvimento com componentes pré-existentes
* Melhor desempenho para o target de 1000+ jogadores simultâneos
* Maior facilidade de contratação de desenvolvedores com experiência no framework
* Acesso a plugins e recursos da comunidade compatíveis
* Maior estabilidade em comparação com opções menos maduras

### Negativas

* Algumas limitações de design impostas pela arquitetura do framework
* Dependência da comunidade para correções de bugs críticos
* Menor diferenciação técnica em relação a outros servidores que usam o mesmo framework
* Necessidade de adaptação para implementar alguns recursos específicos do nosso GDD

### Neutras

* Necessidade de treinamento para novos desenvolvedores sem experiência em vRPex
* Requisito de documentação interna detalhada das customizações realizadas

## Alternativas

O **QBCore** foi considerado seriamente por seu design mais moderno, mas apresentou preocupações de desempenho com o número alvo de jogadores simultâneos. A opção de framework próprio foi descartada pelo tempo de desenvolvimento necessário e riscos associados.

## Compliance

Esta decisão está alinhada com requisitos não-funcionais de desempenho e escalabilidade documentados no GDD.

## Notas

Manteremos um repositório de customizações proprietárias isolado do core do vRPex para facilitar atualizações futuras.