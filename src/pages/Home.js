import { useLoaderData } from "react-router-dom";

const Home = (props) => {
    const info = useLoaderData()
    return <div className="home">
        <h1>Developer Portfolio Of Lance B.</h1>
        <img src={info.headshot} alt={`Photo of ${info.name}`} />

    </div>
};

export default Home;