<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div>
    <ContentLoader :height="120" :width="300">
      <!-- Title -->
      <rect x="0" y="4" rx="3" ry="3" width="128" height="18" />
      <!-- Cards count -->
      <rect x="0" y="34" rx="3" ry="3" width="48" height="14" />
      <!-- Description -->
      <rect x="0" y="60" rx="3" ry="3" width="256" height="14" />
      <rect x="0" y="82" rx="3" ry="3" width="256" height="14" />
    </ContentLoader>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: { ContentLoader }
}
</script>
