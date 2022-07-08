function App() {
  const changeResolution = (newResolution) => {
    const video = document.getElementById("video");
    video.pause();
    const videoTime = video.currentTime;
    video.load(`http://localhost:4500/${newResolution}video.mp4`);
    video.src = `http://localhost:4500/${newResolution}video.mp4`;
    video.currentTime = videoTime;
    video.play();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <video
        id="video"
        style={{ height: "450px", width: "800px" }}
        src="http://localhost:4500/1080video.mp4"
        controls
        autoPlay
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button
          style={{ margin: "10px" }}
          onClick={() => changeResolution(144)}
        >
          144p
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => changeResolution(240)}
        >
          240p
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => changeResolution(360)}
        >
          360p
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => changeResolution(480)}
        >
          480p
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => changeResolution(720)}
        >
          720p
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => changeResolution(1080)}
        >
          1080p
        </button>
      </div>
    </div>
  );
}

export default App;
