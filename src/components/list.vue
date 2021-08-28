<template>
<div class="list">
	<div class="w-11/12 mx-auto mb-3 bg-green-100 text-gray-700 p-4 box-border rounded-3xl shadow" v-for="order in list" :key="order.orderId">
		<div class="mb-2">
			<div class="p-2 inline-block">訂單編號 {{order.orderId}}</div>
			<div class="p-2 inline-block">購買時間 {{order.purchaseTime}}</div>
			<div class="p-2 inline-block">預估佣金 {{order.estimatedTotalCommission}}</div>
		</div>

		<div class="mb-2">商品數量 {{order.list.length}}</div>
		
		<div class="w-11/12 mx-auto">
			<div class="bg-green-200 rounded mb-5" v-for="item in order.list" :key="item.id">
				<div class="text-2xl">{{item.name}}</div>
				<div class="w-3/6 mx-auto">
					<img class="w-full rounded-lg" :src="item.img" alt="商品示意圖">
				</div>
				<div>
					<div class="p-2 inline-block">商品價格 {{item.price}}</div>
					<div class="p-2 inline-block">購買數量 {{item.qty}}</div>
					<div class="p-2 inline-block">成交金額 {{item.amount}}</div>
				</div>
				<div>目前狀態 {{item.status}}</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
	setup() {
		const store = useStore()

		const list = computed(() => store.getters.listFilter)
		
		return {
			list
		}
	}
}
</script>

<style scoped>
</style>