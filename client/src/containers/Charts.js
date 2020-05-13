import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const Charts = () => {
  return (
    <ChartsWrapper>
      <div className="container">
        Chart
      </div>
    </ChartsWrapper>     
  )
}

const ChartsWrapper = styled.div`
  .container {
    display: flex;
  }
`

export default Charts;