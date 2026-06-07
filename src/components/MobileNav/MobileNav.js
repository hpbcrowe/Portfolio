import React from "react";
import { User, Code, Portfolio, Education } from "@carbon/icons-react";
import { useNavigate } from "react-router-dom";

import { Container, Spacer, NavWrapper, NavButton } from "./styles";

const MobileNav = () => {
  const navigate = useNavigate();

  const navItems = [
    { icon: User, label: "Me", path: "/" },
    { icon: Code, label: "Projects", path: "/projects" },
    { icon: Portfolio, label: "Work", path: "/work" },
    { icon: Education, label: "Education", path: "/education" },
  ];

  return (
    <Container>
      <Spacer />
      <NavWrapper>
        {navItems.map((item) => (
          <NavButton
            key={item.path}
            onClick={() => navigate(item.path)}
            title={item.label}
            aria-label={item.label}
          >
            <item.icon size={24} />
          </NavButton>
        ))}
      </NavWrapper>
    </Container>
  );
};

export default MobileNav;
