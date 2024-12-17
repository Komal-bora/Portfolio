import styles from './ProjectStyles.module.css';
import sortingVisualizer from '../../assets/sorting-visualizer.jpg';
import ProjectCard from '../../common/ProjectCard';
import tiffinService from '../../assets/tiffin-service.png';
import games from '../../assets/games.jpeg';
import imageSlider from '../../assets/image-slider.jpeg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={sortingVisualizer} link="https://komal-bora.github.io/Sorting-Visualizer/" h3="Sorting Visualizer" p="Visualize sorting algorithms" />
        <ProjectCard src={tiffinService} link="https://komal-bora.github.io/MotionCut/Project4_Tiffin-service-website/" h3="Tiffin Service " p="Home-cooked meals" />
        <ProjectCard src={games} link="#" h3="Fun Blend Fusion" p={"Variety games, \nendless fun "} />
        <ProjectCard src={imageSlider} link="https://komal-bora.github.io/MotionCut/Project2_dynamic-image-slider/" h3="SlideVista" p="Dynamic image slider" />
      </div>
    </section>
  )
}

export default Projects;