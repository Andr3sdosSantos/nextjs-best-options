<img src="/images/github/next-logo.jpg" alt="">

<h1>myBlog</h1>

<h5>Nesse repositório vamos criar um blog seguindo os passos da documentação do Next.js</h5>

<p><strong>Mas...por que o Next.js?</strong></p>
<p>O Next.js é um framework voltado para o desenvolvimento web frontend, as características que mais me chamou atenção nele foram: </p>

<ul>
  <li>Possui um sistema de roteamento baseado em página <strong>[pages/minha-página.js].</strong></li>
  <li>Divisão do código e processamento <strong><i>prefetch.</i></strong></li>
  <li>Suporte a CSS e Sass, além de <i>CSS-in-JS</i>, tudo isso integrado.</li>
</ul>

<p><strong>Inicie um projeto:</strong></p>

<code>yarn create-next-app [nome-do-projeto] - npm init next-app [nome-do-projeto]</code>

<p><strong>Rode o projeto</strong></p>
<code>yarn dev - npm run dev</code>

<p><strong>Faça alterações</strong></p>
<p>Aqui cabe observar que o Next.js fornece um recurso chamado <strong><i>Hot Reloading</i></strong> que faz com 
que o Next faça alterações direto no navegador sem a necessidade de alterações.</p>
<p>Na pasta: <code>/pages/index.js</code> troque de 'Welcome to' para 'Learn' e veja a mágica acontecer. Lembrando que o <i>entry-point</i> da página é o arquivo de index, ou seja, como o Next.js usa a pasta 'pages' para construir a URL fica assim: 'http://localhost:3000/{aqui entra o index.js}'</p>
