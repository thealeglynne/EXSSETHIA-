
import Homes from "../app/componentes/home"
import Menu from "../app/componentes/header"
import Footer from "../app/componentes/footer"
import Carrucel from "./componentes/carrucel"
export default function Home() {
  return (
    <div>
      <div className="header">
      <Menu />
      </div>
      <div>
        
      <Homes />
      </div>
      <div  className="footer">
      <Footer />
      </div>
      </div>
  );
}
