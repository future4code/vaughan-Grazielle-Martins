import React from 'react';
import styled from 'styled-components';

const CardPequenoStyled = styled.section`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 70px;
flex-direction: column;
`;

function CardPequeno(props) {
    return (
        <section>
            <div className='smallcard'>
                    <p>{props.email}</p>
                
            </div>
            <div className='smallcard'>
                 <p>{props.endereco}</p>
                
            </div>
        </section>

    )
    
}

export default CardPequeno;