import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Proj3 from "../assets/prj3.JPG"
import Proj1 from "../assets/prj1.JPG"
import Proj2 from "../assets/prj2.JPG"
import Proj4 from "../assets/prj4.jpg"
import Proj5 from "../assets/prj5.jpg"
import '../styles/Projects.css'


const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='tit'>My Projects</h1>
      <div className='ProjectList'>
        <ProjectItem name='Restaurant Website' image={Proj3} />
        <ProjectItem name='Fitness Website' image={Proj1} />
        <ProjectItem name='Anime Website' image={Proj2} />
        <ProjectItem name='Restaurant Website' image={Proj4} />
        <ProjectItem name="Camera Shop Website" image={Proj5} />
      </div>
    </div>
  )
}

export default Projects