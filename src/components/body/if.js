
import React from 'react';
import {Button} from 'react-bootstrap';
import Body2 from "./for";

class Body extends React.Component{
//students =['Carlos','Pepito','Paula','Camila'];
state={show:true,};

show=()=>{this.setState({show: !this.state.show});};
course ={
    profesor:'pepito',
    name: 'Mobile'
};
render(){
    if (this.state.show){
        
        return(
            <div className="row">
                <div className="col s-6">
               <h1>If</h1>
                     <div className="card w-75">
                     <div className="card-body">
                         <h5> {this.course.profesor}</h5>
                         <p> {this.course.name}</p>
                     </div>
                   </div>
                   <Button onClick={this.show} variant ="primary">
                       show
                    </Button>
                </div>
             
           
                    <div class="col ">
                          <Body2></Body2>
                    </div>
              
                 </div>


        );
    }else {
        return(
            <div className="row">
                <div className="col s-6">
               <h1>If</h1>
                   <Button onClick={this.show} variant ="primary">
                       show
                    </Button>
                </div>

                    
                    <div class="col ">
                            <Body2></Body2>
                    </div>
            </div>
        );

    }
}

}


export default Body;