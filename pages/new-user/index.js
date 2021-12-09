import NewUser from '../../components/Users/NewUser'
import {useRouter} from 'next/router'
function AddUser (){
    const router = useRouter()
    function AddNewUser (data){
        console.log(data)
        router.push({
         pathname: '/',
         query: data
        })
    }
    return <NewUser onAddUser={AddNewUser}/>
}

export default AddUser