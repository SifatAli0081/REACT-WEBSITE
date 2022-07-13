import React, {useState , useEffect} from "react";

const Home = ()=> {
    const [posts,setPosts] = useState ([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?fbclid=IwAR2T27a8Y81n3VtgwsXg5KSfeeezGSFwOt1Trl-R9J_UAlMzjQrNGOlap7g')
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
            setPosts(data[10]);
        })
        .catch((error) => {
            console.log(error);})
    },[]);

    return (
        <div> 
          Titel:{posts.titel}
           <h1>Home</h1>

        </div>
    );
};

export default Home;