import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button , } from "react-bootstrap";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons"
import { FaBorderNone, FaGlobeAsia,FaPhoneAlt} from 'react-icons/fa';

const Home1 = (props) => {
     const {email,name,city,street,suite,zipcode,phone,website,tagline,company} = props;
    return(
       
           <Card className="card_container container-fluid mt-5" style={{ height: '350px' ,width: '650px', border:'1px solid black',}}>
      <Card.Body className="card_body ">
          <h2 style={{
            marginTop:'20px',
            color:'white',
            }}>
       {name}</h2>
          
           <hr className="text-white width-3px"/>
             
        <Card.Link className="card_link ">
            <ul style={{
          listStyle: "none",
          textDecoration: "none",
           fontstyle: "20px",    
        }}>
          <li className="text-info" > Compony<a href="#"><h3>{company}</h3></a></li>
          
          <li className="text-info"><i className="fa-solid fa-location-dot fs-5 text-white"></i>Address: <a href="#">
              {city} 
              {street} ,
               {suite}
               {zipcode}
               </a></li>
          <li className="text-info "><i className="fa-solid fa-phone fs-5 text-white"></i>Phone: <a href="#" >{phone}</a></li>
          <li className="text-info "><i className="fa-solid fa-globe fs-5 text-white"></i>Website: <a href="#">{website}</a></li>
         </ul>
        </Card.Link>
        <Button className="btn btn-primary align-bottom"><i className="fa-solid fa-cart-plus fs-4 "></i></Button>
      </Card.Body>
        </Card>
    
   
       
    );
};
export default Home1;