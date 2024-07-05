import React from "react";
import { Button } from "./ui/button";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  return (
    <Button className="w-full flex items-center justify-center gap-2">
      Login with Google <FaGoogle size={18} />
    </Button>
  );
};

export default GoogleLogin;
