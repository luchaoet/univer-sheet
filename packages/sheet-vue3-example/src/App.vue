<template>
	<div id="container">
		<Box>
			<template #content>
				<univer-sheet 
					theme="green" 
					locale="ZH_CN" 
					:sort="true"
					:filter="true"
					:comment="true"
					:hyper-link="true"
					:find-replace="true"
					:crosshair-highlight="true"
					:conditional-formatting="true"
					:watermark="true"
					:custom-menu="customMenu"
					@commandExecuted="onCommandExecuted"
					@beforeCommandExecute="onBeforeCommandExecute"
				/>
			</template>
		</Box>
		<Box>
			<template #content>
				<univer-sheet @init="sheetInit" />
			</template>
		</Box>
		<Box>
			<template #content>
				<univer-sheet />
			</template>
		</Box>
	</div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref,onMounted } from "vue";
import Box from './components/Box.vue'
import { CommandType, IAccessor, MenuItemType, CustomMenuType, RibbonStartGroup, ContextMenuGroup, SheetCore } from '@xquant/sheet-core'
import { DEFAULT_WORKBOOK_DATA_DEMO } from "./data";

export default defineComponent({
	components: {Box},
	setup() {
		const state = reactive({
			customMenu: [
					{
						ribbonStartGroup: RibbonStartGroup.OTHERS,
						contextMenuGroup: ContextMenuGroup.OTHERS,
						id: 'custom-menu.operation.button',
						commandType: CommandType.OPERATION,
						menuItemType: MenuItemType.BUTTON,
						handler: async (accessor: IAccessor) => {
							console.log('Single button operation', accessor);
							return true;
						},
						icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
								<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m.16 14a6.981 6.981 0 0 0-5.147 2.256A7.966 7.966 0 0 0 12 20a7.97 7.97 0 0 0 5.167-1.892A6.979 6.979 0 0 0 12.16 16M12 4a8 8 0 0 0-6.384 12.821A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634A8 8 0 0 0 12 4m0 1a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" />
							</svg>`,
						tooltip: '这是我自定义的一个按钮',
						title: {
							zhCN: '自定义按钮',
							enUS: 'Button',
						}
					},
					{
						ribbonStartGroup: RibbonStartGroup.OTHERS,
						contextMenuGroup: ContextMenuGroup.OTHERS,
						id: 'custom-menu.operation.button2',
						commandType: CommandType.OPERATION,
						menuItemType: MenuItemType.BUTTON,
						handler: async (accessor: IAccessor) => {
							console.log('Single button operation', accessor);
							return true;
						},
						icon: `<svg t="1732764911638" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3243" width="1em" height="1em"><path d="M204.8 716.8h614.4v153.6H204.8z" fill="#FFD6B2" p-id="3244"></path><path d="M819.2 102.4a51.2 51.2 0 0 1 51.2 51.2v716.8a51.2 51.2 0 0 1-45.21 50.842l-5.99 0.358H204.8a51.2 51.2 0 0 1-51.2-51.2V153.6a51.2 51.2 0 0 1 51.2-51.2h614.4z m0 614.4H204.8v153.6h614.4V716.8z m-256 51.2v51.2H460.8V768h102.4z m256-614.4H204.8v512h614.4v-512z" fill="#FF7700" p-id="3245"></path></svg>`,
						tooltip: '这是我自定义的一个按钮',
						title: {
							zhCN: '自定义按钮',
							enUS: 'Button',
						}
						
					}
				] as CustomMenuType,
				instance: {} as SheetCore,
		})
		const methods = reactive({
			onCommandExecuted(value) {
				console.log('vue3 onCommandExecuted', value)
			},
			onBeforeCommandExecute(value) {
				console.log('vue3 onBeforeCommandExecute', value)
			},
			sheetInit(instance) {
				state.instance = instance
			}
		})

		onMounted(() => {
			// const instance1 = useUniverAPI(sheet1.value)
			// const instance2 = useUniverAPI(sheet2.value)
			// console.log('instance', instance1, instance2)
			state.instance.createSheet(DEFAULT_WORKBOOK_DATA_DEMO);

			// const range = instance1.getRange(0, 4)
			// console.log('range', range)
		})

		return {
			...toRefs(state),
			...toRefs(methods),
		}
	}
})
</script>

<style scoped>
button + button {
	margin-left: 10px;
}
.button {
	margin-left: 10px;
	border-width: 1px;
	border-style: outset;
	border-color: buttonborder;
	border-image: initial;
	font-size: 13.33px;
	padding: 0 6px;
	border-radius: 2px;
}
#container {
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 20px;

	grid-template-areas:
		"left  right-top"
		"left  right-bottom";
}
.box-wrapper:nth-child(1) {
	grid-area: left;
}
.box-wrapper:nth-child(2) {
	grid-area: right-top;
}
.box-wrapper:nth-child(3) {
	grid-area: right-bottom;
}
</style>