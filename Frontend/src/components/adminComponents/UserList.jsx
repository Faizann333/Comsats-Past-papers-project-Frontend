import UserCard from "./UserCard"

const UserList = ({adminUserList}) => {
    console.log(adminUserList)
    
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-2">
        {adminUserList.map((user)=>(
        <UserCard key={user._id} user={user}/>

      ))}
     
    
    </div>
  )
}

export default UserList
