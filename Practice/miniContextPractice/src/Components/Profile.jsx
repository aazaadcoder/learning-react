import { UserContext } from "../Context/UserContext"
import { useContext } from "react"

const Profile = ()=>{

    const {user} = useContext(UserContext)

     
    if (!user) return <h1>Login Please</h1>

    return <h2>Welcome {user.userName} </h2>


    
}
export default Profile