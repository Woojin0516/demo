import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [data, setData] = useState('')

    useEffect(() => {
        axios.get('/test/data')
            .then(res => setData(res.data))
            .catch(err => alert(err))
    }, []);

    return (
        <div className="App">
            안녕하세요 {data}
        </div>
    )
}

export default App;
