import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Stack,
  Avatar,
} from "@mui/material";
import {
  RocketLaunch,
  // Contract,
  HowToVote,
  Calculate,
  School,
  Verified,
  Analytics,
  Code,
  Storage,
  Api,
  Web,
  Html,
  Memory,
  GitHub,
  AccountTree,
} from "@mui/icons-material";
import LinkIcon from '@mui/icons-material/Link';

const ExperienceSection = () => {
  // Technology skills data
  const techStack = [
    { name: "Web3", icon: <AccountTree />, color: "#6e3bd8" },
    // { name: "Smart Contracts", icon: <Contract />, color: "#a53173" },
    { name: "Smart Contracts", icon: <LinkIcon />, color: "#a53173" },
    { name: "Git/GitHub", icon: <GitHub />, color: "#2d3337" },
    { name: "MERN", icon: <Code />, color: "#006b60" },
    { name: "Node.js", icon: <Storage />, color: "#6e3bd8" },
    { name: "REST API", icon: <Api />, color: "#a53173" },
    { name: "JavaScript", icon: <Code />, color: 'yellow' },
    { name: "HTML", icon: <Html />, color: "#006b60" },
    { name: "Assembly Language", icon: <Memory />, color: "#2d3337" },
    { name: "Semantic HTML", icon: <Web />, color: "#230a1883" },
    { name: "C++", icon: <Code />, color: "#d83b48" },
  ];

  return (
    <Box className="position-relative min-vh-100" sx={{ pt: 12, pb: 20 }}>
      {/* Background Decorative Elements */}
      <Box
        className="ethereal-blur"
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
      <Box
        className="mesh-gradient-bg"
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: -2,
          pointerEvents: "none",
        }}
      />

      <Container fluid="xl">
        {/* Hero Section */}
        <Box className="text-center mb-5">
          <Typography
            variant="overline"
            sx={{
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#6e3bd8",
              opacity: 0.8,
              display: "block",
              mb: 2,
            }}
          >
            Chronicle of Growth
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontFamily: "Plus Jakarta Sans, Lato, sans-serif",
              fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
              letterSpacing: "-0.04em",
              mb: 3,
            }}
          >
            Professional{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #6e3bd8, #a53173)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Journey
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "42rem",
              mx: "auto",
              fontSize: "1.25rem",
              color: "#596063",
              lineHeight: 1.6,
            }}
          >
            A narrative of academic excellence evolving into high-performance blockchain
            engineering and decentralised systems.
          </Typography>
        </Box>

        {/* Timeline Section */}
        {/* Technologies & Tools Timeline */}
        <Box sx={{ mt: 16 }}>
          {/* Technologies & Tools Section */}
          <Box sx={{ my: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: '400',
                fontFamily: "Plus Jakarta Sans, Lato, sans-serif",
                letterSpacing: "-0.02em",
                textAlign: "center",
                mb: 2
              }}
            >
              Technologies &amp; Tools
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#596063",
                textAlign: "center",
                maxWidth: "36rem",
                mx: "auto",
                mb: 6
              }}
            >
              A curated arsenal for building robust, scalable, and innovative solutions.
            </Typography>

            <Box className="d-flex flex-wrap justify-content-center gap-3">
              {techStack.map((tech, idx) => (
                <Chip
                  key={idx}
                  icon={tech.icon}
                  label={tech.name}
                  sx={{
                    px: 2,
                    py: 3,
                    borderRadius: 999,
                    bgcolor: "#ffffff",
                    color: tech.color,
                    fontWeight: 600,
                    fontSize: "1rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                    border: "1px solid rgba(172, 179, 183, 0.15)",
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 24px -8px rgba(110,59,216,0.15)",
                      bgcolor: tech.color,
                      color: "#ffffff",
                      "& .MuiChip-icon": {
                        color: "#ffffff",
                      },
                    },
                    "& .MuiChip-icon": {
                      color: tech.color,
                      transition: "color 0.3s",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box className="position-relative">
            {/* Vertical Connection Line */}
            <Box
              className="d-none d-md-block"
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                background: "linear-gradient(to bottom, rgba(0,107,96,0.4), rgba(110,59,216,0.4), transparent)",
                transform: "translateX(-50%)",
                zIndex: 0,
              }}
            />
            <Box
              className="d-md-none"
              sx={{
                position: "absolute",
                left: 24,
                top: 0,
                bottom: 0,
                width: 2,
                background: "linear-gradient(to bottom, rgba(0,107,96,0.4), rgba(110,59,216,0.4), transparent)",
                zIndex: 0,
              }}
            />

            <Stack spacing={{ xs: 6, md: 8 }}>
              {/* Entry 1: Full‑Stack Foundations (Left) */}
              <Row className="align-items-center">
                <Col md={5} className="d-none d-md-block" />
                <Col md={2} className="d-none d-md-flex justify-content-center">
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: "#ffffff",
                      border: "4px solid #006b60",
                      boxShadow: "0 0 20px rgba(0,107,96,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 10,
                    }}
                  >
                    <Code sx={{ fontSize: 16, color: "#006b60" }} />
                  </Box>
                </Col>
                <Col md={5}>
                  <Paper
                    elevation={0}
                    className="hover-lift"
                    sx={{
                      p: { xs: 4, md: 5 },
                      borderRadius: 4,
                      bgcolor: "#ffffff",
                      boxShadow: "0 20px 40px -10px rgba(45,51,55,0.1)",
                      position: "relative",
                      overflow: "hidden",
                      ml: { xs: 6, md: 0 },
                    }}
                  >
                    <Web
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        fontSize: 100,
                        opacity: 0.05,
                        transition: "opacity 0.3s",
                        ".MuiPaper-root:hover &": { opacity: 0.1 },
                      }}
                    />
                    <Typography
                      variant="overline"
                      fontWeight={700}
                      color="#006b60"
                      letterSpacing="0.1em"
                      display="block"
                      mb={1}
                    >
                      2020 – 2021
                    </Typography>
                    <Typography variant="h5" fontWeight={700} fontFamily="Plus Jakarta Sans, Lato, sans-serif" mb={2}>
                      Full‑Stack Foundations
                    </Typography>
                    <Typography variant="body2" color="#596063" mb={3}>
                      Mastered the core web technologies and backend architecture needed to build complete applications from scratch.
                    </Typography>
                    <Stack spacing={2} mb={3}>
                      <Stack direction="row" spacing={2}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: 2,
                            bgcolor: "rgba(0,107,96,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#006b60",
                            flexShrink: 0,
                          }}
                        >
                          <Html fontSize="small" />
                        </Box>
                        <Box>
                          <Typography fontWeight={700}>HTML5 & CSS3</Typography>
                          <Typography variant="body2" color="#596063">
                            Semantic markup, responsive design, and modern layout techniques.
                          </Typography>
                        </Box>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: 2,
                            bgcolor: "rgba(0,107,96,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#006b60",
                            flexShrink: 0,
                          }}
                        >
                          <Code fontSize="small" />
                        </Box>
                        <Box>
                          <Typography fontWeight={700}>JavaScript (ES6+)</Typography>
                          <Typography variant="body2" color="#596063">
                            Async programming, closures, and functional patterns.
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                      {["HTML", "CSS", "JavaScript", "Responsive Design"].map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: "#e3e9ec",
                            color: "#2d3337",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                            borderRadius: 999,
                            px: 1,
                          }}
                        />
                      ))}
                    </Stack>
                  </Paper>
                </Col>
              </Row>

              {/* Entry 2: MERN Stack & Backend (Right) */}
              <Row className="align-items-center flex-md-row-reverse">
                <Col md={5} className="d-none d-md-block" />
                <Col md={2} className="d-none d-md-flex justify-content-center">
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: "#ffffff",
                      border: "4px solid #a53173",
                      boxShadow: "0 0 20px rgba(165,49,115,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 10,
                    }}
                  >
                    <Storage sx={{ fontSize: 16, color: "#a53173" }} />
                  </Box>
                </Col>
                <Col md={5}>
                  <Paper
                    elevation={0}
                    className="hover-lift"
                    sx={{
                      p: { xs: 4, md: 5 },
                      borderRadius: 4,
                      bgcolor: "#ffffff",
                      boxShadow: "0 20px 40px -10px rgba(45,51,55,0.1)",
                      position: "relative",
                      overflow: "hidden",
                      ml: { xs: 6, md: 0 },
                    }}
                  >
                    <Api
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        fontSize: 100,
                        opacity: 0.05,
                        transition: "opacity 0.3s",
                        ".MuiPaper-root:hover &": { opacity: 0.1 },
                      }}
                    />
                    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                      <Typography
                        variant="overline"
                        fontWeight={700}
                        color="#a53173"
                        letterSpacing="0.1em"
                      >
                        2021 – 2022
                      </Typography>
                      <Chip
                        label="Production Ready"
                        size="small"
                        sx={{
                          bgcolor: "#ffd8e7",
                          color: "#942265",
                          fontWeight: 700,
                          fontSize: "0.6rem",
                          borderRadius: 999,
                          textTransform: "uppercase",
                        }}
                      />
                    </Stack>
                    <Typography variant="h5" fontWeight={700} fontFamily="Plus Jakarta Sans, Lato, sans-serif" mb={2}>
                      MERN Stack & Backend Systems
                    </Typography>
                    <Typography variant="body2" color="#596063" mb={3}>
                      Built and deployed full‑stack applications with React, Node.js, Express, and MongoDB. Designed RESTful APIs and integrated authentication.
                    </Typography>
                    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                      {["React", "Node.js", "Express", "MongoDB", "REST API"].map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: "#e3e9ec",
                            color: "#2d3337",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                            borderRadius: 999,
                            px: 1,
                          }}
                        />
                      ))}
                    </Stack>
                  </Paper>
                </Col>
              </Row>

              {/* Entry 3: Blockchain & Web3 (Left) */}
              <Row className="align-items-center">
                <Col md={5} className="d-none d-md-block" />
                <Col md={2} className="d-none d-md-flex justify-content-center">
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: "#ffffff",
                      border: "4px solid #6e3bd8",
                      boxShadow: "0 0 20px rgba(110,59,216,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 10,
                    }}
                  >
                    <AccountTree sx={{ fontSize: 16, color: "#6e3bd8" }} />
                  </Box>
                </Col>
                <Col md={5}>
                  <Paper
                    elevation={0}
                    className="hover-lift"
                    sx={{
                      p: { xs: 4, md: 5 },
                      borderRadius: 4,
                      bgcolor: "#ffffff",
                      boxShadow: "0 20px 40px -10px rgba(45,51,55,0.1)",
                      position: "relative",
                      overflow: "hidden",
                      ml: { xs: 6, md: 0 },
                    }}
                  >
                    <LinkIcon
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        fontSize: 100,
                        opacity: 0.05,
                        transition: "opacity 0.3s",
                        ".MuiPaper-root:hover &": { opacity: 0.1 },
                      }}
                    />
                    <Typography
                      variant="overline"
                      fontWeight={700}
                      color="#6e3bd8"
                      letterSpacing="0.1em"
                      display="block"
                      mb={1}
                    >
                      2022 – 2023
                    </Typography>
                    <Typography variant="h5" fontWeight={700} fontFamily="Plus Jakarta Sans, Lato, sans-serif" mb={2}>
                      Blockchain & Web3 Development
                    </Typography>
                    <Typography variant="body2" color="#596063" mb={3}>
                      Dived into decentralized technologies: smart contracts, dApps, and Ethereum tooling.
                    </Typography>
                    <Stack spacing={2} mb={3}>
                      <Stack direction="row" spacing={2}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: 2,
                            bgcolor: "rgba(110,59,216,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#6e3bd8",
                            flexShrink: 0,
                          }}
                        >
                          <LinkIcon fontSize="small" />
                        </Box>
                        <Box>
                          <Typography fontWeight={700}>Smart Contracts (Solidity)</Typography>
                          <Typography variant="body2" color="#596063">
                            Developed and tested secure contracts for voting and token systems.
                          </Typography>
                        </Box>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: 2,
                            bgcolor: "rgba(110,59,216,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#6e3bd8",
                            flexShrink: 0,
                          }}
                        >
                          <GitHub fontSize="small" />
                        </Box>
                        <Box>
                          <Typography fontWeight={700}>Web3.js & Ethers</Typography>
                          <Typography variant="body2" color="#596063">
                            Integrated blockchain functionality into frontend applications.
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                      {["Solidity", "Ethereum", "Web3.js", "Smart Contracts"].map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: "#e3e9ec",
                            color: "#2d3337",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                            borderRadius: 999,
                            px: 1,
                          }}
                        />
                      ))}
                    </Stack>
                  </Paper>
                </Col>
              </Row>

              {/* Entry 4: Systems & Low‑Level (Right) */}
              <Row className="align-items-center flex-md-row-reverse">
                <Col md={5} className="d-none d-md-block" />
                <Col md={2} className="d-none d-md-flex justify-content-center">
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: "#ffffff",
                      border: "4px solid #2d3337",
                      boxShadow: "0 0 20px rgba(45,51,55,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 10,
                    }}
                  >
                    <Memory sx={{ fontSize: 16, color: "#2d3337" }} />
                  </Box>
                </Col>
                <Col md={5}>
                  <Paper
                    elevation={0}
                    className="hover-lift"
                    sx={{
                      p: { xs: 4, md: 5 },
                      borderRadius: 4,
                      bgcolor: "#ffffff",
                      boxShadow: "0 20px 40px -10px rgba(45,51,55,0.1)",
                      position: "relative",
                      overflow: "hidden",
                      ml: { xs: 6, md: 0 },
                    }}
                  >
                    <Memory
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        fontSize: 100,
                        opacity: 0.05,
                        transition: "opacity 0.3s",
                        ".MuiPaper-root:hover &": { opacity: 0.1 },
                      }}
                    />
                    <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                      <Typography
                        variant="overline"
                        fontWeight={700}
                        color="#2d3337"
                        letterSpacing="0.1em"
                      >
                        2023 – Present
                      </Typography>
                      <Chip
                        label="Deep Dive"
                        size="small"
                        sx={{
                          bgcolor: "#e3e9ec",
                          color: "#2d3337",
                          fontWeight: 700,
                          fontSize: "0.6rem",
                          borderRadius: 999,
                          textTransform: "uppercase",
                        }}
                      />
                    </Stack>
                    <Typography variant="h5" fontWeight={700} fontFamily="Plus Jakarta Sans, Lato, sans-serif" mb={2}>
                      Systems Programming & Performance
                    </Typography>
                    <Typography variant="body2" color="#596063" mb={3}>
                      Exploring lower‑level concepts for performance‑critical applications and deeper understanding of computing.
                    </Typography>
                    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                      {["C++", "Assembly", "Memory Management", "Algorithms"].map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: "#e3e9ec",
                            color: "#2d3337",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                            borderRadius: 999,
                            px: 1,
                          }}
                        />
                      ))}
                    </Stack>
                  </Paper>
                </Col>
              </Row>
            </Stack>
          </Box>
        </Box>

        {/* Featured Projects Grid (Bento Style) */}
        <Box sx={{ mt: 10 }}>
          <Row className="g-4">
            {/* Large Smart Contract Card */}
            <Col lg={8}>
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  height: "100%",
                  minHeight: 280,
                  borderRadius: 4,
                  bgcolor: "#6e3bd8",
                  color: "#fdf7ff",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  boxShadow: "0 20px 40px -10px rgba(110,59,216,0.3)",
                }}
              >
                <Box
                  component="img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFCeIw0x_uM09BwwBA3uHL3H0bN0zr9uCdWfrIoQQhz6GWXPeQhwDZogS5QE7KA4Ly8Mh3lbV_dLcUKa5AxKGMdbjKyy_uDr7yG5z2aNqrdFF_fBPPjWeeF5NDmQr_7NJp3XLyPf8IF3oyrCH_HO1mjK8Wewv2p0REQjFEYqIRDXCszOniB7wGTb3yLLrvcsgXQaYEtw7hp49NIFnkK6WTZy2VwYzW7tHhQ30dXWAM_30redNeV7D0RpLGJMPlqpNmG1quwnAZfR4"
                  alt="Solidity code"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    mixBlendMode: "overlay",
                    opacity: 0.3,
                  }}
                />
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography variant="overline" fontWeight={700} sx={{ opacity: 0.8, display: "block", mb: 1 }}>
                    Technical Deep Dive
                  </Typography>
                  <Typography variant="h3" fontWeight={800} fontFamily="Plus Jakarta Sans, Lato, sans-serif" mb={2}>
                    Secure Smart Contract Architecture
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: "36rem" }}>
                    Building robust protocols that prioritize security without sacrificing gas efficiency.
                  </Typography>
                </Box>
              </Paper>
            </Col>

            {/* Audited Logic Card */}
            <Col lg={4}>
              <Paper
                elevation={0}
                className="hover-scale"
                sx={{
                  p: 4,
                  height: "100%",
                  minHeight: 280,
                  borderRadius: 4,
                  bgcolor: "#dde3e7",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    boxShadow: 8,
                    transition: "transform 0.3s",
                    ".MuiPaper-root:hover &": { transform: "scale(1.1)" },
                  }}
                >
                  <Verified sx={{ fontSize: 40, color: "#a53173" }} />
                </Box>
                <Typography variant="h5" fontWeight={700} fontFamily="Plus Jakarta Sans, Lato, sans-serif" gutterBottom>
                  Audited Logic
                </Typography>
                <Typography variant="body2" color="#596063">
                  Zero critical vulnerabilities across all deployed internship modules.
                </Typography>
              </Paper>
            </Col>

            {/* Impact Driven Card */}
            <Col md={6} lg={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  minHeight: 280,
                  borderRadius: 4,
                  bgcolor: "#ffffff",
                  border: "1px solid rgba(172, 179, 183, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Analytics sx={{ fontSize: 32, color: "#6e3bd8" }} />
                <Box>
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    Impact Driven
                  </Typography>
                  <Typography variant="body2" color="#596063">
                    Focusing on real-world utility in decentralized finance and governance.
                  </Typography>
                </Box>
              </Paper>
            </Col>

            {/* Academic Integrity Card */}
            <Col md={6} lg={8}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  minHeight: 280,
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #e3e9ec, #eaeef1)",
                  border: "1px solid rgba(172, 179, 183, 0.1)",
                }}
              >
                <Row className="align-items-center h-100 g-4">
                  <Col md={5}>
                    <Box
                      sx={{
                        aspectRatio: "16/9",
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvTpJCNtFwo69q3ZtlXLVlvI4uEQs5GsVJN4kKDp1O_r8bmzTLpHBBb_kCMhJP_JwIoG5XR2OZDGQtqeGcFnceHudnV7wEK8t0DhHSww4gCPHRKnDppVxhLkWINO3NP_baEoA7dFOu56UzOBjjzw7Ginjj7rV_U055cfQUO6gM9Ynq6a1TYb8Ec5zX5SbpzJNVVFW2AEMJ4_dEcBZ1fQJlHob2NeGXSVVyOpv6azHvmCWqCu6W29OSG9ZOkB8cAVk6zWp-G5kb-Gc"
                        alt="Academic progress visualization"
                        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Box>
                  </Col>
                  <Col md={7}>
                    <Typography variant="h5" fontWeight={800} fontFamily="Plus Jakarta Sans, Lato, sans-serif" mb={2}>
                      Academic Integrity
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#596063", lineHeight: 1.6 }}>
                      Top 5% of class in Systems Programming and Network Security. Continuously pushing
                      boundaries of theoretical CS.
                    </Typography>
                  </Col>
                </Row>
              </Paper>
            </Col>
          </Row>
        </Box>


      </Container>
    </Box>
  );
};

export default ExperienceSection;