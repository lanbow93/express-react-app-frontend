import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import App from './App.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import { projectLoader, aboutLoader } from './loaders.js';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='' element={<App/>}>
            <Route path='' element={<Home/>} />
            <Route path="/about" element={<About/>} loader={aboutLoader} />
            <Route path="/projects" element={<Projects/>} loader={projectLoader} />
        </Route>
    )
);

export default router