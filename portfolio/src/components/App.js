import '../styles/App.css'
import Home from '../routes/Home';
function App() {
  return (
    <div id="colorlib-page">
      <div className="container-wrap">
        <div id="colorlib-aside" role="complementary" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img"></div>
            <h1 id="colorlib-logo"></h1>
            <span className="position"></span>
            <div>
              <span className="result1"></span>
              <span className="result2"></span>
            </div>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li><button data-nav-section="about">About</button></li>
                <li><button data-nav-section="education">Education</button></li>
                <li><button data-nav-section="project">Project</button></li>
                <li><button data-nav-section="skills">Skills</button></li>
                <li><button data-nav-section="experience">Career</button></li>
                <li><button data-nav-section="contact">Contact</button></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="App">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
