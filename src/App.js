import React, { useState, createRef} from 'react';
import { ScreenCapture } from 'react-screen-capture';
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import ReactFirebaseFileUpload from "./components/upload";
import { useScreenshot } from 'use-react-screenshot'

const App = () => {
  const [ screenCapture , setScreenCapture] = useState("")
  const ref = createRef();
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(ref.current);

  const handleScreenCapture = (screenCapture) => {
    setScreenCapture(screenCapture)
  };

  const handleSave = () => {
    const screenCaptureSource = screenCapture;
    const downloadLink = document.createElement('a');
    const fileName = 'react-screen-capture.png';
    downloadLink.href = screenCaptureSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

 
    return (
		<React.Fragment>
      <ReactFirebaseFileUpload data={screenCapture} />
            {/* <button style={{ marginBottom: '10px' }} onClick={getImage}>
                  Take screenshot
            </button>
          <img width={"800px"} src={image} alt={'Screenshot'} />
            <div ref={ref}>
              <h1>use-react-screenshot</h1>
              <p>
                <strong>hook by @vre2h which allows to create screenshots</strong>
              </p>
            </div> */}
            <FacebookShareButton
              quote={"フェイスブックはタイトルが付けれるようです"}
              hashtag={"#hashtag"}
              url={"https://firebasestorage.googleapis.com/v0/b/image-share-facebook.appspot.com/o/files%2F275557978_128344649757947_7681169286984553012_n.jpeg?alt=media&token=48010459-2aa6-4b0a-9133-6c73037e2355"}>
              <FacebookIcon size={32} round /> Facebookでshare
            </FacebookShareButton>      
            <ScreenCapture onEndCapture={handleScreenCapture}>
              {({ onStartCapture }) => (
                <div>
                  <button onClick={onStartCapture}>Capture</button>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                    distinctio exercitationem a tempore delectus ducimus necessitatibus
                    dolor voluptatum aut est quaerat aspernatur, vero quod aperiam odio.
                    Exercitationem distinctio in voluptates?
                  </p>
                    {/* <center>
                      <img id="img-test" className='img-test' src={screenCapture}  />
                      <p>
                        {screenCapture && <button onClick={handleSave}>Download</button>}
                      </p>
                    </center> */}
                </div>
              )}
            </ScreenCapture>
		</React.Fragment>
    );
  }


export default App;
