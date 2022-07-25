import mainLogo from './assets/mainLogo.png'
import './style.css'

function App() {

  return (
    <div className="App">
      <div className='container mt-2'>
        <h1 className='font-weight-bold'>Raül de Arriba</h1>
      </div>

      <div className='main container'>
        <div className='row'>
          <div className='col-2 rrss'>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-github"></a>
            <a href="#" className="fa fa-youtube"></a>
          </div>

          <div className='col-10'>
            <nav className="navbar navbar-expand-md d-flex">
              <img  src={mainLogo} className='logo col-xs-4 navbar-brand' alt="Radega"/>
              <ul className="menu1 col-xs-4 navbar-nav d-flex flex-column justify-content-start">
                <li className="justify-content-start"><a href="#" className="nav-link">Sobre mi</a></li>
                <li className="justify-content-start"><a href="#" className="nav-link">Tecnologias</a></li>
                <li className="justify-content-start"><a href="#" className="nav-link">Proyectos</a></li>
              </ul>
            </nav>
            <div className='row d-flex justify-content-between mt-5'>
              <div className="col-4">
                <div className="weather-card one">
                  <div className="top">
                    <div className="wrapper">
                      <div className="mynav">

                      </div>
                      <h1 className="heading">Clear night</h1>
                      <h3 className="location">Dhaka, Bangladesh</h3>
                      <p className="temp">
                        <span className="temp-value">20</span>
                        <span className="deg">0</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-4">
                <div className="weather-card one">
                  <div className="top">
                    <div className="wrapper">
                      <div className="mynav">

                      </div>
                      <h1 className="heading">Clear night</h1>
                      <h3 className="location">Dhaka, Bangladesh</h3>
                      <p className="temp">
                        <span className="temp-value">20</span>
                        <span className="deg">0</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="weather-card one">
                  <div className="top">
                    <div className="wrapper">
                      <div className="mynav">

                      </div>
                      <h1 className="heading">Clear night</h1>
                      <h3 className="location">Dhaka, Bangladesh</h3>
                      <p className="temp">
                        <span className="temp-value">20</span>
                        <span className="deg">0</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

        
    </div>
  )
}

export default App
