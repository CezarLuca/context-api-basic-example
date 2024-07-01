// import { useState } from 'react'
import UserOutput from "./components/UserOutput";
import UserContext from "./contexts/UsersContext";

function App() {
    return (
        <>
            <UserContext.Provider value={{ name: "John Doe" }}>
                <UserOutput />
            </UserContext.Provider>
        </>
    );
}

export default App;
