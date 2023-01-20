function EducationCard(props) {
    const data = props.data
    console.log(data);
    return <div className="education card" >
        <h2>{data.title}</h2>
        <h4>Facility: {data.facility} </h4>
        <h4>Location: {data.location}</h4>

        <h3>{data.description}</h3>
        
    </div>
}

export default EducationCard;