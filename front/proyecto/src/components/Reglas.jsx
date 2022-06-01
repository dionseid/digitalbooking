import React from 'react';

const Reglas = ({titulo, norma}) => {
    return <>
                <h5>{titulo}</h5>
                    <ul>
                        <li>{norma[0]}</li>
                        <li>{norma[1]}</li>
                        <li>{norma[2]}</li>
                    </ul>
        </>;
}

export default Reglas;