import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/brunorazevedo.png" />
                    <div className={styles.authorInfo}>
                        <strong>Bruno Azevedo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="16 de Agosto ás 13:45" dateTime="2022-08-16 13:45:20">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera </p>

                <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW </p>

                <p> <a  href="">jane.design/doctorcare</a></p>

                <p>
                    <a  href="">#novoprojeto </a>{' '}
                    <a  href="">#nlw </a>{' '}
                    <a  href="">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixei seu feedback</strong>

                <textarea 
                placeholder="Deixe um comentário"
                />

                <footer>
                <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}