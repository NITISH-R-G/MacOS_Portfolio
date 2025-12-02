import gsap from "gsap";

import {Draggable} from "gsap/Draggable";
gsap.registerPlugin(WindowWrapper);

import { Navbar , Welcome , Dock} from './components';
import WindowWrapper from "./hoc/WindowWrapper.jsx";
import { Terminal } from "./windows";


const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
        </main>
    );
};
export default App
