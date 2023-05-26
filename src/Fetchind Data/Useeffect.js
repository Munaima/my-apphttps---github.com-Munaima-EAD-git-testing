import React  from "react";
import axios from 'axios'
import { useEffect, useState } from "react";

function Useeffect() {
    const [posts , setposts] = useState([])

    useEffect (() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setposts(res.data)
        })
        .catch( err => {
            console.log(err)
    })

    } , [])
  return (
    <div>
        <input type='text'></input>
        <ul>{

            posts.map(post =>(
                 <li key= {post.id}>{post.title}</li> ))

        }</ul>
    </div>
  )
}

export default Useeffect
