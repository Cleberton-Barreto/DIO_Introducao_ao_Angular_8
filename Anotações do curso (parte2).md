# Overview sobre Angular :bookmark: 



***Módulos***

***Componentes***

***Template***

***Diretivas***

***Serviços***

***Injeção de dependências***

***Data-Binding***

***Roteamento***

***Metadata***

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/angular1.png)





**node_modules**: Responsável por armazenar as dependências e pacotes do projeto;

**src**: Diretório da aplicação,onde nós criamos os nossos módulos, componentes, rotas, serviçosetudo que fizer parte da aplicação.

**browserlistrc**: Usado pelo sistema de build para ajustar a saída CSS e JS para suportar os navegadores listados.

**.editorconfig**: Configurações do editor de código.

**.gitignore**: Arquivo do git que utilizamos para o gerenciamento dos arquivos que serão ignorados no momento do nosso commit.

**angular.json**: Arquivo de configuração do angular.

**karma.config.js**: Configurações do karma para teste unitário.

**package-lock.json**: Lista de dependências e sub-dependências.

**package.json**: Configurações das dependências e scripts do npm.

**README.md**: Arquivo Markdown para documentação da nossa aplicação.

**tsconfigs e tslint**: Arquivos de configuração do Typescript.



### Comandos úteis

* **Criar Component**: ng g component myComponent;
* **Criar Directive**: ng g directive myDirective;
* **Criar Pipe**: ng g pipe myPipe;
* **Criar Service**: ng g service myService;
* **Criar Class**: ng g class myClass;
* **Criar Guard**: ng g guard myGuard;
* **Criar Interface**: ng g Interface myInterface;
* **Criar Enum**: ng g enum myEnum;
* **Criar Module**: ng g module myModule;




### O que são Diretivas em Angular

​	As ***diretivas*** fornecem meios para que possamos manipular o DOM ou estender as funcionalidades do elemento.
​	***Diretivas de atributos:*** Alteram a aparência ou o comportamento de um elemento, componente ou outra diretiva,como por exemplo, NgClass e NgStyle. 

​	***Diretivas estruturais:*** Modificam o layout adicionando ou removendo elementos do DOM, como por exemplo, Nglf, NgFor e NgSwitch.

​	***Diretivas customizadas:*** Modificam a cor de algum objeto e etc, como por exemplo, Highliter e Dropdown.

 

### O que são Serviços em Angular

​	Um serviço Angular reutilizável é projetado para encapsular a lógica de negócios e os dados com diferentes componentes do Angular. É basicamente uma classe que tem um propósito bem definido para fazer algo. Você pode criar uma classe de serviço para dados ou lógica que não está associada a nenhuma visualização específica para compartilhar entre os componentes.



**Para que serve**

​	Se você escrever toda a lógica de negócios em componentes, terá os seguintes problemas:

*  Você não poderá reutilizar essa lógica em nenhum outro lugar e terá que recodificar toda a lógica no componente de destino.
*  A manutenção de seus componentes será difícil, pois você  terá que manter duas cópias do mesmo código.

**Injeção de dependência**

​	A injeção de dependência é usada para fornecer aos componentes os serviços que eles podem usar. Para definir uma classe como um serviço no Angular, o decorator ***@Injectable()*** é usado. 

​	Ele fornece os metadados que permitem ao Angular injetá-los em um componente como uma dependência.

​	Da mesma forma, o decorator ***@Injectable()*** é usado para indicar que um componente ou outra classe(como outro serviço, um pipe ou um NgModule) possui uma dependência.



### HttpClient

​	O **HttpClient** é usado para fazer a comunicação entre cliente e servidor usando o protocolo **HTTP**.

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/http.png)



### Angular Data Biding

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/dt.png)



- **Interpolação:**{{valor}} associa informação do componente para o template(HTML)
- **Property Binding:**[propriedade]="valor" associa informação do componente para o template(HTML)
- **Event Binding:**(evento)="handler" associa informação do template(HTML)para o componente
- **Two-Way Data Binding:**[(ngModel)]="propriedade" associa informação entre ambos, ou seja, mantém ambos atualizados(componente e template(HTML).





### Ciclo de vida do Angular

* **ngOnChanges**: Uma vez na criação do componente e sempre que houver alteração em uma de suas propriedades de entrada.
* **ngOnInit**: Uma única vez quando o componente é inicializado.
* **ngDoCheck**: A cada ciclo de detecção de alterações (use para alterações que o Angular não detecta).
* **ngAfterContentInit**: Depois que conteúdo externo é inserido no componente. Por exemplo, vindo do < ng-content >.
* **ngAfterContentChecked**: Após a verificação do conteúdo externo.
* **ngAfterViewInit**: Logo após o conteúdo do próprio componente e de seus filhos ser inicializado.
* **ngAfterViewChecked**: Cada vez que o conteúdo é verificado pelo mecanismo de detecção de alterações do Angular.
* **ngOnDestroy**: Antes do angular destruir o componente.

***OBS: Lembre sempre de implementar a interface dos ganchos em uso***



### Componentes

​	Os Componentes são blocos que sozinhos tem um sentido, eles podem ser únicos, ou um conjunto de vários outros componentes.

​	Quando nos utilizamos da componentização, temos bastante ganhos, dos quais podemos citar: ***a reutilização de trechos de código; isolamento de contexto; legibilidade do código; redução de código e a padronização do projeto.***

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/componente7.png)



### Componentes Angular

* **Metadata:** são definições que iremos informar ao Angular que a nossa classe é um Component, por meio de decorators, nesse caso @Component
* **Classe:** assim como em qualquer linguagem de programação que utiliza o paradigma da orientação a objeto, possui suas propriedades e métodos

![alt text](/c:/Documents/DIO_BootCamp2022/DIO_Introducao_ao_Angular_8/img/componente8.png)



