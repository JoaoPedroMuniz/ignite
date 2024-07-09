import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR' /*biblioteca de tempo, útil.*/

import { Avatar } from './Avatar';
import styles from './Post.module.css';

import { Comment } from './Comment';
import { useState } from 'react';

export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([
        'comentário bacana hein!?'


    ])
    

    const publishedDateFormatted = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", {locale: ptBR,
    })

    const currentHourFormatted = formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()

        const newCommentWrite = event.target.comment.value
        
        setComments([...comments, newCommentWrite])
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar /*Revisar, como que essa função tá funcionando.*/
                    src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{currentHourFormatted}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                        if (line.type=='paragraph') {return <p>{line.content}</p>;
                    }   else if (line.type == 'link')
                        return <p><a href="#">{line.content}</a></p>  
                })}
            </div>

            <form onSubmit={handleCreateNewComment}className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                name='comment'
                placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {return(
                    <Comment content={comment}/>
                )})}
            </div>
        </article>
        
    )
}