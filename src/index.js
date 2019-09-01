import './assets/scss/style.scss'
import Vue from 'vue'
import './plugins/antd'

// ignore tistory tag
Vue.config.ignoredElements = [/^s_/]

new Vue({
	el: '#app',
})