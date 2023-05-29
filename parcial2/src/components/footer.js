
import React, { useState } from "react";
import { MDBFooter } from 'mdb-react-ui-kit';
import { FormattedMessage } from 'react-intl';

function Footer() {
    return (

        <div><MDBFooter bgColor='light' className='text-center text-lg-left'>
            <div className='text-center p-3' >
                <FormattedMessage id="contact" />: +57 3102105253 - info@elaromamagico.com - @elaromamagico
            </div>
        </MDBFooter>
        </div>
    )
}

export default Footer;