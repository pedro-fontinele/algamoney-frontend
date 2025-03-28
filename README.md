# Algamoney Frontend

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.11.

## 🚀 Visão Geral

Frontend desenvolvido para integração com a [Algamoney API](https://github.com/pedro-fontinele/algamoney-api), um sistema de gerenciamento financeiro desenvolvido em Spring Boot.

<img src="https://i.imgur.com/aTaviZA.png" title="source: imgur.com" />

<img src="https://i.imgur.com/2GFpt6N.png" title="source: imgur.com" />

<img src="https://i.imgur.com/OmoApDs.png" title="source: imgur.com" />

<img src="https://i.imgur.com/9rTrKXK.png" title="source: imgur.com" />

<img src="https://i.imgur.com/CwztDm8.png" title="source: imgur.com" />

## 🛠️ Pré-requisitos
- Node.js
- Angular CLI 15.2.11
- Algamoney API rodando localmente

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. 
- Navegue para `http://localhost:4200/`. 
- A aplicação será recarregada automaticamente se você alterar qualquer arquivo de origem.

## Geração de Código

### Gerar Componente
```bash
ng generate component nome-do-componente
```

### Outros Geradores
Você pode usar `ng generate` para:
- Diretivas
- Pipes
- Serviços
- Classes
- Guards
- Interfaces
- Enums
- Módulos

## Compilação

Execute `ng build` para compilar o projeto. 
- Os artefatos de compilação serão armazenados no diretório `dist/`.

## Testes

### Testes Unitários
```bash
ng test
```
- Executa testes unitários via [Karma](https://karma-runner.github.io)

### Testes End-to-End
```bash
ng e2e
```
- Executa testes end-to-end
- Requer pacote adicional para implementar capacidades de teste end-to-end

## 🔗 Configuração da API

### Configuração de CORS
Certifique-se de configurar o CORS no backend ([AlgamoneyAPI](https://github.com/pedro-fontinele/algamoney-api)) para permitir requisições do frontend.

### Variáveis de Ambiente
Configure as variáveis de ambiente para apontar para o backend:
```typescript
// environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
```

## 🤝 Contribuição
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Commit suas alterações
4. Faça um push para a branch
5. Abra um Pull Request

## 📚 Recursos Adicionais

- [Documentação Angular CLI](https://angular.io/cli)
- [Documentação Angular](https://angular.io/docs)

## 🆘 Ajuda Adicional

Para mais informações:
- Execute `ng help`
- Consulte a [Página de Referência de Comandos do Angular CLI](https://angular.io/cli)

## 📝 Licença
Este projeto está sob licença MIT.
