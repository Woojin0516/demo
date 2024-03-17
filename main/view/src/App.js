import './App.css';
import MAIN from "./component/main";
import Header from "./component/header";
import Footer from "./component/footer";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [fileCount , serFileCount] = useState(0)

    return (

        <div className="App">
            <Header/>
            <br/>
            <MAIN/>
            <Footer/>
        </div>
    )
}

export default App;
