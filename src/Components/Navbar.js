import React from 'react';
import { Container, Row, Col, Form, Button, FormControl } from 'react-bootstrap';
import './Navbar.css';



class appbar extends React.Component {

    render() {

        return (
            <React.Fragment>
                <div>
                    <div className='header'>
                        <div className='facebook'>
                            Facebook
                    </div>
                        <div>
                            <form className='T1'>
                                <table>
                                    <tr>
                                        <td>Email or Phone Number</td>
                                        <td>Password</td>
                                    </tr>
                                    <tr>
                                        <td><input type="text"></input></td>
                                        <td><input type="password"></input></td>
                                        <td><button style={{ backgroundColor: '#4267b2', height: '35px', color: 'white', border: '1px solid darkblue', borderRadius: '2px', marginLeft: '10px' }} class="btn btn-primary" type="submit">Log In</button></td>
                                        {/* <td><input type="submit" value="log"></input></td> */}
                                        {/* <td><input class="btn btn-primary" type="button" value="Log In"></td> */}

                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></input>Keep me log in </td>
                                        <td className='c1'>Forgotten account?</td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                   
                </div >
            </React.Fragment>
        );
    }
}
export default appbar

