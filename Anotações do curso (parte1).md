# Introdução ao Angular 8 :bookmark:



### Requisitos básicos

* HTML básico;
* JavaScript básico;



### Ambiente

* Node.js;
* Angular CLI;
* Visual Studio Code;



***passo-apasso***

*instalar o Node.js versão 12 ou superior*;

*no terminal do VSCode digite*;

* **npm install -g @angular/cli** pronto foi instalado 

* **ng version** para verificar se tudo ocorreu bem, conforme imagem abaixo;

  ![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/angular.png)

* **ng new course-manager** vai perguntar se queremos adicionar rota ao nosso projeto, por hora a opção foi não, e escolher a opção *CSS*;

* **ng serve** para iniciar nossa aplicação

* **npm install bootstrap** pacote para melhorar o visual do nosso projeto.

* **npm install font-awesome** pacote para incluir estrelas em nosso projeto.



***One way data byte*** Quando queremos só exibir ;

***Two way data byte*** Quando queremos exibir e alterar;



## Desenvolvendo SPA com Angular  

​	

​	Angular é um Framework que possibilita construir aplicações Web baseadas em HTML5, CSS e JavaScript.

​	Ele permite organizar essas tecnologias e entregar uma aplicação que executa no Browser, capas de consumir um ou vários serviços disponibilizados por um servidor.

​	Quando o Angular 2 foi anunciado, criou um pouco de confusão, pois o time de senvolvedores, decidiu reescrever o Angular do zero. Isso quebrou a compatibilidade com a versão1. 

Os fatores que levaram a isso foram:

* O Angular surgiu para apps simples;
* A API cresceu inconsistente;
* Performance ruim;



​	A partir disso surgiu o Angular 2, que é um frame mais moderno, mais aderente aos padrões da web, e em muitos aspectos mais simples, com um padrão mais fácil de evoluir.

Os pricipais benefícios desse novo Angular são:

* Mais aderente a padrões;
* Trabalha com a ideia de classes;
* Qualquer propriedade do DOM pode receber um valor dinamicamente sem a necessidade de criar diretivas.



### O que é SPA ? 

​	SPA ou simgle Page Aplication, sites mais antigos eram construídos usando várias rotas, e sempre que o usuário precisava interagir era direcionado a uma nova página. Mas com SPA nós nos matemos na mesma página e o que atualiza conforme a interação são os componentes desta página.

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/spa.png)



### Construíndo um projeto simples de SPA 

**requisitos:**

* Node.js
* Instalar o Angular CLI 
  - npm install -g @angular/cli;
* Uma IDE de sua preferência;



Alguns comando para configuração:

- **ng new nomeDoProjeto --prefix=spa** (O *--prefix=spa* não é obrigatório, mas ele vai ajudar a diferenciar as nossas criações das requisições, pois nossas criações estarão com uma extensão spa, motrando que foi uma de nossas criações e não uma requisição já existente.)

  ​

  *Would you like to add Angular Routing?* Ao responder "Yes" ele cria um arquivo de rota em nossa aplicação;

  *Which stylesheet format would you like to use?* Neste caso, basta ir com a setinha e escolher CSS, que é a folha de estilo que iremos utilizar; 

- **cd nomeDoProjeto** Comando para navegar até o seu projeto. Pode ser substituído abrindo o CMD diretamente na pasta da aplicação;

- **ng serve -o** Comando para iniciar o servidor, e ficar observando os arquivos. A cada mudança nos arquivos, ele constrói "rebuild" a aplicação;

  O comando **-o**, é uma abreviação para **--open**, e abre o seu browser padrão após finalizar a aplicação;

- **ng add @angular/material** - Comando para podermos usar os materias do angular em nosso projeto.

- **ng g c nomeDoComponente** - Comando para criar um componente para nosso projeto em Angular. O nome é de livre escolha, mas vale lembrar das boas práticas e escolher um nome coeso ao que está criando é sempre uma boa escolha.

### Conhecendo alguns diretórios

* **node.modules** - Aqui estão todos os pacotes e dependências que o Angular NPM baixou e instalou na nossa aplicação.
* **app** - Na pasta APP, ficam basicamente todos os nossos componentes e arquivos de módulo.
* **src** - Dentro de SRC, existem algumas pastinhas que ele já traz pronta e que fazem parte de nossa estrutura inicial.
* **assets** - Na pasta ASSETS, colocaremos nossos arquivos de estilos comuns em toda nossa aplicação.
* **environments** - Esta pasta nos ajuda a criar diferentes ambientes para que a aplicação tenha um comportamento único em cada um deles, facilitando no deploy do código.
* **package.json** - Neste arquivo estão as dependências do nosso projeto. Aqui podemos ver as versões utilizadas em cada pacote.
* **app.component.html** - É aquele arquivo da página inicial do Angular, que foi criado quando iniciamos um novo projeto, contendo a página de Boas vindas do Angular.
* **app.routing.module.ts** - É responsável por mapear as rotas, falando para nossa aplicação qual arquivo ele deve abrir.
* **app.module.ts** - É aqui que iremos informar ao Angular todos os nossos imports dos módulos que iremos usar em nosso projeto.
* **app.component.spec.ts** - É uma área onde podemos realizar alguns testes, após a finalização do nosso projeto, esta pode ser deletada sem problemas.
* **app.component.css** - É nossa área de design da página, onde podemos dar um trato no visual do nosso projeto.



### Definindo nosso módulo como inicial

​	No arquivo ***app-routing.module.ts***, no campo **const routes: Routes = [ ]** vamos adicionar sua rota, para que ele abra como default a página **HTML** do componente Home que acabamos de criar. Para isso, vamos inserir o seguinte código;

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/spa1.png)

​	Em seguida iremos limpar quase todo o código padrão do nosso arquivo: **app.component.html**, deixando apenas o código: *< router-outlet>< /router-outlet>*. Esse código é responsável por abrir os demais componentes que formos criando dentro do angular, e estamos dizendo que é dali que se originaliza todas as nossas rotas.

​	Feito isso, execute novamente o comando **ng serve -o** para visualizar nossa nova aplicação.



### O que é Data Biding 

​	Data Biding é uma forma de associarmos informações que estão no componente para template e vice versa.

​	A **interpolação** nada mais é que um recurso de *embedar* expressões dentro de uma àrea delimitada por {{..}}. Dentro dessa área podemos trazer variáveis e métodos do nosso TS, realizar cálculos matemáticos, e também realizar operações lógicas.

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/spa2.png)

​	Não existe uma maneira correta de realizar Data Biding, cada situação pode ser usada da forma como quiser e/ou conseguir aplicar. Existem 4 formas:

* ***Interpolação*** - {{ valor }}  associa informação do componente para o template (HTML);
* ***Property Binding*** - [propriedade]="valor"  associa informação do componente para o template (HTML);
* ***Event Binding*** - (evento)="handler"  associa informação do template (HTML) para o componente;
* ***Two-Way Data Binding*** - [(ngModel)]="propriedade"  associa informação entre ambos, ou seja, mantém ambos atualizados (componente e Template (HTML));



**Diretivas: ngIf / ngFor**

​	As diretivas são marcadores em um elemento DOM (como um atributo) que informam ao Angular para anexar um componente especificado a um elemento existente. Existem muitas diretivas prontas que podemos usar e também podemos criar nossas próprias diretivas. Mas hoje iremos ver duas que podemos considerar principais;

​	***ngIf***: Esta é uma diretiva que você adiciona a um elemento na marcação, geralmente para um elemento de contâiner como um *div*.

​	***ngFor***: Esta é uma diretiva para processar cada item de um objeto iterável, gerando uma marcação para cada um. Ela é conhecida como uma diretiva estrutural porque pode alterar o layout do DOM adicionando e removendo elementos DOM de visualização.



**Event Emitter**

***Input Property - @Input()*** Você irá utiliza-lo quando quiser receber dados de um componente pai.

***Output Property - @Output()*** Você irá utiliza-lo quando quiser enviar dados de um componente filho para um componente pai.



### O que é um componente

​	São partes de estrutura de códigos que juntando todos formamos a nossa página Web, ou seja, são bem úteis na contrução de uma página, e como a melhor prática quando estamos construíndo, é ir fazendo diversos componentes separadamentes, desta forma podemos reutilizar partes este componentes no restante do projeto sem a necessidade de recriar o mesmo código.



**Arquitetura de componentes**

​	A arquitetura de componentes basea-se na construção de componentes, substituíveis e modulares que auxiliem no gerenciamento da complexidade e encorajem a retilização.

Seus benefícios incluem:

* Escalabilidade;
* Manutenção;
* Performance;



**Serviços**

* Responsáveis por organizar e compartilhar lógica de negócios;
* Reutilizáveis entre diferentes componentes de uma aplicação;
* Mandatórios para uma arquitetura modular e reutilizável;

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/componente.png)

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/componente1.png)



**Injeção de dependência**

​	Todo serviço é uma dependência que precisa ser instanciada dentro do componente para ser utilizada pelo mesmo. No angular, o componente pede para a aplicação quais dependências ele precisa e então as injeta dentro de si.

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/componente2.png)



**Ciclo de vida do Componente (life cycle hooks)**

​	Todo componente  possui seu ciclo de vida, que começa assim que o Angular o instancializa na aplicação e através deles é possível executar diferentes lógicas nos vários estágios de um componente;

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/componente3.png)



![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/componente4.png)



***Constructor*** Deve se utilizado apenas para inicializar serviços injetados via DI (injeção de dependência).



***ngOnInit*** Deve ser utilizado para todo tipo de lógica que o componente precisar execultar após ter sido criado.



**@Input()**

***Pai :arrow_right: Filho***:Principal maneira de compartilhar dados do pai para o filho;

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/componente5.png)



**Output() e EventEmitter**

***Filho :arrow_right: Pai***: Principal maneira de compartilhar dados do filho para o pai;

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/componente6.png)



### Componentes inteligentes e apresentacionais

***Apresentacionais***

* Parecido com funções puras;
* Se preocupam apenas com a interface do usuário;
* Não ficam responsáveis por recuperar dados ou lidar com lógica de negócio;
* Não causam efeitos colaterais na aplicação;
* Recebem dados via @Input e emitem eventos via @Output;



***Inteligentes***

* Parecido com funções impuras;
* Contém toda a lógica de negócio;
* São internamente compostos por componentes apresentacionais;
* Ficam responsáveis por repassar os dados para os componentes apresentacionais apresentarem ao usuário final; 



### Design Modular

​	Divisão da aplicação web em módulos de recursos que representam diferentes funcionalidades de negócios.



* **Core Module**: defeine serviços singleton, componentes de instância única, configuração e exportação de quaisquer módulos de terceiros necessários no módulo principal (App Module).
* **Shared Module**: contém componentes/pipes/diretivas comuns e também exporta módulos do Angular usados com frequência (CommonsModule).
* **Featured Module**: organiza um conjunto de recursos da aplicação num módulo de funcionalidade.



**Para ter em mente**

​	***Library:*** possui código que pode ser reutilizável entre diferentes aplicações.

​	***Angular Element:*** recurso do Angular para criar web components, padrão da web para definir novos elementos HTML de uma maneira independente de estrutura e agnóstica de framewarks.





### SMACSS

​	É uma arquitetura modular e escalável para CSS, dividida em 5 camadas. Sendo elas:

* **Base**: estilização de seletores epseudo-classes, além de resets;
* **Layout**: principais componentes como cabeçalho, rodapé, entre outros;
* **Module**: componentes reutilizáveis como botões e ícones;
* **State**: todo elemento que será modificado ou terá alguma alteração no seu estado inicial;
* **Theme**: temas específicos para uma mesma aplicação;

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/css.png)



### BEM CSS

​	A sigla BEM significa *block, element, modifier (bloco, elemento e modificador),* sendo uma metodologia que segue esses conceitos para definir uma nomenclatura de nomes para classes CSS.

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/css1.png)



### OOCSS

​	O *OOCSS (CSS orientado à objeto)* é uma metodologia que identifica um padrão visual que pode se repetir no projeto e o agrupa em classes, tornando-os reutilizáveis.

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/css2.png)



