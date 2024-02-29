import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'




function LandingPage() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    //navigate to home page
    navigate('/home')
  }
  return (
    <>
      <div className='container '>
        <div className="header row align-items-center m-5">
          <div className='col-lg-5'>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Media Player Classic is a free multimedia software that lets you play content on Microsoft
              Windows PC devices. Developed and released by Gabest, Media Player...</p>
            <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>

          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-6'>
            <img src="https://i.gifer.com/U7f2.gif
          " alt="" />
          </div>

        </div>
        <div className="featues">
          <h3 className='text-center'>Features</h3>
          <div className='row'>
            <div className="col-lg-4">
              <Card >
                <Card.Img style={{ height: '18rem', width: '26rem' }} variant="top" src="https://cdn.svgator.com/images/2022/11/Chart-run-cycle.gif" />
                <Card.Body>
                  <Card.Title>Managing videos</Card.Title>
                  <Card.Text>
                    User can upload, view and remove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card >
                <Card.Img style={{ height: '18rem', width: '26rem' }} variant="top" src="https://i.pinimg.com/originals/5e/64/c4/5e64c4917fd67c71a4a93820cddee7a8.gif" />
                <Card.Body>
                  <Card.Title>Categorize vidoes</Card.Title>
                  <Card.Text>
                    User can catergories the videos according to their prefernces using drag and drop features
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card >
                <Card.Img style={{ height: '18rem', width: '26rem' }} variant="top" src="https://i.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif" />
                <Card.Body>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text>
                    User are able to see the history of watched videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

          </div>
        </div>
        <div className="video row border p-5 mt-5 rounded mb-5 align-items-center">
          <div className="col-lg-5">
            <h3 className='text-waring'>Simple,Fast and Powerful</h3>
            <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias nihil vero facilis corrupti distinctio temporibus laboriosam dolorum nostrum quas. Voluptatibus delectus repellendus
              illo necessitatibus repellat ab quam dolor aspernatur consequuntur.</p>

            <p style={{ textAlign: 'justify' }}><span className='fs-4'>Categorize videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias nihil vero facilis corrupti distinctio temporibus laboriosam dolorum nostrum quas. Voluptatibus delectus repellendus
              illo necessitatibus repellat ab quam dolor aspernatur consequuntur.</p>

            <p style={{ textAlign: 'justify' }}><span className='fs-4'>Watch History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias nihil vero facilis corrupti distinctio temporibus laboriosam dolorum nostrum quas. Voluptatibus delectus repellendus
              illo necessitatibus repellat ab quam dolor aspernatur consequuntur.</p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <iframe width="688" height="387" src="https://www.youtube.com/embed/Xt7ZGDu1y5M?si=faeTSLnh5drdVmvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </div>

      </div>

    </>
  )
}

export default LandingPage