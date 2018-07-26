import React from 'react';

const ListItem = ({ value }) => (
    <li>{value}</li>
  );

  
const List = ({ skills }) => (
    <ul>
      {
        skills.map((item, i) => <ListItem key={i} value={item} />)
      }
    </ul>
);
  
export default List;