import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import config from '../config';

const Sockets = () => {
  const [data, setData] = useState({});
  let cells = useRef({});
  let ws = useRef(null);
  
  useEffect(() => setData(cells.current), []);
  useEffect(() => {
    ws.current = new WebSocket(config.socketUrl);
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    return () => ws.current.close();
  }, []);

  useEffect(() => {
    if (!ws.current) return;
    ws.current.onmessage = e => {
      const newData = {  ...data, ...JSON.parse(e.data) }
      setData(newData);
    };
  }, [data]);

  const sendData = e => {
    const { id, value } = e.target;
    ws.current.send(JSON.stringify({ [id]: value }));
    setData({ ...data, [id]: value });
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
        cells.current[`${col}${k}`] = '';
        return <td className="cell"><input id={`${col}${k}`} type="text" value={data[`${col}${k}`]} onChange={(e) => sendData(e)}/></td>
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
      padding: 5px;
    }
  }
`

export default Sockets;