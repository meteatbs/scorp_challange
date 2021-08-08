import React, { useState } from 'react'
import {userlogin,userlogout,setusername,loginmodal,LoginState,loginStatus} from '../Login/store/LoginSlicer'
import { selectAppState, setlang } from '../PickLanguage/store/LanguageSlicer';
import { Link,useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {ScorpIcon} from '../utils/icons/Icons'
import ukflag from '../utils/files/ukflag.png'
import trflag from '../utils/files/trflag.jpg'
import { useSelector, useDispatch } from 'react-redux';
import i18n from '../../i18n'
import '../../App.css'
import { Dropdown, DropdownButton, Image } from 'react-bootstrap';
import Language from '../PickLanguage/Language';
import { withNamespaces  } from 'react-i18next';



function Header({t}) {
    
    const dispatch = useDispatch();
	const loginDetail = useSelector(state=>state.login);
    const history=useHistory()
    // console.log(loginStatus)
    const [modal, setModal] = useState(true);
    const [visibleMenu, setVisibleMenu] = useState(true);

    const changeLanguage = (lng) => {
        // console.log(lng)
        dispatch(setlang(lng));
        i18n.changeLanguage(lng)
      }
      const logOut = () => {
       dispatch(userlogout())
       history.push("/")
    }
    
    if (loginDetail) {
    return (
    <>
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5 my-1">
                <a className="iconPointer" onClick={()=>history.push("/")}>
                    <ScorpIcon  />
                </a>
            
            <Link className="navbar-brand" to="/">Scorp App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-1 my-1">
                            <button className="btn btn-outline-secondary nav-link" onClick={() => history.push("/contactpage")}>{t('Contact Us')}</button>
                            </li>
                    <DropdownButton id="dropdown-item-button" title={t('Language')} variant="secondary" className=" text-secondary mx-1 my-1">
                        <Dropdown.Item as="button" onClick={() => changeLanguage('en')}>
                        <Image src={ukflag}  height={30} width={30} className="mx-1  text-secondary"/>
                            EN</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => changeLanguage('tr')}>
                            <Image src={trflag}  height={30} width={30} className="mx-1  text-secondary"/>
                            TR</Dropdown.Item>
                    </DropdownButton>
                    {/* <Language/> */}
                    {
                        
                        loginDetail&&loginDetail.status==1 ?
                        <>
                        <Dropdown className="d-inline mx-2 my-1 ">
                        <Dropdown.Toggle id="dropdown-autoclose-true ">
                        {loginDetail&&loginDetail.email}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="mx-1">
                            <Dropdown.Item href="#" onClick={() => logOut()}>
                            {t('Log Out')}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                        </> : <li className="nav-item mx-1 my-1">
                            <button className="btn btn-outline-secondary nav-link" onClick={() => dispatch(loginmodal())}>{t('Login')}</button>
                    </li>
                    }
                </ul>
            </div>
        </div>
        </nav>
        </header>
    </>)
    }
}

export default withNamespaces()(Header);
