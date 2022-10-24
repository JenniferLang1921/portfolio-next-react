import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="main">
      <div className="overlay"></div>

      <ReactPlayer
        url="https://youtu.be/xnSb4oVY32I"
        playing="true"
        loop="true"
        muted="true"
      />
      <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>
    </div>
  );
};

export default Video;
