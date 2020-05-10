<template>
  <footer
    class="container mt-auto flex flex-col md:flex-row
    justify-between py-6 md:py-8 lg:py-10"
  >
    <div class="text-gray-700 mb-2 md:mb-0">
      Learn something new today.
    </div>

    <div class="text-grey">
      <ul class="list-reset flex">
        <li class="mr-4 md:mr-5 md:ml-5">
          <router-link :to="{ name: 'root' }">
            Home
          </router-link>
        </li>
        <li class="mr-4 md:mr-5 md:ml-5">
          <router-link :to="{ name: 'root' }">
            Explore
          </router-link>
        </li>
        <li class="mr-4 md:mr-5 md:ml-5">
          <router-link :to="{ name: 'root' }">
            About
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
