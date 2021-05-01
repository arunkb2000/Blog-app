import React, {useState, useEffect} from 'react';
import {  Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';




const  Home= () => {

// Storing the post information.
const [posts,setPosts] = useState([]);

//  to fetch the info..
const getPosts= async ()=>{
    try{
      await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res=>{
          setPosts(res.data)
      }).catch(err=>{
          console.log(err)
      })
    }catch (error) {
        console.log(error.message);
    }

}



useEffect(() => {
    getPosts();
},[]);


    return (
        <div>
           <Typography variant="h5"  component="h2" gutterBottom>
           Below are the Title of the Posts
        </Typography>
            <ol>
                {posts.map(post =>(
                    <div key={post.id}>
                   <li> <Link key={post.id} to={{
                       pathname:`/posts/${post.id}`,
                       data:{
                           info:{post}
                       }

                       }}>{post.title}</Link></li>
                       </div>
                ))}
            </ol>

        </div>
    )
}

export default Home;
