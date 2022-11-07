import Left from "./Left";
import Right from "./Right";
import Small from "./Small";

function Layout({ children }) {
  return (
    <div className=" w-full">
      <div className="w-full grid grid-cols-5 grid-rows-2 md:grid-rows-1 gap-4">
        <div className="w-full md:hidden">
          <Small />
        </div>
        <div className=" md:col-span-1">
          <Left />
        </div>
        <div className="col-span-3">{children}</div>
        <div className=" md:col-span-1 mx-auto text-white">
          <Right />
        </div>
      </div>
    </div>
  );
}

export default Layout;
