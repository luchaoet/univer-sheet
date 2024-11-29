<template>
  <div class="wrapper">
		<p>1</p>
		<p>2</p>
		<p>3</p>
	</div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from "vue";

export default defineComponent({
	// name: "",
	// components: {},
	// props: {},
	// emits: [],
	setup(props, { emit }) {
		const state = reactive({});
		const methods = reactive({});

		// onMounted(() => {})

		return {
			...toRefs(state),
			...toRefs(methods),
		};
	},
});
</script>

<style lang="scss" scoped>
</style>