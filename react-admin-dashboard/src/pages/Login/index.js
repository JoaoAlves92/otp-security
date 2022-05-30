import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Container,
    Form,
    FormGroup,
    Input,
    Button,
    Label
} from 'reactstrap';

import baseUrl from "../../utils/baseurl";
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitLogin = () => {
        const data = {
            email,
            password
        }
        axios.post(baseUrl + '/users/login', data)
        .then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.token);
            navigate('/dashboard')
        })
        .catch((err) => {
            window.alert(err.response.data.message)
        })
    }

    return(
        <Container className="mt-5" style={{maxWidth:'900px'}}>
            <Link to="/">{'<'} Go back</Link>
            <h1>Login Component</h1>
            <h4 style={{color: "rgb(151 149 149)"}}>Login to access our new platform</h4>
            <Form>
                <FormGroup>
                    <Label for="email">
                        Email
                    </Label>
                    <Input id="email" type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="passowrd">
                        Password
                    </Label>
                    <Input id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                <Button color="primary" onClick={() => handleSubmitLogin()}>Login</Button>
            </Form>
        </Container>
    )
}

export default Login