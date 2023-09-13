import React, { useContext, useEffect  } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { AuthContext } from "../context/authContext";


const Start = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();


  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  return (
    <div className="start">
      <div className="big-image">
        
      </div>
      <div className="get-started">
        <h1>Welcome to Your Story</h1>
        <p>Get started by creating an account and exploring our content.</p>
        <Link to="/register">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Start;
