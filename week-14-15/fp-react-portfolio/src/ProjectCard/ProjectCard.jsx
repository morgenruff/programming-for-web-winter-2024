import PropTypes from 'prop-types';
import './ProjectCard.css';
import { Link } from 'react-router-dom';
export default function ProjectCard({title, media, statement, image1, image2, date, url, tools, id}) {
  return (
    <div className="projectCard">
      <div className="grid-item text-item projectTitle">
        <Link to={`${id}`}>{title}</Link>
      </div>
      <img className="grid-item requiredImg" src={image1} alt={title}/>
      {/* <img className="grid-item optionalImg" src={image2} alt={title}/> */}
      <div className="grid-item text-item projectStatement">{statement}</div>
      <div className="grid-item text-item projectLink"><a href={url} target="_blank">visit link {'\u279a'}</a></div>
      <div className="grid-item text-item projectMediaType">{media}</div>
      <div className="grid-item text-item projectTools">{tools}</div>
      <div className="grid-item text-item projectDate">{date}</div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  media: PropTypes.string,
  statement: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  url: PropTypes.string,
  tools: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string
}