import React from 'react';
import styled from 'styled-components';
import Like from '../../images/LogWhite.png';

import { BsInstagram } from "react-icons/bs";

const Header = () => {
  return (
    <HeaderWrapper>
      <a target='blank' href={'https://www.instagram.com/quink___/'}>  <BsInstagram style={{
        marginTop: '20%', color: 'pink'
      }} size={32} /></a>
      <small style={{ fontFamily: "cursive", fontWeight: "bold" }}>Quink Instagram</small>
      <ImgCard alt={'description'} src={Like}></ImgCard>

    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
display:flex;
flex-direction:column;

justify-items:center;
align-items:center;
@media screen and (max-width: 500px) {
  margin-left:10%;

  :
}

`;
const TitleLink = styled.a`
  font-weight: normal;
  font-size: 30px;
  line-height: 38px;
  text-decoration: none;
  color: #000000;
`;
const ImgCard = styled.img`
width: 280px;
height:280px;
padding: 1px 1px;

`; 
