const fs = require('fs');
const path = require('path');
const glob = require('glob');
const markdownLinkCheck = require('markdown-link-check');

const options = {
  ignorePatterns: [
    {
      pattern: '^http://localhost'
    },
    {
      pattern: '^#'
    }
  ],
  replacementPatterns: [
    {
      pattern: '^/',
      replacement: 'https://github.com/Samurai33/md/blob/main/'
    }
  ],
  timeout: '20s',
  retryOn429: true,
  retryCount: 3,
  fallbackRetryDelay: '30s'
};

const files = glob.sync('**/*.md', { ignore: ['node_modules/**', '.git/**'] });
let brokenLinks = 0;

files.forEach(file => {
  const markdown = fs.readFileSync(file, 'utf8');
  
  console.log(`\nVerificando links em ${file}...`);
  
  markdownLinkCheck(markdown, options, (err, results) => {
    if (err) {
      console.error(`Erro ao verificar links em ${file}:`, err);
      return;
    }
    
    results.forEach(result => {
      if (result.status === 'alive') {
        console.log(`✓ ${result.link}`);
      } else {
        console.error(`✗ ${result.link} - ${result.statusCode}`);
        brokenLinks++;
      }
    });
    
    if (brokenLinks > 0) {
      console.error(`\nEncontrados ${brokenLinks} links quebrados em ${file}`);
      process.exitCode = 1;
    }
  });
});