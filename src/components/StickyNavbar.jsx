import React from "react";
import { Navbar, MobileNav, Typography, IconButton } from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = ["Pages", "Account", "Blocks", "Docs"];

  const navList = (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-4 text-sm">
      {navItems.map((item, index) => (
        <li key={index}>
          <a href="#" className="hover:text-blue-500">{item}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full px-4 lg:px-8 sticky top-0 z-50 bg-white text-black shadow">
      <Navbar className="rounded-none shadow-none border-b p-4">
        <div className="flex justify-between items-center">
          <Typography className="text-lg text-black font-bold">My Dashboard</Typography>

          <div className="hidden text-black lg:flex">{navList}</div>

          <IconButton variant="text" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <span>&#10005;</span>
            ) : (
              <span>&#9776;</span>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav} className="lg:hidden">
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
}
