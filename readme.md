# HTML5

É uma linguagem de marcação que tem as seguintes responsabilidades:

- Conteúdo; 
- Semântico (tags de forma correta) - Demarca o que é cada conteudo;
- Estrutura


# Informações sobre HTML

<p>O conteúdo no html se orienta da esquerda para a direita e de cima para baixo. Isso pode ser meio contra intuitivo com o eixo y. 

# Tags HTML

- `<!DOCTYPE html>`:    diz para o navegador q deve ser usado o html mais recente.
- `<html>`:             engloba o site todo
- `<h1>`:               define um titulo
- `<a href="">`:        define um link e passa pra onde ele vai mandar
- `<head>`:             cabeça - configurações do site
- `<meta charset="">`:  define o alfabeto usado, usar o "utf-8"
- `<link rel="stylesheet" href="">`: linka o arquivo css oa seu html
- `<title>`:            é o titulo do site q aparece na aba do navegador

TAGS DE ESTRUTURA:
- `<nav>`:              navegação - menus
- `<header>`:           cabeçalho da pagina


# CSS

O css é uma linguagem de estilos, isso quer dizer que ela tem as seguintes responsabilidades:

- Visual
- Posicionamento

# Reset CSS

Os navegadores tem padrões proprios de comportamento para as tags HTML por causa disso a página pode aparecer de forma diferente em cada navegador. Para resolver isso você cria um arquivo css com um padrão de reset que vai deixar as tags todas com um mesmo padrao, assim a página aparece igual em todos os navegadores. 
*** Lembrando que a chamada do reset sempre deve vir primeiro que os outros arquivos css, se não ele vai sobrescrever o código.

# Propriedades CSS

CORES:
- `color`:              muda cor do texto;
- `background-color`:   muda cor do fundo;

TEXTO:
- `font-size`:          tamanho da fonte;
- `font-family`:        escolhe qual fonte será usada;
- `text-decoration`:    remove ou coloca grifados e outras decorações de texto;

# POSICIONAMENTO com CSS

- `float`: (flutuador, flutuar) ela tem dois valores `left` e `right`. 
    - Ele cria um novo contexto (passa a ocupar um espaço a frente como uma camada). 
    - Ele nunca vai esconder um conteúdo (ele ira empurar o texto paro o lado). 
    - Ele passa a definir a largura e a altura pelo tamanho do conteudo.
    - O pai vai ignorar a tag com float, dessa forma o tamanho do pai não vai mais seguir o tamanho desse filho.

- `overflow`:  hidden  (recalcula o contexto - hidden é escondido) se você tiver uma largura e uma altura definida, os elementos filhos q forem maior ficaram escondidos, não sairão de dentro do elemento pai.
    -  se você usar essa propriedade com os elementos filhos usando float ele vai ver q não tem nem um elemento no contexto comum e vai usar o contexto do float para recalcular os tamanhos.

- `padding`:  "respiro interno", ele é responsavel por dar um espaço das bordas do elemento pai, para não ficar grudado com ele.
    - padding pod ser usado individualmente: 
    ```
    padding-top: 50px; 
    padding-right: 50px; 
    padding-botton: 50px; 
    padding-left: 50px;
    ```
    - formas resumidas:
    ```
    padding: 50px 60px 95px 60px;

    padding: top/bottom right/left;
    padding: 55px 60px;

    padding: top right/left bottom;
    padding: 55px 60px 95px;

    padding: top/bottom/right/left;
    padding: 55px; 
    ```

- `margin`:  "respiro externo", é responsavel pelo espaço entre um elemento e outro, a distancia q um elemento fica um do outro.
    - tem todas as caracteristicas do padding.


# Unidades de medida CSS

- `px`: pixel;


# Design

- Respiro: é o espaço que se dá de um elemento ou outro, podendo ser externo ou interno.




