import React from 'react';
import styled from 'styled-components/macro';

const SearchForm = ({
  valueInput,
  handleInput,
  handleSubmitInput,
  isErrMsg,
  changeData,
  ctg
}) => {
  const handleChange = (e) => {
    handleInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // handleSubmitInput();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="search images"
          value={valueInput}
          onChange={handleChange}
        ></Input>
        <Button type="submit" aria-label="search photos">
          search
        </Button>
      </Form>
      {ctg === 's1' || ctg ==='s2' ? <><Button2 onClick={()=>{
        if(ctg === 's1')changeData('')
        else changeData('s1')}} type="button" aria-label="search 0">
          #Tatto Studio
        </Button2>
        <Button2 onClick={()=>{
          if(ctg==='s2') changeData('')
          else changeData('s2')}}type="button" aria-label="search 1">
          #Opium Studio
        </Button2></> : <><Button onClick={()=>{
          if(ctg === 's1')changeData('')
          else changeData('s1')}} type="button" aria-label="search 0">
          #Tatto Studio
        </Button>
        <Button onClick={()=>{
          if(ctg==='s2') changeData('')
          else changeData('s2')}}type="button" aria-label="search 1">
          #Opium Studio
        </Button></>}
      {isErrMsg && <ErrorMessage>you must enter a search query</ErrorMessage>}
    </Wrapper>
  );
};

export default SearchForm;

const Wrapper = styled.div`
display:flex;
justify-items:center;
justify-content:center;
margin-bottom:35px;
@media screen and (max-width: 500px) {

}`

const Form = styled.form`
  position: relative;
  border: 1px solid #000000;
  border-radius: 10px;
  max-width: 745px;
  display: flex;
  box-sizing: border-box;
  padding: 4px;
  // margin-top:-40px
`;

const Input = styled.input`
  border: none;
  box-sizing: border-box;
  border-radius: 10px;
  height: 52px;
  padding: 10px;
  width: 75%;
  font-size: 34px;
  line-height: 43px;
  color: #000000;

  ::placeholder {
    font-size: 34px;
    text-align: center;
    color: #000000;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;

    ::placeholder {
      font-size: 20px;
    }
  }
`;

const Button = styled.button`
  color: #00000;
  background: #ff10fff;
  border-radius: 10px;
  font-size: 30px;
  text-align: center;
  border: none;
  padding: 4px 8px;
  box-sizing: border-box;
  cursor: pointer;
  margin-left: auto;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
const Button2 = styled.button`
  color: #00000;
  background: #ffe08fff;
  border-radius: 10px;
  font-size: 30px;
  text-align: center;
  border: none;
  padding: 4px 8px;
  box-sizing: border-box;
  cursor: pointer;
  margin-left: auto;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const ErrorMessage = styled.span`
  color: red;
`;
