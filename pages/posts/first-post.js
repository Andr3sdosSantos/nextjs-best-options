import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Mudei meu título.</title>
        </Head>
        <h1>First Page...</h1>
        <h4>Pegue o link <Link href="/index"><a>aqui.</a></Link> </h4>
        <p>Mudando...</p>
      </Layout>
    </>
  )
}