import React from "react";
import "./Head2.css"; // Import CSS file
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assects/images/logo.png";

const Header = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "How it Works", link: "/how-it-works" },
    { name: "Project", link: "/projects" },
    { name: "Blogs", link: "/blogs" },
    { name: "DIY Worktops", link: "/diy-worktops" }
  ];

  return (
    <header>
      {/* Top Section */}
      <Navbar expand="lg" className="bg-white px-4 shadow-sm contsn-fluid">
        <Container fluid className="">
          {/* Logo */}
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="MAI Logo"
              className="logo"
            />
          </Navbar.Brand>

          {/* Right Side Options */}
          <div className="d-flex align-items-center">
            <Button variant="light" className="me-3 post-text">Post a Project</Button>
            <FaShoppingCart className="cart-icon me-3 text_color" />
            <Nav.Link href="/login" className="fw-bolder text_color">Login</Nav.Link>
            <Nav.Link href="/signup" className="fw-bolder ms-2 text_color">Sign Up</Nav.Link>
          </div>
        </Container>
      </Navbar>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <Container className="d-flex justify-content-between align-items-center">
          <span className="website-link">WWW.MYPROJECT.AI</span>
          <Nav className="ms-auto">
            {menuItems.map((item, index) => (
              <Nav.Link key={index} as="div" className="padding-styles">
                <a href={item.link} className="nav-item">
                <div className="subnew-vertical-line"></div>

                  {item.name}
                </a>
              </Nav.Link>
            ))}
          </Nav>

        </Container>
      </div>
    </header>
  );
};

export default Header;
