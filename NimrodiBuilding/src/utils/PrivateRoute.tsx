import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute {
  children: ReactNode;  
}

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const { index } = useParams(); 
  const floorAccess = useSelector((state: any) => state.floorAccess.floorAccess); 
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState<boolean>(false);

  useEffect(() => {
    
    if (index) {
      const floorIndex = parseInt(index);
      if (floorAccess[floorIndex]) {
        setHasAccess(true);
      } else {
        navigate("/forbidden");
      }
    }
  }, [index, floorAccess, navigate]);

  return hasAccess ? <>{children}</> : null;  
};

export default PrivateRoute;
