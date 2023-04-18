import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

export default function PageNumber() {
  return (
    <div>
      <Pagination>{items}</Pagination>
    <br />
    </div>
  )
}

