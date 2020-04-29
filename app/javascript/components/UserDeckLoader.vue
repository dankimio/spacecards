<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="flex flex-col border border-gray-200 rounded">
    <div class="py-4 px-5">
      <div class="mb-1" style="width: 128px; height: 24px">
        <ContentLoader :width="128" :height="24">
          <rect x="0" y="0" rx="3" ry="3" width="128" height="24" />
        </ContentLoader>
      </div>
    </div>

    <hr class="border-gray-200">

    <div class="bg-gray-100 flex text-sm py-2 px-5">
      <div style="width: 192px; height: 16px">
        <ContentLoader :width="192" :height="16">
          <rect x="0" y="0" rx="3" ry="3" width="192" height="16" />
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
