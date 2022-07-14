import React, {useState,useEffect} from 'react';
import Card from './Home1';

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
                   city= {posts.address.city}
                   street = {posts.address.street}
                   suite= {posts.address.suite}
                   zipcode= {posts.address.zipcode}
                   phone= {posts.phone}
                   website= {posts.website}
                   company= {posts.company.name}
                      tagline={posts.company.catchPhrase}
                    />
                ))
             }
           </div>
       );
};
 export default Home;