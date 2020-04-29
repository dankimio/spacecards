<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="flex flex-col border border-gray-200 rounded">
    <div class="py-4 px-5">
      <ContentLoader :height="20">
        <rect x="0" y="0" rx="3" ry="3" width="128" height="18" />
      </ContentLoader>
    </div>

    <hr class="border-gray-200">

    <div class="bg-gray-100 flex text-sm py-2 px-5">
      <ContentLoader :height="14">
        <rect x="0" y="0" rx="3" ry="3" width="192" height="14" />
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
