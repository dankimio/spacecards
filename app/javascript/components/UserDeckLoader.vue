<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="flex flex-col py-4 md:py-6 border-b-2 border-gray-100">
    <div class="mb-3" style="width: 128px; height: 24px">
      <ContentLoader :width="128" :height="24">
        <rect x="0" y="0" rx="3" ry="3" width="128" height="24" />
      </ContentLoader>
    </div>

    <div style="width: 192px; height: 16px">
      <ContentLoader :width="192" :height="16">
        <rect x="0" y="0" rx="3" ry="3" width="192" height="16" />
      </ContentLoader>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: { ContentLoader }
}
</script>
