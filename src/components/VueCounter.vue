<template>
  <button @click="addCount(3)">{{ count }}</button>
</template>
<script lang="ts">
export default {
  props: {},
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount(num: number) {
      this.count += num;
      console.log("Vue is the best!");
      
    },
  },
};
</script>
