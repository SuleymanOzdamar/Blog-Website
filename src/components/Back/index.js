import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaWindowClose } from "react-icons/fa";

import './style.css'

const Back = () => {
  return (
    <div className='back'>
      <Container>
        <Row>
            <Col>
                <a href="https://www.riseofsoftware.com"><FaWindowClose/><strong> KAPAT</strong></a>
            </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Back
