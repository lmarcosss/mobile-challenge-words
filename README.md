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
  - E o detalhe da palavra? A ideia inicial era utilizar uma biblioteca como react-native-modal, no entanto, como identifiquei que o react-navigation possibilita criar uma tela/modal nativa acabei optando por e por não precisar colocar mais uma dependência no projeto.
  - Navegação? Seguindo pelo wireframe disponível, iria seguir com a top tab navigation;
  - Listagem de palavras? Como todas as telas irão ter uma listagem de palavras, foi decidido criar um componente de listagem de palavras que será fornecido tanto os palavras quanto a função de carregar mais palavras por quem utilizar;
  - Gestão de dados? Será utilizado o Context API pelo tamanho do projeto e por ser mais simples de configurar. Assim diminuindo a complexidade e a utilização de mais dependências novas;
  - Banco de dados? A ideia era utilizar um banco de dados externo como o firebase, ma por tempo acabei optando pela utilização de AsyncStorage para guardar o cache das chamadas de API do detalhe da palavra e mais o cache dos favoritos e histórico.
  - Estilização? Criarei os componentes utilizando o stylesheet do react native.

- Após esses pontos foi necessário:

  - fazer configurações conforme demanda, exemplo: (jest, react navigation, babel, async storage, vector icons, react sound e react slider)
  - definir cores básicas para o projeto;
  - tipagem;

- Com isso segui o desenvolvimento do projeto seguindo as recomendações informadas no README. Após finalizar o projeto e os testes unitários dos componentes, o projeto resultou nos seguintes requisitos:

  - Obrigatório 1 - Você deverá atender aos seguintes casos de uso:

    - Como usuário, devo ser capaz de visualizar uma lista de palavras com rolagem infinita
    - Como usuário, devo ser capaz de visualizar uma palavra, significados e a fonética
    - Como usuário, devo ser capaz de salvar a palavra como favorito
    - Como usuário, devo ser capaz de remover a palavra como favorito
    - Como usuário, devo ser capaz de visitar uma lista com as palavras que já vi anteriormente

  - Obrigatório 2 - Salvar em cache o resultado das requisições, para agilizar a resposta em caso de buscas com parâmetros repetidos.

  - Obrigatório 3 - Seguir o wireframe para a página de listagem dos dados. Pode-se alterar a posição dos itens, mantendo as funcionalida des solicitadas.

  - Diferencial 1 - Implementar um tocador de audio utilizando, por exemplo, https://responsivevoice.org/api ou recursos nativos;

  - Diferencial 3 - Escrever Unit Tests ou E2E Test. Escolher a melhor abordagem e biblioteca;

  - Diferencial 4 - Implementar login com usuário e senha e associar os favoritos e histórico ao ID do usuário, salvando essa informação em banco de dados local ou remoto **(Parcialmente, pois não foi feito login apenas utilizado o async storage para guardar os dados do usuário em seu celular)**

## Evidência:

### iOS

[![iOS](https://img.youtube.com/vi/bqqHaNvUrs8/0.jpg)](https://www.youtube.com/watch?v=bqqHaNvUrs8 'iOS')

### Android

[![Android](https://img.youtube.com/vi/rrRBF6_tmLc/0.jpg)](https://www.youtube.com/watch?v=rrRBF6_tmLc 'Android')
