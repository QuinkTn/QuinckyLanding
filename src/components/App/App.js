import styled from 'styled-components/macro';
import GlobalStyle from '../../styles/globalStyles';
import Header from '../Haeder/Header';
import GlobalFonts from '../../vendor/fonts/fonts';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import { useEffect, useState } from 'react';
import { getPhotos, getStartRandomPhotos } from '../../utils/unsplashApi';
function App() {
  const [valueSearch, setValueSearch] = useState('');
  const [page, setPage] = useState(1);
  const [imageCards, setImageCards] = useState([]);
  const [isErrMsg, setErrMsg] = useState(false);
  const [isEmptyImages, setEmptyImages] = useState(false);

  useEffect(() => {
    getRandomPhoto();
  }, []);

  useEffect(() => {
    if (!valueSearch) return;
    if (page > 1) getMoreQueryPhoto(valueSearch, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleInputSearchForm = (value) => {
    setValueSearch(value);
  };

  const handleSubmitSearch = () => {
    if (valueSearch) {
      getQueryPhoto();
      setErrMsg(false);
      setPage(1);
    } else {
      setErrMsg(true);
    }
  };

  const getRandomPhoto = async () => {
    try {
      let images = await getStartRandomPhotos();
      setImageCards(images);
    } catch (error) {
      console.error(error);
    }
  };

  const getMoreQueryPhoto = async () => {
    try {
      let images = await getPhotos(valueSearch, page);
      setImageCards([...imageCards, ...images]);
    } catch (error) {
      console.error(error);
    }
  };

  const getQueryPhoto = async () => {
    try {
      let images = await getPhotos(valueSearch, 1);
      if (images.length === 0) {
        setEmptyImages(true);
        return;
      }
      setEmptyImages(false);
      setImageCards(images);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePage = () => {
    if (!valueSearch) return;
    setPage(page + 1);
  };

  return (
    <Wrapper>
      <Header />
      <SearchForm
        valueInput={valueSearch}
        handleInput={handleInputSearchForm}
        handleSubmitInput={handleSubmitSearch}
        isErrMsg={isErrMsg}
      />
      {isEmptyImages ? (
        <EmptyMessage>nothing found 😥</EmptyMessage>
      ) : (
        <SearchResult imagesCards={imageCards} setPage={handlePage} />
      )}
      <GlobalStyle />
      <GlobalFonts />
    </Wrapper>
  );
}

export default App;

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
