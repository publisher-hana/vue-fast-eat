import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon', // 아이콘 접두사
        }),
      ],
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true, // 아이콘 패키지를 자동 설치
    }),
  ],
  base: '/vue-fast-eat/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // '@'를 'src'로 설정
    },
    
  },
});