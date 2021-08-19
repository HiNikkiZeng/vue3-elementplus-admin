import { $apiGetMenuByUser } from '@/api/user';
import { getToken } from '@/utils/auth';
import { composeToRoutes } from '@/utils';
import { constantRoutes } from '@/router';

const state = {
  dynamicRoutes: [],
  menus: [],
};

const mutations = {
  COMBINEROUTES: (state, routes) => {
    state.dynamicRoutes = routes;
  },
  SETMENUS: (state, routes) => {
    state.menus = routes;
  },
};

const actions = {
  toCombineRoutes({ commit }) {
    const { username } = getToken();

    return new Promise((resolve) => {
      $apiGetMenuByUser(username).then((res) => {
        if (res.code === 20000) {
          if (res.data.length) {
            const daynamicRoutes = composeToRoutes(res.data);
            resolve(daynamicRoutes);
            commit('COMBINEROUTES', daynamicRoutes);
            commit('SETMENUS', [...constantRoutes, ...daynamicRoutes]);
          } else {
            commit('COMBINEROUTES', constantRoutes);
            commit('SETMENUS', constantRoutes);
          }
        }
      }).catch((err) => {
        console.log(err);
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
