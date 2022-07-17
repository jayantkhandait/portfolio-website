import React from 'react'
import { skills } from '../../data'

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
        <div className='continer mx-auto'>
            <div className='grid grid-cols-8 md:grid-flow-row'>
                {skills.map((skill,i)=>{
                    return (
                        <div className='flex items-center justify-center' key={i}>
                            <img src={skill.image}/>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills