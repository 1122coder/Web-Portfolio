import { Grid, makeStyles} from "@material-ui/core";
import React from "react";


import AboutUsImg from '../Assets/aboutus.jpg'

const useStyles = makeStyles((theme) => ({
  aboutMe: {
    display: 'flex',
    justifyContent: 'center',
    height: '18vh',
    fontSize: '2.7rem',
    marginTop: '6rem',
    letterSpacing: '0.33rem',
    textTransform: 'uppercase',
    opacity: '0.78',
    
  },
  paragraph: {
    textAlign: 'center',
    padding: '2rem',
    
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    paddingLeft: '5rem'
  },
  image: {
    width: '120%',
    height: 'auto'
  },
}));

function AboutUSPage() {
  const classes = useStyles();

  return (
    <Grid container>


      <Grid xs={12}>
        <div className={classes.aboutMe}>
          <b>About Me</b>    
        </div>
      </Grid>
      <Grid xs={12} sm={6}>
        <div className={classes.paragraph}>
            <p>
                <p>I'm [Your Name], a passionate Machine Learning Engineer and Tech Enthusiast, dedicated to the world of AI and cutting-edge technology.</p>
                <p>🧠 With a deep love for all things machine learning, I spend my days diving into complex algorithms, training models, and turning data into valuable insights. My goal is to make AI accessible and beneficial to all.</p>
                <p>📝 I'm not just about code and algorithms, though. I also have a knack for words. I write engaging articles and blogs on various technical topics, simplifying complex concepts and sharing my insights with the world.</p>
                <p>💬 Looking to enhance your website's user experience? Look no further! I specialize in developing AI chat bots that can engage and assist your visitors seamlessly. From answering questions to providing recommendations, I've got you covered.</p>
                <p>💻 Need a stunning online presence? I can help you develop captivating landing pages and e-commerce websites that not only look amazing but also perform brilliantly. Let's make your online dreams a reality!</p>
                <p>Whether you're here to explore my projects, read my articles, or collaborate on an exciting venture, I'm thrilled to have you here. Feel free to reach out, and let's innovate together!</p>

                Let's connect and build a brighter tech future! 🌐🤝
            </p>
        </div>
      </Grid>
      <Grid xs={12} sm={4}>
            <div className={classes.imageContainer}>
                <img src={AboutUsImg}
                alt="AboutUs"
                className={classes.image}
                />
            </div>
      </Grid>
    </Grid>
  );
}

export default AboutUSPage;