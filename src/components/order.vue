<template>
<div class="order">
	<div class="align" @click="show = !show">
		<div class="main">
			<p class="row title" title="訂單編號">{{orderId}}<i class='bx bx-copy-alt' title="copy"></i></p>
			<p class="row"><i class='bx bx-time' title="time"></i>{{time}}<i class="bx" :class="device === 'APP' ? 'bx-mobile' : 'bx-desktop'" :title="device"></i></p>
			<p class="row"><i class='bx bx-purchase-tag'></i>{{utm}}</p>
		</div>
		<div class="commission">
			<p><i class='bx bx-wallet'></i>{{estimatedTotalCommission}}</p>
		</div>
	</div>
	<p class="row" @click="show = !show">
		<i class='bx' :class="show ? 'bx-folder-minus' : 'bx-folder-plus'" title="訂單數量"></i>{{orderCount}}
		<i class='bx bx-package'></i><i class='bx bx-dollar'></i>{{totalAmount}}
	</p>
	
	<transition name="slide-fade" mode="out-in">
		<ul class="order-detail" v-show="show">
			<li class="list" v-for="order in orders" :key="order.id">
				<div class="row">
					<p class="title">{{order.name}}</p>
				</div>
				<div class="detail">
					<div class="img-place">
						<img :src="order.img" :alt="order.name">
					</div>
					<p class="qty"><i class='bx bxs-offer'></i>{{order.qty}}</p>
					<p class="qty">${{order.price}}</p>
					<p class="amount"><i class='bx bx-check-circle'></i><i class='bx bx-dollar'></i>{{order.amount}}</p>
				</div>
				<div class="row">
					<p><i class='bx bx-stats'></i>{{order.status}}</p>
				</div>
			</li>
		</ul>
	</transition>
</div>
</template>

<script>
import dayjs from 'dayjs'
import { computed, ref } from 'vue'
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
		},
		orders: {
			type: Array
		},
		device: {
			type: String,
			default: 'APP'
		},
		utm: {
			type: String
		},
		totalAmount: {
			type: Number
		}
	},
	setup (props) {
		const time = computed(() => {
			return dayjs.unix(props.purchaseTime).format('MM/DD HH:mm')
		})
		const show = ref(true)
		return {
			time,
			show
		}
	}
}
</script>

<style scoped lang="scss">
@import '../assets/scss/media.scss';
@import '../assets/scss/transition.scss';
.order{
	width: 90%;
	margin: auto;
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 20px;
  box-sizing: border-box;
	text-align: left;
	margin-bottom: 20px;
	color: #6e6e6e;
	background-color: #fff;
	@include mobile {
		width: 300px;
		margin: 0 10px 20px;
		display: inline-block;
		vertical-align: top;
	}
	.align{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: flex-start;
		.main{
			width: 100%;
			.title{
				color: #333;
				word-break: break-all;
			}
			.row{
				padding: 5px 0;
				font-size: 16px;
				line-height: 1.1;
			}
		}
		.commission{
			flex-shrink: 0;
			text-align: center;
			p{
				min-width: 30px;
				background-color: #F9F3EE;
				border-radius: 30px;
				padding: 0 10px;
				font-size: 14px;
				line-height: 50px;
				color: #E4384F;
			}
		}
	}
	.order-detail{
		.list{
			padding: 20px 0 0;
			box-sizing: border-box;
			&:not(:last-child){
				border-bottom: 1px solid #eee;
			}
			.row{
				margin-bottom: 10px;
				.title{
					font-size: 14px;
					line-height: 1.1;
					font-weight: bold;
				}
			}
			.detail{
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				justify-content: flex-start;
				margin-bottom: 10px;
				.img-place{
					width: 30px;
				}
				.qty{
					margin: 0 5px;
				}
				.amount{
					margin: 0 0 0 auto;
					color: #3939AF;
				}
			}
		}
	}
}
img{
	width: 100%;
	vertical-align: middle;
}
</style>