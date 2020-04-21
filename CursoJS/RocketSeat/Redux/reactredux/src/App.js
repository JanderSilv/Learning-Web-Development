import React from "react";
import { Provider } from "react-redux";

import Video from "./components/Video";
import Sidebar from "./components/SideBar";

import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Video />
                <Sidebar />;
            </div>
        </Provider>
    );
}

export default App;
