import React from "react";

const Card = (props) => {
     const {email,name,id} = props;
    return(
        <div>
           <h3>{name}</h3> 
           <p>{email}</p> 
           <p>{id}</p> 
        </div>
    );
};
export default Card ;