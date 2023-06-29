import Link from "next/link";
import React from "react";
import AboutPageLayout from "./layout";

const AboutPage = () => {
 return (
  <AboutPageLayout>
   <h3>about</h3>
   <Link href={"/"}>Home</Link>
  </AboutPageLayout>
 );
};

export default AboutPage;
