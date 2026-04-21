import {
  Box,
  Typography,
  Stack,
  Button
} from "@mui/material";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useScrollSpy } from '../customHooks/trackSection.jsx';
import '../Css/header.css'

export const Header = () => {

  const sectionIds = ['Home', 'About', 'Journey', 'Skills', 'Projects', 'Services', 'Contact'];
  const activeSection = useScrollSpy(sectionIds);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 10,
        zIndex: 50,
        mx: "auto",
        width: "91.666667%",
        backdropFilter: "blur(20px)",
        background: "rgba(255, 255, 255, 0.7)",
        borderRadius: '0 0 25px 25px',
        boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
        px: { xs: 2, md: 6 },
        py: 1.5,
      }}
    >
      <Container fluid>
        <Row className="align-items-center">
          <Col
            xs={6}
            md={4}
            // role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('Home')}
          // sx={{ }}
          >
            <Typography
              variant="h5"
              onClick={() => handleNavClick('Home')}
              sx={{
                cursor: 'pointer',
                fontWeight: 900,
                fontFamily: '"Lato", sans-serif',
                letterSpacing: "-0.02em",
                color: "#2c2f31",
                width: '6em',
                textAlign: 'start',
                transition: "box-shadow 0.3s ease, border-radius 0.3s ease-In-Out",
                "&:hover": {
                  textAlign: 'center',
                  borderRadius: '0 0 15px 15px',
                  boxShadow: "0 4px 20px rgba(21, 17, 17, 0.29)",
                  width: '6em'
                }
              }}
            >
              <span className="firstletter">Raja</span>{' '}
              <span className="firstletter">Muqeet</span>
            </Typography>
          </Col>

          <Col md={5} className="d-none d-md-block">
            <Stack direction="row" spacing={4} sx={{
              justifyContent: "center"
            }}>
              {sectionIds.map(
                (item) => (
                  <Typography
                    key={item}
                    role='button'
                    variant="body2"
                    sx={{
                      // fontWeight: item === "Home" ? 700 : 500,
                      // borderBottom: item === "Home" ? "2px solid" : "none",
                      // color: item === "Home" ? "#4647d3" : "#595c5e",
                      fontWeight: activeSection === item ? 700 : 500,
                      color: activeSection === item ? '#4647d3' : '#595c5e',
                      borderBottom: activeSection === item ? '2px solid' : 'none',
                      borderColor: "rgba(70, 71, 211, 0.3)",
                      // cursor: "pointer",
                      transition: "all 0.2s",
                      pb: 0.5,
                      fontFamily: "Plus Jakarta Sans, Lato, sans-serif",
                      "&:hover": { transform: "scale(1.05)", color: "#2c2f31" },
                    }}

                    onClick={
                      () => handleNavClick(item)
                    }
                  >
                    {/* <NavLink to={`/${item}`}> */}
                    {/* {item} */}
                    {/* </NavLink > */}
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Typography>
                )
              )}
            </Stack>
          </Col>

          <Col xs={3} md={3} className="text-end">
            <Button
              variant="contained"
              sx={{
                px: 3,
                py: 1,
                borderRadius: "999px",
                fontWeight: 700,
                background: "#4647d3",
                boxShadow: "0 8px 20px rgba(70, 71, 211, 0.2)",
                color: "#f4f1ff",
                textTransform: "none",
                "&:hover": {
                  background: '#8126cf',
                  boxShadow: "0 8px 20px rgba(70, 71, 211, 0.4)",
                },
              }}
              onClick={
                () => handleNavClick('Contact')
              }
            >
              Hire Me
            </Button>
          </Col>
        </Row>
      </Container>
    </Box >
  );
};

export const Footer = () => {
  return (
    <Box component="footer" sx={{ marginTop: 15, py: 6, px: 6, bgcolor: "transparent" }}>
      <Container fluid="xl">
        <Row className="align-items-center gy-4">
          <Col md={4}>
            <Typography
              variant="h6"
              fontWeight={900}
              color="#4647d3"
              fontFamily="Plus Jakarta Sans, Lato, sans-serif"
              letterSpacing="-0.02em"
            >
              DIGITAL ALCHEMIST
            </Typography>
          </Col>
          <Col md={4}>
            <Stack direction="row" spacing={4} sx={{
              justifyContent: "center"
            }}>
              {["LinkedIn", "GitHub", "Dribbble", "Contact"].map((link) => (
                <Typography
                  key={link}
                  variant="caption"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                  color="#747779"
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.2s",
                    "&:hover": { color: "#4647d3", transform: "translateY(-2px)" },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Stack>
          </Col>
          <Col md={4} className="text-md-end">
            <Typography
              variant="caption"
              textTransform="uppercase"
              letterSpacing="0.1em"
              color="#747779"
            >
              © 2024 DIGITAL ALCHEMIST. BUILT WITH REFRACTIVE FLUIDITY.
            </Typography>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};