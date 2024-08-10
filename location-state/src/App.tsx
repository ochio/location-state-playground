import './App.css'
import { Providers } from './Provider'
import { Counter1 } from './Counter1'
import { Counter2 } from './Counter2'
import { Counter3 } from './Counter3'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Providers>

       <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/a">A</Link>
          </li>
          <li>
            <Link to="/b">B</Link>
          </li>
        </ul>
      <Routes>
        <Route path="/" element={<Counter1 title="home"/>} />
        <Route path="a" element={<Counter2 title="a"/>} />
        <Route path="b" element={<Counter3 title="b"/>} />
      </Routes>
    </Providers>
  )
}

export default App
