import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
 title: "...",
 description: "...",
};

const AboutPageLayout = ({ children }: { children: React.ReactNode }) => {
 return <>{children}</>;
};

export default AboutPageLayout;
