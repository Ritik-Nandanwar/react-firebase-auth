import { auth, signOut } from "../config/firebase";
import { useNavigate, Link } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="logo left ">GetYourz</div>
        <ul className="right">
          <li className="spacing">
            <Link>Home</Link>
          </li>
          <li className="">
            <Link
              to="/"
              onClick={async () => {
                if (auth.currentUser.uid) {
                  await signOut(auth).then(() => {
                    console.log("LOGGED OUT");
                    navigate("/");
                  });
                }
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
