import UserList from '../components/Users/UserList'
import {MongoClient} from 'mongodb'
import Head from 'next/head'

export default function Home(props) {

  return (
    <>
    <Head>
    <title>Home page</title>
    <meta title='description' content='home page for all listed/ registered usrrs' />
  </Head>
    <UserList users={props.users}/>
    </>
  )
}

export async function getStaticProps(){
  const client = await MongoClient.connect('mongodb+srv://admin:amdmin@cluster0.ilnx1.mongodb.net/users')
  const db = client.db()
  const collections = db.collection('users')
  const data = await collections.find().toArray()
  return{
    props:{
      users:data.map(d=>({
        id:d._id.toString(),
        name:d.name,
        image:d.image
      }))
    },
    revalidate:10
  }
}