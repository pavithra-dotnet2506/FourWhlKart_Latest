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
      </div>
    </footer>
  );
};
export default Footer;
