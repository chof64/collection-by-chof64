import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html>
            <Head>
                {/* Add Google Fonts links here */}
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&family=Roboto+Condensed&family=Roboto+Flex:opsz@8..144&display=swap" rel="stylesheet" />
            </Head>
            <body className='subpixel-antialiased'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}