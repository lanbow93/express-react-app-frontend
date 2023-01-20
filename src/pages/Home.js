import { useLoaderData } from "react-router-dom";
import Automail from "../components/Automail";

const Home = (props) => {
    const info = useLoaderData()
    return <div className="home">
        <h1>Developer Portfolio of Lance Bowers Jr.</h1>
        <img src={info.headshot} alt={`Photo of ${info.name}`} />
        <h3><Automail email={info.email} /></h3>
        <p>{info.bio}</p>

    </div>
};

export default Home;