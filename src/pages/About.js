import { useLoaderData } from "react-router-dom";
import JobCard from "../components/JobCard";
import EducationCard from "../components/EducationCard";

const About = (props) => {
    const data = useLoaderData()
    console.log(data[0].jobs)
    return <div className="about">
        <h1>Experience</h1>
        {data[0].jobs.map((job, index) => {
            return <JobCard data={job} key={`${index}jobCard`} />
        })}

        <h1>Education</h1>
        {data[0].education.map((item, index) => {
            return <EducationCard data={item} key={`${index}educationCard`} />
        })}
    </div>
};

export default About;