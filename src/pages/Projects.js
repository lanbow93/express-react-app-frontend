import { useLoaderData } from "react-router-dom";

const Projects = (props) => {
    const projects = useLoaderData();
    console.log(projects)
    return <div className="cardHolder">
        {projects.map((project, index) => {
            return <div key={index} className="card">
                    <h1>{project.name}</h1>
                    <img src={project.image} alt={project.name} />
                    <br />
                    <a target="_blank" href={project.git}><button>Github</button></a>
                    <a target="_blank" href={project.live}><button>Live Site</button></a>
            </div>
        })}
    </div>
};

export default Projects;