import {useEffect,useState} from 'react'
import UserList from '../components/Users/UserList'
import {useRouter} from 'next/router'
export default function Home() {
  const router = useRouter()
  const USERS = [{
    id:'u1',
    name:'vismay',
    image:'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png'
  },{
    id:'u2',
    name:'rana',
    image:'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png'
  }]

  const [userData,setUserData] = useState(USERS)
  useEffect(()=>{
    if(router.query.name!== undefined)
    setUserData(userData.concat(router.query))
    router.replace('/')

  },[])
  return (
    <UserList users={userData}/>
  )
}
