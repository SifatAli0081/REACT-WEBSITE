import React, {useState,useEffect} from 'react';
import Card from './Card';
const Home = () => {
    const [posts,setPosts] = useState([])
      useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((data)=>{
            console.log("sampal",data);
            setPosts(data);  
        })
     }) 
       return (
           <div>
             {
                posts.map((posts)=> (
                    <Card
                  name = {posts.name}
                   email= {posts.email}
                   id = {posts.id}
                    />
                ))
             }
           </div>
       );
};
 export default Home;