import React from 'react';

const CategoryDetail = (props) => {
  const {count} = props;
  return (
    <div>
      <h4>This is your category detail has: {count}</h4>
    </div>
  );
};

export default CategoryDetail;