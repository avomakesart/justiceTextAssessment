import React, { useEffect, useState } from 'react';
import { Card, Header, Input, Pagination, TextItem } from './components';
import 'animate.css';

// const DATA_SIZE_HALF = "half"
const DATA_SIZE_FULL = 'full';
const INTERVAL_TIME = 2000;

/** Application entry point */
function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  const [searchInput, setSearchInput] = useState('');

  // Pagination State
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(9);

  const dataPerPage = 10;

  /** DO NOT CHANGE THE FUNCTION BELOW */
  useEffect(() => {
    setInterval(() => {
      // Find random bucket of words to highlight
      setValue(Math.floor(Math.random() * 10));
    }, INTERVAL_TIME);
  }, []);
  /** DO NOT CHANGE THE FUNCTION ABOVE */

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch('/api/dataIdList?datasize=' + DATA_SIZE_FULL);
      let list = await response.json();

      let dataItems = await Promise.all(
        list.slice(offset, offset + dataPerPage).map(async (id) => {
          return (await fetch('/api/dataItem/' + id)).json();
        })
      );
      setData(dataItems);
      setPageCount(Math.ceil(list.length));
    };

    fetchData();
  }, [offset]);

  // Handlers
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handlePageChange = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  return (
    <div className='text-center pb-8'>
      <Header title='JT Online Book'>
        <div className='flex flex-row'>
          <Input
            type='text'
            placeholder='Type a search'
            value={searchInput}
            onChange={handleChange}
            hasIcon
          />
        </div>
      </Header>
      <div className='container mx-auto pt-10 px-8 md:px-6 lg:px-4 text-left'>
        <Card>
          {data.map((row, i) => {
            return (
              <div className='animate__animated animate__fadeIn' key={`p${i}`}>
                {row.map((textitem, j) => {
                  if (
                    searchInput.length > 0 &&
                    textitem.text.search(searchInput) === -1
                  ) {
                    return null;
                  }

                  return (
                    <TextItem key={`${i}${j}`} value={value} data={textitem} />
                  );
                })}
              </div>
            );
          })}
        </Card>

        <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default App;
