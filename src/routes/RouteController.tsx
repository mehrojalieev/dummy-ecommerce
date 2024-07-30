import { Route, Routes } from 'react-router'
import Home from '../pages/home/Home'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default RouteController
