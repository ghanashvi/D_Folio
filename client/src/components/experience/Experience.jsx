import {useState,useEffect} from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"


const Experience = ({state}) => {
    const [education,setEducation]=useState("");
    const [experience,setExperience]=useState("");
   
    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const education = await contract.methods.allEductationDetails().call();
            setEducation(education);
        }
      
        contract && educationDetails();
        const experienceDetails=async()=>{
            const experience = await contract.methods.allExperienceDetails().call();
            setExperience(experience);
        }
        contract && experienceDetails();

   
    },[state])
    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    {education!=="" && education.map((edu,i)=>{
                        return (   
                        <div key={i} className="edu-card">
                            
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.date}
                        </p>
                        <h3 className="card-text2">{edu.degree}</h3>
                        <p className="card-text3">{edu.knowledgeAcquired}</p>
                        <p className="card-text4">
                        {edu.instutionName}
                        </p>
                        
                          </div>)
                    })}
                
                   
                </div>
               {/* experience */}
               
                <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    {experience!=="" && experience.map((exe,j)=>{
                        return (  
                    <div key={j} className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {exe.date}
                        </p>
                        
                        <h3 className="card-text2">{exe.post}</h3>
                        <p className="card-text3">{exe.knowledgeAcquired}</p>
                        <p className="card-text4">
                        {exe.companyName}
                        </p>
                        </div>   )
                    })}
                </div> 
                </div> 
           
        </section>
    )
}

export default Experience
