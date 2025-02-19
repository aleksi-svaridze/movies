import { MobileHeader, DesktopHeader } from "./Headers";

const SideBar = () => {
  return (
    <div className="md:mx-6 lg:ml-8 lg:mr-0">
      <MobileHeader />
      <DesktopHeader />
    </div>
  );
};

export default SideBar;
