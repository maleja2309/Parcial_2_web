import React from 'react';
import fondo from '../images/fondo.jpg';


const Auth = () => {
    return (
        <div className='container py-5 px-2 bg-[#FFAFFF]'>
            <div className="col p-0">
                <h1>El aroma mágico</h1>

                <img
                    src={fondo}
                    alt="Descubre el ecosistema"
                    width="80%"
                />
            </div>
        </div>

    )
}
export default Auth;