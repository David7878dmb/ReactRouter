import { Children } from 'react'
import './App.css'
import { Link, Route, Routes, useParams, Outlet } from 'react-router-dom'
import { NavLink } from './NavLink'
//Componentes
const Home = () => <h1>Home</h1>

//SeachPage con enlaces de tacos
const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ]

  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {tacos.map(taco =>(
          <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
        ))}
      </ul>
    </div>
)}

//Enlace de taco especifico
const Tacos = () => {
  const {taco} = useParams()
  
  return (
    <div>
      <h1>Tacos</h1>
      {taco}
      <br/>
      <Link to='details'>Ir a los detalles</Link>
      <Outlet />
    </div>
  )
}

//Detalles de los tacos
const TacoDetails = () => {
  const {taco} = useParams()

  return (
    <h1>Taco Details {taco}</h1>
  )
}
 

function App() {
  return (
    <div className='App'>
      <header>
        <h1>David</h1>
        <nav>
          <ul>

            <li> 
              <NavLink to='/'>Home</NavLink> 
            </li>
            <li> 
              <NavLink to='/SearchPage'> Search Page </NavLink> 
            </li>
            
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/SearchPage' element={<SearchPage />}/>
        <Route path='/tacos/:taco' element={<Tacos />}>
          <Route path='details' element={<TacoDetails/>}/>
        </Route>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default App
