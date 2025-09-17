const { CSpell } = require('cspell');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

async function spellCheck() {
  console.log('Verificando ortografia nos arquivos markdown...');
  
  // Carregar configuração
  const configPath = path.resolve(__dirname, '../.cspell.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  
  // Inicializar CSpell com a configuração
  const cspell = new CSpell(config);
  
  // Encontrar todos os arquivos markdown
  const files = glob.sync('**/*.md', { 
    ignore: ['node_modules/**', '.git/**'],
    cwd: path.resolve(__dirname, '..')
  });
  
  let errorCount = 0;
  
  // Verificar cada arquivo
  for (const file of files) {
    const filePath = path.resolve(__dirname, '..', file);
    const text = fs.readFileSync(filePath, 'utf8');
    
    console.log(`\nVerificando ${file}...`);
    
    // Verificar ortografia
    const results = await cspell.checkText(text, filePath);
    
    // Mostrar erros
    for (const issue of results.issues) {
      console.error(`  ${file}:${issue.line}:${issue.column} - Possível erro: ${issue.text}`);
      console.error(`    Sugestões: ${issue.suggestions.join(', ')}`);
      errorCount++;
    }
  }
  
  if (errorCount > 0) {
    console.error(`\nEncontrados ${errorCount} possíveis erros ortográficos`);
    process.exitCode = 1;
  } else {
    console.log('✓ Verificação ortográfica concluída sem erros');
  }
}

spellCheck().catch(err => {
  console.error('Erro ao verificar ortografia:', err);
  process.exitCode = 1;
});