import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const Home = () => {
    return(
        <Container className="mt-5" style={{ maxWidth: '900px' }}>
            <h1>Welcome to <span>OTP Reminder</span></h1>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </Container>
    )
}

export default Home