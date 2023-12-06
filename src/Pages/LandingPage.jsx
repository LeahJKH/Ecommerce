import "./LandingPage.css"
import boat from "../../public/pictures/boats.png"


export function LandingPage() {
  const handleLinkClick = () => {
    return false;
  }

  return (
    <>
      <div className="mainContent--container">
        <h1 className="main--title">Popular Items</h1>
        <div className="carousel-container">
          <div className="carousel">
            <div id="skyline" className="carousel__item">
              <img
                src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=80"
                alt="Skyline of Wai Tan, Shanghai"
                className="carousel__image"
              />
            </div>
            <div id="great-wall-of-china" className="carousel__item">
              <img
                src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=80"
                alt="Great wall of China."
                className="carousel__image"
              />
            </div>
            <div id="sunset-on-the-li-river" className="carousel__item">
              <img
                src="https://images.unsplash.com/photo-1543097692-fa13c6cd8595?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=80"
                alt="Sunset on the Li River as the few remaining cormorant fisherman pack their."
                className="carousel__image"
              />
            </div>
          </div>
          <div id="controls" className="controls">
            <a
              onClick={handleLinkClick}
              href="#skyline"
              className="controls__dot"
            >
              <span className="visuallyhidden">
                Skyline of Wai Tan, Shanghai
              </span>
            </a>
            <a
              onClick={handleLinkClick}
              href="#great-wall-of-china"
              className="controls__dot"
            >
              <span className="visuallyhidden">Great wall of China</span>
            </a>
            <a
              onClick={handleLinkClick}
              href="#sunset-on-the-li-river"
              className="controls__dot"
            >
              <span className="visuallyhidden">Sunset on the Li River</span>
            </a>
          </div>
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
