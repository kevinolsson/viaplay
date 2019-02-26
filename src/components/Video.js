import React from 'react';

class Video extends React.Component {
  render() {
    let image = this.props.details.content.images.coverart169.template;
    let title = this.props.details.content.series.title;
    let imdb = this.props.details.content.imdb.rating;
    return (
      <li className="video">
        <a href="#">
          <img src={image.split('{')[0]} alt={title} />
          <div className="video__details">
            <div className="spacer"></div>
            <div className="content">
              <svg enableBackground="new 0 0 459 459" version="1.1" viewBox="0 0 459 459" xmlns="http://www.w3.org/2000/svg">
                <path d="m229.5 0c-126.75 0-229.5 102.75-229.5 229.5s102.75 229.5 229.5 229.5 229.5-102.75 229.5-229.5-102.75-229.5-229.5-229.5zm80.792 239.65l-111.76 76.084c-3.761 2.56-8.63 2.831-12.652 0.704-4.022-2.128-6.538-6.305-6.538-10.855v-152.17c0-4.55 2.516-8.727 6.538-10.855 4.022-2.127 8.891-1.857 12.652 0.704l111.76 76.084c3.359 2.287 5.37 6.087 5.37 10.151s-2.01 7.864-5.37 10.151z"/>
              </svg>
              <h3>{title}</h3>
              <p>{imdb} on IMDB</p>
            </div>
          </div>
          <div className="video__teaser">
            <video loop autoPlay={true}>
              <source src="https://zippy.gfycat.com/ImperturbableSlightGoose.mp4" type="video/mp4" />
              <source src="https://zippy.gfycat.com/ImperturbableSlightGoose.webm" type="video/webm" />
            </video>
          </div>
        </a>
      </li>
    );
  }
}

export default Video