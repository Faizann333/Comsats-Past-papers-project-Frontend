import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import PaperListProvider from './components/store/PaperListContext'
import ThemeProvider from './components/store/ThemeContext'
import ReviewListProvider from './components/store/ReviewListContext'
import AdminProvider from './components/store/AdminContext'
import SnakeCursor from './components/customCursor/Snake'
const App = () => {
  return (
    <ThemeProvider>
      <AdminProvider>
      <PaperListProvider>
        <ReviewListProvider>
          {/* <SnakeCursor /> */}
          <Navbar />
          <Outlet />
        </ReviewListProvider>
        <Footer />
      </PaperListProvider>
      </AdminProvider>
    </ThemeProvider>

  )
}

export default App

