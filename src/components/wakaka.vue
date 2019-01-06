<template>
<div class="wrapper">
<el-button @click="buttonClick">默认按钮</el-button>
<span> i am a girl</span>
</div>
</template>

<script>
export default {
  name: 'wakak',
  methods: {
    buttonClick () {
      console.log('aa')
    }
  },
  mounted () {
    console.log(this.$store.state)
  }
}
</script>
<style lang="scss">
.wrapper {
  span{
    color: pink;
    font: {
      family: fantasy;
      size: 30em;
      weight: bold;
    }
  }
}
</style>
