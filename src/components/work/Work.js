import React, { useState } from 'react';

import styles from './Work.module.scss';

import ProjectsView from '../prjectsView/ProjectsView';
import WorkNav from '../workNav/WorkNav';

const Work = ({ data }) => {
  let [projects, setProjects] = useState(data.webDesign);

  return (
    <section id='work' className={styles.work}>
      <h1 className={styles.work__title}>work</h1>
      <div className={styles.work__content}>
        <WorkNav data={data} setProjects={setProjects} />
        <ProjectsView projects={projects} />
      </div>
    </section>
  );
};

export default Work;
