import { render } from "@testing-library/react";
import React, { useState } from 'react'; 


function Body2() {

    //   const show= true;
    const [show, setShow] = useState(true);
    const course = {
        professor: 'Pepito',
        name: 'Mobile',
    };
    const students = ['Carlos', 'Pepito', 'Paula', 'Camila'];


    const numbers = [1, 2, 3, 4];
    const listItems = numbers.map((numbers) =>
        <li > { numbers } </li>
    );

    return ( <div className = "Body2" >

        <div class = "col ">
        < h1 >For </h1> 
        <ul class = "list-group" > {
            students.map(function(item) {
                return <li key = { item } > { item } </li>;     
            })
        } 
        </ul> 
        </div> 
        </div>


    );
}


export default Body2;