import Button from "@material-tailwind/react/components/Button";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../core/store";

const UserStatus = () => {
  const signoutUser = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex flex-row-reverse items-center pr-16">
        Hi {user?.username}
      </div>
      {user && (
        <Button
          onClick={signoutUser}
          color="red"
          variant="text"
          className="w-1/5 h-6 self-end mr-16 flex items-center justify-center"
        >
          logout
        </Button>
      )}
    </div>
  );
};

export default UserStatus;
