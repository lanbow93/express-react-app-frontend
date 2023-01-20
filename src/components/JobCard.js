function JobCard(props) {
    const data = props.data
    console.log(data);
    return <div className="jobCard" >
        <h2>{data.title}</h2>
        <p className="date">{data.date}</p>
        <h4>{data.company} </h4>
        <p className="date">{data.location} </p>
        <ul>
            {data.details.map((bullet, index) => {
                return <li key={`${index}bulletAbout`}>{bullet}</li>
            } )}
        </ul>
    </div>
}

export default JobCard;