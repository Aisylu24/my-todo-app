import './App.css';
import {Header} from "../common/components/Header/Header";
import {Footer} from "../common/components/Footer/Footer";
import {Pages} from "../common/components/Pages/Pages";

function App() {
    return (
        <div className="App">
            <Header/>
            <Pages/>
            <Footer/>
        </div>
    );
}

export default App;
