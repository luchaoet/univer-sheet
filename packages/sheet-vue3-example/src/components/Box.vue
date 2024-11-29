<template>
  <dl class="box-wrapper">
    <dt v-if="$slots.button">
      <slot name="button" />
    </dt>
    <dd>
      <slot name="content" />
    </dd>
  </dl>
</template>

<style scoped>
.box-wrapper {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	min-width: 0;
}
.box-wrapper dt {
	/* height: 40px; */
	padding-bottom: 10px;
	/* display: flex;
	align-items: center; */
}
.box-wrapper dd {
	flex-grow: 1;
	min-height: 0;
	margin: 0;
}
</style>