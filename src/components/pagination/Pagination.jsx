import React from 'react';

function usePagination(data, dataPerPage) {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(data.length/dataPerPage)

  function currentData() {
    if(data.length>0) {
      const start = (page - 1) * dataPerPage;
      const end = start + dataPerPage;
      return data.slice(start, end);
    }
  }

  function next() {
    setPage(page => Math.min(page + 1, pageCount));
  }

  function previous() {
    setPage(page => Math.min(page - 1, pageCount));
  }

  function jump(p) {
    const pageNumber = Math.max(1,p);
    setPage(page => Math.min(pageNumber, pageCount))
  }

  return  {next, previous, jump, currentData, page, pageCount} 
}

export default usePagination;