<script>
	import { page } from '$app/stores';
</script>

<h1 class="text-3xl font-bold underline">{$page.status}: {$page.error?.message}</h1>