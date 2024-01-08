import {Routes,Route} from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Register from '../pages/Registration';
import Login from '../pages/Login';
import Land from '../pages/Landing';

function MyRoute(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path="/landing" element={<Land/>}/>
        </Routes>

    )
}
export default MyRoute;