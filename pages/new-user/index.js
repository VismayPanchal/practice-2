import NewUser from "../../components/Users/NewUser";
import { useRouter } from "next/router";
import Head from 'next/head'

function AddUser() {
  const router = useRouter();
  async function AddNewUser(data) {

    const res = await fetch("/api/new-user", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resposne = await res.json()
    console.log(resposne)
    router.replace('/')
  }
  return <>
  <Head>
    <title>Add User</title>
    <meta title='description' content='page for adding new user to site' />
  </Head>
  <NewUser onAddUser={AddNewUser} /></>;
}

export default AddUser;
