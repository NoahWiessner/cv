import React from "react";
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function Pics() {
    return(
        <div>
            <Row>
                <Col  id="Pics" xs={6}>
                    <Image className="img-Pics" src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" rounded />
                </Col>
                <Col xs={6}>
                    <Image className="img-Pics" rounded src='https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                </Col>
            </Row>            
        </div>
    )
}