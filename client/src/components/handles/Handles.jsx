import React from 'react'
import './Handles.css'
import { AiFillLinkedin} from 'react-icons/ai';
import { SiLeetcode} from 'react-icons/si';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/ghanashvi-parihar-8a18751b9" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://leetcode.com/ghanashviparihar/" target='_blank' rel="noopener noreferrer"><SiLeetcode className='icon' /></a>
      <a href="https://github.com/ghanashvi" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' />
      </a>


    </section>
  )
}

export default Handles
