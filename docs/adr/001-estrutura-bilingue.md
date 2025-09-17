# ADR 001: Adoção de Estrutura Bilíngue PT/EN

* Status: Aceito
* Decisores: Direção, Tech Lead
* Data: 2025-09-01

## Contexto e Problema

O Marola RP atende uma comunidade predominantemente brasileira, mas há interesse em suportar jogadores internacionais no futuro. Precisamos definir uma estratégia clara para gerenciar a documentação em múltiplos idiomas que seja sustentável e escalável.

## Opções Consideradas

1. **Documentação apenas em Português**: Mais simples de manter, mas limita alcance internacional
2. **Documentação apenas em Inglês**: Padrão internacional, mas inacessível para parte do público-alvo brasileiro
3. **Documentação separada PT/EN**: Arquivos distintos para cada idioma (exemplo: README.pt.md / README.en.md)
4. **Documentação inline bilíngue**: Ambos idiomas no mesmo documento com seções claramente demarcadas
5. **Sistema de tradução automática**: Manter um único idioma fonte e usar ferramentas de tradução automática

## Decisão

Escolhida a **Opção 3: Documentação separada PT/EN**, com arquivos específicos para cada idioma usando sufixos .pt.md e .en.md.

## Justificativa

* Mantém os documentos limpos e focados em um único idioma
* Permite atualizações independentes quando necessário
* Facilita a contribuição de colaboradores que dominam apenas um dos idiomas
* Permite que cada documento seja otimizado para seu público específico
* Evita confusão com mistura de idiomas em um único documento
* Mais sustentável que tradução inline em documentos longos
* Melhor para SEO e indexação específica por idioma
* Consistente com práticas de internacionalização em documentação técnica

## Consequências

### Positivas

* Experiência de leitura otimizada por idioma
* Facilidade para manter a consistência visual dentro de cada idioma
* Possibilidade de priorizar traduções de documentos mais importantes primeiro
* Escalabilidade para adicionar outros idiomas no futuro (ex: .es.md)

### Negativas

* Duplicação de esforço na manutenção de documentos
* Potencial para divergência entre versões PT e EN ao longo do tempo
* Necessidade de processos para garantir sincronização de conteúdo
* Aumento da quantidade total de arquivos no repositório

### Neutras

* Necessidade de padronização clara para nomeação de arquivos
* Implementação de links internos entre versões de idiomas diferentes

## Alternativas

A opção 4 (documentação inline bilíngue) seria adequada para documentos muito curtos, como mensagens de erro ou tooltips, mas não para documentação extensa. A opção 5 (tradução automática) foi descartada devido à qualidade insuficiente para documentação técnica.

## Compliance

Esta decisão está alinhada com princípios de acessibilidade e internacionalização.

## Notas

Revisaremos esta decisão em 12 meses para avaliar o custo-benefício da manutenção bilíngue e possíveis otimizações no processo.