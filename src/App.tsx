import './App.css'
import { AddAreaCard } from './components/AddAreaCard'

function App() {
  return (
    <div
      style={{
        border: '1px solid white',
        borderRadius: '16px',
        padding: '20px',
      }}
    >
      <h1>Dev Flash Cards</h1>
      <div>
        <h3>Area de Tópicos</h3>
        <AddAreaCard onClick={() => console.log('CLICOU')} />
      </div>
    </div>
  )
}

export default App
