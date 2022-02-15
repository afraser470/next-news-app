// component template layouts will go here
import styles from '../styles/layout.module.scss';

export const siteTitle = 'Random News App'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Random News App</h2>
            </div>
            <main className={styles.content}>{children}</main>
            <div className={styles.footer}>
                Powered By: <a href='https://developer.nytimes.com/'>The New York Times Developer Network</a>
            </div>
        </div>
    )
  }