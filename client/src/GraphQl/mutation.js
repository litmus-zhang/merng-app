import { gql } from "@apollo/client";


export const Create_Post=gql`
mutation CreatePost($title: String, $description: String) {
    createPost(post: {title: $title, description: $description}) {
        id
        title
}
}
`

export const Delete_Post = gql`
mutation DeletePost($id: String) {
    deletePost(id: $id) 
}
`