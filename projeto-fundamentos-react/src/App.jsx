// JSX = JavaScript + XML(HTML)
import{ Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css'

import './global.css';
import { Sidebar } from './components/sidebar';


function App(props) {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='João Pedro' 
            content='Meu primeiro content na linguagem react.'
          />
          <Post 
            author="Gabriel Jesus" 
            content="Ruim de bola, mas serviu de exemplo."
          />
        </main>
      </div>
    </div>
  )
}

export default App
