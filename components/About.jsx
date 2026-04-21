import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import {
  Terminal,
  Token,
  Psychology,
  Layers,
  Security,
  SmartToy,
} from "@mui/icons-material";
import { Header } from "./Header";

const AboutSection = () => {
  return (<>
    <Box className="iridescent-bg" sx={{ minHeight: "100vh", pt: 4, pb: 16 }}>
      {/* <Header /> */}
      <br />
      <Container fluid="xl">
        <Row className="g-5 align-items-start">
          {/* Left Column */}
          <Col lg={7}>
            <Chip
              label="The Digital Alchemist"
              size="small"
              sx={{
                mb: 4,
                px: 2,
                py: 0.5,
                borderRadius: 999,
                bgcolor: "#e5c6ff",
                color: "#6900b4",
                fontWeight: 700,
                letterSpacing: "0.1em",
                fontSize: "0.7rem",
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontFamily: "Plus Jakarta Sans, Lato, sans-serif",
                fontSize: { xs: "3.5rem", md: "6rem" },
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                mb: 6,
              }}
            >
              Crafting <br />
              <span className="gradient-text">Modern Flux.</span>
            </Typography>

            <Paper className="glass-card" elevation={0} sx={{ p: 5 }}>
              <Typography
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  lineHeight: 1.5,
                  color: "#595c5e",
                  mb: 4,
                }}
              >
                I am Raja Muqeet, a{" "}
                <Box component="span" sx={{ fontWeight: '600', color: "#2c2f31" }} >
                  Computer Science student
                </Box>{" "}
                and developer dedicated to the art of building fluid digital experiences.
                My journey bridges the gap between complex logic and ethereal design,
                specializing in{" "}
                <Box component="span" sx={{ fontWeight: '700', color: "#4647d3" }}>
                  Full-stack systems
                </Box>
                , decentralized{" "}
                <Box component="span" sx={{ fontWeight: '700', color: "#8126cf" }}>
                  Blockchain
                </Box>{" "}
                structures, and{" "}
                <Box component="span" sx={{ fontWeight: '700', color: "#53ddfc" }}>
                  AI integrations
                </Box>
                .
              </Typography>

              <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
                {[
                  { icon: Terminal, label: "Engineering", color: "#4647d3" },
                  { icon: Token, label: "Web3", color: "#8126cf" },
                  { icon: Psychology, label: "Intelligence", color: "#53ddfc" },
                ].map((item, idx) => (
                  <Paper
                    key={idx}
                    elevation={0}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      px: 3,
                      py: 1.5,
                      borderRadius: 999,
                      bgcolor: "#ffffff",
                      boxShadow: 1,
                      transition: "transform 0.3s",
                      "&:hover": { transform: "translateY(-4px)" },
                    }}
                  >
                    <item.icon sx={{ color: item.color }} />
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: '500',
                        textTransform: "uppercase",
                        letterSpacing: "0.1em"

                      }}
                    >
                      {item.label}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </Paper>
          </Col>

          {/* Right Column */}
          <Col lg={5}>
            <Box sx={{ mt: { xs: 6, lg: 16 } }}>
              <Stack spacing={4}>
                {/* Profile Card */}
                <Box className="profile-glow">
                  <Paper
                    elevation={0}
                    sx={{
                      position: "relative",
                      p: 4,
                      borderRadius: 4,
                      bgcolor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <Avatar
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFvIrIj_tqhu0F9Hem_RUSBpGl-gqsSO7XuXGSk-DSPw-jlrYPauaAmlP4jfGlXAcAB4Z3DmCi9J1pqZS_06UMrAeOWfENTrwXI0iAYo5nH0-7nYzUiDle9IiJARDZ45Cdy3WKxlocqUTJV2KFvjShif3rKM349ef658zfzbqTBdcNIwN4DMjvX_bz9cgu_de98Quuf7iV1843yGombcOhMm6XehcbRsEEfDWS8f4HwhAaTSc5KFJXVac8d17YkNEkwuP4Scqrc8A"
                      alt="Raja Muqeet"
                      sx={{ width: 96, height: 96 }}
                    />
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          fontFamily: "Plus Jakarta Sans, Lato, sans-serif",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        Raja Muqeet
                      </Typography>
                      <Typography variant="body2" color="#595c5e" fontWeight={500}>
                        CS Researcher & Dev
                      </Typography>
                    </Box>
                  </Paper>
                </Box>

                {/* Strength Cards */}
                <Row className="g-3">
                  <Col xs={12}>
                    <Paper className="glass-card" elevation={0} sx={{ p: 4 }}>
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 2
                        }}
                      >
                        <Layers sx={{ fontSize: 40, color: "#4647d3" }} />
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 700,
                            color: "#595c5e",
                            textTransform: "uppercase",
                            letterSpacing: "-0.02em"
                          }}
                        >
                          01. Core
                        </Typography>
                      </Stack>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        fontFamily="Plus Jakarta Sans, Lato, sans-serif"
                        mb={1}
                      >
                        Full-stack mastery
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#595c5e", lineHeight: '1.6' }}>
                        Scalable architectures built with React, Node, and advanced Cloud
                        Infrastructure.
                      </Typography>
                    </Paper>
                  </Col>
                  <Col xs={6}>
                    <Paper
                      className="glass-card hover-scale"
                      elevation={0}
                      sx={{ p: 3 }}
                    >
                      <Security sx={{ fontSize: 32, color: "#8126cf", mb: 2 }} />
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        fontFamily="Plus Jakarta Sans, Lato, sans-serif"
                        mb={0.5}
                      >
                        Smart Contracts
                      </Typography>
                      <Typography variant="caption" color="#595c5e">
                        Solidity development for secure, decentralized protocols.
                      </Typography>
                    </Paper>
                  </Col>
                  <Col xs={6}>
                    <Paper
                      className="glass-card hover-scale"
                      elevation={0}
                      sx={{ p: 3 }}
                    >
                      <SmartToy sx={{ fontSize: 32, color: "#53ddfc", mb: 2 }} />
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        fontFamily="Plus Jakarta Sans, Lato, sans-serif"
                        mb={0.5}
                      >
                        AI Agents
                      </Typography>
                      <Typography variant="caption" color="#595c5e">
                        Intelligent LLM chatbots and automated workflow agents.
                      </Typography>
                    </Paper>
                  </Col>
                </Row>
              </Stack>
            </Box>
          </Col>
        </Row>

        {/* Stats Bar */}
        <Paper className="glass-card" elevation={0} sx={{ mt: 12, p: 6 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ justifyContent: "space-around", alignItems: "center" }}

            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ display: { xs: "none", md: "block" }, bgcolor: "#abadaf", opacity: 0.3 }}
              />
            }
            spacing={{ xs: 4, md: 0 }}
          >
            {[
              { value: "3+", label: "Years of Dev", color: "#4647d3" },
              { value: "12+", label: "Chain Projects", color: "#8126cf" },
              { value: "24/7", label: "AI Support", color: "#53ddfc" },
              { value: "50+", label: "Clean Repos", color: "#2c2f31" },
            ].map((stat, idx) => (
              <Box key={idx} sx={{ textAlign: "center" }}>
                <Typography
                  variant="h2"
                  className="stat-value"
                  sx={{ color: stat.color, mb: 1 }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#595c5e"
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  </>
  );
};

export default AboutSection;