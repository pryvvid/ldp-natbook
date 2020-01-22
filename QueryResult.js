import React from 'react';

const QueryResult = ({queryText}) => {
  return (
    <>
    <textarea className='queryText' value={queryText.join(' OR ')} />
    </>
  )
}

export default QueryResult;