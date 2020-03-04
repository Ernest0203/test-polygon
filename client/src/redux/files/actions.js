const actions = {
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FILES_UPLOAD: 'FILES_UPLOAD',
  filesUpload: files => ({
    type: actions.FILES_UPLOAD,
    files
  })
}

export default actions;