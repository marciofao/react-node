import Input from '../Input'
import styled from 'styled-components';
import { useState } from 'react';
import { books } from './searchData'

const SearchContainer = styled.section`
  backg-round-image: 90deg, #002F52 35%, #326589 165%) ;
  color: #FFF;
  text-align: center;
  padding: 85px O;
  height: 270px;
  width: 100%;
`
const Title = styled.h1`
  color: #FFF;
  font—size: 36px;
  text—align: center;
  width: 100%;
`
const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`
const Results = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
  flex-direction: row-reverse;
  p{
    width: 200px
  }
  img {
  width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`


function Pesquisa() {
  const [BookSearch, setBookSearch] = useState([]);
  console.log(BookSearch)
  return (
    <SearchContainer>
      <Title>Do you know how to start?</Title>
      <Subtitle>Find your book in our bookshelf.</Subtitle>
      <Input
        placeholder="write your next reading"
        onKeyUp={e => {
          const typedText = e.target.value
          const searchResult = books.filter(book => book.name.toLowerCase().includes(typedText.toLowerCase()))
          setBookSearch(searchResult)
        }} />
        {BookSearch.map(book => (
        <Results>
          <p>{book.name}</p>
          <img src={book.src} alt=""/>
        </Results>
      ))}
    </SearchContainer>
    
    );
}

export default Pesquisa;