import Layout from '@/layout/index.vue';

/**
 *  use import to import dynamic commponet cannot find the moudle
 * @param {string} view
 * @returns component
 */

export const loadView = (view) => (resolve) => require([`@/views/${view[0]}/${view[1]}.vue`], resolve);

const splitChildUrl = ((url) => url.split('.'));

export function composeToRoutes(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    element.path = element.url;

    if (element.type === 1) {
      element.component = Layout;
    }

    if (element.type === 2) {
      const splitUrl = splitChildUrl(element.url);
      element.path = splitUrl[1];
      element.component = () => import(`@/views/${splitUrl[0]}/${splitUrl[1]}.vue`);
    }

    if (element.children) {
      const url = splitChildUrl(element.children[0].url)[1];
      element.redirect = `${element.url}/${url}`;
      composeToRoutes(element.children);
    }
  }
  return array;
}
