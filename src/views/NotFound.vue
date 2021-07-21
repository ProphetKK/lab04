<template>
  <img src="@/assets/NotFound.jpg" />
  <div>
    <router-link :to="{ name: 'EventList' }"
      >Eh Eh Ehhh BIG SMOKE IT'S ME, CARL, CHILL</router-link
    >
    <h3>SORRY YOU PICKED THE WRONG {{ resource }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'PAGE'
    }
  }
}
</script>
