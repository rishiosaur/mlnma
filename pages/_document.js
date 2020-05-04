import Document, { Html, Head, Main, NextScript } from 'next/document'
import Media from 'react-media'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous" />
          <script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js" integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz" crossorigin="anonymous"></script>
          <script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous"
            onload="renderMathInElement(document.body);"></script>
          <Media queries={{ dark: '(prefers-color-scheme: dark)' }}>
            {(e) => {
              return (
                <link rel="stylesheet"
                  href={`//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.2/styles/${e.dark ? "ir-black" : "github"}.min.css`} />
              )
            }
            }
          </Media>
          <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.2/highlight.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
