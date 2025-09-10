console.log(" === INFORMAÇÕES DO SISTEMA ===\n");
console.log(" ");

console.log("Plataforma: ", process.platform);
console.log("Arquitetura: ", process.arch);
console.log("Versão do Node.js: ", process.version);
console.log("Diretório Atual: ", process.cwd());
console.log("Usuário: ", os.userInfo().username);

const memoriaGB = Math.round(os.totalmem() / 1024 / 1024 / 1024);
console.log('Memória total:', memoriaGB + 'GB');

console.log(" ");
console.log("Análise do Sistema concluída!");