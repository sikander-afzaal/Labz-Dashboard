import React from "react";

import Register from "./pages/Register/Register";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import MasterPin from "./pages/MasterPin/MasterPin";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard__NFT from "./pages/Dashboard__NFT/Dashboard__NFT";
import Collection from "./pages/Collection/Collection";
import Feed from "./pages/Feed/Feed";
import Market from "./pages/Market/Market";
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />

        <Route path="/terms-conditions" element={<TermsConditions />} />

        <Route path="/verify" element={<EmailVerification />} />

        <Route path="/master-pin" element={<MasterPin />} />

        <Route path="/home" element={<Home />} />

        <Route path="/" element={<Inventory />}>
          <Route path="/" element={<Dashboard__NFT />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/market" element={<Market />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
