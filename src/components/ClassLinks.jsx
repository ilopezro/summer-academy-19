import React, {Component} from 'react'
import Navbar from './navbar'
import '../styles/classlinks.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ClassLinks extends Component{
    constructor(){
        super()
        this.state = {
            links: [
                {
                    id: 1,
                    name: "Student", 
                    description: "N/A",
                    link: "/"
                },
                {
                    id: 2,
                    name: "Student", 
                    description: "N/A",
                    link: "/"
                },
                {
                id: 3,
                name: "Student", 
                description: "N/A",
                link: "/"
                }
            ]
        }
    }

    getTableRows(){
        return this.state.links.map((item, i) => {
            return (
                <tr key={i}>
                    <td>{item.name} {item.id}</td>
                    <td>{item.description}</td>
                    <td>{item.link}</td>
                </tr>
            );
        })
    }

    render(){
        return(
            <div className="header">
                <Navbar />
                <Container fluid="true">
                    <Row>
                        <Col>
                            <p className="title">Class Links</p>
                            <p className="titleDes">Here, we will have all the links to your sites!!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <table>
                                <thead>
                                    <tr>
                                        <th> Student Name</th>
                                        <th> Site Description</th>
                                        <th> Link </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.getTableRows()}
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ClassLinks