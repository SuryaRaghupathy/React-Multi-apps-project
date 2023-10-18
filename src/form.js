  import './App.css';
  import React from 'react';
  import 'bootstrap/dist/css/bootstrap.css';
  import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faEye ,faEyeSlash} from '@fortawesome/free-regular-svg-icons';
  import InputGroup from 'react-bootstrap/InputGroup';
  import { useState } from 'react';

  function FormSection() {

      let[currentIcon,setcurrentIcon]= useState(faEye);
      let[password,setpassword] = useState('');
      let[email,setemail] = useState('');
      let iconChange = () => {
          let newIcon = currentIcon == faEye ? faEyeSlash : faEye;
          setcurrentIcon(newIcon);
          
          let passwordInput = document.getElementById('exampleInputPassword1');

          newIcon == faEye? (passwordInput.type = 'text'):(passwordInput.type = 'password');
      }
      let inputEvaluate = ()=>{
        let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        let emailValid = emailRegex.test(email);
        let passwordValid = passwordRegex.test(password);

        (emailValid && passwordValid )? alert('login successful') : alert('invalid input');

        console.log(`Email id: ${email}, Password: ${password}`);

        setTimeout(() => {
          setemail('');
          setpassword('');
        }, 100);
      }
      




      
    return (
      <div className="centered-container" style={{ backgroundColor: 'gold' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className="row justify-content-center align-items-center">
            <div className="justify-content-center">
              <Form style={{ width:'300px',border: '2px solid #000', padding: '30px', borderRadius: '15px', backgroundColor: 'greenyellow', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} style={{ border: '2px solid #000', backgroundColor: 'antiquewhite' }} onChange={(e) =>{setemail(e.target.value)}}/>
                </div>
                <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                <InputGroup className="mb-3">
            
                  <Form.Control
                    type="password"
                    id="exampleInputPassword1"
                    style={{ border: '2px solid #000', backgroundColor: 'antiquewhite' }}
                    value={password} 
                    onChange={(e) =>{setpassword(e.target.value)}}
                  />
                  <InputGroup.Text  style={{ width:'50px',border: '2px solid #000', backgroundColor: 'antiquewhite' }} onClick={iconChange}>
                    <FontAwesomeIcon icon={currentIcon}  style={{ cursor: 'pointer'}}  />
                  </InputGroup.Text>
                </InputGroup>
                <Button className="w-100" style={{ backgroundColor: 'purple' }} onClick={inputEvaluate}>
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default FormSection;

