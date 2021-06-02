import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  // const API_KEY = "tgrQeXVwBgGAkVoeBgvg5MY7cWQmb4UULUdBFDEptKk";
  const API_KEY2 = "c-5wa4XNkvz9iHV3sOmwZyVAOLbItoGoEOIDlo2PruQ";
  const res = await fetch(`https://api.unsplash.com/photos/random?count=10&per_page=3&page=2&client_id=${API_KEY2}`)
  const data = await res.json()
  return {
    props: {
      images: data
    }
  }
}

export default function Home({ images }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Images</h2>
      </section>
      <section>
        {images.map(image => 
        <Image
          key={image.id}
          src={image.urls.regular}
          width="300"
          height="300"
        >
        </Image>)}

      </section>
    </Layout>
  )
}