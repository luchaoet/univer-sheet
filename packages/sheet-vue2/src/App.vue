<template>
  <div ref="sheet" style="width: 100%; height: 100%; min-height: 200px;"></div>
</template>

<script lang="ts">
import {createUniverSheet, IWorkbookData } from '@xquant/sheet-core'
import type { Locale, CustomMenuType, SheetCore } from "@xquant/sheet-core";
import type { PropType } from "vue";

export default {
  name: "UniverSheet",
  props: {
		theme: {
			type: [String, Object],
			default: "default",
		},
		locale: {
			type: String as PropType<Locale>,
			default: "ZH_CN",
		},
		data: {
			type: Object as PropType<Partial<IWorkbookData>>,
			default: () => ({}),
		},
		formulaCustom: {
			type: Object,
			default: () => ({}),
		},
		componentRegister: {
			type: Object,
			default: () => ({}),
		},
		conditionalFormatting: {
			type: Boolean,
			default: false,
		},
		crosshairHighlight: {
			type: Boolean,
			default: false,
		},
		comment: {
			type: Boolean,
			default: false,
		},
		hyperLink: {
			type: Boolean,
			default: false,
		},
		sort: {
			type: Boolean,
			default: true,
		},
		filter: {
			type: Boolean,
			default: true,
		},
		findReplace: {
			type: Boolean,
			default: false,
		},
		watermark: {
			type: Boolean,
			default: false,
		},
		print: {
			type: Boolean,
			default: false,
		},
		zenEditor: {
			type: Boolean,
			default: false,
		},
		customMenu: {
			type: Array as PropType<CustomMenuType>,
			default: () => []
		},
	},
  data() {
    return {
			sheetInstance: null as SheetCore | null,
    }
  },
	emits: [
		'init', 'dispose',
		'beforeCommandExecute', 'commandExecuted', 
		'cellClick', 'cellPointerMove', 'cellPointerOver', 'cellDragOver', 'cellDrop', 'cellHover', 'beforeCellEdit', 'afterCellEdit',
		'selectionChange',
	],
  mounted() {
    const univer = createUniverSheet(this.$refs.sheet as HTMLElement, this.data, this.$props, this.$emit.bind(this));
		this.sheetInstance = univer;
		this.$emit('init', univer as SheetCore);
  },
  beforeDestroy() {
    this.sheetInstance?.dispose();
		this.$emit('dispose');
  },
}
</script>

<style scoped>
</style>