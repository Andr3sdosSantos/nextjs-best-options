<img src="/images/github/next-logo.jpg" alt="">

<h1>#myBlog</h1>

<h5>Nesse repositório vamos criar um blog seguindo os passos da documentação do Next.js</h5>

<p><strong>Mas...por que o Next.js?</strong></p>
<p>O Next.js é um framework voltado para o desenvolvimento web frontend, as características que mais me chamou atenção nele foram: </p>

<ul>
  <li>Possui um sistema de roteamento baseado em página <strong>[pages/minha-página.js].</strong></li>
  <li>Divisão do código e processamento <strong><i>prefetch.</i></strong></li>
  <li>Suporte a CSS e Sass, além de <i>CSS-in-JS</i>, tudo isso integrado.</li>
</ul>

<h2><i>Entry Point</i></h2>

<p><strong>Inicie um projeto:</strong></p>

<code>yarn create-next-app [nome-do-projeto] - npm init next-app [nome-do-projeto]</code>

<p><strong>Rode o projeto:</strong></p>

<code>yarn dev - npm run dev</code>

<p><strong>Faça alterações</strong></p>

<p>Aqui cabe observar que o Next.js fornece um recurso chamado <strong><i>Hot Reloading</i></strong> que faz com 
que o Next faça alterações direto no navegador sem a necessidade de alterações.</p>
<p><u>Na pasta:</u> <code>/pages/index.js</code> troque de 'Welcome to' para 'Learn' e veja a mágica acontecer. Lembrando que o <i>entry-point</i> da página é o arquivo de index, ou seja, como o Next.js usa a pasta 'pages' para construir a URL fica assim: 'http://localhost:3000/{aqui entra o index.js}'</p>

<p><strong>Adicionando uma nova pasta:</strong></p>
<p>Para adicionar uma nova pasta você pode, dentro de <code>/pages</code> adicionar um diretório de mais baixo nível, então fica assim: <code>/pages/[nome-da-rota].js</code>
ao fazer isso você precisa criar uma função com o <code>export default</code> por padrão: </p>
<pre>export default function [nome-da-função]() {
  return (
    Código JSX.
  )  
}</pre>

<h2><code>Link</code> component</h2>

<p><strong>Adicionando o componente <code>Link:</code></strong></p>
<p>O Next.js usa muitas bibliotecas embutidas, a sintaxe é bem semelhante com o ReactJS, para adicionar um link é necessário:</p>
<pre>import Link from 'next/link'
  export default function TestLink() {
    <Link href="/pages/[página-que-eu-quero]">Teste de link </Link>
  }
</pre>
<p>A navegação através do <code>Link</code> permite que você ande de uma página para outra usando o <i>JavaScript</i> que é mais rápido que o próprio navegador.
Isso acontece porque o navegador carrega a página toda, já o <i>JavaScript</i> não carrega toda a página.</p>

<p><strong>Divisão e pré-busca de código</strong></p>
<strong>Texto tirado direto da <a href="https://nextjs.org/learn/basics/navigate-between-pages/client-side">documentação</a>, não tem explicação melhor: </strong>
O Next.js faz a divisão automática de código, para que cada página carregue apenas o necessário para essa página. Isso significa que, quando a página inicial é renderizada, o código para outras páginas não é exibido inicialmente.

Isso garante que a página inicial seja carregada rapidamente, mesmo se você adicionar centenas de páginas.

Carregar apenas o código da página solicitada também significa que as páginas ficam isoladas. Se uma determinada página gerar um erro, o restante do aplicativo continuará funcionando.

Além disso, em uma compilação de produção de Next.js, sempre Linkcomponentes aparecem na janela do navegador, 
Next.js automaticamente prefetches o código para a página vinculada ao fundo. Quando você clicar no link, 
o código da página de destino já estará carregado em segundo plano e a transição da página será quase instantânea!

<p><strong>Importante saber:</strong></p>
<p>Se você quiser enviar um link para uma página externa use o <a href...>.</p>

<p><strong>Lib de roteamento?</strong></p>
<p>O Next.js além de otimizar totalmente seu código não é necessário usar nenhuma biblioteca de roteamento.</p>

<h2>Ativos estáticos</h2>

<p><strong>Public:</strong></p>
<p>O Next.js utiliza a pasta <code>/public</code> para guardar arquivos estáticos como imagens. Esse diretório
fica na raiz do projeto, igual ao <code>/pages</code>.</p>

<code><img src="..." alt="..." className="..."></code>

<h2>Adicionando Metadados</h2>

<p><strong>Head component: </strong></p>
<p>Para mudar, por exemplo o título da página basta importar o <code><Head></code>, fica assim: </p>
<pre>
  <code>
    import Head from 'next/head';
    ...function () {
      return (
        <div>
          <Head>
            <title>Mudei meu título...</title>
          </Head>
        </div>
      )
    }
  </code>
</pre>
<p>Abra o devTools e veja o <code><title></code> adicionado lá dentro.</p>

<h2>Uffaaa...finalmente CSS!</h2>
<p><strong>Estilo CSS:</strong></p>
<P>Para utilizar o CSS no Next.js você precisa escrever: </P>
<pre>
  <code>
    <style jsx>{`
      ...Código CSS
    `}</style>
  </code>
</pre>
<P>Aqui você está usando a biblioteca chamada <code>sytled-jsx</code>, ou seja, uma lib <i>"CSS-in-JS"</i> que permite escrever
CSS em um componente React, fazendo com que os estilos tenham escopo definido - outros components não serão afetados.
Isso vem do suporte interno do Next, como já vimos acima!</P>

<h2><strong>Components de </strong><code>Layout</code></h2>

<p><strong>Layout:</strong></p>
<p>Para isso vamos criar uma pasta na raiz do projeto, <code>/components</code> e adicionaremos a ela um arquivo chamado 
<code>layout.js</code>.</p>
<pre>
  function Layout({ children }) {
    return <div>{children}</div>
  }

  export default Layout
</pre>
<p>Em seguida, importe Layout dentro de <code>/pages/posts/first-project.js</code> e coloque-o sendo o mais externo possível. </p>
<pre>
  <code>
    import Link from 'next/link'
    import Layout from '../../components/layout'
      
    export default function FirstPost() {
      return (
        <Layout>
          <Head>
            <title>First Post</title>
          </Head>
          <h1>First Post</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </Layout>
      )
    }
  </code>
</pre>

<p><strong>Tacando CSS para dentro!</strong></p>

<p>Para adicionar CSS usaremos os Módulos CSS, eles permitem colocar CSS em um component React.
Para isso crie um arquivo <code>/components/layout.module.css</code></p>
<pre>
  <code>
    .container {
      max-width: 36rem;
      padding: 0 1rem;
      margin: 3rem auto 6rem;
    }
  </code>
</pre>

<pre><strong>Importante: </strong>Para usar os módulos do CSS é necessário que o arquivo termine com 'module.css'</pre>

<p><strong>Para usar o </strong><code>layout</code>: </p>

<ul>
  <li>Importá-lo dentro de <code>layout</code> como <code>styles</code></li>
  <li>Use <code>'styles.<class-name>'</code> como 'className'</li>
</ul>
<pre>
  <code>
    import styles from './layout.module.css'

    export default function Layout({ children }) {
      return <div className={styles.container}>{children}</div>
    }
  </code>
</pre>
<p>Agora...sua página na rota: localhost:3000/posts/first-post</p>

<p><strong>Nomes de classes são gerados automaticamente.</strong></p>
<p>Agora se você olhar no devTools do seu navegador vai perceber que a <code>div</code> que nós alteramos tem um nome parecido com
<code>layout_container...</code>. É isso que os módulos CSS fazem: <i>gera nomes exclusivos de classes.</i>Usando eles não precisa se preocupar 
com a confusão dos nomes das classes.</p>


