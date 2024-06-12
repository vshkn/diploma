import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import {SignIn} from './pages/Sign-in/signin';
import {MainPage} from './pages/Main/main';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route exact path="/" element={<MainPage/>}/>


                </Routes>
            </Router>
        </div>
    );
}

export default App;
