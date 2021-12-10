import UserDetails from "../../components/Users/UserDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from 'next/head';
function UserInfo(props) {
  return (
    <>
    <Head>
    <title>User Details</title>
    <meta title='description' content='details of a single user' />
  </Head>
     {props.userDetails.id!==undefined && <UserDetails
        id={props.userDetails.id}
        name={props.userDetails.name}
        image={props.userDetails.image}
        />}
    </>
  );
}
export default UserInfo;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:amdmin@cluster0.ilnx1.mongodb.net/users"
  );
  const db = client.db();
  const collections = db.collection("users");

  const result = await collections.find({}, { _id: 1 }).toArray();

  return {
    fallback: true,
    paths: result.map((res) => ({
      params: {
        userInfo: res._id.toString(),
      },
    })),
  };
}
export async function getStaticProps(context) {
  const userId = context.params.userInfo;

  const client = await MongoClient.connect(
    "mongodb+srv://admin:amdmin@cluster0.ilnx1.mongodb.net/users"
  );
  const db = client.db();
  const collections = db.collection("users");

  const result = await collections.findOne({ _id: ObjectId(userId) });
  return {
    props: {
      userDetails: {
        id: result._id.toString(),
        name: result.name,
        image: result.image,
      },
    },
  };
}

