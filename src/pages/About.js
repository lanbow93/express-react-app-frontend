import { useLoaderData } from "react-router-dom";
import JobCard from "../components/JobCard";


const About = (props) => {
    const data = useLoaderData()
    console.log(data[0].jobs)
    return <div className="about">
        <h1>Experience</h1>
        {data[0].jobs.map((job, index) => {
            return <JobCard data={job} key={`${index}jobCard`} />
        })}

        <h1>Education</h1>
    </div>
};

export default About;