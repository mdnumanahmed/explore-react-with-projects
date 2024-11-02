import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center min-h-16 border-b-2 py-8">
      <div className="text-4xl font-bold">Knowledge Cafe</div>
      <div className="">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
