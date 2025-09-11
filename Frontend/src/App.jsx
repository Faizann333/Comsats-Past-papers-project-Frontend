import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import PaperListProvider from './components/store/PaperListContext'
import ThemeProvider from './components/store/ThemeContext'
import ReviewListProvider from './components/store/ReviewListContext'
const App = () => {
  return (
    <ThemeProvider>
      <PaperListProvider>
        <ReviewListProvider>
          <Navbar />
          <Outlet />
        </ReviewListProvider>
        <Footer />
      </PaperListProvider>
    </ThemeProvider>

  )
}

export default App

