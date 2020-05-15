<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="flex flex-col border mb-4 rounded">
    <div class="px-4 py-3">
      <div style="width: 300px; height: 48px">
        <ContentLoader
          :height="48"
          :width="300"
          :speed="2"
          primary-color="#f3f3f3"
          secondary-color="#ecebeb"
        >
          <rect x="0" y="0" rx="3" ry="3" width="64" height="14" />
          <rect x="0" y="24" rx="3" ry="3" width="192" height="24" />
        </ContentLoader>
      </div>
    </div>

    <hr class="border-gray-200">

    <div class="px-4 py-3">
      <div style="width: 300px; height: 48px">
        <ContentLoader
          :height="48"
          :width="300"
          :speed="2"
          primary-color="#f3f3f3"
          secondary-color="#ecebeb"
        >
          <rect x="0" y="0" rx="3" ry="3" width="64" height="14" />
          <rect x="0" y="24" rx="3" ry="3" width="192" height="24" />
        </ContentLoader>
      </div>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: { ContentLoader }
}
</script>
