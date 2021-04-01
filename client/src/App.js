import React, { useEffect, useState } from 'react';
import {
  Card,
  Header,
  Input,
  Pagination,
  TextItem,
  Loader,
} from './components';
import 'animate.css';

const DATA_SIZE_FULL = 'full';
const INTERVAL_TIME = 2000;

/** Application entry point */
function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  const [searchInput, setSearchInput] = useState('');

  // Pagination State
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(9);
  const [perPage, setPerPage] = useState(10);

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
        list.slice(offset, offset + perPage).map(async (id) => {
          return (await fetch('/api/dataItem/' + id)).json();
        })
      );
      setData(dataItems);
      setPageCount(list.length);
    };

    fetchData();
  }, [offset, perPage]);

  /**
   *
   * @param {getNewRow} function
   * @description This function allows the user to press “enter” in the text, and ensure a new row
   * is created in the data instead of merely a new line character being added.
   *
   */
  const getNewRow = (row) => {
    const end = offset * perPage;
    const start = end - perPage;
    const currData = data.slice(start, end);

    let newInfo = [...data];
    newInfo.push(currData[row.split('-')[1]]);
    setPerPage(newInfo.length);
    setData(newInfo);
  };

  // Handlers
  const handleChange = (e) => {
    if (e.target.value === '') setSearchInput('');
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
          {data.length === 0 ? (
            <Loader />
          ) : (
            data.map((row, i) => {
              return (
                <div
                  className='animate__animated animate__fadeIn'
                  key={`p${i}`}
                >
                  {row.map((textitem, j) => {
                    if (
                      searchInput.length > 0 &&
                      textitem.text.search(searchInput) === -1
                    ) {
                      return null;
                    }

                    return (
                      <TextItem
                        key={`${i}${j}`}
                        value={value}
                        data={textitem}
                        getRow={getNewRow}
                        rowNumber={`row-${i}-${j}`}
                      />
                    );
                  })}
                </div>
              );
            })
          )}
        </Card>

        <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default App;
