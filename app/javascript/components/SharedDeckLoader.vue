<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="border border-gray-200 rounded p-4">
    <ContentLoader :height="90">
      <rect x="0" y="0" rx="3" ry="3" width="192" height="18" />
      <rect x="0" y="34" rx="3" ry="3" width="384" height="12" />
      <rect x="0" y="56" rx="3" ry="3" width="384" height="12" />
      <rect x="0" y="78" rx="3" ry="3" width="256" height="12" />
    </ContentLoader>

    <div class="border-b border-gray-100 my-3" />

    <ContentLoader :height="18">
      <rect x="0" y="0" rx="3" ry="3" width="64" height="18" />
    </ContentLoader>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: { ContentLoader }
}
</script>
