import styles from './Comment.module.css'
import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar'
import {useState} from 'react'

export function Comment({content, onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/brunorazevedo.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Théo Ribeiro</strong>
                            <time title="16 de Agosto ás 13:45" dateTime="2022-08-16 13:45:20">Publicado há 1h</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24} />

                        </button>
                    </header>

                    <p>{content} </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}