import React, { useEffect, useState,  } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import './Portfolio.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const items = [
  <img className="imagemport1" src="https://tinypic.host/images/2023/03/10/211961976-ede44309-3785-43f6-bbdf-5595b715324c.png"  role="presentation"  /> ,
  <img className="imagemport2" src="https://tinypic.host/images/2023/03/10/214131061-4d05de9f-ba11-4a70-b95c-92843ead3883.jpg"  role="presentation" />,
  <img className="imagemport3" src="https://tinypic.host/images/2023/03/10/WhatsApp-Image-2023-03-10-at-14.02.37.jpg"  role="presentation" />,
];


function Portfolio() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
      useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
    
        }
    }, [token])
  return (
    <>
     <AliceCarousel
     mouseTracking items={items}
      />
    </>
  );
}

export default Portfolio;
