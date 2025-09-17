# GDD — Game Design Document

## Ambientação & Design do Mundo
Ambientação: Marola City (SP neo‑urbana: Augusta, Centro, Zona Leste, Marginais).

### Detalhes das Localidades
- **Região Augusta**: Distrito de entretenimento com casas noturnas, bares, restaurantes e atividades ilegais. Sede do Vanilla Unicorn, Cassino Royal e vários pontos de corrida ilegal.
- **Centro**: Centro comercial com prédios de escritórios, shopping centers, bancos (Fleeca, Banco do Brasil, Bank of Liberty), sede da polícia (modelo PMERJ) e prédios governamentais.
- **Zona Leste**: Área industrial e residencial com fábricas, galpões, favelas (inspiradas em Paraisópolis) e bairros de baixa renda.
- **Marginais**: Principais rotas de transporte, incluindo Marginal Tietê e Marginal Pinheiros conectando todas as regiões da cidade.

### Pontos de Referência & Pontos de Interesse
- **MarolaTower**: Arranha-céu de 60 andares no centro, com apartamentos de luxo e escritórios comerciais
- **Porto Marola**: Principal porto de embarque com oportunidades de contrabando
- **Favela do Jacaré**: Maior área de favela com economia interna única
- **Autódromo de Interlagos**: Pista de corrida para eventos oficiais e não oficiais
- **Shopping Marola**: Principal centro comercial com boutiques e praça de alimentação
- **Hospital São Lucas**: Principal centro médico

## Sistemas

### Sistema Econômico
- **Moeda**: Marola Dollar (M$)
- **Impostos**: Propriedade (1,5%/semana), Veículos (1%/semana), Renda (5-15% com base na faixa)
- **Manutenção**: Veículos (M$100-1.500/semana com base na classe), Propriedades (M$200-5.000/semana com base no tamanho/localização)
- **Sistema Bancário**: Contas correntes, poupança (juros de 1,5%), empréstimos (juros de 5-12%), cartões de crédito, caixas eletrônicos por toda a cidade
- **Bolsa de Valores**: Investimento em mais de 15 empresas com valores flutuantes baseados em eventos do servidor

### Empregos & Atividades

#### Empregos Legais
- **Serviços de Emergência**: Polícia (cargos de Recruta a Delegado-Chefe), SAMU (Técnico a Diretor Médico), Corpo de Bombeiros
- **Serviços Públicos**: Advogado, Juiz, Taxista, Motorista de Ônibus, Coletor de Lixo, Carteiro
- **Comerciais**: Mecânico, Trabalhador de Restaurante, Atendente de Loja, Agente Imobiliário, Vendedor de Carros
- **Industriais**: Caminhoneiro, Minerador, Lenhador, Pescador, Operário de Fábrica
- **Profissionais**: Jornalista, Corretor, Segurança Privado, Piloto, DJ, Empresário

#### Atividades Criminosas
- **Crime Organizado**: 5 facções principais com territórios e especializações
- **Operações de Drogas**: Cultivo, processamento, embalagem e distribuição
- **Assaltos**: Lojas de conveniência, bancos, joalherias, galerias de arte
- **Mercado Negro**: Tráfico de armas, produtos roubados, importações ilegais
- **Lavagem de Dinheiro**: Empresas de fachada, criptomoedas, contas offshore

### Sistema Judiciário
- **Aplicação da Lei**: Polícia Municipal, Polícia Rodoviária, Polícia Federal
- **Sistema Legal**: Código penal com mais de 120 leis, tempo de prisão, multas
- **Sistema Judicial**: Julgamentos para crimes graves, funções de juiz e advogado
- **Prisão**: Múltiplos níveis de segurança, trabalhos prisionais, mecânica de fuga
- **Reabilitação**: Serviço comunitário, redução de pena por bom comportamento

### Sistema de Saúde
- **Saúde Física**: Fome, sede, lesões, doenças
- **Saúde Mental**: Níveis de estresse afetando habilidades, sistema de dependência
- **Cuidados Médicos**: Hospitais, clínicas, sistema de seguros
- **Lesões**: 12 tipos de lesões com tratamentos específicos
- **Sistema SAMU**: Médicos profissionais ou assistência médica baseada em jogadores

### Inventário/Itens
- **Inventário Pessoal**: Sistema baseado em peso (máximo 50kg)
- **Categorias de Itens**: Consumíveis, Ferramentas, Armas, Roupas, Colecionáveis, Materiais
- **Qualidade de Item**: 5 níveis afetando durabilidade e eficácia
- **Sistema de Fabricação**: Mais de 200 receitas em 8 habilidades de artesanato
- **Armazenamento**: Armazenamento doméstico, porta-malas de veículos, unidades de armazenamento alugáveis

### Veículos
- **Classes**: 12 classes de veículos com diferentes modelos de condução
- **Personalização**: Modificações visuais, melhorias de desempenho, pinturas personalizadas
- **Sistema de Danos**: Motor, carroceria, pneus com requisitos realistas de reparo
- **Sistema de Combustível**: Múltiplos tipos de combustível, taxas variáveis de consumo
- **Propriedade**: Opções de compra, aluguel, financiamento

### Propriedades
- **Residenciais**: Apartamentos, casas, mansões, residências em favelas
- **Comerciais**: Lojas, escritórios, armazéns, fábricas
- **Propriedades Especiais**: Casas noturnas, restaurantes, garagens
- **Modelos de Propriedade**: Propriedade total, aluguel, propriedade compartilhada
- **Recursos da Propriedade**: Personalização de móveis, capacidade de armazenamento, sistemas de segurança

### Eventos/Rádio (MarolaBeat)
- **Estações de Rádio**: 5 estações personalizadas com conteúdo único
- **Sistema de DJ ao Vivo**: Programas de rádio conduzidos por jogadores
- **Sistema de Eventos**: Encontros de carros, concertos, torneios de luta, corridas
- **Eventos Especiais**: Celebrações sazonais, atividades por tempo limitado

## UX/Onboarding
- **Criação de Personagem**: Personalização detalhada da aparência com mais de 300 opções
- **Tutorial**: Experiência guiada interativa pelos fundamentos da cidade
- **Centro de Empregos**: Local central para oportunidades de emprego
- **Integração com Discord**: Status do servidor, eventos comunitários, tickets de suporte
- **Colocação no Primeiro Emprego**: Posição garantida de nível inicial

## Balanceamento
- **Metas de Renda**: 
  - Nível Inicial: M$1.000-2.000/hora
  - Nível Médio: M$2.000-4.000/hora
  - Nível Alto: M$4.000-8.000/hora
  - Especialista/Ilegal: M$8.000-15.000/hora com maior risco
- **Sinks Econômicos**: 
  - Manutenção e personalização de veículos
  - Impostos e atualizações de propriedades
  - Alimentos e consumíveis
  - Penalidades por morte e contas médicas
  - Itens de luxo e colecionáveis
- **Progressão de Acesso**:
  - Desenvolvimento de habilidades: 15 habilidades únicas com 100 níveis cada
  - Licenciamento: Habilitação, armas, certificações profissionais
  - Sistemas de reputação com 10 facções diferentes
  - Promoções de trabalho baseadas em tempo
  - Requisitos de capital para negócios

## Considerações Técnicas
- **Capacidade do Servidor**: Otimizado para mais de 300 jogadores simultâneos
- **Scripts Personalizados**: Mais de 85 sistemas personalizados além do framework padrão
- **Anti-Cheat**: Proteção multicamadas com análise comportamental
- **Desempenho**: Mínimo 30 FPS em áreas densas com especificações recomendadas
