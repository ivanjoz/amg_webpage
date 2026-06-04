<script lang="ts">
	let { src = '', alt = '' } = $props<{ src?: string; alt?: string }>();
</script>

<picture style="display: contents">
	<source srcset="images/blank.png" media="(max-width: 550px)" />
	<source srcset={src} media="(min-width: 550px)" />
	<img src="images/blank.png" {alt} />
</picture>
