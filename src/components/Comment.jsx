import styles from './Comment.module.css'
import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment(){
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

                        <button title="Deletar comentario">
                            <Trash size={24} />

                        </button>
                    </header>

                    <p>Meu primeiro comentário! </p>
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