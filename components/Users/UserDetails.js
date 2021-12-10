import Card from '../ui/Card'
function UserDetails (props){
    console.log(props,'peace')
    return<Card>
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        </Card>
}

export default UserDetails