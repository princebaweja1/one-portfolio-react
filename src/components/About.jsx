import React from 'react'

const About = () => {
  return (
    <div name="about"
        id="About"
        className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p  className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <p className='text-xl mt-20'>
            Hi, I'm Prince Baweja, a passionate Software Developer currently employed at Xperi. <br/>
            I thrive on problem-solving and relish tackling complex challenges head-on. It's this enthusiasm for overcoming obstacles that fuels my journey in the world of software development.
            </p>

                <br />

            <p className='text-xl'>

            My technical skillset is diverse and includes proficiency in a range of programming languages and technologies. I'm well-versed in Python, Java, C++, Javascript, and React.js. <br/>
            I have a deep understanding of Data Structures and Algorithms. 
            In my professional journey, I've harnessed the power of Version Control Systems like Git and Github to manage and collaborate on projects seamlessly. 
            </p>
        </div>
    </div>
  )
}

export default About;