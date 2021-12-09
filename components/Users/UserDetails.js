import Card from '../ui/Card'
import {useRouter} from 'next/router'
function UserDetails (props){
    const router = useRouter()
    return<Card>
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        </Card>
}

export default UserDetails