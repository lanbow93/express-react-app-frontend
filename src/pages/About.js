import { useLoaderData } from "react-router-dom";

import Automail from "../components/Automail";


const About = (props) => {
    const aboutInfo = useLoaderData();
    return <div className="about">
        <h2>{aboutInfo.name}</h2>
        <h3><Automail email={aboutInfo.email} /></h3>
        <p>{aboutInfo.bio}</p>
    </div>
};

export default About;