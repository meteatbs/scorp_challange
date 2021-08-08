import React, { useState, useEffect }  from 'react'
import '../utils/App.css'
import { useSelector, useDispatch } from 'react-redux';
import { Container,Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
import Select from 'react-select'
import { CountryList,CountryListTR } from '../utils/countrylist/CountryList';
import { withNamespaces } from 'react-i18next';
import {userlogin,userlogout,setusername,LoginState,loginStatus} from '../Login/store/LoginSlicer'

function Contact({t}) {

    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const currentLang=useSelector(state=>state.language);
    const userDetail = useSelector(state=>state.login);

    const [fields, setFields] = useState({
		name: '',
		email: ''
	})

    const handleSubmit = (event) => {
        const formDetail = event.currentTarget;
        // console.log(form)
        event.preventDefault();
        if (formDetail.checkValidity() === false) {
            event.preventDefault();
          event.stopPropagation();
          setValidated(true);
        }
        else{
            console.log(fields)
        }
        
      };

    useEffect(() => {
			setFields({
				...fields,
				name: userDetail.username,
				email: userDetail.email,
                phone:'',
                country:'',
                textarea:''
			})
	}, [userDetail,currentLang])

    return (
        <div className="contactBackground">
        <Container className="container  w-75 my-4 d-flex justify-content-center align-items-center wrapperVanilla">
            
            <Col  sm={8} xs={8}>
                <div className="titleContact">
                <p>{t('Contact Us Form')}</p>
                </div>
            
                <Col>
                    <Form className="w-100" validated={validated} noValidate onSubmit={handleSubmit}  >
                    <Form.Group className="mb-1" controlId="formGroupName">
                        <Form.Label>{t('Name')}</Form.Label>
                        <Form.Control
                            required
                            type="text" 
                            placeholder={t('Name')} 
                            value={fields.name || ""} 
                            
                                />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formGroupMail">
                        <Form.Label>{t('Email')}</Form.Label>
                        <Form.Control 
                            required
                            type="email" 
                            value={fields.email || ""} 
                            placeholder={t('Enter email')} 
                            />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formGroupMobile">
                        <Form.Label>{t('Phone Number')}</Form.Label>
                        <Form.Control 
                            required
                            type="tel"
                            minLength="9" 
                            maxLength="11"
                            placeholder="0538-826-12-12"
                            size="10"
                            
                            onChange={
                                e => {
                                e.preventDefault();
                                setFields({...fields,phone:e.target.value});
                            }}
                            />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formGroupCountry">
                        <Form.Label>{t('Country')}</Form.Label>
                        <Select 
                            options={currentLang.lang=="en"?CountryList:CountryListTR} 
                            onChange = { e => {
                                setFields({...fields,country:e.value});
                            }
                        }
                           />
                    </Form.Group>
                    <Form.Label>{t('Text')}</Form.Label>
                    <Form.Group className="mb-1" controlId="formGroupTextArea">
                        <Form.Control
                        type="text"
                        required
                        placeholder="Message"
                        formNoValidate as="textarea" rows={1}
                        onChange={e=>{
                            e.preventDefault();
                            setFields({...fields,textarea:e.target.value})
                        }}
                        />
                    </Form.Group>
                    <Col xs="auto" className="d-flex my-1 justify-content-end">                    
                        <Button type="submit" className="btn btn-success  btn-block my-1 mb-1">{t('Send')}</Button>
                    </Col>
                </Form>
                </Col>
            </Col> 
        </Container>
        </div>
    )
}

export default withNamespaces()(Contact)
