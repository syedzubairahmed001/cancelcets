import React from "react";
import { Typography, Box, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    textShadow: "0 0 20px rgba(0,0,0,0.7) ",
    fontWeight: 700,
  },
  subHeading: {
    color: "#ccc",
    textShadow: "0 0 20px rgba(0,0,0,0.7) ",
  },
  sec: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  supportList: {
    marginTop: "10px",
    "& li": {
      fontSize: "20px",
      maxWidth: "500px",
    },
    "& li a": {
      color: theme.palette.primary.main,
    },
  },
  iframe: {
    height: "300px",
    width: "100%",
  },
}));

export default function Home() {
  const styles = useStyles();
  return (
    <div className="container">
      <header>
        <Typography variant="h2" className={styles.mainHeading} align="center">
          Cancel All CETs Online Protest
        </Typography>
        <Typography variant="h5" className={styles.subHeading} align="center">
          This is an online protest to cancel all the CETs in this COVID
          pandemic
        </Typography>
        <Box mt={2}>
          <a href="#protest" style={{ textDecoration: "none" }}>
            <Button color="primary" variant="contained" size="large">
              Join Protest
            </Button>
          </a>
        </Box>
      </header>
      <Box className={styles.sec} p={3} id="about-sec">
        <Box mb={1}>
          <Typography variant="h4" color="textPrimary" align="center">
            About the protest?
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1" color="textSecondary" align="center">
            This is a protest started by students to cancel all the CETs exam in
            this pandemic, we students don't want to die just for an exam. While
            they are promising to maintain hygiene in the exam center how can
            they guarantee that we'll not get infected in the journey from home
            to center?
          </Typography>
        </Box>
      </Box>
      <Box className={styles.sec} p={3} id="protest">
        <Box mb={1}>
          <Typography variant="h4" color="textPrimary" align="center">
            Join The Protest
          </Typography>
        </Box>
        <Box mb={2}>
          <ul className={styles.supportList}>
            <li>
              <a href="https://ctt.ac/KqYcm" target="_blank">
                Tweet with #CancelCETs
              </a>
            </li>
            <li>
              <a href="mailto:stateportal@telangana.gov.in" target="_blank">
                Mail to Telangana Office
              </a>
            </li>
            <li>
              <a href="mailto:vcjntu@jntuh.ac.in" target="_blank">
                Mail to JNTU Vice Chancellor
              </a>
            </li>
            <li>
              <Typography>
                And very important share this url: cancelcets.thatprotest.com to
                all your friends to protest online, mail them constantly and
                tweet with #CancelCETs
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </div>
  );
}
