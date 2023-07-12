import { Avatar } from './Avatar';
import styles from './Post.module.css';

import { Comment } from './comment';

export function Post(props){
    console.log(props);
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                    src="https://github.com/JoaoPedroMuniz.png" />
                    <div className={styles.authorInfo}>
                        <strong>João Pedro Santos Muniz De Carvalho</strong>
                        <span>Web developer</span>
                    </div>
                </div>
                <time title='11 de julho às 15:16' dateTime='2023-07-11 15:16:27'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
              <Comment/>
              <Comment/>
              <Comment/>
            </div>
        </article>
        
    )
}