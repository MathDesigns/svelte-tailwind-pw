<script>
	import { page } from '$app/stores';
</script>

<h1 class="flex items-center justify-center my-5 mx-auto text-3xl font-bold py-4 animate-bounce">{$page.status}: {$page.error?.message}</h1>
<div class="flex items-center justify-center">
	<img src="/mario-no.jpg" alt="NO" class="rounded-lg">
</div>

<style lang="postcss">
	:global(html) {
	  background-color: theme(colors.light-back);
	  
	}
  </style>
  