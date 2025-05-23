import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  IconButton,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import shivaImage from './assets/shiva.jpg';
import resume from './assets/Resume.pdf'; // Assuming resume.pdf is in the assets folder

const projectsData = [
  {
    title: "Chat Bot for Food Stories",
    date: "Aug 2024 - Nov 2024",
    description: [
      "Developed a user-friendly food ordering chatbot enabling direct customer-chef communication,reducing wait times and enhancing efficiency.",
    ],
    technologies: "Python, HTML, CSS, Dialogflow",
    repoLink: "https://github.com/shivaram-2004/chat-bot-food-stories",
  },
  {
    title: "Cash It",
    date: "Feb 2024",
    description: [
      "Designed a user-friendly web application, Cash It, enabling users to exchange liquid cash for online amounts and vice versa.",
    ],
    technologies: "HTML, CSS, JSP, MySQL",
    repoLink: "https://github.com/shivaram-2004/CASH_IT",
  },
  {
    title: "Product and Return Sales Dashboard",
    date: "Feb 2025",
    description: [
      "Developed an interactive Power BI dashboard for Product and Return Sales analysis, integrating data from multiple sources to track sales performance",
    ],
    technologies: "Power BI",
    repoLink: "https://github.com/shivaram-2004/chat-bot-food-stories",
  },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(true);

  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setShowProfile((prev) => !prev);
    }, 4000); // toggle every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#90caf9" : "#3f51b5",
      },
      secondary: {
        main: darkMode ? "#f48fb1" : "#ff4081",
      },
      background: {
        default: darkMode ? "#121212" : "#f5f5f5",
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
  });

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleViewProject = (link) => {
    window.open(link, '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Navigation Bar */}
      <AppBar position="sticky" color="primary" elevation={4}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#fff",
              letterSpacing: 1,
            }}
          >
            Portfolio
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Button color="inherit" href="#about" sx={{ fontWeight: 600 }}>
                About Me
              </Button>
              <Button color="inherit" href="#projects" sx={{ fontWeight: 600 }}>
                Projects
              </Button>
              <Button color="inherit" href="#services" sx={{ fontWeight: 600 }}>
                Services
              </Button>
              <Button color="inherit" href="#contact" sx={{ fontWeight: 600 }}>
                Contact
              </Button>
            </Box>
          )}

          <IconButton color="inherit" onClick={handleToggleTheme}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 6 }}>
        <AnimatePresence mode="wait">
          {showProfile && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <Grid container spacing={4} alignItems="center" id="about">
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      width: 200,
                      height: 200,
                      mx: "auto",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #2196f3, #21cbf3)",
                      p: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `
                        0 0 15px rgba(33,150,243,0.6),
                        0 0 30px rgba(33,150,243,0.4),
                        0 0 45px rgba(33,150,243,0.2)
                      `,
                      animation: "pulse 3s ease-in-out infinite",
                      "@keyframes pulse": {
                        "0%": {
                          boxShadow: "0 0 20px rgba(33,150,243,0.6), 0 0 30px rgba(33,150,243,0.4)",
                        },
                        "50%": {
                          boxShadow: "0 0 35px rgba(33,150,243,0.9), 0 0 60px rgba(33,150,243,0.5)",
                        },
                        "100%": {
                          boxShadow: "0 0 20px rgba(33,150,243,0.6), 0 0 30px rgba(33,150,243,0.4)",
                        },
                      },
                    }}
                  >
                    <Avatar
                      src={shivaImage}
                      alt="Shiva Rama Krishna Reddy"
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="h3" color="primary" gutterBottom>
                    Hi, I'm{" "}
                    <span style={{ color: theme.palette.secondary.main }}>
                      Shiva Rama Krishna Reddy
                    </span>
                  </Typography>
                  <Typography variant="h6">
                    Motivated Computer Science student with strong programming skills, expertise in Data Structures and Algorithms,
                    and a passion for real-time data analysis. Proficient in Machine Learning with hands-on project experience, eager to
                    apply skills and learn through an internship.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          )}
        </AnimatePresence>

        <Box sx={{ mt: 6, mb: 4, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "#F73184",
              textTransform: "uppercase",
              letterSpacing: 0.3,
            }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 4,
              background: "linear-gradient(to right, #3b82f6, #a855f7)",
              mx: "auto",
              mt: 1,
              borderRadius: 2,
            }}
          />
        </Box>
        <Typography variant="h6" sx={{ mb: 4, fontWeight: 500 }}>
          I'm a passionate data analyst who thrives on transforming raw data into actionable insights.
          I specialize in data cleaning, visualization, and statistical analysis using tools like Python, Pandas, NumPy, SQL, and Excel. I build compelling dashboards with Power BI and apply machine learning techniques with Scikit-learn to uncover trends and patterns.
          <br />
          I enjoy turning complex datasets into clear, meaningful stories that support smart decision-making. Always curious, always learning something new.
          <br />
          Let's build amazing together!
        </Typography>

        <Box sx={{ mt: 8, mb: 4, textAlign: "center" }} id="projects">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#F73184",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Projects
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 4,
              background: "linear-gradient(to right, #3b82f6, #a855f7)",
              mx: "auto",
              mt: 1,
              borderRadius: 2,
            }}
          />
        </Box>
        <Grid container spacing={4} id="projects">
          {projectsData.map(({ title, date, description, technologies, repoLink }, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    borderRadius: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: `1px solid ${theme.palette.primary.light}`,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      color="primary"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {date}
                    </Typography>
                    {description.map((point, i) => (
                      <Typography
                        variant="body2"
                        sx={{ mb: 1, color: theme.palette.text.primary }}
                        key={i}
                      >
                        {point}
                      </Typography>
                    ))}
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 2,
                        display: "block",
                        fontStyle: "bold",
                        color: theme.palette.text.secondary,
                      }}
                    >
                      Technologies: {technologies}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{
                        width: "100%",
                        borderRadius: 2,
                        padding: "4px 8px",
                        fontSize: "0.75rem",
                        lineHeight: 1.5,
                      }}
                      onClick={() => handleViewProject(repoLink)}
                    >
                      View Project
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, mb: 4, textAlign: "center" }} id="services">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#F73184",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Services
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 4,
              background: "linear-gradient(to right, #3b82f6, #a855f7)",
              mx: "auto",
              mt: 1,
              borderRadius: 2,
            }}
          />
        </Box>
        <Typography variant="body1" sx={{ mb: 3 }}>
          I offer responsive web development, full-stack solutions, and UI/UX
          design tailored to your business needs.
        </Typography>

        <Box sx={{ mt: 8, mb: 4, textAlign: "center" }} id="contact">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#F73184",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Contact Me
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 4,
              background: "linear-gradient(to right, #3b82f6, #a855f7)",
              mx: "auto",
              mt: 1,
              borderRadius: 2,
            }}
          />
        </Box>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Feel free to reach out to me via email or through my social media.
        </Typography>

        <Box
          className="social-media"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            fontSize: "2rem",
            mb: 6,
            '& a': {
              transition: "transform 0.3s ease, color 0.3s ease",
              '&:hover': {
                transform: "scale(1.2)",
                color: "primary.main",
              },
            },
          }}
        >
          <a href="https://www.linkedin.com/in/shiva-rama-krishna-reddy/" target="_blank" rel="noopener noreferrer" style={{ color: "#0e76a8" }}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/shivaram-2004" target="_blank" rel="noopener noreferrer" style={{ color: "#333" }}>
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" style={{ color: "#E1306C" }}>
            <FaInstagram />
          </a>
        </Box>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Email: <strong>shivaramakrishnareddykeshi@gmail.com</strong>
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 2, px: 4, py: 1.5, fontSize: "1rem", borderRadius: 3 }}
          component="a"
          href={resume}
          download="Shiva_Rama_Krishna_Reddy_Resume.pdf"
        >
          Download Resume
        </Button>
      </Container>

      <Box
        sx={{
          mt: 10,
          py: 3,
          textAlign: "center",
          bgcolor: "primary.main",
          color: "white",
        }}
      >
        <Typography>
          © {new Date().getFullYear()} Shiva Rama Krishna Reddy. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;