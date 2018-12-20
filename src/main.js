import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-bootstrap/dist/all.css'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'

Vue.use(GridInstaller)
Vue.use(DataSourceInstaller)

new Vue({
  el: '#app',
  components: {
  	Grid,
  	DataSource
  },
  render: h => h(App)
})
