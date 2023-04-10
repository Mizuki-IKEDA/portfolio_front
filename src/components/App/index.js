import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProjects, getProjectsStatus, fetchProjects} from "../../reducers/projectReducer";
import About from '../About';
import Contact from '../Contact';
import Home from '../Home';
import Mail from "../Mail";
import Skills from "../Skills";
import Menu from '../Menu';
import Projects from '../Projects';
import ProLinks from "../ProLinks";
import './style.scss';

function App() {

  // Fetching projects
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const projectsStatus = useSelector(getProjectsStatus);
  
  useEffect(() => {
    if (projectsStatus === 'idle') {
      dispatch(fetchProjects())
    }
  }, [projectsStatus, dispatch]);

  // Language options
  const language = useSelector((state) => state.language.language);

  return (
        <div className="app">
          <Menu language={language} />
          <ProLinks />
          <Mail />
          <Home language={language} />
          <Skills language={language} />
          <Projects projects={projects} language={language} />
          <About language={language} />
          <Contact language={language} />
        </div>
  );
}

export default App;
