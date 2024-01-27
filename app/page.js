import React from "react";
import { ThemeProvider } from "next-themes";
import DashboardLayout from "@/components/layout/DashboardLayout";

const page = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {/* enableSystem */}
      <DashboardLayout />
    </ThemeProvider>
  );
};

export default page;

// import React from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

// import DashboardLayout from "@/components/layout/DashboardLayout";

// const page = ({ DashboardLayout, pageProps }) => {
//   return (
//     <NextThemesProvider attribute="class" defaultTheme="dark">
//       {/* defaultTheme="system" */}
//       <DashboardLayout {...pageProps} />
//     </NextThemesProvider>
//   );
// };

// export default page;
