<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		class: className = '',
		style,
		children
	} = $props<{ class?: string; style?: string; children?: Snippet }>();

	let el = $state<HTMLDivElement | null>(null);
	let visible = $state(false);

	$effect(() => {
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				visible = entry.isIntersecting;
			},
			{ rootMargin: '-200px 0px -150px 0px' }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});

	const cn = $derived(visible ? `${className} active` : className);
</script>

<div bind:this={el} class={cn} {style}>
	{@render children?.()}
</div>
