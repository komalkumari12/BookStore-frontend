import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListBooks from "./components/ListBooks";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/addBooks" element={<Form />} />
        <Route path="/viewBooks" element={<ListBooks />} />
      </Routes>
    </Router>
  );
};

export default App;
