import ScrolToTop from "./helpers/ScrolToTop";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import './assets/style/style.scss'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrolToTop />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
