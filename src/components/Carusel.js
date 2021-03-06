import img1 from "../assets/img/img1.jfif";
import img2 from "../assets/img/img2.jfif";
import img3 from "../assets/img/img3.jpg";

const Carusel = (props) => {
  const{home}=props;
  console.log(props);
    return (    
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
      <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="..."/>
          </div>
         
          {home.map((item => <div className="carousel-item">
          <img src={'https://image.tmdb.org/t/p/w500'+item.poster_path} className="d-block w-100" alt="..."/>
          </div>))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    );
    };
    


export default Carusel;