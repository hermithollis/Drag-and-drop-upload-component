import React, { Component, useState } from "react";

const InputFile = props => {
  const { file, onFileSelected, inputComponent: InputComponent, buttonComponent: ButtonComponent, buttonMessage } = props;
  let [fileInputRef, setFileInputRef] = useState(null);
  const clickHandler = event => {
    fileInputRef.click();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <input
        style={{ display: "none" }}
        type="file"
        label="Browse"
        onChange={onFileSelected}
        ref={fileInput => {
          setFileInputRef(fileInput);
        }}
        inputRef={fileInputRef}
      />
      <ButtonComponent
        variant="contained"
        color="primary"
        onClick={clickHandler}
        style={{ margin: 5 }}
      >
        {buttonMessage}
      </ButtonComponent>
      <InputComponent 
              type="text"
              label="Browse"
              value={file ? file.name : ""}
              style={{ margin: 5 }}
      />
    </div>
  );
};

export default InputFile;
