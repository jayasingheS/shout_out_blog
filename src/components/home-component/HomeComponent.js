import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import './HomeComponent.css'
import one from "../../images/1.jpg";

export default function HomeComponent (props) {

    return(
            <div className="flex-container_section_one" style={{direction:`${props.flip_right_left}`}}>
                <div style={{height:500,
                             backgroundImage:`url(${one})`,
                             backgroundPosition:'center',
                             backgroundRepeat:"no-repeat",
                             backgroundSize:"cover"}}>

                </div>
                <div>
                    <div className='flex-container_section'>
                        <div>
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>

    )
}
