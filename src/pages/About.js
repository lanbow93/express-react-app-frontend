import { useLoaderData } from "react-router-dom";


const About = (props) => {
    const aboutInfo = useLoaderData();
    return <div>
        <h2>{aboutInfo.name}</h2>
        <h3>{aboutInfo.email}</h3>
        <p>{aboutInfo.bio}</p>
    </div>
};

export default About;