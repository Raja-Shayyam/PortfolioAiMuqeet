import React, { useState } from "react";
import { db } from '../src/firebase.js';
import { doc, setDoc, getDoc, collection, addDoc } from "firebase/firestore";
import { Container, Row, Col } from "react-bootstrap";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import {
  AlternateEmail,
  LocationOn,
  Terminal,
  ArrowForward,
  Send,
} from "@mui/icons-material";

const ContactPage = () => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const testFirebase = async (e) => {
    e.preventDefault()
    try {
      // 1. Create a reference to a document
      const testRef = collection(db, "tests");
      // const id = Math.floor(Math.random() * 1000000);
      // const testRef = doc(db, "tests", details.email + '-' + id);

      const docRef = await addDoc(testRef, {
        message: "Hello World from the Cloud!",
        details: details,
        timestamp: new Date() // Good practice to track when it was sent
      });

      console.log('Document written with ID: ', docRef.id);
      // 2. Write to the database
      // setStatus("Writing to Firebase...");
      // await setDoc(testRef, { message: "Hello World from the Cloud!", details: details });
      console.log('sent');

      // 3. Read it back
      // const docSnap = await getDoc(testRef);
      // if (docSnap.exists()) {
      //   setStatus(`Success! Data from Firebase: ${docSnap.data().message}`);
      // }
    } catch (error) {
      // setStatus("Error: Check your Firestore Permissions!");
      console.error(error);
    }
  };

  return (
    <>
      {/* Fixed Iridescent Background */}
      <Box
        className="iridescent-mesh"
        sx={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: -1,
          overflow: "hidden",
        }}
      />

      {/* Main Canvas */}
      <Box component="main" sx={{ minHeight: "100vh", py: 4 }}>
        <Container fluid="xl" sx={{ pt: { xs: 8, md: 12 }, pb: 16 }}>
          {/* Hero Section */}
          <Row className="align-items-end mb-5 g-5">
            <Col md={7}>
              <Typography
                variant="overline"
                sx={{
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  color: "#4647d3",
                  display: "block",
                  mb: 2,
                }}
              >
                Ready to innovate?
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontFamily: "Plus Jakarta Sans, Lato, sans-serif",
                  fontSize: { xs: "3.5rem", md: "4.5rem", lg: "6rem" },
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                }}
              >
                Let's work <br />
                <span className="gradient-text">together</span>
              </Typography>
            </Col>
            <Col md={5} className="pb-2">
              <Typography
                variant="body1"
                sx={{
                  color: "#595c5e",
                  fontSize: "1.25rem",
                  lineHeight: 1.6,
                  maxWidth: "24rem",
                }}
              >
                Turning visionary concepts into fluid digital realities. Reach out for
                collaborations, project inquiries, or just to say hello.
              </Typography>
            </Col>
          </Row>

          {/* Contact Bento Grid */}
          <Row className="g-5">
            {/* Left Column: Info & Socials */}
            <Col lg={5}>
              <div className="d-flex flex-column gap-4">
                {/* Contact Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    borderRadius: 4,
                    bgcolor: "#ffffff",
                    boxShadow: "0 40px 80px -10px rgba(44,47,49,0.06)",
                    minHeight: 300,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      fontFamily="Plus Jakarta Sans, Lato, sans-serif"
                      mb={4}
                    >
                      Contact Details
                    </Typography>
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex align-items-center gap-3">
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            bgcolor: "#e5c6ff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#6900b4",
                          }}
                        >
                          <AlternateEmail />
                        </Box>
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "#595c5e",
                              fontWeight: '700'
                            }}
                          >
                            Email
                          </Typography>
                          <Typography variant="h6" fontWeight={600}>
                            {/* hello@rajamuqeet.com */}
                            upthework@gmail.com
                          </Typography>
                        </Box>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            bgcolor: "#53ddfc",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#004b58",
                          }}
                        >
                          <LocationOn />
                        </Box>
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              color: "#595c5e",
                              fontWeight: '700'
                            }}
                          >
                            Location
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: '600' }}>
                            Global / Remote
                          </Typography>
                        </Box>
                      </div>
                    </div>
                  </Box>
                  <Box pt={4}>
                    <Button
                      variant="contained"
                      fullWidth
                      href="https://github.com/Raja-Shayyam"
                      target="_blank"
                      className="hover-lift"
                      sx={{
                        mt: 4,
                        p: 3,
                        bgcolor: "#dfe3e6",
                        color: "#2c2f31",
                        borderRadius: 2,
                        textTransform: "none",
                        justifyContent: "space-between",
                        "&:hover": {
                          bgcolor: "#0b0f10",
                          color: "#f5f7f9",
                        },
                      }}
                      endIcon={<ArrowForward />}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <Terminal sx={{ fontSize: 32 }} />
                        <Typography variant="h6" fontWeight={700} fontFamily="Plus Jakarta Sans, Lato, sans-serif">
                          GitHub Profile
                        </Typography>
                      </div>
                    </Button>
                  </Box>
                </Paper>

                {/* Aesthetic Visual Element */}
                <Box
                  sx={{
                    position: "relative",
                    height: 256,
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: 16,
                  }}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSjQTHcTO1Qa5K7fPr9xiSg2ensFpeZn_ozZxLTh1sGhE9GV7gYeFu3qOVy5-C4vwUiKtstagza1vT_kUqMq99KZSm2Z5qpsZmZTavmatMa-W6E0mPp6IKZG5__m_KKFfYN0k6S7g_zcKf5h-SI0ZtVRAhzBTSGdLYWroDF28t0imQ_X3fF2GxCD56voDHy9_H705twqxwEguHI0TsSS9FQ60Lti-N-AgNDPd67kK6swq0MhtvpMWflrTzO_ekGz3L9hTkD4ZYjRI"
                    alt="Minimalist workspace"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "grayscale(0.3) brightness(1.1)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: "rgba(70,71,211,0.1)",
                      mixBlendMode: "multiply",
                    }}
                  />
                  <Typography
                    variant="h5"
                    fontWeight={900}
                    fontStyle="italic"
                    letterSpacing="-0.02em"
                    sx={{
                      position: "absolute",
                      bottom: 24,
                      left: 24,
                      color: "#ffffff",
                    }}
                  >
                    BUILDING BEYOND
                  </Typography>
                </Box>
              </div>
            </Col>

            {/* Right Column: Contact Form */}
            <Col lg={7}>
              <Paper
                className="glass-card"
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: 4,
                  boxShadow: "0 60px 100px -20px rgba(70,71,211,0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Abstract Background Element */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    transform: "translate(50%, -50%)",
                    width: 384,
                    height: 384,
                    bgcolor: "rgba(70,71,211,0.05)",
                    borderRadius: "50%",
                    filter: "blur(64px)",
                    zIndex: 0,
                  }}
                />

                <Box component="form" sx={{ position: "relative", zIndex: 1 }}>
                  <Row className="g-4 mb-4">
                    <Col md={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        placeholder="John Doe"
                        name="name"
                        value={details.name}
                        onChange={handleChange}
                        variant="outlined"
                        className="ghost-input"
                        inputlabelprops={{
                          shrink: true,
                          sx: {
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "#595c5e",
                          },
                        }}
                      />
                    </Col>
                    <Col md={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        placeholder="john@example.com"
                        name="email"
                        value={details.email}
                        onChange={handleChange}
                        type="email"
                        variant="outlined"
                        className="ghost-input"
                        inputlabelprops={{
                          shrink: true,
                          sx: {
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "#595c5e",
                          },
                        }}
                      />
                    </Col>
                  </Row>
                  <Box mb={4}>
                    <TextField
                      fullWidth
                      label="Project Details"
                      placeholder="Tell me about your vision..."
                      name="description"
                      value={details.description}
                      onChange={handleChange}
                      multiline
                      rows={6}
                      variant="outlined"
                      className="ghost-input"
                      inputlabelprops={{
                        shrink: true,
                        sx: {
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#595c5e",
                        },
                      }}
                    />
                  </Box>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="hover-lift"
                    sx={{
                      mt: 5,
                      height: 64,
                      borderRadius: 999,
                      background: "linear-gradient(90deg, #4647d3, #8126cf)",
                      color: "#f4f1ff",
                      fontFamily: "Plus Jakarta Sans, Lato, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      textTransform: "none",
                      boxShadow: "0 20px 40px -10px rgba(70,71,211,0.3)",
                      "&:hover": {
                        background: "linear-gradient(90deg, #3939c7, #740ec2)",
                      },
                    }}
                    endIcon={
                      <Send
                        sx={{
                          transition: "transform 0.3s",
                          ".MuiButton-root:hover &": {
                            transform: "rotate(-45deg)",
                          },
                        }}
                      />
                    }
                    onClick={
                      testFirebase
                    }
                  >
                    Send Message
                  </Button>
                </Box>
                <Typography
                  variant="caption"
                  letterSpacing="0.05em"
                  sx={{
                    textTransform: "uppercase",
                    display: "block",
                    textAlign: "center",
                    mt: 4,
                    color: "#595c5e",
                    opacity: 0.6,
                  }}
                >
                  Secure & Encrypted Transmission
                </Typography>
              </Paper>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;