<template>
  <div class="giscus-container">
    <div id="giscus_thread"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'

  script.setAttribute('data-repo', 'dance-wind/inner-journey')
  script.setAttribute('data-repo-id', 'R_kgDOQQZkOw')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOQQZkO84CxiRe')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')

  document.getElementById('giscus_thread').appendChild(script)
})

onBeforeUnmount(() => {
  const container = document.getElementById('giscus_thread')
  if (container) container.innerHTML = ''
})
</script>

<style scoped>
.giscus-container {
  margin-top: 40px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
}
</style>
