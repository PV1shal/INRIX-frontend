import './ Collapsible.css'
import PriceButton from '../filterButtons/priceButton';
import { useEffect, React} from 'react';


const Collapsible = () => {
    useEffect(() => {
      const collElements = document.getElementsByClassName("collapsible");
  
      const handleCollapsibleClick = function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      };
  
      for (let i = 0; i < collElements.length; i++) {
        collElements[i].addEventListener("click", handleCollapsibleClick);
      }
  
      // Cleanup event listeners on component unmount
      return () => {
        for (let i = 0; i < collElements.length; i++) {
          collElements[i].removeEventListener("click", handleCollapsibleClick);
        }
      };
    }, []); // Empty dependency array to run the effect only once
  
    return (
      // Your JSX structure goes here (e.g., a container with collapsible elements)
      <div>
        <button className="collapsible">Choose your preferences !</button>
        <div className="content">
          <p>Content for Collapsible 1</p>
          {/* <PriceButton /> */}
        </div>


      </div>
    );
  };
  
  export default Collapsible;