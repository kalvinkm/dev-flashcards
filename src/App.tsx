import './App.css'
import { AreasSection } from './components/AreasSection'

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

      <AreasSection />
    </div>
  )
}

export default App
