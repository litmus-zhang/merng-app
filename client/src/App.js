import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { Create_Post,Delete_Post } from "./GraphQl/mutation";
import { getAll } from "./GraphQl/queries";


function App()
{
  // const [post, setPost] = useState({
  //   title: "",
  //   description: "",
  // });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createPost, { err }] = useMutation(Create_Post);
  const [DeletePost,{d}] = useMutation(Delete_Post);
  
const addPost = () =>
  { 
    
    createPost({
      variables: {
        title,
        description,
      }
    })
}

  const deletePost = (id) =>
  {
    DeletePost({
      variables: {
        id : id,
      }
    });
}

  //Get all posts
  const { loading, error, data } = useQuery(getAll);
  
  if (loading) return <p>Loading...</p>
  
  if (error) return <p>Error Getting post</p>
  
  return (
    <div className="App">
      {
        data.getAll.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button onClick={()=>deletePost(post.id)}>Delete</button>
          </div>
        ))
      }
      <hr />
      <input placeholder="title" onChange={(e) => setTitle(e.target.value)} />
      <br/>
      <input placeholder="Description" onChange={(e)=> setDescription(e.target.value)}/>
      <br/>
      <button onClick={addPost}>Add New Post</button>
    </div>
  );
}

export default App;
