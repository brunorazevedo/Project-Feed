//TODOS OS COMPONENTES DA APLICAÇÃO PRECISAM TER EXTENSÃO JSX = JAVASCRIPT + XML
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

// author : {avatar_url:"", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/brunorazevedo.png',
      name: 'Bruno',
      role: 'Desenvolvedor Front-End'
    },
    content: [
      {type: 'paragraph', content:'Fala Galera',},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW'},
      {type: 'link', content: 'instagram/brunoribazevedo' },
    ],
    publishedAt: new Date('2022-08-18 09:30:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/brunorazevedo.png',
      name: 'Theo Ribeiro',
      role: 'Desenvolvedor Front-End',
    },
    content: [
      {type: 'paragraph', content:'Fala Galera'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW'},
      {type: 'link', content: 'instagram/brunoribazevedo' },
    ],
    publishedAt: new Date('2022-08-18 09:30:00'),
  },
];

//Iteração:  Reoetir alguma coisa, vou iterar sobre um array, vou percorrer um araay.

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
            return (
            <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
            )
         })}
        </main>
      </div>
      
    </div>
  )
}


