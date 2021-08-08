import React from 'react'
import '../../App.css'
import back from '../utils/files/image-000.jpg'

import { withNamespaces } from 'react-i18next';

function Footer({t}) {
    return (
        <div >
        <footer className="footer  mt-auto py-3  wrapperFooter">
            <div className="container d-flex justify-content-center">
            
                <span className="text-muted text-center">Copyright ©  {t('Inc.')} {new Date().getFullYear()} - Scorp</span>
            </div>
        </footer>
        </div>
    )
}
export default  withNamespaces()(Footer);
