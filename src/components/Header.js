function Header() {
  return (
    <header className="App-header">
      <img
        className="Header-logo"
        src="./images/MayberryDDSLogo.png"
        alt="Mayberry DDS Logo"
      />
      <div className="Header-text">
        <h1 className="App-title">Paul Mayberry D.D.S.</h1>
        <address className="Address">
          <p>501 W Joyner Ave. <small>Suite A</small></p>
          <p>Ridgecrest, CA 93555</p>
        </address>
      </div>
    </header>
  );
}

export default Header;
