import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // ルーターをインポート
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);

app.use(router); // ルーターを登録
app.mount('#app');
