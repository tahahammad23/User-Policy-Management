import Button from './components/Buttons'
import Navbar from './components/Navbar'
import './App.css';
function App() {

  return (
    <div className="app-root">
      <header className="app-navbar">
        <Navbar />
      </header>
      <main className="app-content">
        <Button text="Users" />
        <Button text="Policies" />
      </main>
    </div>
  )
}

export default App
