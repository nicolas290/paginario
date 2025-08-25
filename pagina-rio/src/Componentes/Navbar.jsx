

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu"
        aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link active" href="Museo.html">Museo</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Regantes</a></li>
          <li className="nav-item"><a className="nav-link" href="Directorio.html">Directorio</a></li>
          <li className="nav-item"><a className="nav-link" href="linea.html">Líneas Estratégicas</a></li>
      

           
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="memoriasDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              Memorias
            </a>
            <ul className="dropdown-menu" aria-labelledby="memoriasDropdown">
             <li><a className="dropdown-item" href="./documentos/MEMORIA-JVRL-2021.pdf" target="_blank" >2021</a></li>
              <li><a className="dropdown-item" href="https://juntariolongavi.cl/wp-content/uploads/2023/09/MEMORIA-ANUAL-JVRL-2022-23-1.pdf">2022</a></li>
              <li><a className="dropdown-item" href="https://juntariolongavi.cl/wp-content/uploads/2023/09/MEMORIA-ANUAL-JVRL-2022-23-1.pdf">2023</a></li>
              <li><a className="dropdown-item" href="https://juntariolongavi.cl/wp-content/uploads/2024/10/Memoria-anual-JVRL-2024-final-calidad-baja-1.pdf">2024</a></li>
            </ul>
          </li>
          <li className="nav-item"><a className="nav-link" href="noticias.html">Noticias</a></li>

         
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="empresasDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              Empresas Relacionadas
            </a>
            <ul className="dropdown-menu" aria-labelledby="empresasDropdown">
              <li><a className="dropdown-item" href="https://juntariolongavi.cl/sarcom/">Sarcom</a></li>
              <li><a className="dropdown-item" href="https://juntariolongavi.cl/sarhal-2/">Sarhal</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
