import React, {useState} from "react";
import baseUrl from "../../utils/baseurl";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    Container,
    Form,
    FormGroup,
    Input,
    Button,
    Label
} from 'reactstrap';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmitRegister = () => {
        const data = {
            name,
            email,
            password,
            confirmpassword: confirmPassword
        }
        axios.post(baseUrl + '/register', data)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    return(
        <Container className="mt-5" style={{maxWidth:'900px'}}>
            <Link to="/">{'<'} Go back</Link>
            <h1>Register</h1>
            <h4 style={{color: "rgb(151 149 149)"}}>Register to access our platform</h4>
            <Form>
                <FormGroup>
                    <Label for="Full Name">
                        Full Name
                    </Label>
                    <Input id="Full Name" type="text" placeholder="Name"
                    value={name} onChange={(e) => setName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">
                        Email
                    </Label>
                    <Input id="email" type="email" placeholder="E-mail"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="passowrd">
                        Password
                    </Label>
                    <Input id="password" type="password" placeholder="Password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="passowrd">
                        Confirm Password
                    </Label>
                    <Input id="password" type="password" placeholder="Confirm Password"
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </FormGroup>
                <Button color="primary" onClick={() => handleSubmitRegister()}>Register</Button>
            </Form>
        </Container>
    )
}

export default Register;