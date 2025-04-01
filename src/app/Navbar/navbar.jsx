import React from 'react'
import Image from "next/image";
import '../../styles/Navbar/navbar.css';

const NavbarPage = () => {
  return (
    <div>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={300}
          height={100}
          priority
        />
    </div>
  )
}

export default NavbarPage;
