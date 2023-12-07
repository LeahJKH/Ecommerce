import "./LandingPage.css"
import boat from "../../public/pictures/boats.png"



export function LandingPage() {

  return (
    <>
      <div className="mainContent--container">
        <h1 className="main--title">Popular Items</h1>
        <div className="carousel">
          <button className="carousel-button prev">
            &#8656;
          </button>
          <button className="carousel-button next">
            &#8658;
          </button>
          <ul data-slides>
            <li className="slide">
              <img src={boat} alt="boat" />
            </li>
            <li className="slide">
              <img
                src="https://images.unsplash.com/photo-1658409524023-5c835864baf2?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="boat"
              />
            </li>
            <li className="slide">
              <img
                src="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="boat"
              />
            </li>
          </ul>
        </div>

        <h1>Categories</h1>
        <div className="carusel-categories">
          <div className="catergory-card">
            <h3>Category name</h3>
            <img src={boat} alt="picture" />
          </div>
        </div>
        <h1>Recommended for you</h1>
        <div className="list-recommended">
          <img src={boat} alt="picture" />
        </div>
      </div>
    </>
  );
}
