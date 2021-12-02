import { Button, CardMedia, Container, Grid } from '@mui/material';
import React from 'react';
import Typical from 'react-typical'
import img from '../../images/1.png';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <Container sx={{ py: 8 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            className="img-fluid"
                            component="img"
                            height="400"
                            image={img}
                            alt="Hasib's Picture"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} className="profile-details" >
                        <div>
                            <div className="details pb-5">
                                <div className="pb-3">
                                    <div className="social-icons" >
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
                                <div className="name-details my-3">
                                    <span className="primary-text">
                                        <h4 className="introduction-text">
                                            Hello, I am <span className="highlighted-text">Md. Hasibur Rahman</span>
                                        </h4>
                                    </span>
                                </div>
                                <div className="role">
                                    <span>
                                        <h2 className="typical">
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
                                        </h2>
                                        <span className="role-tagline py-4">
                                            <h3 className="introduction-text">
                                                Build your Website using Raect , MongoDb, Express JS, Node JS
                                            </h3>
                                        </span>
                                    </span>
                                </div>
                                <div className="resume-btn py-4">
                                    <Button sx={{background: '#d35400'}} variant="contained">Hire Me</Button>
                                    <span> </span>
                                    <a href="Resume.pdf" download="Hasib's Resume.pdf">
                                        <Button sx={{background: '#8e44ad'}} variant="contained">Download Resume</Button>
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