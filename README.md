# Teste para vaga de estaǵio em desenvolvimento *front-end* da empresa LabLuby 

Este repositório foi criado com o objetivo de conter o meu desenvolvimento do desafio de raciocínio lógico e algoritmos para a empresa LabLuby.

## Considerações iniciais

No enunciado do teste fornecido [aqui](https://github.com/ubysoftware/TesteAlgoritmos) e também contido em `enunciado.md`, não havia exigências a respeito de linguagem de programação, portanto optei por JavaScript, tendo em vista que concorro à vaga de desenvolvimento *web*.

Como o objetivo do desafio é avaliar o raciocínio lógico, evitei utilizar os métodos já fornecidos pelo JavaScript para a manipulação de vetores (ou *arrays*). 

As implementações dos métodos estão contidas no arquivo `improvedArray.js`. Realizei alguns simples testes unitários no arquivo `improvedArray.test.js`. O arquivo `package.json` detém apenas algumas configurações para que o `npm` consiga rodar os testes.

## Testando

Para testar a implementação dos métodos com os exemplos fornecidos, utilizei o Jest em conjunto com o VSCode. Para instalá-lo, bastou executar o comando

```
npm install --save-dev jest
```

no terminal. Depois disso, basta executar `npm run test` no diretório que contém os arquivos do repositório.

Se preferir, por simplicidade, é possível testar com o `node`. Basta remover/comentar a útlima linha do arquivo `improvedArray.js`, adicionar a linha

```
console.log(ImprovedArray.methodName(args));
```

onde `methodName` e `args` devem ser substituídos apropriedadamente, e executar `node improvedArray.js` no terminal, no diretório que contém o respectivo arquivo.

## Considerações finais

Agradecimentos à equipe LabLuby pela oportunidade de realizar o teste. Desde já, disponível para qualquer contato via LinkedIn (https://linkedin.com/in/silvaptk) e via e-mail (patrick.silva2717@outlook.com).
