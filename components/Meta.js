import Head from 'next/head'

export default function Meta({title, keywords, description}) {
    return (
        <Head>
            <link rel="icon" type="image/png" href="/favicon.ico" type="image/x-icon/" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="og:title" content={title} />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Design bureau ved Odense havn',
    keywords: 'Hjemmesider, netbutikker, grafisk design',
    description: 'Kort beskrivelse af Growup Studio'
}
