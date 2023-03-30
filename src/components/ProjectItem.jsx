import React from 'react'

const ProjectItem = ({ image, name }) => {
    return (
        <div className='ProjectItem'>
            <div style={{ backgroundImage: `url(${image})` }} className='bgImage'></div>
            <h1 className='prjTitle'>{name}</h1>
        </div>
    )
}

export default ProjectItem