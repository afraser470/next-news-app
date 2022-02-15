import styles from '../styles/Home.module.scss';
import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import Router from 'next/router'
import { getRandomNews } from '../lib/function';


export async function getStaticProps() {
  const res = await fetch("http://next-news-app-tau.vercel.app/api/newsApi");
  const json = await res.json();
  
  const data = getRandomNews(json);
  return{
    props:{articles:data},
  }
}

export default function Home({articles}) {
  
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
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a>
            </div>
            :
            <h3 className={styles.warning}>{article.error}</h3>
          ))}

    </Layout>
  )
}
