# Guia de Estilo de Documentação / Documentation Style Guide

## 🇧🇷 Português

### Princípios Gerais

1. **Clareza**: Priorize a clareza sobre a brevidade. Use linguagem direta e evite jargões desnecessários.
2. **Consistência**: Mantenha formato, terminologia e tom consistentes em toda a documentação.
3. **Completude**: Forneça contexto suficiente para que o leitor compreenda sem conhecimento prévio.
4. **Organização**: Estruture documentos com hierarquia lógica e navegação intuitiva.
5. **Bilinguismo**: Mantenha documentos PT/EN sincronizados em conteúdo e estrutura.

### Formatação Markdown

#### Títulos

* Use títulos em ordem hierárquica (H1 > H2 > H3)
* Nunca pule níveis (ex: H1 para H3)
* H1 (#) apenas para título do documento
* Use sentence case (primeira letra maiúscula)

```markdown
# Título Principal do Documento
## Seção Importante
### Subseção Relevante
```

#### Listas

* Use listas com marcadores para itens não ordenados
* Use listas numeradas apenas quando a sequência importa
* Mantenha consistência na capitalização e pontuação

```markdown
* Primeiro item não ordenado
* Segundo item não ordenado
  * Sub-item (indentado com 2 espaços)
  * Outro sub-item

1. Primeiro passo de procedimento
2. Segundo passo de procedimento
```

#### Tabelas

* Use tabelas para dados estruturados e comparações
* Inclua cabeçalhos de coluna descritivos
* Alinhe conteúdo para melhor legibilidade

```markdown
| Nome | Tipo | Descrição |
|------|------|-----------|
| id   | int  | Identificador único |
| nome | string | Nome do usuário |
```

#### Código

* Use blocos de código com syntax highlighting
* Identifique a linguagem após os acentos graves
* Use `backticks` para código inline

```markdown
```javascript
function exemplo() {
  return "Olá Mundo";
}
```

Variável `usuario` contém o nome do usuário.
```

#### Links

* Use links relativos para documentos internos
* Use links descritivos (não apenas "clique aqui")
* Verifique regularmente a integridade dos links

```markdown
Consulte o [Guia de Instalação](./installation.md) para mais detalhes.
```

### Estrutura do Documento

#### Metadados (Início do Documento)

* Título principal (H1)
* Breve descrição (1-2 sentenças)
* Badges relevantes (status, versão)
* Tabela de conteúdo para documentos longos

#### Corpo

* Introdução com contexto e escopo
* Seções em ordem lógica (H2)
* Subseções conforme necessário (H3+)
* Conclusão ou próximos passos

#### Elementos Auxiliares

* Use callouts para avisos, notas ou dicas
* Inclua exemplos práticos e casos de uso
* Adicione diagramas quando necessários para clareza

### Terminologia e Convenções

#### Nomes de Produtos/Serviços

* Use capitalização consistente (Marola RP, não marola rp)
* Defina siglas e termos técnicos na primeira ocorrência

#### Voz e Tempo

* Use voz ativa (preferido sobre voz passiva)
* Use tempo presente
* Use segunda pessoa para instruções ("Você deve configurar..." em vez de "O usuário deve configurar...")

#### Padrões de Nomenclatura

* Arquivos: kebab-case para nomes de arquivo (exemplo-arquivo.md)
* Variáveis em código: camelCase ou snake_case (conforme padrão da linguagem)
* Nomes de banco de dados: snake_case (vrp_users)

---

## 🇬🇧 English

### General Principles

1. **Clarity**: Prioritize clarity over brevity. Use straightforward language and avoid unnecessary jargon.
2. **Consistency**: Maintain consistent format, terminology, and tone throughout all documentation.
3. **Completeness**: Provide sufficient context so readers can understand without prior knowledge.
4. **Organization**: Structure documents with logical hierarchy and intuitive navigation.
5. **Bilingualism**: Keep PT/EN documents synchronized in content and structure.

### Markdown Formatting

#### Headings

* Use headings in hierarchical order (H1 > H2 > H3)
* Never skip levels (e.g., H1 to H3)
* H1 (#) only for document title
* Use sentence case (first letter capitalized)

```markdown
# Main Document Title
## Important Section
### Relevant Subsection
```

#### Lists

* Use bullet lists for unordered items
* Use numbered lists only when sequence matters
* Maintain consistency in capitalization and punctuation

```markdown
* First unordered item
* Second unordered item
  * Sub-item (indented with 2 spaces)
  * Another sub-item

1. First procedure step
2. Second procedure step
```

#### Tables

* Use tables for structured data and comparisons
* Include descriptive column headers
* Align content for better readability

```markdown
| Name | Type | Description |
|------|------|-------------|
| id   | int  | Unique identifier |
| name | string | User's name |
```

#### Code

* Use code blocks with syntax highlighting
* Identify the language after backticks
* Use `backticks` for inline code

```markdown
```javascript
function example() {
  return "Hello World";
}
```

The `user` variable contains the user's name.
```

#### Links

* Use relative links for internal documents
* Use descriptive links (not just "click here")
* Regularly verify link integrity

```markdown
See the [Installation Guide](./installation.md) for more details.
```

### Document Structure

#### Metadata (Document Beginning)

* Main title (H1)
* Brief description (1-2 sentences)
* Relevant badges (status, version)
* Table of contents for longer documents

#### Body

* Introduction with context and scope
* Sections in logical order (H2)
* Subsections as needed (H3+)
* Conclusion or next steps

#### Auxiliary Elements

* Use callouts for warnings, notes, or tips
* Include practical examples and use cases
* Add diagrams when necessary for clarity

### Terminology and Conventions

#### Product/Service Names

* Use consistent capitalization (Marola RP, not marola rp)
* Define acronyms and technical terms on first occurrence

#### Voice and Tense

* Use active voice (preferred over passive voice)
* Use present tense
* Use second person for instructions ("You should configure..." instead of "The user should configure...")

#### Naming Patterns

* Files: kebab-case for file names (example-file.md)
* Variables in code: camelCase or snake_case (according to language standard)
* Database names: snake_case (vrp_users)

---

## 📋 Checklist de Revisão / Review Checklist

### Conteúdo / Content
- [ ] Informações precisas e atualizadas / Accurate and up-to-date information
- [ ] Livre de erros ortográficos e gramaticais / Free of spelling and grammar errors
- [ ] Terminologia consistente / Consistent terminology
- [ ] Explica conceitos adequadamente / Explains concepts adequately

### Estrutura / Structure
- [ ] Hierarquia lógica de seções / Logical section hierarchy
- [ ] Fluxo de informações natural / Natural information flow
- [ ] Títulos descritivos e úteis / Descriptive and helpful headings
- [ ] Parágrafos concisos e focados / Concise and focused paragraphs

### Formatação / Formatting
- [ ] Markdown usado corretamente / Markdown used correctly
- [ ] Estilo visual consistente / Consistent visual style
- [ ] Imagens e diagramas com alt text / Images and diagrams with alt text
- [ ] Indentação e espaçamento adequados / Proper indentation and spacing

### Bilinguismo / Bilingualism
- [ ] Conteúdo equivalente em PT e EN / Equivalent content in PT and EN
- [ ] Nomenclatura consistente entre idiomas / Consistent nomenclature across languages
- [ ] Links funcionam em ambas versões / Links work in both versions
- [ ] Traduções culturalmente apropriadas / Culturally appropriate translations