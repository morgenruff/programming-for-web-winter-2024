import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProjectDetail.css';
export function ProjectDetail({data}) {
  const { id } = useParams();
  console.log('params', id);
  const selectedProject = data.find((project) => project.id === id);
  console.log('project', selectedProject);
  return (
    <>
      <div className='navlink'>
        <Link to='/'>Back Home</Link>
      </div>
      <div className='detail-wrapper'>
        <div className='text-item-detail projectDetailMediaType'>
          {selectedProject.media}
        </div>
        <div className='text-item-detail projectDetailDate'>
          {selectedProject.date}
        </div>
        <div className='text-item-detail projectDetailTitle'>{selectedProject.title}</div>
        <div className='text-item-detail projectDetailStatement'>
          {selectedProject.statement}
        </div>
        <div className='text-item-detail projectDetailLink'>
          <a href={selectedProject.url} target="_blank">link {'\u279a'}</a>
        </div>
        <div className='text-item-detail projectDetailTools'>
          {selectedProject.tools}
        </div>
        <img className='projectDetailImage1' src={selectedProject.image1} alt={selectedProject.title}/>
        <img className='projectDetailImage2' src={selectedProject.image2} alt={selectedProject.title}/>
      </div>
    </>
  )
}

ProjectDetail.propTypes = {
  data: PropTypes.array
}