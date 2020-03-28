import media from './assets/imgs/projects/media-demo-app.png';
import explore from './assets/imgs/projects/explore-nature.png';

const webDesign = 'webDesign';
const fullstack = 'fullstack';

export const getProjects = () => {
  return {
    [webDesign]: [
      {
        img: media,
        link: 'https://media-animation-demo.web.app/'
      }
    ],
    [fullstack]: [
      {
        img: explore,
        link: 'https://explore-nature.herokuapp.com/'
      }
    ]
  };
};
