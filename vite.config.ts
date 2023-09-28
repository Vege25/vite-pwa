import {VitePWA} from 'vite-plugin-pwa';
export default {
  base: './',
  plugins: [VitePWA({registerType: 'autoUpdate'})],
};
