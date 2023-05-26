import { useParams } from "react-router-dom"
export const Userdetail = () =>{
     
    const params = useParams()
    const userId = params.userId
    return <div>User details of user {userId} </div>
}