// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* SEO Meta Tags */}
        <meta name="description" content="Explore a world of stories with Storyloom. Read and contribute to folktales from around the globe and enhance your language skills." />
        <meta name="keywords" content="stories, folktales, language learning, Storyloom, literature, multilingual stories, cultural tales, global literature, language practice, storytelling, traditional stories, language immersion, reading for language learners, cultural heritage, narrative, folklore" />
        <meta name="author" content="Storyloom Team" />
        <meta property="og:title" content="Storyloom - Explore and Contribute to Global Folktales" />
        <meta property="og:description" content="Discover and share folktales from various cultures with Storyloom. Join a community of readers and writers to explore the world through stories." />
        <meta property="og:image" content="/Logos/logo.png" />
        <meta property="og:url" content="https://storyloom.in/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@storyloom" />
        <meta name="twitter:title" content="Storyloom - Explore and Contribute to Global Folktales" />
        <meta name="twitter:description" content="Discover and share folktales from various cultures with Storyloom. Join a community of readers and writers to explore the world through stories." />
        <meta name="twitter:image" content="/logo/logo.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Logos/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Logos/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />

        {/* Add other head elements if needed */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
