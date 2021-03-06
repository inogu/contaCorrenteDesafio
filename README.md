<h1> Sistema de conta corrente bancária </h1>
Sistema simples de conta corrente bancária apresentando 4 funcionalidades acessadas pelo usuário:

##### Contéudo
- [Funcionalidades](#funcionalidades)
- [Tecnologias e componentes empregados](#contruidocom)
  * [Backend](#backend)<br/>
  * [Frontend](#frontend)<br/>
- [Execução](#execucao)
- [Execução de Testes](#execucaotestes)

<a name="funcionalidades"/>
<h2> Resumo das funcionalidades </h2>
<h3> Depósito: </h3>

Apresenta um campo de valor para ser inserido o valor do depósito.
 <h3> Resgate: </h3>
Apresenta um campo de destino e um campo de valor para inserir um novo resgate realizado.
 <h3> Pagamento: </h3>
Apresenta um campo de código de barras e um campo de valor para inserir um novo pagamento.
<h3> Extrato: </h3>
Apresenta as movimentações realizadas ordenando da mais recente a mais antiga.<br/> 
No topo da tabela é apresentando o saldo atual.
<h3> Rendimento: </h3>
Também existe uma funcionalidade automática de rendimento, onde diariamente é calculado e inserido na conta um rendimento baseado no CDI atual. (Atualmente está em 3,4% a.a., ou seja, 0,0092% ao dia). Essa funcionalidade é executada uma vez por hora verificando se o valor de rendimento já foi inserido no dia atual. Essa característica é utilizada devido a possíveis problemas de executar o cálculo e inserção do rendimento da primeira vez ou nas vezes seguintes, sendo usado como um técnica de backup.

<a name="contruidocom"/>
<h2> Tecnologias e componentes empregados: </h2>

<a name="backend"/>
<h3> Backend: </h3>

* [NodeJs](https://nodejs.dev/)<br/>
* [mocha](https://mochajs.org/) -> ferramenta utilizada para executar os testes unitários<br/>
* [chai](https://chaijs.org) -> ferramenta utilizada para criar condições para validar testes unitários<br/>
* [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) -> componente utilizado para facilitar a conversão de tipos do Typescript para Javascript e assim aumentar a performance quando ocorre uma mudança no código.<br/>
* [nodemon](https://www.npmjs.com/package/nodemon) -> utilizado para executar um restart quando existe mudança no código<br/>
* [body-parser](https://www.npmjs.com/package/body-parser) -> Middleware utilizado para realizar parser dos bodies recebidos para JSON<br/>
* [cors](http://expressjs.com/en/resources/middleware/cors.html) -> componente utilizado para permitir acesso ao frontend das rotas do backend<br/>
* [express](http://expressjs.com/) -> componente utilizado para facilitar roteamento<br/>
* [mongodb](https://www.npmjs.com/package/mongodb) -> componente utilizado para integração com banco MongoDB<br/>
* [node-cron](https://www.npmjs.com/package/node-cron) -> componente utilizado para criação e agendamento de execução de tasks<br/> 

<a name="frontend"/>
<h3> Frontend: </h3>


* [Typescript](https://www.typescriptlang.org/)<br/>
* [React](https://reactjs.org/)<br/>
* [material-ui](https://material-ui.com/pt/) -> suite de componentes visuais para apresentar e receber dados do usuário<br/>
* [jest](https://jestjs.io/pt-BR/) e [react-testing-library](https://testing-library.com/)-> componentes para criação e execução de testes unitários<br/>
* [axios](https://github.com/axios/axios) -> componente utilizado para consumir APIs, no caso as APIs do backend, mas poderia também ser utilizado para APIs externas.<br/>
* [styled-components](https://styled-components.com/) -> Lib utilizada para que o desenvolvedor tenha uma maneira mais fácil de lidar com CSS nos componentes de aplicações React utilizando CSS-in-JS<br/>
* [react-icons](https://react-icons.github.io/react-icons) -> Utilizada para incluir icones nos botões


<a name="execucao"/>
<h2> Execução</h2>

<h6> Para utilizar o sistema deve ser configurado em /backend/util/database.ts o caminho de um banco mongodb com o usuário e senha. </h6>

Executar npm start

<a name="execucaotestes"/>
<h2> Execução de testes</h2>

Executar npm test 
