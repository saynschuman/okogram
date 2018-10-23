import React, { Component } from "react";

import Dropzone from "react-dropzone";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./style.css";

import {
  base64StringtoFile,
  downloadBase64File,
  extractImageFileExtensionFromBase64,
  image64toCanvasRef
} from "./res";

const imageMaxSize = 1000000000; // bytes
const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map(item => {
  return item.trim();
});
class ImgDropAndCrop extends Component {
  constructor(props) {
    super(props);
    this.imagePreviewCanvasRef = React.createRef();
    this.fileInputRef = React.createRef();
    this.state = {
      imgSrc: null,
      imgSrcExt: null,
      crop: {
        aspect: 0.5625,
        height: 90,
        width: 28.471804511278197,
        x: 31.20300751879699,
        y: 0
      },
      isChanged: false,
      isVisibleCrop: true
    };
  }

  verifyFile = files => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        alert(
          "This file is not allowed. " + currentFileSize + " bytes is too large"
        );
        return false;
      }
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        alert("This file is not allowed. Only images are allowed.");
        return false;
      }
      return true;
    }
  };

  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      this.verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = this.verifyFile(files);
      if (isVerified) {
        // imageBase64Data
        const currentFile = files[0];
        const myFileItemReader = new FileReader();
        myFileItemReader.addEventListener(
          "load",
          () => {
            // console.log(myFileItemReader.result)
            const myResult = myFileItemReader.result;
            this.setState({
              imgSrc: myResult,
              imgSrcExt: extractImageFileExtensionFromBase64(myResult)
            });
          },
          false
        );

        myFileItemReader.readAsDataURL(currentFile);
      }
    }
  };

  handleImageLoaded = image => {
    console.log(image);
  };
  handleOnCropChange = crop => {
    this.setState({ crop: crop, isChanged: true });
  };
  handleOnCropComplete = (crop, pixelCrop) => {
    //console.log(crop, pixelCrop)

    const canvasRef = this.imagePreviewCanvasRef.current;
    const { imgSrc } = this.state;
    image64toCanvasRef(canvasRef, imgSrc, pixelCrop);
  };
  handleDownloadClick = event => {
    event.preventDefault();
    const { imgSrc } = this.state;
    if (imgSrc) {
      const canvasRef = this.imagePreviewCanvasRef.current;

      const { imgSrcExt } = this.state;
      const imageData64 = canvasRef.toDataURL("image/" + imgSrcExt);

      const myFilename = "previewFile." + imgSrcExt;

      // file to be uploaded
      const myNewCroppedFile = base64StringtoFile(imageData64, myFilename);
      console.log(myNewCroppedFile);
      // download file
      downloadBase64File(imageData64, myFilename);
      this.handleClearToDefault();
    }
  };

  handleClearToDefault = event => {
    if (event) event.preventDefault();
    const canvas = this.imagePreviewCanvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.setState({
      imgSrc: null,
      imgSrcExt: null,
      crop: {
        aspect: 1 / 1
      }
    });
    this.fileInputRef.current.value = null;
  };

  hideCrop = () => {
    this.setState({
      isVisibleCrop: false
    });
  };

  handleFileSelect = event => {
    // console.log(event)
    const files = event.target.files;
    if (files && files.length > 0) {
      const isVerified = this.verifyFile(files);
      if (isVerified) {
        // imageBase64Data
        const currentFile = files[0];
        const myFileItemReader = new FileReader();
        myFileItemReader.addEventListener(
          "load",
          () => {
            // console.log(myFileItemReader.result)
            const myResult = myFileItemReader.result;
            this.setState({
              imgSrc: myResult,
              imgSrcExt: extractImageFileExtensionFromBase64(myResult)
            });
          },
          false
        );

        myFileItemReader.readAsDataURL(currentFile);
      }
    }
  };
  render() {
    const { imgSrc } = this.state;
    return (
      <div>
        <h2>Загрузите фото для истории</h2>

        <input
          ref={this.fileInputRef}
          type="file"
          accept={acceptedFileTypes}
          multiple={false}
          onChange={this.handleFileSelect}
        />
        {imgSrc !== null ? (
          this.state.isVisibleCrop && (
            <div className={"PreWrapper"}>
              <div className={"cropItemsWrapper"}>
                <div className={"cropWrapperImage"}>
                  <i>Измените размер для обрезки фото</i>
                  <br />
                  <div className="cropImageInner">
                    <ReactCrop
                      src={imgSrc}
                      crop={this.state.crop}
                      onImageLoaded={this.handleImageLoaded}
                      onComplete={this.handleOnCropComplete}
                      onChange={this.handleOnCropChange}
                    />
                  </div>
                  {this.state.isChanged && (
                    <button className={"button-ready"} onClick={this.hideCrop}>
                      Готово
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        ) : (
          <div className={"move"}>
            <Dropzone
              onDrop={this.handleOnDrop}
              accept={acceptedFileTypes}
              multiple={false}
              maxSize={imageMaxSize}
            >
              Перетащите сюда фото или кликните для загрузки
            </Dropzone>
          </div>
        )}
        <div className={"cropWrapperPreview"}>
          <canvas ref={this.imagePreviewCanvasRef} />
          {this.state.isVisibleCrop === false && (
            <div>
              <button onClick={this.handleDownloadClick}>Скачать</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ImgDropAndCrop;
