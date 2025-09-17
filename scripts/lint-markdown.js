const markdownlint = require('markdownlint');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configurações para o markdownlint
const options = {
  files: glob.sync('**/*.md', { ignore: ['node_modules/**', '.git/**'] }),
  config: {
    default: true,
    'line-length': { line_length: 120 },
    'no-inline-html': { allowed_elements: ['div', 'br', 'img', 'p', 'details', 'summary'] },
    'no-trailing-punctuation': false
  }
};

// Executar markdownlint
markdownlint(options, function callback(err, result) {
  if (err) {
    console.error('Erro ao executar markdownlint:', err);
    process.exit(1);
  }

  const resultString = result.toString();
  if (resultString) {
    console.error(resultString);
    process.exit(1);
  } else {
    console.log('✓ Markdown lint passou sem erros');
  }
});