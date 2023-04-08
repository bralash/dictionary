import * as React from 'react';
import './Search.scss'

interface ISearchProps {
}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  return (
    <div className='Search'>
        <input type="text" title='Search word' />
    </div>
  );
};

export default Search;
