import DefaultTheme from 'vitepress/theme'
import Comment from './Comment.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Comment', Comment)
  }
}
