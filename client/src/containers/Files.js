import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

import actions from '../redux/files/actions';

const Files = () => {
  const filesUrls = useSelector(state => state.files.filesUrls);
  const dispatch = useDispatch();
  const fetchData = useCallback(args => dispatch({type: actions.FETCH_DATA}), [dispatch]);
  const onFilesUpload = useCallback(args => dispatch(actions.filesUpload(args)), [dispatch]);
 
  useEffect(() => {
    (async () => await fetchData())();    
  }, []);

  const filesUpload = (files) => {
    const formData = new FormData();
    files.map((item) => formData.append(item.name, item))
    onFilesUpload(formData);
  };

  const filesLinks = filesUrls.map(item => {
    return <li className="fileItem"><a href={`http://${item.url}`}>{item.name}</a></li>
  })

  return (
    <FilesWrapper>
      <h2>Files upload/dowload</h2>
      <Dropzone onDrop={acceptedFiles => filesUpload(acceptedFiles) }>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p className="dropzone">Drop some files here, or click to select files</p>
            </div>
            </section>
          )}
      </Dropzone>
      <ul className="filesList" style={{ display: filesUrls.length > 0 ? 'block' : 'none' }}>
        <h2 className="filesListTitle">Files List</h2>
        {filesLinks}
      </ul>
    </FilesWrapper>     
  )
}

const FilesWrapper = styled.div`
  h2 {
    text-align: center;
  }
  .dropzone {
    border: 1px dashed #ddd;
    cursor: pointer;
    text-align: center;
    padding: 50px 0;
    font-size: 18px;
  }
  .fileItem {
    a {
      color: #60a1ce;
      text-decoration: underline;
    }
  }
`

export default Files;