import React from "react";
import { Container, Row, Col, Button as BsButton } from "react-bootstrap";
import {
  Box,
  Typography,
  Paper,
  Chip,
  LinearProgress,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import {
  Web,
  Psychology,
  SettingsInputComponent,
  Hub,
  Storage as StorageIcon,
  CheckCircle,
  ArrowRightAlt,
  Code,
  DataObject,
  Memory,
  IntegrationInstructions,
} from "@mui/icons-material";

const SkillsCertificatesPage = () => {
  return (
    <Box className="opaline-bg min-vh-100">
      <Container fluid="xl" className="py-5 py-md-12">
        <div className="d-flex flex-column gap-5">
          {/* Hero Section */}
          <Row className="align-items-center g-5">
            <Col md={6}>
              <div className="d-flex flex-column gap-3">
                <Typography
                  variant="overline"
                  className="fw-bold"
                  sx={{
                    letterSpacing: "0.2em",
                    color: "#6e3bd8",
                  }}
                >
                  Expertise Portfolio
                </Typography>
                <Typography
                  variant="h1"
                  className="fw-bold"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    fontFamily: "Plus Jakarta Sans, Lato, sans-serif",
                  }}
                >
                  Crafting the{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(45deg, #6e3bd8, #a53173)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Digital Future
                  </Box>{" "}
                  with Code.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    color: "#596063",
                    maxWidth: "36rem",
                    lineHeight: 1.6,
                  }}
                >
                  Bridging the gap between creative frontend experiences, robust backend
                  architectures, and the decentralized frontier of Blockchain and AI.
                </Typography>
              </div>
            </Col>
            <Col md={6}>
              <div className="position-relative">
                <Box
                  className="mesh-gradient-primary position-absolute top-0 start-0 w-100 h-100"
                  sx={{
                    opacity: 0.1,
                    filter: "blur(64px)",
                    borderRadius: 4,
                    zIndex: -10,
                  }}
                />
                <Card elevation={0} sx={{ borderRadius: 4, overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuA5HZcARJ19B2_sjUfcq46TwW_oPlZksAtLTaaGqKvZ-QDqFJxKeAAIxhCDh_FYR4ZRarEo1I55EqHBjjtu_kLHU_y7zK22twCIC2l1tbjfYgnWijiZ0pgtvH0lC6176flI2gk40ay0MRJj5ES39wmDjwId1sDm-t7O3uYy5R1nXcKwtZEVy_Wn5Wp06kerlHh8I69xqic63s9uZThiRlsVW1I759rhu6b_rJDSh1ItS9LpVBVCRCZ15t_DsaZWDKbg9wZBPv3vgJU"
                    alt="Abstract technology visualization"
                    sx={{ objectFit: "cover" }}
                  />
                </Card>
              </div>
            </Col>
          </Row>

          {/* Skills Bento Grid */}
          <div>
            <div className="mb-5">
              <Typography variant="h3" className="fw-bold" sx={{ letterSpacing: "-0.02em" }}>
                Technical Proficiency
              </Typography>
              <Typography variant="body1" sx={{ color: "#596063" }}>
                A curated stack for high-performance applications.
              </Typography>
            </div>

            <Row className="g-4">
              {/* Frontend */}
              <Col lg={8}>
                <Paper className="glass-card hover-scale p-5 h-100" elevation={0}>
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <Web sx={{ fontSize: 40, color: "#6e3bd8", mb: 1 }} />
                        <Typography variant="h5" className="fw-bold">
                          Frontend Engineering
                        </Typography>
                      </div>
                      <Chip
                        label="High Fidelity"
                        size="small"
                        sx={{
                          bgcolor: "#cbb6ff",
                          color: "#4a00b0",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          fontSize: "0.7rem",
                          borderRadius: 999,
                          px: 1,
                        }}
                      />
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "HTML5",
                        "CSS3",
                        "Material UI",
                        "Tailwind CSS",
                        "TypeScript",
                      ].map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            bgcolor: "#e3e9ec",
                            color: "#2d3337",
                            fontWeight: 500,
                            px: 2,
                            py: 2.5,
                            borderRadius: 999,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </Paper>
              </Col>

              {/* AI Section */}
              <Col lg={4}>
                <Paper
                  className="hover-scale p-5 h-100 d-flex flex-column justify-content-between"
                  elevation={0}
                  sx={{
                    bgcolor: "rgba(91, 244, 222, 0.3)",
                    borderRadius: 4,
                    border: "1px solid rgba(0, 107, 96, 0.1)",
                  }}
                >
                  <div>
                    <Psychology sx={{ fontSize: 40, color: "#006b60", mb: 2 }} />
                    <Typography variant="h5" className="fw-bold mb-2">
                      AI & Intelligence
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#596063", lineHeight: 1.6 }}>
                      Implementing Generative AI and intelligent Chatbot ecosystems for next-gen automation.
                    </Typography>
                  </div>
                  <div className="mt-4">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <CheckCircle sx={{ fontSize: 16, color: "#006b60" }} />
                      <Typography className="fw-bold" sx={{ color: "#00594f" }}>
                        Chatbots
                      </Typography>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <CheckCircle sx={{ fontSize: 16, color: "#006b60" }} />
                      <Typography className="fw-bold" sx={{ color: "#00594f" }}>
                        Gen-AI
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Col>

              {/* Backend */}
              <Col lg={4}>
                <Paper className="glass-card hover-scale p-5 h-100" elevation={0}>
                  <div className="d-flex flex-column gap-4">
                    <SettingsInputComponent sx={{ fontSize: 40, color: "#a53173" }} />
                    <Typography variant="h5" className="fw-bold">
                      Backend Systems
                    </Typography>
                    <div className="d-flex flex-column gap-3">
                      {[
                        { name: "Node.js", value: 90, icon: <Code fontSize="small" /> },
                        { name: "Express", value: 85, icon: <DataObject fontSize="small" /> },
                        { name: "RESTful APIs", value: 95, icon: <IntegrationInstructions fontSize="small" /> },
                      ].map((skill) => (
                        <div key={skill.name}>
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <div className="d-flex align-items-center gap-2">
                              {skill.icon}
                              <Typography variant="body2" sx={{ color: "#596063" }}>
                                {skill.name}
                              </Typography>
                            </div>
                          </div>
                          <LinearProgress
                            variant="determinate"
                            value={skill.value}
                            sx={{
                              height: 6,
                              borderRadius: 999,
                              bgcolor: "#dde3e7",
                              "& .MuiLinearProgress-bar": {
                                bgcolor: "#a53173",
                                borderRadius: 999,
                              },
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Paper>
              </Col>

              {/* Blockchain */}
              <Col lg={4}>
                <Paper
                  className="hover-scale p-5 h-100 position-relative overflow-hidden"
                  elevation={0}
                  sx={{
                    bgcolor: "#6e3bd8",
                    color: "#fdf7ff",
                    borderRadius: 4,
                  }}
                >
                  <Box
                    className="position-absolute"
                    sx={{
                      top: -80,
                      right: -80,
                      width: 200,
                      height: 200,
                      bgcolor: "rgba(255,255,255,0.1)",
                      borderRadius: "50%",
                      filter: "blur(48px)",
                    }}
                  />
                  <div className="position-relative z-1">
                    <Hub sx={{ fontSize: 40, mb: 2 }} />
                    <Typography variant="h5" className="fw-bold mb-2">
                      Blockchain & Web3
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9, mb: 3 }}>
                      Building decentralized applications and smart contracts on Ethereum.
                    </Typography>
                    <div className="d-flex flex-wrap gap-2">
                      {["Solidity", "Ethereum", "Web3.js"].map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.2)",
                            color: "#fdf7ff",
                            fontWeight: 700,
                            fontSize: "0.75rem",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </Paper>
              </Col>

              {/* Database */}
              <Col lg={4}>
                <Paper className="glass-card hover-scale p-5 h-100" elevation={0}>
                  <div className="d-flex flex-column gap-4">
                    <StorageIcon sx={{ fontSize: 40, color: "#6e3bd8" }} />
                    <Typography variant="h5" className="fw-bold">
                      Data Architecture
                    </Typography>
                    <Row className="g-3">
                      <Col xs={6}>
                        <Paper
                          elevation={0}
                          className="p-3 text-center"
                          sx={{
                            bgcolor: "#f1f4f6",
                            borderRadius: 2,
                          }}
                        >
                          <Typography variant="h6" className="fw-bold">
                            MongoDB
                          </Typography>
                          <Typography variant="caption" sx={{ color: "#596063" }} className="text-uppercase">
                            NoSQL
                          </Typography>
                        </Paper>
                      </Col>
                      <Col xs={6}>
                        <Paper
                          elevation={0}
                          className="p-3 text-center"
                          sx={{
                            bgcolor: "#f1f4f6",
                            borderRadius: 2,
                          }}
                        >
                          <Typography variant="h6" className="fw-bold">
                            MySQL
                          </Typography>
                          <Typography variant="caption" sx={{ color: "#596063" }} className="text-uppercase">
                            SQL
                          </Typography>
                        </Paper>
                      </Col>
                    </Row>
                  </div>
                </Paper>
              </Col>
            </Row>
          </div>

          {/* Certificates Section */}
          <div>
            <div className="text-center mx-auto mb-5" style={{ maxWidth: "42rem" }}>
              <Typography variant="h3" className="fw-bold mb-3" sx={{ letterSpacing: "-0.02em" }}>
                Verified Credentials
              </Typography>
              <Typography variant="body1" sx={{ color: "#596063" }}>
                Trust is earned through continuous learning and industry-recognized certifications.
              </Typography>
            </div>

            <Row className="g-4">
              {[
                {
                  title: "Advanced Full Stack Web Development",
                  issuer: "Coursera • Issued 2023",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRcOqXoAx1jGpFSrEfFOJcjxUFlDOPUT27gI_JMoeZtU41Y-v8oPagTqePwnST2cGtn_hrxn6zo_-TXgYk4Qi__baQBvlRlYHGfhJI6m5vQK6g9qANqMLsfmBPi6CSuINFIFwCjShcfOWLhdhscvHnTXPS1Tjs7nOPDsx--W_Obs_UOsj9MeIDQfk0DfKa0wjMfzjLOBtGedbB-y49bsGoUt-D-GungWgt43h8l3y0EK669aSO60xxD6xNJ0XVSCMSrkF0tW7fw0",
                  icon: <Code />,
                },
                {
                  title: "Blockchain & Solidity Mastery",
                  issuer: "Udemy Professional • Issued 2023",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA6eRQO0RvZ33pLKUFQyj-CZ7flzld3qxI4WvS505X3_i12FpRxUGMLZiTNM2_fEJ__DYPurNtzuMVLNQiQMmGYX7yWO-79l8rNOJtQzoXN9Bt2gaQtHmqzHTBWHXnSh0v6ofyE0HFMs26Yxmu8IQchr9HLGlg_yto5im_ULguIBvlb62fhFEOXgxXz5DaivTverD5XyRORXmyHA_-TLDX5JWmOKmJJUKl85PpKZEBMMUfUA1QpT3DrjNcaSLGF4P1g5bQJzQkV2vU",
                  icon: <Hub />,
                },
                {
                  title: "Generative AI Engineering",
                  issuer: "DeepLearning.AI • Issued 2024",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCsEs38Ux0tjFTzrg4EA6AAk8oY1xJF7_Vu6ysHUhPvXygxbJcaIGCAIDPod3SKYfmZxA2R-9PlUTweoD3PNA4L0Si4A7wO13j91Ci7Tx9kfT4wWG1jsFe67_pykZIeTsw24zc9QiUowtRu-L7Oz8UQnwXUhyu_68WjLOGIoRat1F0d9u6GRv8nQeC9l-6Q-4tw98e3AeX1MMM9ukCcPyJ1tSoeeXrFUPgy5utzvxdGPO9rluqjUQ6VelZadKcv7mpSEejuzj2W08g",
                  icon: <Memory />,
                },
              ].map((cert, idx) => (
                <Col md={4} key={idx}>
                  <Card
                    elevation={0}
                    className="hover-scale h-100"
                    sx={{
                      borderRadius: 4,
                      border: "1px solid rgba(172, 179, 183, 0.1)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={cert.image}
                      alt={cert.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent className="p-4">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        {cert.icon}
                        <Typography variant="h6" className="fw-bold">
                          {cert.title}
                        </Typography>
                      </div>
                      <Typography variant="body2" sx={{ color: "#596063" }}>
                        {cert.issuer}
                      </Typography>
                    </CardContent>
                    <CardActions className="px-4 pb-4 pt-0">
                      <BsButton
                        variant="link"
                        className="text-decoration-none p-0 d-flex align-items-center gap-2"
                        style={{ color: "#6e3bd8", fontWeight: 700 }}
                      >
                        View Credential
                        <ArrowRightAlt />
                      </BsButton>
                    </CardActions>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default SkillsCertificatesPage;