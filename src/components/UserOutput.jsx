import { useContext } from "react";
import UserContext from "./contexts/UsersContext";

function UserOutput() {
    const user = useContext(UserContext);
    return <div>Hello, {user.name}!</div>;
}

export default UserOutput;
