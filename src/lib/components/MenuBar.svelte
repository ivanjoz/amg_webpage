<script lang="ts">
	let showMenu = $state(false);

	const menuOptions = [
		{
			name: 'Inicio',
			handler: () => {
				const hash = window.screen.availWidth > 550 ? 'inicio' : 'inicio-mobile';
				window.location.hash = hash;
			}
		},
		{
			name: 'Nosotros',
			handler: () => {
				const hash = window.screen.availWidth > 550 ? 'nosotros' : 'nosotros-mobile';
				window.location.hash = hash;
			}
		},
		{
			name: 'Contacto',
			handler: () => {
				window.location.hash = 'contacto-d';
			}
		}
	];
</script>

<div class="menu-bar">
	{#each menuOptions as menu}
		<div
			class="o-menu"
			onclick={(e) => {
				e.stopPropagation();
				menu.handler();
			}}
		>
			{menu.name.toUpperCase()}
		</div>
	{/each}
</div>

<div
	id="mob-menu-icon"
	class="_mobile"
	onclick={(e) => {
		e.stopPropagation();
		showMenu = !showMenu;
	}}
>
	MENU
</div>

{#if showMenu}
	<div id="mob-menu">
		{#each menuOptions as menu}
			<div
				onclick={(e) => {
					e.stopPropagation();
					showMenu = false;
					menu.handler();
				}}
			>
				{menu.name}
			</div>
		{/each}
	</div>
{/if}
