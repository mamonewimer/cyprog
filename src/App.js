import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import {Header,Footer,Container} from './components/index.js'
import {Home,Profile} from '../src/Pages/index.js'

const App = () => {
    return (
        <>
      
        <Router>
        <Header/>
        <Container>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route/>
        </Routes>
        </Container>      
        <Footer />
        </Router>
        
        </>
    )
}

export default App;