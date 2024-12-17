import styles from './HeroStyles.module.css';
import heroImg from '../../assets/image.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/resume.pdf';
import { useTheme } from '../../common/ThemeContext.jsx';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="profile picture of Komal Bora"/>
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Komal <br /> Bora</h1>
            <h2>Developer</h2>
            <span>
                <a href="https://twitter.com/Komalbora26" target='_blank'>
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com//Komal-bora" target='_blank'>
                    <img src={githubIcon} alt="GitHub icon" />
                </a>
                <a href="https://linkedin.com" target='_blank'>
                    <img src={linkedinIcon} alt="LinkedIn icon" />
                </a>
            </span>
            <p className={styles.description}>
            Passionate about building impactful React web apps and eager to learn new technologies.
            </p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero;
