import React from 'react'
import { Navbar, Container  } from 'react-bootstrap'


function Mheader() {
  return (
    <Navbar className="bg-body-tertiary ">
    <Container>
        <link to={'/'} style={{textDecoration:'none'}} />
      <Navbar.Brand className='fw-bolder d-flex align-items-center' style={{color:'black'}}>
      <i class="fa-solid fa-headphones fa-beat  me-3 ms-1"></i>
        Media Player
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Mheader