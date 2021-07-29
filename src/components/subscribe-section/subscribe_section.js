import React from "react";
import {InputGroup,FormControl,Button} from "react-bootstrap";
export default function Subscribe_Section () {

    return(
        <div className="flex-container" style={{marginTop:"15%"}}>
            <div>
                <h1>Subscribe to our Newsletter</h1>
                <InputGroup className="mb-3" style={{marginTop:"5%"}}>
                    <FormControl
                        placeholder="Enter Email address"
                        aria-label="Enter Email address"
                        aria-describedby="basic-addon2"
                    />
                    <Button  variant="outline-secondary" id="button-addon2">
                        Subscribe
                    </Button>
                </InputGroup>
            </div>
        </div>

    )
}
