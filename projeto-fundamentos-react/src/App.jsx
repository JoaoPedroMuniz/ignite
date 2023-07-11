// JSX = JavaScript + XML(HTML)
import{ Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css'

import './global.css';



function App(props) {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
