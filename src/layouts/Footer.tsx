const Footer = () => {
  const year = new Date().getFullYear();

  return (
    // <footer className="border-t bg-background">
    //   <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
    //     {/* Left */}
    //     <p className="text-sm text-muted-foreground">
    //       © {year} <span className="font-medium">FourWhlKart</span>. All rights
    //       reserved.
    //     </p>
    //   </div>
    // </footer>

    <footer className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr />
        <div className="flex items-center gap-4 py-3">
          <p className="text-sm text-muted-foreground">
            © {year} <span className="font-medium">FourWhlKart</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
