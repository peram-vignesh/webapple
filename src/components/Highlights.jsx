import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'

const Highlights = () => {

    useGSAP (()=>{
        gsap.to('#title',{opacity:1,y:0})
        gsap.to('.link',{opacity:1, y:0})
    },[])

  return (
    <section id='highlighths' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
        <div className='screen-max-width'>
            <div className=' mb-12 w-full md:flex items-end justfy-between'>
              <h1 id='title' className='section-heading'>
                Get the highlights.</h1> 
                <div className='flex flex-wrap items-end gap-5'>
                    <p className='link'> 
                        watch the film
                        <img src={watchImg} alt="watch" className='ml-2'/>
                    </p>
                    <p className='link'> 
                        watch the event
                        <img src={rightImg} alt="right" className='ml-2'/>
                    </p>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default Highlights