import styles from './ProjectStyles.module.css';
import sortingVisualizer from '../../assets/sorting-visualizer.jpg';
import ProjectCard from '../../common/ProjectCard';
import tiffinService from '../../assets/tiffin-service.png';
import productPage from '../../assets/product.jpg';
import notesApp from '../../assets/notes-img.jpg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={productPage} link="https://product-page-pern.onrender.com/" h3="Product Page" p={"Add, View, Update & \nDelete Products Easily!"} />
        <ProjectCard src={notesApp} link="https://my-notes-app.netlify.app/" h3="My Notes App" p="Note taking application" />
        <ProjectCard src={tiffinService} link="https://komal-bora.github.io/MotionCut/Project4_Tiffin-service-website/" h3="Tiffin Service " p="Home-cooked meals" />
        <ProjectCard src={sortingVisualizer} link="https://komal-bora.github.io/Sorting-Visualizer/" h3="Sorting Visualizer" p="Visualize sorting algorithms" />
      </div>
    </section>
  )
}

export default Projects;