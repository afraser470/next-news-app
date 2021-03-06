import styles from '../styles/Home.module.scss';
import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { getRandomNews } from '../lib/function';


export async function getServerSideProps() {
  // const res = await fetch("/api/newsApi");
  const res = await fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=tzDIKDLrSJUtyJQIXep7Y76qMee1Ucpz');
  const json = await res.json();
  
  const data = getRandomNews(json);
  return{
    props:{articles:data},
  }
}

export default function Home({articles}) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }
  return (
    <Layout>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
        {articles.randomNews.map((article, key)=>(
            article.error == undefined?
            <div className={styles.article} key={key}>
            <h3 className={styles.title}>{article.title}</h3>
            <p>{article.abstract}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Click to view this article!</a>
            </div>
            :
            <h3 className={styles.warning}>{article.error}</h3>
          ))}
        <div className={styles.wrapper}>
          <button className={styles.button} onClick={refreshData}>refresh</button>
        </div>

    </Layout>
  )
}
