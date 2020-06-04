import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const Charts = () => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(10,10,100,10);
    return {
      backgroundColor: gradient
    }
  }

  return (
    <ChartsWrapper>
      <div className="container">
        <Line data={data}/>
      </div>
    </ChartsWrapper>     
  )
}

const ChartsWrapper = styled.div`
  .container {
    
  }
`

export default Charts;