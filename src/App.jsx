import Navbar from "./components/Navbar"
import Header from "./components/Header"


import { useEffect, useState } from "react"
import ContactUs from "./components/ContactUs"
import MeetTheTeam from "./components/MeetTheTeam"
import Card from "./components/Cards"
import CompanyCards from "./components/CompanyCards"
import exploreImage from '../images/explore.png';
import exploreImage1 from '../images/explore1.png';
import exploreImage2 from '../images/explore2.png';
import titleImage from '../images/title.png';
import techinnovators from "../images/techinnovators.jpg";
import fintech from "../images/fintech.jpg";
import healthtech from "../images/healthtech.jpg";
import foodietech from "../images/foodietech.jpg";
import greentech from "../images/greentech.jpg";
import ecell from "../images/download.png"


function App() {

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setToggle(prevToggle => !prevToggle);
    }, 8000); // Change cards every 3 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("CLicked")
  }

  return (
    <>
     <div className=" text-white bg-white">
        <Navbar 
          ecellLogo={ecell}
        />
        <main className="text-yellow-500 bg-white flex flex-col items-center border-b-2 px-20"> 
          <div className="font-bold pt-20 text-black">
            <img
              className="h-40"
              src={titleImage}
            />
          </div>
          <div className="text-2xl font-bold">
            An E-Cell NIT Trichy Initiative
          </div>
          <div className="text-xl text-black">
            Where we enable budding early stage startups and our very own institute students to <p className="inline font-bold text-yellow-500">connect</p>
          </div>
          
        
          <div className="pb  -10 flex flex-row  items-center">
            <div>
              <img
                src={exploreImage1}
              />
            </div>
            <div>
              <img
                src={exploreImage}
              />
            </div>
            <div>
              <img
                src={exploreImage2}
              />
            </div>
            {/* {toggle ?(
            <Card
              text="Explore internship positions at early-stage startups, offering hands-on learning and growth opportunities.
              Gain mentorship from seasoned entrepreneurs and industry experts.
              Expand your network and connect with like-minded peers and potential future collaborators.
              Accelerate your career development and enhance your skill set in a dynamic startup environment."
              type="Students"
              img="student1"
            />
            ):(
            <Card
              text="Access a pool of driven and skilled students eager to contribute to your startup's success.
              Fill crucial internship positions with passionate individuals committed to making a difference.
              Cultivate a diverse and dynamic team to drive innovation and growth.
              Establish meaningful connections with the future leaders of the industry."
              type="Startups"
              img="startup"
            />
            )} */}
          </div>
        </main>
          <CompanyCards
            companyName={"Tech Innovators Inc."}
            jobTitle={"Role -Software Engineering Intern"}
            requiredSkills={"Preferred Skills: Proficiency in programming languages such as Java, Python, or JavaScript. Familiarity with web development frameworks (e.g., React, Angular). Strong problem-solving and communication skills."}
            companyDescription={"Tech Innovators Inc. is a cutting-edge tech startup specializing in developing innovative software solutions for various industries."}
            jobDescription={"We are seeking a motivated Software Engineering Intern to join our dynamic team. You will work closely with our experienced developers to assist in the design, development, and testing of software applications."}
            logo={techinnovators}
          />
          <CompanyCards
          companyName={"GreenTech Solutions"}
          jobTitle={"Role - Sustainability Intern"}
          requiredSkills={"Background in environmental science, sustainability, or related fields. Strong analytical skills and attention to detail. Ability to work independently and collaboratively in a fast-paced environment."}
          companyDescription={"GreenTech Solutions is a sustainability-focused startup dedicated to developing eco-friendly solutions to environmental challenges."}
          jobDescription={"We are looking for a passionate Sustainability Intern to support our initiatives in environmental research, data analysis, and project management. You will work alongside our team to identify and implement sustainable practices."}
          logo={greentech}
          />
          <CompanyCards
            companyName={"HealthTech Innovations"}
            jobTitle={"Role - Data Science Intern"}
            requiredSkills={"Preferred Skills: Proficiency in statistical analysis tools (e.g., Python, R). Experience with machine learning algorithms and data visualization techniques. Strong problem-solving and critical thinking abilities."}
            companyDescription={"HealthTech Innovations is a healthcare technology startup committed to revolutionizing patient care through data-driven solutions."}
            jobDescription={"We are seeking a Data Science Intern to assist in analyzing large datasets, developing predictive models, and extracting insights to improve healthcare outcomes. You will work closely with our data scientists and engineers to support ongoing projects."}
            logo={healthtech}
          />
          <CompanyCards
            companyName={"FoodieTech"}
            jobTitle={"Role - Marketing Intern"}
            requiredSkills={"Preferred Skills: Strong written and verbal communication skills. Knowledge of digital marketing tools (e.g., Google Analytics, social media management platforms). Creativity and a passion for food and technology."}
            companyDescription={"FoodieTech is a startup revolutionizing the food industry by leveraging technology to connect consumers with local restaurants and food vendors."}
            jobDescription={"We are looking for a creative and enthusiastic Marketing Intern to assist in developing and executing marketing campaigns across digital and social media platforms. You will help drive brand awareness and user engagement."}
            logo={foodietech}
          />
          <CompanyCards
            companyName={"FinTech Innovate "}
            jobTitle={"Role - Finance Intern"}
            requiredSkills={"Basic understanding of financial principles and accounting concepts. Proficiency in Microsoft Excel or Google Sheets. Strong analytical and problem-solving skills."}
            companyDescription={"FinTech Innovate is a financial technology startup focused on developing innovative solutions for personal finance management and investment."}
            jobDescription={"We are seeking a Finance Intern to assist in financial analysis, market research, and investment strategy development. You will work closely with our finance team to support various projects and initiatives."}
            logo={fintech}
          />  
        
        {/* <MeetTheTeam/> */}
        <ContactUs/>
        {/* <Header />
        <SearchBar fetchJobsCustom = {fetchJobsCustom}/>
        {customSearch &&
        <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
            <p className="bg-red-500 px-10 py-2 rounded md text-white">Clear Filters</p>
        </button>}
        {jobs.map((job) => (
          <JobCard key={job.id} {...job}/>
        ))} */}
      </div>
      
    </>
  )
}

export default App
