import "./MainContent.css";
import {ModalLogginn} from "../ModalLogginn/ModalLogginn.jsx";
import {SingIn} from "../Logginn/SingIn.jsx";
import {SingUp} from "../Logginn/SingUp.jsx"

export function MainContent() {
  return (
    <>
      <SingIn/>
      <ModalLogginn/>
    </>
  );
}


/*<div className="mainContent--container">
<h1 className="main--tittle">HomePage--Main</h1>
<div className="Carusel-fav-items"></div>
<h1>Catagories</h1>
<div className="carusel-Catagories"></div>
<h1>Recomended for you</h1>
<div className="List-recomanded"></div>
</div>*/