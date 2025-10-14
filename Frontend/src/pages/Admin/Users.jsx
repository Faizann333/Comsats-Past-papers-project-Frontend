import { useContext } from "react"
import { AdminContext } from "../../components/store/AdminContext"
import UserList from "../../components/adminComponents/UserList"

const Users = () => {
   const {adminUserList} = useContext(AdminContext)
    console.log(adminUserList);
  return (
    <div className="bg-gray-700 pt-5">
      <h1 className="text-center font-bold text-3xl text-white mb-5 ">ALL REGISTERED USERS</h1>
      <UserList adminUserList={adminUserList}/>
    </div>
  )
}

export default Users
