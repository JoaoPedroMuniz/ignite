import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/JoaoPedroMuniz.png" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header> 
                        <div className={styles.authorAndTime}>
                           <strong>João Pedro S M de Carvalho</strong>
                           <time title='11 de julho às 15:16' dateTime='2023-07-11 15:16:27'>Cerca de 2h atrás</time> 
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>

                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}