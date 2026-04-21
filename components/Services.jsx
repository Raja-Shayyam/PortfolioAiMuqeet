import React from "react";
import { Container, Row, Col, Button as BsButton } from "react-bootstrap";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import {
  DesktopWindows,
  SmartToy,
  Api,
  Storage as StorageIcon,
  Token,
  BugReport,
  ArrowOutward,
  // Fluid,
} from "@mui/icons-material";

const ServicesSection = () => {
  return (
    <Box className="mesh-gradient-bg min-vh-100 py-3">
      <Container fluid="xl" sx={{ pt: 12, pb: 6 }}>
        {/* Hero / Introduction Section */}
        <Row className="align-items-end mb-5">
          <Col md={8} lg={9}>
            <Stack spacing={2}>
              <Chip
                label="Expertise Overview"
                size="small"
                sx={{
                  width: "fit-content",
                  px: 2,
                  py: 0.5,
                  borderRadius: 999,
                  bgcolor: "#e5c6ff",
                  color: "#6900b4",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  fontSize: "0.8rem",
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontFamily: "Plus Jakarta Sans, Lato, sans-serif",
                  fontSize: { xs: "3rem", md: "4.5rem", lg: "6rem" },
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                }}
              >
                Crafting Digital{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #4647d3, #8126cf, #006576)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Alchemy
                </Box>
                .
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.25rem",
                  color: "#595c5e",
                  maxWidth: "32rem",
                  lineHeight: 1.6,
                }}
              >
                I transform complex problems into elegant, fluid digital experiences. My approach
                blends technical precision with refractive aesthetics.
              </Typography>
            </Stack>
          </Col>
          <Col md={4} lg={3} className="d-none d-md-block">
            <Paper
              className="glass-card"
              elevation={0}
              sx={{
                width: 192,
                height: 192,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: 24,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.1,
                }}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBPMWagz7XY_rlDokB9J1Pd5Yh4lsB8UQ9cjX0H-Nl8nlVhVN1mOmEp3cerFTXoKAILN65nT6lF4wo0Wc9BlYJ700lB7lQ844Pd_C1T3QRwteM6yaZsFECID0sUGodbX544HSX3PzBSDYGaQ8wpd1aWPiRVEKzvPKm-uGr06g7ZJ4y2tr5RBRCz-NhQf2dHes1cCVLuusEDiSzSbppkOUU9BviS-FyxkEJKFHE948Z5ojvv0pbpOAkLBtZg_ZbJJd12MVOtxXrxA"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              {/* <Fluid sx={{ fontSize: 48, color: "#4647d3", position: "relative", zIndex: 1 }} /> */}
              fluid
            </Paper>
          </Col>
        </Row>

        {/* Services Grid: Asymmetric Bento Style */}
        <Row className="g-4">
          {/* Card 1: Full Stack Web Development */}
          <Col lg={6}>
            <Paper
              className="glass-card hover-scale"
              elevation={0}
              sx={{
                p: 5,
                height: "100%",
                borderRadius: 4,
                boxShadow: "0 40px 80px -10px rgba(44,47,49,0.04)",
              }}
            >
              <Stack spacing={4}>
                <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(147, 150, 255, 0.2)",
                      color: "#4647d3",
                    }}
                  >
                    <DesktopWindows sx={{ fontSize: 36 }} />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#595c5e", opacity: 0.5, fontFamily: "monospace" }}
                  >
                    01
                  </Typography>
                </Stack>
                <Typography variant="h4" fontWeight={700} fontFamily="Plus Jakarta Sans, Lato, sans-serif" letterSpacing="-0.02em">
                  Full Stack Web Development
                </Typography>
                <Typography variant="body2" color="#595c5e" lineHeight={1.6}>
                  End-to-end architecture from refractive frontend interfaces to scalable server-side logic.
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                  {["React", "Node.js", "Next.js"].map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: "#e3e9ec",
                        color: "#2c2f31",
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        borderRadius: 1,
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Paper>
          </Col>

          {/* Card 2: AI Chatbot Development */}
          <Col lg={6}>
            <Paper
              className="glass-card hover-scale"
              elevation={0}
              sx={{
                p: 5,
                height: "100%",
                borderRadius: 4,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 40px 80px -10px rgba(44,47,49,0.04)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -32,
                  right: -32,
                  width: 160,
                  height: 160,
                  bgcolor: "rgba(83, 221, 252, 0.05)",
                  borderRadius: "50%",
                  filter: "blur(48px)",
                  transition: "background-color 0.3s",
                  ".MuiPaper-root:hover &": {
                    bgcolor: "rgba(83, 221, 252, 0.1)",
                  },
                }}
              />
              <Stack spacing={4} sx={{ position: "relative", zIndex: 1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(83, 221, 252, 0.3)",
                      color: "#005867",
                    }}
                  >
                    <SmartToy sx={{ fontSize: 36 }} />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#595c5e", opacity: 0.5, fontFamily: "monospace" }}
                  >
                    02
                  </Typography>
                </Stack>
                <Typography variant="h4" fontWeight={700} fontFamily="Plus Jakarta Sans, Lato, sans-serif" letterSpacing="-0.02em">
                  AI Chatbot Development
                </Typography>
                <Typography variant="body2" color="#595c5e" lineHeight={1.6}>
                  Integrating LLMs and conversational intelligence into your workflow for seamless automation.
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {["OpenAI", "LangChain", "Python"].map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: "#e3e9ec",
                        color: "#2c2f31",
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        borderRadius: 1,
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Paper>
          </Col>

          {/* Card 3: API Development */}
          <Col md={6} lg={4}>
            <Paper
              className="glass-card hover-scale"
              elevation={0}
              sx={{
                p: 5,
                height: "100%",
                borderRadius: 4,
                boxShadow: "0 40px 80px -10px rgba(44,47,49,0.04)",
              }}
            >
              <Stack spacing={4}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(229, 198, 255, 0.4)",
                      color: "#740ec2",
                    }}
                  >
                    <Api sx={{ fontSize: 36 }} />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#595c5e", opacity: 0.5, fontFamily: "monospace" }}
                  >
                    03
                  </Typography>
                </Stack>
                <Typography variant="h5" fontWeight={700} fontFamily="Plus Jakarta Sans, Lato, sans-serif" letterSpacing="-0.02em">
                  API Development
                </Typography>
                <Typography variant="body2" color="#595c5e" lineHeight={1.6}>
                  Robust, secure, and documented RESTful and GraphQL endpoints for fluid data flow.
                </Typography>
              </Stack>
            </Paper>
          </Col>

          {/* Card 4: Database Design */}
          <Col md={6} lg={4}>
            <Paper
              className="glass-card hover-scale"
              elevation={0}
              sx={{
                p: 5,
                height: "100%",
                borderRadius: 4,
                boxShadow: "0 40px 80px -10px rgba(44,47,49,0.04)",
              }}
            >
              <Stack spacing={4}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(171, 173, 175, 0.1)",
                      color: "#2c2f31",
                    }}
                  >
                    <StorageIcon sx={{ fontSize: 36 }} />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#595c5e", opacity: 0.5, fontFamily: "monospace" }}
                  >
                    04
                  </Typography>
                </Stack>
                <Typography variant="h5" fontWeight={700} fontFamily="Plus Jakarta Sans, Lato, sans-serif" letterSpacing="-0.02em">
                  Database Design
                </Typography>
                <Typography variant="body2" color="#595c5e" lineHeight={1.6}>
                  Architecting efficient data structures using SQL and NoSQL for high-performance retrieval.
                </Typography>
              </Stack>
            </Paper>
          </Col>

          {/* Card 5: Blockchain Development */}
          <Col lg={4}>
            <Paper
              className="glass-card hover-scale"
              elevation={0}
              sx={{
                p: 5,
                height: "100%",
                borderRadius: 4,
                boxShadow: "0 40px 80px -10px rgba(44,47,49,0.04)",
              }}
            >
              <Stack spacing={4}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(70, 71, 211, 0.1)",
                      color: "#4647d3",
                    }}
                  >
                    <Token sx={{ fontSize: 36 }} />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#595c5e", opacity: 0.5, fontFamily: "monospace" }}
                  >
                    05
                  </Typography>
                </Stack>
                <Typography variant="h5" fontWeight={700} fontFamily="Plus Jakarta Sans, Lato, sans-serif" letterSpacing="-0.02em">
                  Blockchain
                </Typography>
                <Typography variant="body2" color="#595c5e" lineHeight={1.6}>
                  Smart contracts and decentralized applications built on Ethereum and EVM chains.
                </Typography>
              </Stack>
            </Paper>
          </Col>
        </Row>

        {/* Bottom Highlight: Debugging */}
        <Box sx={{ mt: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 6,
              borderRadius: 4,
              bgcolor: "#0b0f10",
              color: "#f5f7f9",
              position: "relative",
              overflow: "hidden",
              boxShadow: 24,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, rgba(70,71,211,0.1), rgba(129,38,207,0.1))",
                opacity: 0,
                transition: "opacity 0.7s",
                ".MuiPaper-root:hover &": {
                  opacity: 1,
                },
              }}
            />
            <Row className="align-items-center g-4">
              <Col md={8}>
                <Stack spacing={2} sx={{ position: "relative", zIndex: 1 }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <BugReport sx={{ color: "#f74b6d" }} />
                    <Typography
                      variant="caption"
                      sx={{
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "#9a9d9f"
                      }}
                    >
                      Reliability & Maintenance
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h3"
                    fontWeight={900}
                    fontFamily="Plus Jakarta Sans, Lato, sans-serif"
                    letterSpacing="-0.02em"
                  >
                    Debugging & Bug Fixing
                  </Typography>
                  <Typography variant="body1" color="#9a9d9f" maxWidth="36rem" fontSize="1.1rem">
                    Eliminating bottlenecks and resolving complex logic errors to ensure your digital
                    product runs with frictionless fluidity.
                  </Typography>
                </Stack>
              </Col>
              <Col md={4} className="text-md-end">
                <Button
                  variant="contained"
                  className="px-5 py-3 rounded-pill fw-bold"
                  sx={{
                    bgcolor: "#f5f7f9",
                    color: "#2c2f31",
                    position: "relative",
                    zIndex: 1,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#e0e4e7" },
                  }}
                  endIcon={<ArrowOutward />}
                >
                  Get an Audit
                </Button>
              </Col>
            </Row>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;