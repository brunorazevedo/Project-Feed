//TODOS OS COMPONENTES DA APLICAÇÃO PRECISAM TER EXTENSÃO JSX = JAVASCRIPT + XML
import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';


export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post 
          author="Bruno Ribeiro"
          content="Primeira postagem"
          />

          <Post 
          author="Julia Miranda"
          content="Segunda postagem"
          />
        </main>
      </div>
      
    </div>
  )
}

