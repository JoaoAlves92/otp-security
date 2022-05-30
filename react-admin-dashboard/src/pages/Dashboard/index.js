import React, {useState} from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import baseUrl from '../../utils/baseurl';
import axios from 'axios';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [uploadedFile, setUploadedFile] = useState()

    const handleUpload = (event) => {
        setUploadedFile(event.target.files[0])
    }

    const handleSubmitCertificate = () => {
        const formData = new FormData();
		formData.append('file', uploadedFile);
        formData.append('name', name);

        let token = localStorage.getItem("token")

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };        

        axios.post(baseUrl + '/certificates/registerCertificado',
        formData,
        config
        )
        .then((res) => {
            window.alert('Success!')
        })
        .catch((err) => {
            console.error(err)
        })
    }
    return(
        <Container className="mt-5" style={{maxWidth:'900px'}}>
            <h1>Dashboard</h1>
            <h4 style={{color: "rgb(151 149 149)"}}>Upload a new OTP certificate!</h4>
            <Form>
                <FormGroup>
                    <Label for="name">
                        Certificate's Name
                    </Label>
                    <Input id="name" type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="certificate">
                        Certificate
                    </Label>
                    <Input id="certificate" type="file" placeholder="name"
                    onChange={(event) => handleUpload(event)}
                    />
                </FormGroup>
                <Button color="primary" onClick={() => handleSubmitCertificate()}>Upload</Button>
            </Form>
        </Container>
    )
}

export default Dashboard;