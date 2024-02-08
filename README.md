# Mobile Challenge - Words

## Rodar o projeto:

Primeiro passo é verificar o seu ambiente se está próprio para rodar projetos react native:

```shell
npx react-native doctor
```

Após isso arrumar os pedências de seu ambiente de desenvolvimento que o comando doctor recomendar, abra a pasta do projeto no terminal e instale as dependências com o seguinte comando:

```shell
npm install && cd ios && pod install && cd ..
```

E só então depois desses passos você já pode rodar o projeto em um computador que tenha macOS com esse comando:

```shell
npm run ios
```

Ou em qualquer outro SO (Linux, Windows e MacOS):

```shell
npm run android
```

Para rodar os testes do projeto você pode utilizar o comando:

```shell
npm run test
```

## Tecnologias utilizadas:

- React Native para construção do projeto;
- React Navigation para construção da navegação entre telas do app;
- React Native Testing Library e Jest para criar os testes unitários do projeto;
- Axios para fazer as chamadas de API;

## Processo de investigação:

- O passo inicial foi quais requisitos e informações seriam necessárias para a criação do projeto. A partir disso foram definidos os seguintes pontos:
  - Quantas telas precisaria? 3 (Words, History e Favorites)
  - Navegação? Seguindo pelo wireframe disponível, iria seguir com a top tab navigation;
  - Listagem de palavras? Como todas as telas irão ter uma listagem de palavras, foi decidido criar um componente de listagem de palavras que será fornecido tanto os palavras quanto a função de carregar mais palavras por quem utilizar;
  - Gestão de dados? Será utilizado o Context API pelo tamanho do projeto e por ser mais simples de configurar. Assim diminuindo a complexidade e a utilização de mais dependências novas;
  - Estilização? Criarei os componentes utilizando o stylesheet do react native.
