<template>
<div class="order">
	<div class="align">
		<div class="main">
			<p class="row title">{{orderId}}</p>
			<p class="row">{{time}}</p>
		</div>
		<div class="commission">
			<p>${{estimatedTotalCommission}}</p>
		</div>
	</div>
	<div class="btn">{{orderCount}}</div>
</div>
</template>

<script>
import { computed } from 'vue'
export default {
	props: {
		orderId: {
			type: Number
		},
		purchaseTime: {
			type: Number
		},
		estimatedTotalCommission: {
			type: String
		},
		orderCount: {
			type: Number
		}
	},
	setup (props) {
		const time = computed(() => {
			const t = new Date(props.purchaseTime * 1000)
			return t.getMonth() + 1 + '/' + t.getDate() + ' ' + t.getHours() + ':' + t.getMinutes()
		})
		return {
			time
		}
	}
}
</script>

<style scoped lang="scss">
.order{
	width: 90%;
	margin: auto;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 20px;
  box-sizing: border-box;
	text-align: left;
	margin-bottom: 20px;
	color: #6e6e6e;
	.align{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: flex-start;
		.main{
			width: 100%;
			.title{
				color: #333;
			}
			.row{
				padding: 5px 0;
				font-size: 16px;
				line-height: 1.1;
			}
		}
		.commission{
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			text-align: center;
			background-color: #F9F3EE;
			border-radius: 50%;
			p{
				font-size: 18px;
				line-height: 60px;
				color: #E4384F;
			}
		}
	}
}
</style>