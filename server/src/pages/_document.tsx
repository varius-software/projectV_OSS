import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
		<div>
			<h1>VARIUS App</h1>
			<p>App mode : {process.env.NODE_ENV}</p>
		</div>
	  </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
