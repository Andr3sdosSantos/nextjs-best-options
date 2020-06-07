import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Page...</h1>
      <h4>Pegue o link <Link href="/index"><a>aqui.</a></Link> </h4>
    </>
  )
}