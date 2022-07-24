import Head from "next/head"
import "../styles/globals.scss"

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Blog Local Storage</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}


export default App