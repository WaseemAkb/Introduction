import Image from 'next/image'
import {aboutMe, skills, professionalData} from "../../data/page-data";
import AboutMe from './component/about-me';
import ProfessionalExperience from './component/professional-experience';

export default function Home() {
  return (
    <>
    <div>
      <AboutMe data={aboutMe} skills={skills}/>
      <ProfessionalExperience data={professionalData}/>

    </div>
    </>
  )
}
