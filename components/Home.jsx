import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
  Button
} from "@mui/material";
import {
  Token,
  Javascript,
  Psychology,
  Storage,
  Terminal,
  Security,
  Speed,
  ArrowForward,
  SmartButton,
} from "@mui/icons-material";
import { handleNavClick } from "../customHooks/trackSection";

const HomeSection = () => {
  return (
    <Box className="mesh-gradient" sx={{ position: "relative", minHeight: "100vh", padding: '10px 0 10px 0', mt: 4 }}>
      {/* Ambient Glows */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: 500,
          height: 500,
          bgcolor: "#4647d3",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.4,
          zIndex: -10,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: 600,
          height: 600,
          bgcolor: "#53ddfc",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.4,
          zIndex: -10,
        }}
      />

      {/* Hero Section */}
      <Container fluid="xl" sx={{ pt: 10, pb: 16 }}>
        <Row className="align-items-center g-5">
          {/* Left Content Column */}
          <Col lg={7} className="text-center text-lg-start">
            <Box sx={{ zIndex: 10 }}>
              <Chip
                label="Available for new projects"
                icon={
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "#8126cf",
                      animation: "pulse 1.5s infinite",
                      "@keyframes pulse": {
                        "0%": { opacity: 1 },
                        "50%": { opacity: 0.5 },
                        "100%": { opacity: 1 },
                      },
                    }}
                  />
                }
                sx={{
                  px: 2,
                  py: 2.5,
                  borderRadius: "16px",
                  bgcolor: "rgba(229, 198, 255, 0.3)",
                  color: "#6900b4",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  fontSize: "0.8rem",
                  backdropFilter: "blur(8px)",
                  mb: 4,
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  fontFamily: "Plus Jakarta Sans, Lato, sans-serif",
                  fontSize: { xs: "2rem", md: "3.5rem", lg: "4rem" },
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  mb: 3,
                }}
              >
                Full Stack Web <br />
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(90deg, #4647d3, #8126cf, #53ddfc)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Blockchain
                </Box>{" "}
                Developer
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.5rem" },
                  lineHeight: 1.6,
                  color: "#595c5e",
                  maxWidth: "42rem",
                  mx: { xs: "auto", lg: 0 },
                  mb: 5,
                }}
              >
                I build scalable web apps, smart contracts, and AI-powered solutions that
                transform complex logic into fluid digital experiences.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                sx={{
                  justifyContent: { xs: "center", lg: "flex-start" },
                  mb: 6
                }}
              >
                <Button
                  className="px-5 py-3 rounded-xl fw-bold border-0"
                  style={{
                    background: "linear-gradient(90deg, #4647d3, #8126cf)",
                    color: "#f4f1ff",
                    boxShadow: "0 40px 80px -10px rgba(70, 71, 211, 0.3)",
                    fontSize: "1.1rem",
                  }}
                  onClick={
                    () => handleNavClick('Projects')
                  }
                >
                  View Projects
                  <ArrowForward sx={{ ml: 1, fontSize: 20 }} />
                </Button>
                <Button
                  className="glass-panel px-5 py-3 rounded-xl fw-bold"
                  style={{
                    color: "#2c2f31",
                    border: "1px solid rgba(171, 173, 175, 0.1)",
                    boxShadow: "0 20px 40px -10px rgba(217, 221, 224, 0.1)",
                    fontSize: "1.1rem",
                  }}
                >
                  Hire Me
                </Button>
              </Stack>

              {/* Tech Stack Badges */}
              <Stack
                direction="row"
                spacing={4}
                useFlexGap
                sx={{
                  justifyContent: { xs: "center", lg: "flex-start" },
                  paddingTop: '10px',
                  paddingBottom: '40px',
                  opacity: 0.6,
                  flexWrap: "wrap",
                  filter: "grayscale(1)",
                  transition: "all 0.5s",
                  "&:hover": { opacity: 1, filter: "grayscale(0)" },
                }}
              >
                {[
                  { icon: Token, label: "Ethereum" },
                  { icon: Javascript, label: "TypeScript" },
                  { icon: Psychology, label: "OpenAI" },
                  { icon: Storage, label: "PostgreSQL" },
                ].map((item, idx) => (
                  <Stack key={idx} direction="row" spacing={1}
                    sx={{
                      alignItems: "center"
                    }}>
                    <item.icon sx={{ fontSize: 20 }} />
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: '700',
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "#595c5e"
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Col>

          {/* Right Visual Column */}
          <Col lg={5}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "1/1",
                maxWidth: "36rem",
                mx: "auto",
              }}
            >
              {/* Decorative glow */}
              <Box
                sx={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 128,
                  height: 128,
                  bgcolor: "rgba(83, 221, 252, 0.4)",
                  borderRadius: "50%",
                  filter: "blur(64px)",
                }}
              />

              {/* Main Container */}
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 80px 100px -20px rgba(44, 47, 49, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Blurred background layer */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom right, rgba(255,255,255,0.4), rgba(255,255,255,0.1))",
                    backdropFilter: "blur(24px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    zIndex: 0,
                  }}
                />

                {/* Image + Floating Cards */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 2,
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxYjeq1A7WFb_MXXPFBDZVlcejK6ARaXykEkrIW1ndayiAJnVETfYF4ONK0r_SMoWZ-LcW8C1SIrNtDNyQUCzFJy9SCgYVQcArfNi6tQ96pZPlSyeEJK5FHAYvnTq_mz8IQWZ3aj-ImIih3zel0zhL5EHRtgiYcUuu-dGF1R3D-N_C_oSqt2HUdnAlf4Eboa5eZl8EZLe2WsVdU6w39uSINYBlDrUORxlpO8y0BD2vKB2f98aOkHqzbHFyAcsibKIuOrxXtq3wPgw"
                      alt="Abstract iridescent"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 8,
                        mixBlendMode: "overlay",
                        opacity: 0.8,
                      }}
                    />

                    {/* Floating Glass Card 1 */}
                    <Paper
                      className="glass-panel floating-card-1"
                      elevation={24}
                      sx={{
                        position: "absolute",
                        top: "25%",
                        left: "25%",
                        width: "75%",
                        height: "75%",
                        borderRadius: 2,
                        border: "1px solid rgba(255,255,255,0.2)",
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack direction="row" sx={{
                        justifyContent: "space-between"
                      }}>
                        <Chip
                          label="BLOCKCHAIN.V2"
                          size="small"
                          sx={{
                            bgcolor: "#e5e9eb",
                            color: "#595c5e",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            fontSize: "0.6rem",
                            borderRadius: 999,
                          }}
                        />
                      </Stack>
                      <Box>
                        <Box
                          sx={{
                            width: "50%",
                            height: 4,
                            bgcolor: "rgba(70, 71, 211, 0.2)",
                            borderRadius: 999,
                            mb: 1,
                          }}
                        />
                        <Box
                          sx={{
                            width: "75%",
                            height: 4,
                            bgcolor: "rgba(70, 71, 211, 0.1)",
                            borderRadius: 999,
                          }}
                        />
                      </Box>
                    </Paper>

                    {/* Floating Glass Card 2 */}
                    <Paper
                      className="glass-panel floating-card-2"
                      elevation={24}
                      sx={{
                        position: "absolute",
                        bottom: "25%",
                        right: "25%",
                        width: "50%",
                        height: "50%",
                        borderRadius: 2,
                        border: "1px solid rgba(255,255,255,0.2)",
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 2,
                      }}
                    >
                      <SmartButton sx={{ fontSize: 48, color: "#8126cf" }} />
                      <Typography
                        variant="caption"
                        fontWeight={900}
                        letterSpacing="-0.02em"
                        color="#595c5e"
                      >
                        GENERATE SMART CONTRACT
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Col>
        </Row>
      </Container>

      {/* Bento Stats Grid */}
      <Container fluid="xl" sx={{ pb: 16 }}>
        <Row className="g-4">
          <Col md={6}>
            <Paper
              elevation={0}
              className="hover-lift"
              sx={{
                p: 5,
                height: 280,
                bgcolor: "#ffffff",
                borderRadius: 4,
                border: "1px solid rgba(171, 173, 175, 0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Terminal sx={{ fontSize: 40, color: "#4647d3" }} />
              <Box>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  fontFamily="Plus Jakarta Sans, Lato, sans-serif"
                  letterSpacing="-0.02em"
                  gutterBottom
                >
                  50+ Projects Shipped
                </Typography>
                <Typography variant="body2" color="#595c5e">
                  From high-frequency trading bots to sleek consumer SaaS platforms.
                </Typography>
              </Box>
            </Paper>
          </Col>
          <Col md={3}>
            <Paper
              elevation={0}
              className="hover-lift"
              sx={{
                p: 5,
                height: 280,
                bgcolor: "#e5c6ff",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Security sx={{ fontSize: 40, color: "#6900b4" }} />
              <Typography
                variant="h5"
                fontWeight={700}
                fontFamily="Plus Jakarta Sans, Lato, sans-serif"
                letterSpacing="-0.02em"
                color="#6900b4"
              >
                Audited Contracts
              </Typography>
            </Paper>
          </Col>
          <Col md={3}>
            <Paper
              elevation={0}
              className="hover-lift"
              sx={{
                p: 5,
                height: 280,
                bgcolor: "#53ddfc",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Speed sx={{ fontSize: 40, color: "#004b58" }} />
              <Typography
                variant="h5"
                fontWeight={700}
                fontFamily="Plus Jakarta Sans, Lato, sans-serif"
                letterSpacing="-0.02em"
                color="#004b58"
              >
                Ultra Scalable
              </Typography>
            </Paper>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default HomeSection;