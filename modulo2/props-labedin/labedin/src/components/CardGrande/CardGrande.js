import React from 'react';
import styled from 'styled-components';

    const BigCard = styled.div`
      display: flex;
      align-items: center;
      border: 1px solid black;
      padding: 20px 10px;
      margin-bottom: 10px;
      height: 200px;
      justify-items: center;
    `;
  const BigCardImg = styled.img`
      width: 70px;
      margin-right: 10px;
      border-radius: 50%;
    `;
  const BigCardH4 = styled.h4`
      margin-bottom: 15px;
      display:flex;
    `;
    const BigCardP = styled.p`
    display: flex;
    `;

function CardGrande(props) {
    return (
        <BigCard>
            <BigCardImg src={ props.imagem } />
            <div>
                <BigCardH4>{ props.nome }</BigCardH4>
                <BigCardP>{ props.descricao }</BigCardP>
            </div>
        </BigCard>
    )
}

export default CardGrande;