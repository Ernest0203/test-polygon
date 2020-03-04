import React from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

import actions from '../redux/files/actions';

const Files = () => {
  actions.filesUpload()
  return (
    <FilesWrapper>
      <h2>Files upload/dowload</h2>
      <Dropzone onDrop={acceptedFiles => {console.log(acceptedFiles); actions.filesUpload()}}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p className="dropzone">Drop some files here, or click to select files</p>
            </div>
            </section>
          )}
      </Dropzone>
      <div className="filesContent">
        
      </div>
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
`

export default Files;