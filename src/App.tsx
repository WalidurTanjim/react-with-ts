import './App.css'
import Greeting from './components/Greeting/Greeting'

function App() {
  const name = "Walidur Tanjim";
  const age = 25;

  return (
    <>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700 mt-10'>React With TypeScript</h1>
      <Greeting userName={name} age={age} />
    </>
  )
}

export default App
