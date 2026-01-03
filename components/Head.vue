<template>
  <header class="w-full bg-black">
    <nav class="p-4 mt-0 w-full">
      <div class="container mx-auto flex justify-between">

        <div class="flex items-center">

          <div class="flex text-white font-extrabold">
            <ul class="list-reset flex flex-1 items-center">
              <li>
                <nuxt-link :to="localePath({ name: 'index' })"
                  class="flex text-white text-base no-underline hover:text-white hover:no-underline pr-5">
                  <span class="w-0 w-auto block pl-1">Luz María Sánchez</span>
                </nuxt-link>
              </li>
            </ul>
          </div>

          <MenuCategorys></MenuCategorys>
        </div>

        <MenuPages></MenuPages>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
}
</script>
