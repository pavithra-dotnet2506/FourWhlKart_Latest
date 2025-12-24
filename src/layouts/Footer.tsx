const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-sm text-muted-foreground">
          © {year} <span className="font-medium">FourWhlKart</span>. All rights
          reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted-foreground">
            {/* Built with React, TypeScript & .NET */}
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="text-xs text-gray-500 -mt-0.5">
//       <hr />
//       Copyright © 2025 FourWhlKart Enterprise Services, LLC
//     </div>
//   );
// };

// export default Footer;
