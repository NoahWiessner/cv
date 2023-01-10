import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function Cards() {
    return(
        <div id='cards'>
            <h2>Our Offers</h2>
            <Row xs={1} md={3} className="row-112233">
                <Col> 
                    <Card className='cd-style'> 
                        <Card.Body className='cd-body'>
                        <Card.Title className='c-title'>Branding & Design</Card.Title>
                        <Card.Text>
                            <span className='c-title'>Designs</span><br />
                            <span className='c-title'>Designs</span><br />
                            <span className='c-title'>Designs</span><br />
                            <Button className='cd-button' href="#">more</Button>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col> 
                    <Card  className='cd-style' id='mittelCard'> 
                        <Card.Body className='cd-body'>
                        <Card.Title className='c-title'>Web Development</Card.Title>
                        <Card.Text>
                            <span className='c-title'>Web Dev</span><br />
                            <span className='c-title'>Web Dev</span><br />
                            <span className='c-title'>Web Dev</span><br />
                            <Button className='cd-button' href="#">more</Button>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col> 
                    <Card  className='cd-style'> 
                        <Card.Body className='cd-body'>
                        <Card.Title className='c-title'>Marketing</Card.Title>
                        <Card.Text>
                            <span className='c-title'>Marketing</span><br />
                            <span className='c-title'>Marketing</span><br />
                            <span className='c-title'>Marketing</span><br />
                            <Button className='cd-button' href="#">more</Button>{' '}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}