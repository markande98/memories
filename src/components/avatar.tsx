const Avatar = () => {
  return (
    <div className="flex items-center space-x-2">
      <p className="text-xl">Gaurav</p>
      <img
        src="/placeholder.jpg"
        alt="user"
        className="bg-slate-400 object-cover h-8 w-8 rounded-2xl cursor-pointer"
      />
    </div>
  );
};

export default Avatar;
