const Automail = (props) => {
    return (
      <a href={`mailto:lancebowersjr1434@gmail.com?subject=${encodeURIComponent("Job Request for (Job Title & Company Here) ")}&body=${encodeURIComponent("Paste over with job description")}`}>{props.email}</a>
    );
  };

export default Automail