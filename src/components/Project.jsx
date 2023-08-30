import { useState, useEffect } from "react";
//will need to use state variable and hook function

// create component Question:
export default function Project() {
  //creating state variable for property
  const [projects, setProjects] = useState([]); //array

  //hook function
  useEffect(() => {
    //fetch the json file
    fetch('../../../../projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  //returned and imported to Home.jsx, Home.jsx is imported to App.jsx
  return (
    <div className="project-section">
      {projects.map((project, index) => (
        <div className="projectBox" key={index}>
          <img src={project.img_url}></img>
          <h3><a href={project.url}>{project.title}</a></h3>
          <p>{project.blurb}</p>
        </div>
      ))}
    </div>
  );
};