import './Navbar.css';

function Navbar() {
  return (
    <div className="nav-bar">
        <div className='nav nav-left'>
            <div className='brand'>
                <img src="/img/friand_brand.png" alt="brand" className='img-brand'/>
            </div>
        </div>
        <div className='nav nav-right'>
            <div className='nav-link active'><a href="index.html">Accueil</a></div>
            <div className='nav-link'>La Carte</div>
            <div className='nav-link'>Question</div>
            <div className='nav-link conne'>Connexion</div>
        </div>
    </div>
  );
}

export default Navbar;