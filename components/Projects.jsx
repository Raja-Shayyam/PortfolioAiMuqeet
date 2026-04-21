import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import {
  RocketLaunch,
  Code,
  Visibility,
  DirectionsCar,
  TrendingUp,
  AccountBalanceWallet,
  SmartToy,
  ArrowOutward,
} from "@mui/icons-material";

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A high-performance storefront with real-time inventory tracking and integrated payment gateways for seamless shopping.",
      tags: ["Next.js", "Stripe"],
      icon: <RocketLaunch fontSize="small" />,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBeAvbQr-S1HTuhLpJcIo2GYULF-DBCZqbTb8aZpJrpWQwfrBcTCdqYIfw03JJRYnmBXdNCwc7gRO3QkEMwBhLVYpk5NRia6P6jOgSotNx7KAiE9lHoy9erGRRRoOqEzsdiS47O4hu2WlxKs_wiz2vklh4wHVk8KZ9UQQAsQZqvJb-EUAg-Mc32gsqXjoasSPoWnF62TgXcuP8gO1ji7GmM20v0A7h4NeyQ7u9pGFEEjc9021acg21GaoflYzgQr_AvvCkaC6cyWB4",
    },
    {
      title: "Social Media App",
      description:
        "Next-gen networking platform featuring encrypted messaging, dynamic feed generation, and high-fidelity media sharing.",
      tags: ["React Native", "Firebase"],
      icon: <Visibility fontSize="small" />,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJQAtZk5OlY2RKSFbzfPCEA6OrCgDnoYC54oQwOCQxs6cVD4rmwM7goKna7SK3BLw-dUJUyb-HvXzeJ-QfUOwZ1xMtd6TGnSKyMkGiL9OWqEke2Ptfhdkh_yCVERxxIiA2HOcBZcnerrxD8K8vFg7VEEZ-q9lEvwWWBV-nKKPLe3nJLqEnBYC4uAYqKslc0Kwp0Tmo6lwHy0whAFznlOrY4-u3MCw_qoDSkrRQJzTec-nys56jcYtKdC6ZjGduDWubMLxE7biK-Ls",
    },
    {
      title: "Car Listing CRUD",
      description:
        "Robust inventory management system for automotive dealerships with complex filtering and media management.",
      tags: ["PostgreSQL", "Node.js"],
      icon: <DirectionsCar fontSize="small" />,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAmUTnSMa5mfXKcxt1bpTCyAl2VxtlGO3_ybR5SbXDOyo9Cnt-rwQNIMwFYC1KE3RYkcIL9HXUvy-v1nlfRgnDSLLo-tsgwJHKye2HT_q53Y9tDg8Kd0bCxWOX6pizxmXGgNy8_E4_JtmTmvAfWKtpAbYUVAkrQMZ04p37nq2sjoHMOlF4weQnMlIq6dr4fIGnYmr12Y9gzvEt1rjjvF48sHDW-Hd_HEEQgorCaNGiw2UGWM66xxBsYp5l78rVtSj2WmtrjBwWVXbg",
    },
    {
      title: "SkillTrack System",
      description:
        "An educational dashboard helping developers track progress across diverse tech stacks with AI-driven recommendations.",
      tags: ["TypeScript", "GraphQL"],
      icon: <TrendingUp fontSize="small" />,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBs0Yid4v2rLcv9IY4kbduZNXC8vbeDWq-tnnM7c5vBuD25GlW2u34xULrLa_iwV6Dq6lMCKc7PWEPSwdHxry5Njv1qeEVoBPjRBkVEnAnCku2txJqcRqit04NXwDkA2g3h6UwgZq4YaG5uct3Mr8u2cN0sUwUe5Q8nxSBLxyMG9_xmnhMd8has6d8Rx91teZkGPhJAJNm6fFcKt7lCnbudjFZ8hRapo1geof8vI6gMinvYnugYTS1okFciwzQ9scV_QLP_7gf5E80",
    },
    {
      title: "Student Registry DApp",
      description:
        "Decentralized application for academic verification, ensuring immutable storage of educational credentials.",
      tags: ["Ethereum", "Web3.js"],
      icon: <AccountBalanceWallet fontSize="small" />,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA1C-99I0oP49h21-s2KRlvjVSCUl9CPgQmqttpChZv_Jp65laM_3AIxlGvLqd7cswvmw8jv_plRppRc1AVdBEzBLSrDW0385ITpkjCXTvV5jI0u3IeG9y6qOIHPho3iWJw3GE1MqY5RF9CrLyz19_cgEESW5hPEVh57G_wLxC-YkLKZ45rFk7rr6VDm9KyF8nZCQDl931z88zmB6g-qV7O-SftgIGAOcMAQMUWGA0tHQXZtWDFXSL75XkaSUbABW6zpotmkXOhjww",
    },
    {
      title: "AI Chatbot Suite",
      description:
        "A collection of specialized NLP bots trained for technical support, creative writing, and automated code review.",
      tags: ["OpenAI", "Python"],
      icon: <SmartToy fontSize="small" />,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBdLrNR5KoLafn946KhU9yIQThheq8_tZ7r0OGCqpiCYnDL4euX7WwWenjYJjhsMWJPq2LxNr0M56sbCFlc1wpWrCaq1Cum08Y28NLu66IOfdYGIsGN-og2NZ97KmBPN3Qon1SsYybXzlBtXartgu20kKTRsmefkTNZbkONWXsi5Hh6cM7ufzSK_WQZDlqTVRKFjxCzUw23ekUlSi6lwNxjaSMLTZJlzch6sRKOR1eeO5DlL-w6n6JH7A8HfvgO_cF0lzeZaro1-6Q",
    },
  ];

  return (
    <Box component="main" className="min-vh-100">
      <Container fluid="xl" className="py-5">
        {/* Hero Section */}
        <Box className="text-center mb-5">
          <Typography
            variant="h1"
            className="gradient-text fw-bold"
            sx={{
              fontSize: { xs: "3rem", md: "4.5rem", lg: "6rem" },
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              mb: 3,
              fontFamily: "Plus Jakarta Sans, Lato, sans-serif",
            }}
          >
            Raja Muqeet
          </Typography>
          <Typography
            variant="body1"
            className="mx-auto"
            sx={{
              maxWidth: "42rem",
              fontSize: "1.25rem",
              color: "#595c5e",
              fontWeight: 300,
              letterSpacing: "0.025em",
              lineHeight: 1.6,
            }}
          >
            Transforming complex logic into ethereal digital experiences. Exploring the
            intersection of{" "}
            <Box component="span" fontWeight={700} color="#4647d3">
              Web3
            </Box>
            ,{" "}
            <Box component="span" fontWeight={700} color="#8126cf">
              AI
            </Box>
            , and{" "}
            <Box component="span" fontWeight={700} color="#006576">
              Scalable Architecture
            </Box>
            .
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Row className="g-5">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <Paper
                className="glass-card h-100 d-flex flex-column p-4 project-card"
                elevation={0}
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 40px 80px -10px rgba(44,47,49,0.06)",
                }}
              >
                <Box className="overflow-hidden rounded-3 mb-4" sx={{ aspectRatio: "16/10" }}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    className="project-card-img w-100 h-100"
                    sx={{ objectFit: "cover" }}
                  />
                </Box>

                <CardContent className="flex-grow-1 p-0">
                  <Typography
                    variant="h4"
                    className="fw-bold mb-3"
                    sx={{ fontFamily: "Plus Jakarta Sans, Lato, sans-serif", letterSpacing: "-0.02em" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="mb-4"
                    sx={{ color: "#595c5e", lineHeight: 1.6, fontWeight: 300 }}
                  >
                    {project.description}
                  </Typography>
                  <Box className="d-flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: tag === "Next.js" || tag === "React Native" || tag === "Ethereum" || tag === "OpenAI" || tag === "PostgreSQL" || tag === "TypeScript"
                            ? "#e5c6ff"
                            : "#e3e9ec",
                          color: tag === "Next.js" || tag === "React Native" || tag === "Ethereum" || tag === "OpenAI" || tag === "PostgreSQL" || tag === "TypeScript"
                            ? "#6900b4"
                            : "#595c5e",
                          fontWeight: 700,
                          fontSize: "0.7rem",
                          letterSpacing: "0.05em",
                          borderRadius: 1,
                          textTransform: "uppercase",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions className="p-0 gap-3">
                  <Button
                    variant="contained"
                    className="kinetic-btn flex-grow-1 py-3 rounded-pill fw-bold"
                    startIcon={project.icon}
                    sx={{
                      bgcolor: "#4647d3",
                      color: "#f4f1ff",
                      boxShadow: "none",
                      "&:hover": { bgcolor: "#3939c7" },
                    }}
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="contained"
                    className="kinetic-btn rounded-circle p-3"
                    sx={{
                      minWidth: "auto",
                      bgcolor: "#d9dde0",
                      color: "#2c2f31",
                      boxShadow: "none",
                      "&:hover": { bgcolor: "#c0c5c8" },
                    }}
                  >
                    <Code />
                  </Button>
                </CardActions>
              </Paper>
            </Col>
          ))}
        </Row>

        {/* Solidity CTA Section */}
        <Box className="mt-5 pt-5">
          <Paper
            className="glass-card p-5 p-md-6 position-relative overflow-hidden"
            elevation={0}
            sx={{ borderRadius: 4 }}
          >
            <Row className="align-items-center g-5">
              <Col md={6}>
                <Box className="position-relative z-1">
                  <Typography
                    variant="overline"
                    className="fw-bold mb-3 d-block"
                    sx={{ letterSpacing: "0.3em", color: "#8126cf" }}
                  >
                    Smart Contracts
                  </Typography>
                  <Typography
                    variant="h2"
                    className="fw-bold mb-4"
                    sx={{ fontFamily: "Plus Jakarta Sans, Lato, sans-serif", letterSpacing: "-0.04em" }}
                  >
                    Solidity Smart Contracts
                  </Typography>
                  <Typography
                    variant="body1"
                    className="mb-5"
                    sx={{ color: "#595c5e", fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.6 }}
                  >
                    Architecting secure, audited, and optimized contracts for the decentralized
                    future. From ERC-20 tokens to complex governance DAOs.
                  </Typography>
                  <Box className="d-flex flex-wrap gap-4">
                    <Button
                      variant="contained"
                      className="kinetic-btn px-5 py-3 rounded-pill fw-bold"
                      sx={{
                        background: "linear-gradient(90deg, #4647d3, #8126cf)",
                        color: "#f4f1ff",
                        boxShadow: 8,
                      }}
                    >
                      View Contracts
                    </Button>
                    <Button
                      variant="outlined"
                      className="kinetic-btn px-5 py-3 rounded-pill fw-bold"
                      endIcon={<ArrowOutward />}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.5)",
                        color: "#4647d3",
                        borderColor: "transparent",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.8)", borderColor: "transparent" },
                      }}
                    >
                      GitHub Repository
                    </Button>
                  </Box>
                </Box>
              </Col>
              <Col md={6} className="d-none d-md-block">
                <Box className="position-relative">
                  <Box
                    className="position-absolute"
                    sx={{
                      top: -16,
                      left: -16,
                      right: -16,
                      bottom: -16,
                      bgcolor: "#53ddfc",
                      filter: "blur(64px)",
                      opacity: 0.2,
                      borderRadius: "50%",
                    }}
                  />
                  <CardMedia
                    component="img"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAKmSgZbfkfkHzrtlGQwNxn_vd-RdEK8I5iq4ZAXpfP5nuscFWQ_OQdHhcH_yibJ7ctvUw9eJoZip_j8_i7GVNmTU1RQTVdKBEZ76ocWdVJI1Aznid7oR7t46VUCbBsk172m_pxByb3FNbvTpWaei-qTzVvP-o4X9v9QeTJK_M61Bz2FaZx909ZvBS52q4x_aAFL3OVCrAgh2fv3hrhdCarlPmIAYNApKv1jQvXSpKOn9fOhDCNAtwIvq4tOhTejDZD70Rl2K6zMyo"
                    alt="Solidity code"
                    className="position-relative rounded-4 shadow-lg"
                    sx={{
                      transform: "rotate(3deg)",
                      transition: "transform 0.5s",
                      "&:hover": { transform: "rotate(0deg)" },
                    }}
                  />
                </Box>
              </Col>
            </Row>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsPage;