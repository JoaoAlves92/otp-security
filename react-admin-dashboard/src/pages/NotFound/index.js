import React from "react";
import Lottie from 'lottie-react-web';
import NotFoundAnimation from '../../assets/404-not-found.json';
import { Container } from "reactstrap";

const NotFound = () => {

    return(
        <Container className="mt-5" style={{maxWidth: '900px'}}>
            <h1 className="text-center">404 - Não encontramos seu conteúdo ;c</h1>
            <div style={{maxWidth: '700px', margin: '0 auto'}}>
                <Lottie
                    options={{
                    animationData: NotFoundAnimation
                    }}
                />
            </div>
        </Container>
    )
}

export default NotFound