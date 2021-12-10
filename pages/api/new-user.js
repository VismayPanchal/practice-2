import {MongoClient} from 'mongodb'

 async function PostData(req,res){

    if(req.method==='POST'){
        const data = req.body
        const client = await MongoClient.connect('mongodb+srv://admin:amdmin@cluster0.ilnx1.mongodb.net/users')
        const db = client.db()
        const collections = db.collection('users')
        await collections.insertOne(data)
        client.close()
        res.status(201).json({message:'created succ'})
    }
}

export default PostData