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
                        <br></br><br></br>
                            <p className="quote2"><i>
                                “You know, sometimes kids get bad grades in school because 
                                the class moves too slow for them. Einstein got D's in school. 
                                Well guess what, I get F's!!!”</i>
                                <br></br>
                                - Bill Waterson
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