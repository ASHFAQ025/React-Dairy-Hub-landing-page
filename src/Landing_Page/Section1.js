import React from 'react'
import { Card } from "react-bootstrap";

const Section1 = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
      <div className="text-center four_esy_stp">
        <h2 className='popular_product'>Dairy Farm Heading</h2>
        </div>
        <div className="col-lg-3 col-md-3 col-9">
          <Card className="shadow four_step_cards">
            <Card.Img variant="top" src="images/glass.png" className="four_esay_icon"/>
            <Card.Body className="mob_Bsic_data">
              <Card.Title> <h6 className="fw-bold title_tablet_steps">Dairy Farm Heading</h6> </Card.Title>
              <Card.Text className="steps_para">
                Some quick example text to build on the card title
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-md-3 col-9">
        <Card className="shadow four_step_cards">
        <Card.Img variant="top" src="images/Group 52.png" className="four_esay_icon"/>
        <Card.Body className="mob_Bsic_data">
          <Card.Title> <h6 className="fw-bold title_tablet_steps">Dairy Farm Heading</h6> </Card.Title>
          <Card.Text className="steps_para">
            Some quick example text to build on the card title 
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
        <div className="col-lg-3 col-md-3 col-9">
        <Card className="shadow four_step_cards">
        <Card.Img variant="top" src="images/Group 53.png" className="four_esay_icon"/>
        <Card.Body className="mob_Bsic_data">
          <Card.Title> <h6 className="fw-bold title_tablet_steps">Dairy Farm Heading</h6> </Card.Title>
          <Card.Text className="steps_para">
            Some quick example text to build on the card title 
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
        <div className="col-lg-3 col-md-3 col-9">
        <Card className="shadow four_step_cards" >
        <Card.Img variant="top" src="images/glass.png" className="four_esay_icon"/>
        <Card.Body className="mob_Bsic_data">
          <Card.Title> <h6 className="fw-bold title_tablet_steps">Dairy Farm Heading</h6> </Card.Title>
          <Card.Text className="steps_para">
            Some quick example text to build on the card title 
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
      </div>
      <div className="row justify-content-center four_esy_stp">
      <img src="image/poster1.png" alt="" className="mob_sec1_img"/>
      </div>
    </div>
  )
}

export default Section1
