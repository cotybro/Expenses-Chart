import React from 'react';
import './UserInfo.css';
import workImage from '../images/icon-work.svg';
import playImage from '../images/icon-play.svg';
import studyImage from '../images/icon-study.svg';
import exerciseImage from '../images/icon-exercise.svg';
import socialImage from '../images/icon-social.svg';
import selfCareImage from '../images/icon-self-care.svg'

function UserInfo(props) {
  const time = props.timeFrame;

  const imageMap = {
    work: workImage,
    play: playImage,
    study: studyImage,
    exercise: exerciseImage,
    social: socialImage,
    selfcare: selfCareImage,
  };

  let imageClass = '';
  switch (props.image.toLowerCase()) {
    case 'work':
      imageClass = 'work';
      break;
    case 'play':
      imageClass = 'play';
      break;
    case 'study':
      imageClass = 'study';
      break;
    case 'exercise':
      imageClass = 'exercise';
      break;
    case 'social':
      imageClass = 'social';
      break;
    case 'selfcare':
      imageClass = 'selfcare';
      break;
    default:
      imageClass = '';
  }

  return (
    <article className={imageClass}>
      <div className={`bg ${props.title.toLowerCase()}`}>
        <img src={imageMap[props.image.toLowerCase()]} alt={props.title} className='banner-img'/>
      </div>
      <div className="info">
        <div className="info-top-wrapper">
          <p className="title">{props.title}</p>
          <button className='ellipses'></button>
        </div>
        <div className="info-bottom-wrapper">
          <p className="current-hours">{props.timeframes[`${time}`].current}</p>
          <p className="previous-hours">Last Week - {props.timeframes[`${time}`].previous}hrs</p>
        </div>
      </div>
    </article>
  )
}

export default UserInfo;