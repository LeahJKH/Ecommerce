import "./LandingPage.css"
import boat from "../../public/pictures/boats.png"
import { useState } from "react"



export function LandingPage() {
  let [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  // Handle click on the previous button
  const handlePreviousClick = () => {
    const slides = document.querySelectorAll("ul.carousel li");
    const currentSlide = slides[currentSlideIndex];
    const previousSlide = slides[currentSlideIndex - 1];

    // Slide to previous slide
    previousSlide.style.display = "block";
    currentSlide.style.display = "none";

    // Update the current slide
    setCurrentSlideIndex -= 1;
  };

  // Handle click on the next button
  const handleNextClick = () => {
    const slides = document.querySelectorAll("ul.carousel li");
    const currentSlide = slides[currentSlideIndex];
    const nextSlide = slides[currentSlideIndex + 1];

    // Slide to the next slide
    nextSlide.style.display = "block";
    currentSlide.style.display = "none";

    // Update the current slide index
    setCurrentSlideIndex += 1;
  }


  return (
    <>
      <div className="mainContent--container">
        <h1 className="main--title">Popular Items</h1>
        <div className="carousel">
          <button
            
            onClick={handlePreviousClick}
            className="carousel-button prev"
          >
            &#8656;
          </button>
          <button
            
            onClick={handleNextClick}
            className="carousel-button next"
          >
            &#8658;
          </button>
          <ul>
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
        <div className="categories">
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
