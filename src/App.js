import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage"; // Example page component

const App = () => {
  return (
    <Router basename="/dataviews-block-examples">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
