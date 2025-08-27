import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import PaperListProvider from './components/store/Paper-List-Store'
import  ThemeProvider  from './components/store/ThemeContext'
const App = () => {
  return (
    <ThemeProvider>
      <PaperListProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </PaperListProvider>
    </ThemeProvider>

  )
}

export default App

