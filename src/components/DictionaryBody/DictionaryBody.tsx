import * as React from 'react';
import Search from '../Search/Search';

interface IDictionaryBodyProps {
}

const DictionaryBody: React.FunctionComponent<IDictionaryBodyProps> = (props) => {
  return (
    <div className='Dictionary'>
        <Search />
    </div>
  );
};

export default DictionaryBody;
