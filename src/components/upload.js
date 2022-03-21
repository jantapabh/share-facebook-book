import React, { useState, useEffect} from 'react';
import { storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const ReactFirebaseFileUpload = ({ data }) => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = e => {
        const file = e.target.files[0];

      if (e.target.files[0]) {
        setImage(e.target.files[0]);
        uploadFiles(file);
      }
    };
  
    const uploadFiles = (file) => {
        var form_data = new FormData();
				form_data.append('file', file);
        // connect api upload image
				fetch(
					'https://testing3.matchmysound.com/api/upload_image', {
					method: 'POST',
					body: form_data
				}).then(resp => resp.text()).then(url => {
					console.log("url ",url);
          window.open("https://www.facebook.com/sharer/sharer.php?u=" + url, "pop", "width=600, height=400, scrollbars=no");
                
				});
    };

    return (
      <div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange} />
        <button onClick={uploadFiles}>Upload</button>
        <br />
        {url}
        <br />
        <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
      </div>
    );
  };
  
export default ReactFirebaseFileUpload