<template>
  <div ref="sheet" style="width: 100%; height: 100%; min-height: 200px;"></div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, ref, onBeforeUnmount, watch } from "vue";
import { createUniver, IWorkbookData } from '@xquant/sheet-core'
import type { Locale, UnitOptions, CustomMenuType, SheetCore } from "@xquant/sheet-core";
import type { PropType } from "vue";

export default defineComponent({
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
			default: false
		},
		formulaCustom: {
			type: Object,
			default: () => ({}),
		},
		componentRegister: {
			type: Object,
			default: () => ({}),
		},
		numfmt: {
			type: Boolean,
			default: false,
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
			default: false,
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
		advanced: {
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
		}
	},
	emits: [
		'init', 'destroy',
		'beforeCommandExecute', 'commandExecuted', 
		'cellClick', 'cellPointerMove', 'cellPointerOver', 'cellDragOver', 'cellDrop', 'cellHover', 'beforeCellEdit', 'beforeCellEdit',
		'selectionChange'
	],
  setup(props, { emit }: {emit: Function}) {
    const state = reactive({})
    const methods = reactive({})

    const sheet = ref()
    let sheetInstance

		watch(() => props.data, (v) => {
			sheetInstance?.createWorkbook(v)
		})

    onMounted(() => {
			const { data, ...options} = props;
      const univer = createUniver(sheet.value, data, options, emit);
			sheetInstance = univer;
			emit('init', univer)
    })

    onBeforeUnmount(() => {
			sheetInstance.value?.dispose();
			emit('destroy');
		});

    return {
      // uuid,
      sheet,
      ...toRefs(state),
      ...toRefs(methods),
    }
  }
})
</script>

<style scoped>

</style>