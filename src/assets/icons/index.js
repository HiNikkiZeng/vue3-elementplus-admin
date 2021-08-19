const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(req);

// import SvgIcon from '@/components/SvgIcon/index.vue'
// const install = (app) => {
//     const req = require.context('./svg', false, /\.svg$/)
//     const requireAll = requireContext => requireContext.keys().map(requireContext)
//     requireAll(req)
//     app.component('SvgIcon', SvgIcon)
//   }

//   export default {
//       install
//     }
