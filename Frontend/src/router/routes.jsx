import { createBrowserRouter } from "react-router-dom"
import App from '../App.jsx'
import PastPapers from '../pages/PastPapers.jsx'
import Upload from '../pages/Upload.jsx'
import Home from '../pages/Home.jsx'
import Approval from '../components/Approval.jsx'
import MeetAdmin from "../components/MeetAdmin.jsx"


const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Past-Papers", element: <PastPapers /> },
      { path: "/upload-paper", element: <Upload /> },
      { path: "/upload-paper/approval", element: <Approval /> },
      { path: "/meet-admin", element: <MeetAdmin />}





    ]
  },

])

export default router
