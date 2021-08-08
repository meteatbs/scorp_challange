import React, { useState } from 'react'
import {userlogin,userlogout,setusername,loginmodal,LoginState,loginStatus} from './store/LoginSlicer'
import { useSelector, useDispatch } from 'react-redux';
import {
    Button,
    Modal,
    Alert,
    Form,
    Container
  } from "react-bootstrap";
  import { withNamespaces  } from 'react-i18next';
import "../../App.css"

function Login({t}) {

    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const loginDetail = useSelector(state=>state.login);

    const handleValidation = () => {
        // let formValid = true;
        //Password
        let errorMessage = ""
        // console.log(fields)
         //Name
        if(!fields.name){
            setErrorMessage("İsim boş bırakılamaz.");
            errorMessage="İsim boş bırakılamaz."
            
            // formValid = false;
        }


       else if(!fields.password){
            setErrorMessage("Şifre boş olamaz");
            errorMessage="Şifre boş olamaz."
        }

        //Email
       else if(!fields.email){
            setErrorMessage("Email boş olamaz");
            errorMessage="Email boş olamaz."
            // formValid = false;
        }
        else if(typeof fields.email !== "undefined"){
          let atEmail = fields.email?.lastIndexOf('@');
          let atPoint = fields.email?.lastIndexOf('.');
          if (!(atEmail < atPoint && atEmail > 0 && fields.email?.indexOf('@@') === -1 && atPoint > 2 && (fields.email?.length - atPoint) > 2)) {
            setErrorMessage("Email geçerli değil.");
            errorMessage="Email geçerli değil."

          }
        }
        if (errorMessage === "") {
            dispatch(userlogin({...fields,name:fields.name,email:fields.email}))
            dispatch(loginmodal())
        }
            
    }
    

    const [fields, setFields] = useState({
		name: '',
		email: '',
		password: '',
		// errorMessage: null,
	})
    return (
        <Modal 
        show={loginDetail.loginModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header className="d-flex align-items-center justify-content-center">
            <Modal.Title id="contained-modal-title-vcenter">
            {t('Log In')}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupName1">
                    <Form.Label>{t('Name')}</Form.Label>
                    <Form.Control type="text" placeholder="Name" 
                    onChange={(e) => setFields({ ...fields,name:e.target.value})}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail1">
                    <Form.Label>{t('Email')}</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    onChange={(e) => setFields({ ...fields,email:e.target.value})}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>{t('Password')}</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    onChange={(e) => setFields({ ...fields,password:e.target.value})}
                    />
                </Form.Group>
                {
                        errorMessage && <Alert variant={'danger'}>
                            {errorMessage}
                        </Alert>
                    }
            </Form>
            </Container>
        </Modal.Body>
        <Modal.Footer>     
            <Button type="submit" className="btn btn-danger btn-block" onClick={() => dispatch(loginmodal())}>{t('Cancel')}</Button>
            <Button type="submit" className="btn btn-primary btn-block" onClick={() => handleValidation()}>login</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default withNamespaces()(Login)
