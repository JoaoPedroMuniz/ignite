// JSX = JavaScript + XML(HTML)
import{ Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css'

import './global.css';

//  author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: string

const posts = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/JoaoPedroMuniz.png',
      name: 'João Pedro Muniz',
      role: 'Estudante de TI',
    },
    content: [
      { type:'paragraph', content:'Fala galeraa 👋'},
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-07-10 11:20:02'),
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type:'paragraph', content:'Fala galeraa 👋'},
      { type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-07-11 15:40:32'),
  },
];

//iteração: repetir alguma coisa, estrutura de repetição

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return( 
            <Post 
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

export default App
