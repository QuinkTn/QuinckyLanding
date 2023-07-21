import React, { useState, useEffect } from 'react';
import likedData from '../../data/liked.json'
import s1Data from '../../data/s1.json'
import s2Data from '../../data/s2.json'
import styled from 'styled-components/macro';
import GlobalStyle from '../../styles/globalStyles';
import Header from '../Haeder/Header';
import GlobalFonts from '../../vendor/fonts/fonts';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';


const MyComponent = () => {
  const [data, setData] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [catg, setCatg] = useState('')
  const [page, setPage] = useState(1);
  const [isEmptyImages, setEmptyImages] = useState(false);
  const [isErrMsg, setErrMsg] = useState(false);
  const handleInputSearchForm = (value) => {
    setValueSearch(value);
  };
  const handleSubmitSearch = () => {
    if (valueSearch) {
      //   getQueryPhoto();
      setErrMsg(false);
      setPage(1);
    } else {
      setErrMsg(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [catg, page]);
  const fetchData = () => {
    const dataS = catg === 's1' ? s1Data : catg === 's2' ? s2Data : likedData
    console.log("🚀 ~ file: PrincipaleComp.js:39 ~ fetchData ~ data:", dataS)
    const start = (page - 1) * 30;
    const end = start + 30;
    const newData = dataS.contents.slice(start, end);

    setData((prevData) => [...prevData, ...newData]);

    if (end >= dataS.contents.length) {
      setHasMore(false);
    }


  };
  useEffect(() => {
    console.log("🚀 ~ file: PrincipaleComp.js:37 ~ useEffect ~ valueSearch:", catg)
  }, [catg]);
  // Function to handle API call




  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Wrapper>
      <Header />
      <SearchForm
        valueInput={valueSearch}
        handleInput={handleInputSearchForm}
        handleSubmitInput={handleSubmitSearch}
        isErrMsg={isErrMsg}
        changeData={setCatg}
        ctg={catg}
      />
      {isEmptyImages ? (
        <EmptyMessage>nothing found 😥</EmptyMessage>
      ) : (
        <SearchResult imagesCards={data} setPage={fetchMoreData} />
      )}
      <GlobalStyle />
      <GlobalFonts />
    </Wrapper>
  );
};

export default MyComponent;
const Wrapper = styled.div`
  max-width: 1320px;
  padding: 30px 20px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const EmptyMessage = styled.p`
  font-size: 30px;
  text-align: center;
`;
