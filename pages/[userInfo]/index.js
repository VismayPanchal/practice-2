import UserDetails from '../../components/Users/UserDetails'
import {useRouter} from 'next/router'
function UserInfo (){
    const router = useRouter()
    let data
    if(router.query.name!==undefined){
     data = router.query
    }
    return<>{data!==undefined && <UserDetails id={data.id} name={data.name}  image={data.image} />}</>
}
export default UserInfo