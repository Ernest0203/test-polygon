import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import config from '../config';

import actions from '../redux/users/actions';

const Sockets = () => {
  const [data, setData] = useState({});
  let cells = {};
  useEffect(() => setData(cells), []);

  const socket = new WebSocket(config.socketUrl);
  socket.onmessage = e => {
    const change = JSON.parse(e.data);
  };
  const sendData = e => {
    socket.send(JSON.stringify({}))
  };

  const tableGen = (i) => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const rows = [];

    const header = [<td></td>].concat(letters.map((col) => 
      <td className="headerCell">{col}</td>
    ));

    const createRow = (i, k = 1) => {
      if (k > i) return;
      const row = [(<td>{k}</td>)].concat(letters.map((col) => {
        cells[`${col}${k}`] = '';
        return <td className="cell"><input id={`${col}${k}`} type="text" onKeyUp={(e) => sendData(e)}/></td>
      }));
      rows.push(<tr>{row}</tr>);
      createRow(i, k+1);
    };
    createRow(4);

    return (
      <table>
        <tr>{header}</tr>
        {rows}
      </table>
    )
  }
  
  const table = tableGen(5);

  return (
    <SocketsWrapper>
      <div className="container">
        {table}
      </div>
    </SocketsWrapper>     
  )
}

const SocketsWrapper = styled.div`
  .container {
    display: flex;
  }
  table {
    border: 1px solid #ccc;
    font-weight: bold;
    color: #46b156;
    padding: 15px;
    .headerCell {
      text-align: right;
    }
    input {
      height: 30px;
    }
  }
`

export default Sockets;