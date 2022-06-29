<template>
	<svg @click="pic_key -= 1" v-if="pic_key > 0" class="w-12 h-12 absolute left-2 text-white cursor-pointer" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
	<template v-for="(item,index) in files">
		<img :src="`${url}assets/${item.directus_files_id}?fit=cover&height=420&width=1080&format=webp`" alt="Gallery image" height="420" width="1080" :class="`bg-cover ${index == pic_key ? 'animate-text-right' : 'hidden'} h-full w-full`">
	</template>
	<svg @click="pic_key += 1" v-if="!end_slider" class="w-12 h-12 absolute right-2 text-white cursor-pointer" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
	<div class="absolute left-2 top-2 bg-white bg-opacity-70">
		<span class="p-2 text-lg font-bold">
			{{pic_key + 1}} / {{totalpics}}
		</span>
	</div>
</template>

<script>
export default{
	props:{
		totalpics: Number,
		files: Array,
		url: String
	},
	data(){
		return{
			pic_key:0,
			img_index:0,
			end_slider:false
		}
	},
	watch:{
  	pic_key(val){
  		this.img_index = val
  		const total = this.totalpics - 1
  		if(val == total){
  			this.end_slider = true
  		}else{
  			this.end_slider = false
  		}
  	}
  }
}
</script>

<style>
.animate-text-right {
  animation-duration: 0.2s;
  animation-name: slideright;
  animation-timing-function: linear;
}

@keyframes slideright {
  from {
    margin-left: -1%;
  }

  to {
    padding-right: 0%;
  }
}
</style>