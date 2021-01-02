import React, { useState } from 'react'
import { connect } from 'react-redux'
import store from '../redux-store/store'
import { Form, Button, Container, Row, } from 'react-bootstrap'

const Login = (props) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState({})

    const gotoDashboard = (e) => {
        e.preventDefault();

        if (props.useremail !== email && props.password !== password) {
            setError({
                email: true, e_message: 'Email doesn\'t match ',
                pwd: true, p_message: 'Password doesn\'t match '
            })
            return false
        }

        if (props.useremail !== email) {
            setError({ email: true, e_message: 'Email doesn\'t match ' })
            return false
        }

        if (props.password !== password) {
            setError({ pwd: true, p_message: 'Password doesn\'t match ' })
            return false
        }

        setError({ pwd: false, email: false })
        props.history.push('/home')
    }

    const getMail = e => {
        setEmail(e.target.value);
    }

    const getPwd = e => {
        setPassword(e.target.value)
    }

    return (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: "100vh" }}>
            <Container >
                <Row className="justify-content-md-center" >
                    <Form style={{ width: '50vh' }} onSubmit={gotoDashboard}  >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={getMail}
                                style={{ borderColor: error.email ? 'red' : '' }} required />

                            {error.email && <h6 style={{ color: 'red', marginTop: 10 }}>*{error.e_message}</h6>}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={getPwd}
                                style={{ borderColor: error.pwd ? 'red' : '' }} required />
                            {error.pwd && <h6 style={{ color: 'red', marginTop: 10 }}>*{error.p_message}</h6>}
                        </Form.Group>

                        <Button variant="primary" type="submit" size="lg" block>
                            Submit
                        </Button>

                    </Form>
                </Row>
            </Container>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps, { store })(Login);

// export default connect(state => ({ store }))(Login)
