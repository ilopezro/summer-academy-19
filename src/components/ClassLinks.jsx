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
                    name: "Hector and Alberto", 
                    description: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    link: "/classLinks/hectorAndAlberto"
                },
                {
                    id: 2,
                    name: "Juan", 
                    description: "N/A",
                    link: "/classLinks/juan"
                },
                {
                    id: 3,
                    name: "Dyllan, Maleny, and Fabiola", 
                    description: "N/A",
                    link: "/classLinks/DMF"
                }, 
                {
                    id: 4, 
                    name: "Zach and William", 
                    description: "N/A", 
                    link: "/classLinks/ZW"
                }, 
                {
                    id: 5, 
                    name: "Franklin, Karina, and Tiffany", 
                    description: "N/A",
                    link:"/classLinks/FKT"
                }
            ]
        }
    }

    getTableRows(){
        return this.state.links.map((item, i) => {
            return (
                <tr key={i}>
                    <td>{item.name}</td>
                    <td height="100">{item.description}</td>
                    <td><a href={item.link} rel="noopener noreferrer"> Webpage</a></td>
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
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th width="25%"> Student Name</th>
                                        <th width="50%"> Project Description</th>
                                        <th width="25%"> Link </th>
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