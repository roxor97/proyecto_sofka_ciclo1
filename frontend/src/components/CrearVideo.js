import React, { useState, useRef, useEffect } from "react";
import RecordRTC from "recordrtc";

function CrearVideo() {
  const [stream, setStream] = useState(null);
  const [blob, setBlob] = useState(null);
  const refVideo = useRef(null);
  const recorderRef = useRef(null);

  const handleRecording = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: 1920,
        height: 1080,
        frameRate: 30,
      },
      audio: true,
    });

    setStream(mediaStream);
    recorderRef.current = new RecordRTC(mediaStream, { type: "video" });
    recorderRef.current.startRecording();
  };

  const handleStop = () => {
    recorderRef.current.stopRecording(() => {
      setBlob(recorderRef.current.getBlob());
    });
  };

  const handleSave = () => {
    let formData = new FormData();
    formData.append("file", recorderRef.current.getBlob(), "myGif.gif");
    console.log(JSON.stringify(formData));
  };

  useEffect(() => {
    if (!refVideo.current) {
      return;
    }
  }, [stream, refVideo]);

  return (
    <div className="crear_video">
      <div className="App_video">
        {blob && (
          <video
            src={URL.createObjectURL(blob)}
            controls
            autoPlay
            ref={refVideo}
            style={{ width: "500px"}}
          />
        )}
        <div className="botones">
        <button onClick={handleRecording}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleSave}>save</button>

        </div>
        
      </div>
    </div>
  );
}

export default CrearVideo;
