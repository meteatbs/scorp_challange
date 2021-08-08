import React from 'react'
import '../../App.css'
import back from '../utils/files/image-000.jpg'
import { withNamespaces  } from 'react-i18next';

function Home({t}) {
    return (
        <div className="bgcontainer">
            <section>
            <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                    <div className="textContainer">
                    <p>{t('Introduce')}</p>
                    <p>{t('IntMain')}</p>
                    </div>
                </div>
            
            
            </div>
            </section>
            

        {/* <div className="container"> */}
        {/* <div className="row align-items-center"> */}
            {/* <div class="col-md-10" > */}
                {/* <div className="p-1"> */}
                {/* <img  className="img-responsive" src={back} alt="..." /> */}
                {/* </div> */}
            {/* </div> */}
            
        {/* </div> */}
    {/* </div> */}
    </div>
    )
}

export default withNamespaces()(Home)
