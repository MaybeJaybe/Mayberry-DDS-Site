function Footer() {
  return (
    <footer className="Footer">
      <img
        src="./images/MayberryDDSLogo.png"
        className="Footer-logo"
        alt="Mayberry DDS Logo"
      />
      <p className="Footer-tagline">Be Good!</p>
      <p className="Footer-copy">
        &copy; {new Date().getFullYear()} Paul Mayberry D.D.S. &middot; Ridgecrest, CA
      </p>
    </footer>
  );
}

export default Footer;
