import React, { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({onSubmit})=>{
  const [query, setQuery] = useState('');

  
  const handleInput = e => {
    setQuery(e.currentTarget.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
}

export class SearchForm1 extends Component {


  render() {
    const { query } = this.state;

    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          onChange={this.handleInput}
          placeholder="What do you want to write?"
          name="search"
          required
          value={query}
          autoFocus
        />
      </SearchFormStyled>
    );
  }
}
