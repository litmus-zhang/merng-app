const {gql} = require('apollo-server-express');



//Queries
const typeDefs = gql`
type Post{
    id:ID
    title:String
    description:String
}

type  Query{
    hello:String
    getAll:[Post]
}
input PostInput{ 
    title:String
    description:String
}
type Mutation {
    createPost(post:PostInput):Post
    updatePost(id:ID,post:PostInput):Post
    deletePost(id:ID):Post
}
`



module.exports = typeDefs;