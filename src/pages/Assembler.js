import React from 'react'
import Projectbody from '../components/Projectbody'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import 'bootstrap/dist/css/bootstrap.min.css';
import Createbutton from '../components/Createbutton';

function Assembler() {
 
  return (
    <>
       <Header/>
       <Createbutton value='+ Create project' />
       <Container>
      
      <Row>
     
      <Col>
      <Projectbody/>
      </Col>
      <Col>
      <Projectbody/>
      </Col>
      <Col>
      <Projectbody/>
      </Col>
      <Col>
      <Projectbody/>
      </Col>
      <Col>
      <Projectbody/>
      </Col>
      <Col>
      <Projectbody/>
      </Col>
      <Col>
      <Projectbody/>
      </Col>
      <Col>
      <Projectbody/>
      </Col>
      <Col>
      <Projectbody/>
      </Col>
      <Col>
      <Projectbody/>
      </Col>
      <Col>
      <Projectbody/>
      </Col>
      <Col>
      <Projectbody/>
      </Col>
      </Row>
    </Container> 
    <di>  

       

    </di>
   
    </>
   
  
  )
}

export default Assembler