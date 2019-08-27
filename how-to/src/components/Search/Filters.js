import React, { useState } from 'react';
import styled from 'styled-components';

const Filters = () => {
  const [filterStatus, setFilterStatus] = useState(false)

  return (
    <div>
      <span>Filters</span><span>></span>
      {filterStatus ? 'Applied'}
    </div>
  )
}

export default Filters;