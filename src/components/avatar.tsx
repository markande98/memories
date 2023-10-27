import { UserButton } from "@clerk/clerk-react";

const Avatar = () => {
  return (
    <div className="flex items-center space-x-2">
      <p className="text-xl">Gaurav</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Avatar;
