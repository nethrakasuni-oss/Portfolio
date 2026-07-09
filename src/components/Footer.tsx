function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 py-8 text-center text-sm text-white/50">
      © {new Date().getFullYear()} Nethra Weerasingha. Built with React, TypeScript and
      Tailwind CSS.
    </footer>
  );
}

export default Footer;