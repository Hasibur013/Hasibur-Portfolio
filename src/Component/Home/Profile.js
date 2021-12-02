import { CardMedia, Container, Grid } from '@mui/material';
import React from 'react';
import Typical from 'react-typical'
import img from '../../images/1.png';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <Container sx={{ py: 8, }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            className="img-fluid"
                            component="img"
                            height="550"
                            image={img}
                            alt="Hasib's Picture"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="profile-details" >
                            <div className="details">
                                <div>
                                    <div className="social-icon" >
                                        <a href="https://github.com/Hasibur013" rel="noreferrer" target="_blank">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/md-hasibur-rahman-2286321b9/" rel="noreferrer" target="_blank">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://twitter.com/MdHasib63316757" rel="noreferrer" target="_blank">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a href="https://www.facebook.com/profile.php?id=100068269274714" rel="noreferrer" target="_blank">
                                            <i className="fa fa-facebook-square"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="name-details">
                                    <span className="primary-text">
                                        {" "}
                                        Hello, I am <span className="highlighted-text">Md. Hasibur Rahman</span>
                                    </span>
                                </div>
                                <div className="role">
                                    <span className="primary-text">
                                        {" "}
                                        <h1>
                                            <Typical
                                                steps={[
                                                    'Md. Hasibur Rahman 😍', 1000,
                                                    'MERN Stack Developer 👨‍💻', 1000,
                                                    'Full Satck Developer 👌', 1000,
                                                    'React Developer 😎', 1000,
                                                    'Happy Life 🥰', 1000,

                                                ]}
                                                loop={Infinity}
                                            />
                                        </h1>
                                        <span className="role-tagline">
                                            Build your Website using Raect , MongoDb, Express JS, Node JS
                                        </span>
                                    </span>
                                </div>
                                <div className="resume-btn">
                                    <button className="btn primary-btn">Hire me</button>
                                    <a href="Resume.pdf" download="Hasib's Resume.pdf">
                                        <button className="btn highlighted-btn">
                                            Download Resume
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Profile;