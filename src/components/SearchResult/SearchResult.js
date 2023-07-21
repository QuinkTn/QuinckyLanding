import styled from 'styled-components/macro';
import Card from '../Card/Card';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import InfiniteScroll from 'react-infinite-scroll-component';

import './SearchResult.css';
const SearchResult = ({ imagesCards = [], setPage }) => {
  return (
    <Wrapper>
      <InfiniteScroll
        dataLength={imagesCards.length}
        next={() => setPage()}
        hasMore={true}
        loader={
          imagesCards.length === 30 ? (
            ''
          ) : (
            <LoaderText>loading image...⏳</LoaderText>
          )
        }
      >
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1000: 3 }}
        >
          <Masonry gutter="25px">
            {imagesCards.map((card) => (
              <Card
                description={card.description}
                key={card.id}
                image={`https://cdn.prinker.net${card.thumbnail}`}
                likes={card.likeCnt}
                user={card.nickname}
                userImage={`https://cdn.prinker.net${card.profileImgPath}`}
                userLink={`https://cdn.prinker.net${card.profileImgPath}`}
                imageRealWidth={card.workWidth}
              ></Card>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
    </Wrapper>
  );
};

export default SearchResult;

const Wrapper = styled.section``;

const LoaderText = styled.p`
  font-size: 30px;
  text-align: center;
`;
