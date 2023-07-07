// JSX = JavaScript + XML(HTML)
import{ Post } from './Post';

function App(props) {
  return (
    <div>
      <Post author='João Pedro' 
      content='Meu primeiro content na linguagem react.'
      />
      <Post author="Gabriel Jesus" 
      content="Ruim de bola, mas serviu de exemplo."
      />
    </div>
  )
}

export default App
