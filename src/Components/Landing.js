import React from 'react';
import { Container, Row, Col, Form, Button, FormControl } from 'react-bootstrap';
import pic1 from './Image/fb.png';
import './Landing.css';

class Land extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <Container>
                        <Row>
                            <Col sm={4}>
                                <div className='main'>
                                    <p>Facebook helps you connect and share with the<br />people in your life.</p>
                                </div>
                                <div>
                                    <img src={pic1} alt='image'></img>
                                </div>
                            </Col>
                            <Col sm={3}>
                            </Col>

                            <Col sm={5}>
                                <div style={{
                                    marginTop: '20px',
                                    marginRight: '-50px'
                                }}>
                                    <div className='form1'>
                                        <span><h1>Create an account</h1></span>
                                        <Form>
                                            <div>
                                                <Container>
                                                    <Row>
                                                    <h5>It's quick and easy.</h5>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                        
                                                            <Form.Group controlId="formBasicEmail">
                                                                {/* <Form.Label><h5>It's quick and easy.</h5></Form.Label> */}
                                                                <Form.Control style={{marginLeft:'-15px',width:'200px'}} size="lg" type="text" name="name" placeholder="First name" />
                                                            </Form.Group>
                                                        </Col>

                                                        <Col>
                                                            <Form.Group controlId="formBasicEmail">
                                                                <Form.Control style={{marginRight:'-15px',width:'200px'}} size="lg" type="text" name="name" placeholder="Surname" />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Container>


                                            </div>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control type="text" name="name" size="lg" placeholder="Mobile number or email address" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control type="password" name="name"  size="lg" placeholder="Password" />
                                            </Form.Group>

                                            {/* <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Birthday</Form.Label>
                                    </Form.Group> */}

                                            <h5 style={{ color: 'grey', fontSize: '25px', paddingRight: '10px' }}>Birthday</h5>
                                            <select>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                <option>13</option>
                                                <option>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option>19</option>
                                                <option>20</option>
                                                <option>21</option>
                                                <option>22</option>
                                                <option>23</option>
                                                <option>24</option>
                                                <option>25</option>
                                                <option>26</option>
                                                <option>27</option>
                                                <option>28</option>
                                                <option>29</option>
                                                <option>30</option>
                                                <option>31</option>

                                            </select>

                                            <select>
                                                <option>January</option>
                                                <option>Febuary</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                            </select>

                                            <select>
                                                <option>1995</option>
                                                <option>1996</option>
                                                <option>1997</option>
                                                <option>1998</option>
                                                <option>1999</option>
                                                <option>2000</option>
                                                <option>2001</option>
                                                <option>2002</option>
                                                <option>2003</option>
                                                <option>2004</option>
                                                <option>2005</option>
                                            </select>
                                            <br />
                                            <br />
                                            <div className='gender'>

                                                <h5 style={{ color: 'grey', fontSize: '25px', paddingRight: '10px' }}>Gender</h5>
                                                <input type='radio' name='gender'></input><span style={{ paddingRight: '10px' }}>Male</span>
                                                <input type='radio' name='gender'></input> <span style={{ paddingRight: '10px' }}>Female</span>

                                            </div>


                                            <br />

                                            {/* <Button variant="success" size="lg">Sign Up</Button> */}
                                            <Button style={{ backgroundColor: 'rgb(105,167,78)', border: '1px solid rgb(59,110,34)',color:'white',padding:'20px',textAlign:'center',fontWeight:'700',marginBottom:'10px',marginTop:'10px',textShadow:'rgb(0,0,0,0.5) 0px 1px 2px',borderRadius:'5px',height:'39px' }} as="input" type="button" value="Sign Up" />
                                            {/* <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="radio" name="male" value='Male' />
                                        <Form.Control type="radio" name="female" value='Female' />                                    
                                    </Form.Group> */}
                                            {/* <input type='radio' >
                                    <input type='radio'> */}




                                            {/* <span>
                                        Don't have an account <span style={{
                                            color: 'blue',
                                            cursor: 'pointer'
                                        }} onClick={reg}>
                                            Register
                                        </span> */}

                                            <br /> <br />
                                            {/* <Button variant="success" onClick={this.login}>
                                        Submit
                                    </Button> */}
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container >
            </React.Fragment>
        );
    }
}

export default Land