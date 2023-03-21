import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProjects, getProjectsError, getProjectsStatus, fetchProjects} from "../../reducers/projectReducer";
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
  const error = useSelector(getProjectsError);
  
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
          <Home className="app--snap-element" language={language} />
          <Skills className="app--snap-element" language={language} />
          <Projects className="app--snap-element" projects={projects} language={language} />
          <About className="app--snap-element" language={language} />
          <Contact className="app--snap-element" language={language} />
        </div>
  );
}

export default App;
