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

