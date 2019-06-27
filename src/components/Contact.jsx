import React, {Component} from 'react'
import Navbar from './navbar'
import '../styles/contact.css'
import cartoon from '../assets/calvinandhobbes.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Contact extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Container fluid="true">
                    <Row>
                        <Col>
                            <h4 className="ctTitle">Contact</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="8">
                            <img className="cartoon" src={cartoon} alt="cartoon"></img>
                        </Col>
                        <Col>
                            <p className="quote2">
                                “You know, sometimes kids get bad grades in school because<br></br> 
                                the class moves too slow for them. Einstein got D's in school. 
                                Well guess what, I get F's!!!” "
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {/* this is the place where communication methods will go */}
                        Communicate
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact