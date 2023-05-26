import React from 'react'
import axios from 'axios'
import {useState , useEffect} from 'react'

function Fetchiddata() {
    const [post , setpost] = useState( {})
    const [ id , setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res)
            setpost(res.data)
        })
        .catch(err =>{
            console.log (err)
        })

    } , [id])
  return (

    <div>
        <input type='text' value={id} onChange={ e => setId(e.target.value) }></input>
            <div> {post.title}</div>
      
    </div>
  )
}

export default Fetchiddata
