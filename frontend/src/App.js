import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import PageLayOut from "./pages/PageLayOut";
import HelpCenterPage from "./pages/HelpCenterPage";
import HelpCenterDetailsPage from "./pages/HelpCenterDetailsPage";
import HelpForm from "./pages/AddNewHelpCenter";

const App = () => {
  return (

    <Router>
      <Routes>
  
        <Route path="/" element={<PageLayOut />} >
  
          <Route path="/" element={<HelpCenterPage />} />
          <Route path='/help-form' element={<HelpForm />} />
          <Route path="/help-center/:title" element={<HelpCenterDetailsPage />} />
  
        </Route>
  
      </Routes>
    </Router>

  );
}

export default App;
