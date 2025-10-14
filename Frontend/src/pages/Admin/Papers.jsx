
import PaperList from "../../components/adminComponents/paperList"
import { useContext } from "react"
import { AdminContext } from "../../components/store/AdminContext"

const Papers = () => {
  const {adminPaperList} = useContext(AdminContext)
  console.log(adminPaperList)
  return (
    <div className="min-h-screen bg-gray-700 ">
      <PaperList adminPaperList={adminPaperList}/>
    </div>
  )
}

export default Papers
