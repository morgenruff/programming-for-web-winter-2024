import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import ProjectCard from '../ProjectCard/ProjectCard.jsx';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/ProjectCard">
        <ProjectCard/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews