import { React, useState } from "react";
import { Form, Button } from 'react-bootstrap'
import './Register.css'
import Axios from 'axios'

const RegisterPage = () => {
  const [valuesR, setValuesR] = useState();
  const ChangingValueR = (value) => {
    setValuesR((prevValueR) => ({
      ...prevValueR,
      [value.target.name]: value.target.value,
    }));
  };

const TokenR = '84c18a85c47fea702efff55f579b9f0b537b82e29649d638fbbc9b6841556723'

  const CreatingUser = () =>{

   Axios.post('https://gorest.co.in/public/v2/users', {
    name: valuesR.NameR,
    gender: valuesR.GenR,
    email: valuesR.EmailR,
    status: 'active',
},{
  headers: {
    Authorization: 'Bearer ' + TokenR
}}
).then((response) => {
  if(response.data){
    window.location.href = 'http://localhost:3000/Home'
  }
}).catch(function(error){
  window.alert('Look like your informations are already in our database, please check the informations for a new acount!')
  });
}
  return (
    <div className="RegisterPage  d-flex justify-content-center">

      <Form className="FormReact">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="EmailR" onChange={ChangingValueR} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            <b>We'll never share your email with anyone else.</b>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Full Name</Form.Label>
          <Form.Control name="NameR" onChange={ChangingValueR} type="text" placeholder="Full Name" />
        </Form.Group>

        <Form.Group id="OPTIONCLASSFORM" className="mb-3" controlId="formBasicClass">
          <select id="inputOptions" name="GenR" onChange={ChangingValueR} className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option value>Select Class</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </Form.Group>

        <Button onClick={() => CreatingUser()} variant="primary" >
          Submit
        </Button>
      </Form>


    </div>)
}

export default RegisterPage 