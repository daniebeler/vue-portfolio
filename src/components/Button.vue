<template>
  <a :href="url" class="btn_genera btn_ligh myButton"><strong>{{name}}</strong></a>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    name: String,
    url: String,
  },
};
</script>

<style scoped>
.myButton {
	background-color: var(--my_primary);
	border-radius:26px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:13px 26px;
	text-decoration:none;
  transition-duration: 0.2s;
}
.myButton:hover {
	background-color:#252734;
}
.myButton:active {
	position:relative;
	top:1px;
}
</style>
