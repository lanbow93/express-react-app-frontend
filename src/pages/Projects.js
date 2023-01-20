import { useLoaderData } from "react-router-dom";

const Projects = (props) => {
    const projects = useLoaderData();
    console.log(projects)
    return <div className="cardHolder">
        {projects.map((project, index) => {
            return <>
                <div key={index} className="card">
                    <h1>{project.name}</h1>
                    <img src={project.image} alt={project.name} />
                    <br />
                    <a target="_blank" href={project.git}><button>Github</button></a>
                    <a target="_blank" href={project.live}><button>Live Site</button></a>
                </div>
                <div key={`${index}Info`} className="info">
                    <h1>Project Information</h1>
                    <div className="infoCard">
                        <h2>Description:</h2>
                        <p>{project.description}</p>
                        <h2>Skills:</h2>
                        <p>{project.skills.join(", ")}</p>
                        <h2>Summary</h2>
                        <ul>
                            {project.summary.map((bullet, index) => {
                            return <li key={`${index}Bullet`}>{bullet}</li>  
                            })}
                        </ul>
                    </div>
                    
                </div>
            </>
        })}
    </div>
};

export default Projects;