import { useState } from "react";
import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const [isVerified, setIsVerified] = useState(false);

  
  const roleIndex = roles.indexOf(role);

 
  const activityIndex = activities.indexOf(activity);

  if (roleIndex !== -1 && activityIndex !== -1) {
    
    const hasAccess = roleIndex >= activityIndex;
    setIsVerified(hasAccess);
  }

  return isVerified;
};

export default useIsVerified;
