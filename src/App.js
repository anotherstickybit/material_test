import React from 'react';
import logo from './logo.svg';
import style from './App.css';
import Header from "./components/Header/Header";
import SimpleTabs from "./components/Navbar/Tabs";
import Container from "@material-ui/core/Container";
import BackToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
    return (
        <div>
            <Container style={style} maxWidth={false}>
                <Header/>
                <SimpleTabs/>
            </Container>
            <BackToTop/>
        </div>
    );
}

export default App;
