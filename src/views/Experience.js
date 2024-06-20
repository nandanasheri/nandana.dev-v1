import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState } from "react";

const TabData = [
  {
    index : 0,
    heading : "Software Engineering Intern",
    date : "May 2024 - Present",
    exp : [
      "- Creating a full stack React-based Admin Portal with a MySQL backend for LitPath, enabling efficient management of 1000+ therapist records."
      ]
  },
  {
    index : 1,
    heading : "Software Engineering Intern",
    date : "June 2023 - Present",
    exp : [
      "- Led the redevelopment of the CNA Surety Portal, modernizing it with Google Cloud Platform, React.js, and TypeScript serving over 43,000 agencies.",
      "- Simplified bond renewal cancellations by automating processes with PrimeReact, reducing processing time from 1 week to 2 minutes."
      ]
  },
  {
    index : 2,
    heading : "Head Teaching Assistant",
    date : "January 2022 - Present",
    exp : [
      "- Supported over 400 students by debugging in C++ & Python through regular office hours for 4 courses.",
      "- Facilitated weekly labs for over 40 students along with in-person exam review sessions and graded assignments."
      ]
  },
  {
    index : 3,
    heading : "Research Assistant",
    date : "May 2024 - Present",
    exp : [
      "- Implemented machine learning models using Hugging Face's Wav2Vec2 Transformer for speech disorder classification achieving a 20% increase in diagnostic accuracy.",
      "- Created and optimized predictive annotation and classification models, improving annotation efficiency by 30%."
      ]
  }
]

function TabPanel(props) {

  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
    >
      {props.value === props.index && (
        <div className="bg-light-bg rounded-2xl ml-6 py-4">
          <h3 className="px-4 pt-2 font-semibold text-neon text-2xl">{props.head}</h3>
          <h3 className="px-4 pt-2 font-regular text-grey-sub">{props.date}</h3>
          <ul>
            {
              props.exp.map((item) => {
                return (
                  <h3 className="px-4 pt-2 font-regular text-sm text-green">{item}</h3>
                )
              })
            }
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const [tabVal, setTabVal] = useState(0);

  const handleTab = (e, newVal) => { 
    setTabVal(newVal);
  };

    return (
      <div>
        <Navbar/>

        {/* Experience Section */}
        <h1 className="m-auto max-w-4xl pt-12 mb-6 text-5xl font-subtext font-bold text-neon">&lt;experience/&gt;</h1>
        <div className="bg- m-auto max-w-4xl pt-12 mb-6">
          <div className="bg- flex gap-4">
            <Tabs 
              value={tabVal} 
              onChange={handleTab} 
              orientation="vertical"
            > 
              <Tab sx={{ color: '#CCF6EC'}} label="DEVELOP FOR GOOD" /> 
              <Tab sx={{ color: '#CCF6EC' }} label="CNA INSURANCE" /> 
              <Tab sx={{ color: '#CCF6EC' }} label="NORTHWESTERN UNIVERSITY"/> 
              <Tab sx={{ color: '#CCF6EC' }} label="UNIVERSITY OF ILLINOIS CHICAGO" /> 
            </Tabs> 

            <div className="bg-">
              {TabData.map((item) => (
                <TabPanel value={tabVal} index={item.index} head={item.heading} date={item.date} exp={item.exp}></TabPanel>
              ))}
            </div>
            
          </div>
        </div>

        <Footer/>

      </div>
    )
  }