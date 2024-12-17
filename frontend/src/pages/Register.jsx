export default function Register() {
  return (
    <div className="login w-[100vw] h-[100vh] bg-[#f0f2f5] flex items-center justify-center ">
      <div className="loginwrapper w-[70%] h-[70%] flex">
        <div className="loginleft basis-1/2 justify-center flex-col ">
          <h3 className="loginlogo font-semibold text-[50px] text-[#1775ee] mb-[10px]">
            Connetify
          </h3>
          <span className="logindesc text-[24px]">
            Connect with friends and the world around you on Connectify.
          </span>
        </div>
        <div className="loginright basis-1/2 justify-center flex-col ">
          <div className="loginbox h-[400px] p-[20px] bg-white rounded-[10px] flex-col flex justify-between">
            <input
              className="logininput focus:outline-none px-[20px] h-[50px] rounded-[10px] border-[1px] border-solid border-black"
              type="text"
              placeholder="Usernme"
            />
            <input
              className="logininput focus:outline-none px-[20px] h-[50px] rounded-[10px] border-[1px] border-solid border-black"
              type="text"
              placeholder="Email"
            />
            <input
              className="logininput focus:outline-none px-[20px] h-[50px] rounded-[10px] border-[1px] border-solid border-black"
              type="text"
              placeholder="Password"
            />
            <input
              className="logininput focus:outline-none px-[20px] h-[50px] rounded-[10px] border-[1px] border-solid border-black"
              type="password"
              placeholder="Password Again"
            />
            <button className="loginbutton h-[50px] rounded-[10px] border-none bg-[#1776ee] text-white text-[20px] font-light cursor-pointer">
              {" "}
              Sign Up
            </button>
            <button className="loginregistration self-center w-[60%] h-[50px] rounded-[10px] border-none bg-[#42b72a] text-white text-[20px] font-light cursor-pointer ">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
