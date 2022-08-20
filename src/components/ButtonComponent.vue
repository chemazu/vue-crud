<template>
  <!-- <button :class="props.class" @click="props.onclick">{{ props.title }}</button> -->
  <!-- <button :class="className" :type="type" @click="$emit('check')">
    {{ title }}{{ count }}</button
  >` -->
  <button @click="$emit('increase-by')">Increase by 1</button>
</template>

<script>
export default {
  //   components: {
  //     ButtonComponent,
  //   },
  props: ["title", "className", "onclick", "type"],
  //   props: {
  //     class: {
  //       type: String,
  //     },
  //     title: {
  //       type: String,
  //     },
  //     onclick: {
  //       type: Function,
  //     },
  //   },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    check() {
      console.log("emit");
      //   this.count++;
      //   this.onclick();
    },
  },
};
</script>

<style>
@import "../assets/scss/ButtonComponent.scss";
</style>
