import React from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import First  from "../Images/First.jpeg";
import Second from "../Images/Second.jpeg";
import Third from "../Images/Third.jpeg";
import '../Contexts/CSS/Cards.css'


const DataCards = () => {
    return (
        <>
        {/* <button className="btn btn-danger">Danger Button</button> */}
        <h1 className='top-heading text-center text-success '>Choose Images</h1>
         <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="Images" variant="top" src={First} />
                        <Card.Body>
                            <Card.Title>Buy this Beautiful Image and use it whereever you want.</Card.Title>
                                <Card.Text className="cardtext">
                                    Price - Rs.59
                                </Card.Text >
                                <Link to='./booking'>
                                    <Button  variant="primary">Buy Now</Button>
                                </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className="Images" variant="top" src={Second} />
                        <Card.Body>
                            <Card.Title>Buy this Beautiful Image and use it whereever you want.</Card.Title>
                                <Card.Text className="cardtext">
                                    Price - Rs. 45
                                </Card.Text >
                                <Link to='./booking'>
                                    <Button  variant="primary">Buy Now</Button>
                                </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
             <Card.Img className="Images" variant="top" src={Third} />
                        <Card.Body>
                            <Card.Title>Buy this Beautiful Image and use it whereever you want.</Card.Title>
                                <Card.Text className="cardtext">
                                    Price - Rs. 50
                                </Card.Text >
                                <Link to='./booking'>
                                    <Button  variant="primary">Buy Now</Button>
                                </Link>
                        </Card.Body>
                    </Card>
                </div>
                {/* <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
             <Card.Img className="Images" variant="top" src={BahadurImage} />
                        <Card.Body>
                            <Card.Title>Bahadur Singh</Card.Title>
                                <Card.Text cl className="cardtext"assName="text-md">
                                    Let's start a Happy Journey together.
                                </Card.Text >
                                <Link to='./booking'>
                                    <Button  variant="primary">Book Cab</Button>
                                </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
             <Card.Img className="Images" variant="top" src={BahadurImage} />
                        <Card.Body>
                            <Card.Title>Bahadur Singh</Card.Title>
                                <Card.Text className="cardtext">
                                    Let's start a Happy Journey together.
                                </Card.Text>
                                <Link to='./booking'>
                                    <Button  variant="primary">Book Cab</Button>
                                </Link>
                        </Card.Body>
                    </Card>
                </div>   
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="Images" variant="top" src={BahadurImage} />
                        <Card.Body>
                            <Card.Title>Bahadur Singh</Card.Title>
                                <Card.Text className="cardtext">
                                    Let's start a Happy Journey together.
                                </Card.Text>
                                <Link to='./booking'>
                                    <Button  variant="primary">Book Cab</Button>
                                </Link>
                        </Card.Body>
                    </Card>
                </div>  */}
            </div>
        </div> 
        
        </>
    );
}

export default DataCards;