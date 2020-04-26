import React from 'react';
import logo from './logo.svg';
import style from './App.css';
import Header from "./components/Header/Header";
import SimpleTabs from "./components/Navbar/Tabs";
import Container from "@material-ui/core/Container";
import BackToTop from "./components/ScrollToTop/ScrollToTop";

class App extends React.Component {

    componentDidMount() {
        document.title = 'DKSS Servers Backup Schedule Viewer';
    }

    render() {
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
}

export default App;
