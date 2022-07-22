import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <header className="Header">
      <h1>Shout-Outs</h1>
      {user ? (
        <div>
          <p>{user.displayName}</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </header>
  );
};

export default Header;
