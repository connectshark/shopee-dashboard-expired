<template>
<div class="list">
	<div class="" v-for="order in list" :key="order.orderId">
		<div>訂單編號: {{order.orderId}}</div>
		<div class="">購買時間: {{order.purchaseTime}}</div>
		<div class="">預估佣金: {{order.estimatedTotalCommission}}</div>
		<div class="content">
			<div class="item" v-for="item in order.list" :key="item.id">
				<div>商品名稱: {{item.name}}</div>
				<div>商品價格: {{item.price}}</div>
				<div>購買數量: {{item.qty}}</div>
				<div><img :src="item.img" alt="商品示意圖"></div>
				<div>成交金額: {{item.amount}}</div>
				<div>目前狀態: {{item.status}}</div>
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