import React from 'react';

import styles from './ProjectsView.module.scss';

const ProjectsView = ({ projects }) => {
  return (
    <div className={styles.work__projects}>
      {projects
        ? projects.map(({ img, link }, i) => {
            return (
              <div key={i}>
                <a href={link}>
                  <img
                    className={styles.project__img}
                    src={img}
                    alt='project'
                  />
                </a>
              </div>
            );
          })
        : 'No projects found'}
    </div>
  );
};

export default ProjectsView;
