import React from "react";

//importing components
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
//importing styles
import "./App.css";
import { AppStore } from "./stores/app-store";

function App() {
  return (
    <AppStore>
      <div className="App">
        <Header />
        <Layout />
        <Footer />
      </div>
    </AppStore>
  );
}

export default App;
