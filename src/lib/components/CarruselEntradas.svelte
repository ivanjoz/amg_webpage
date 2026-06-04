<script lang="ts">
	import { formatTime } from '$lib/globals.js';

	const entradas = [
		{
			id: '107707667247920_129946568357363',
			message:
				'PROGRAMA TECHO PROPIO 🏠🌳\nNo dejes pasar esta oportunidad que da el estado! Inscríbete con nosotros en esta convocatoria 3N-2019 y juntos construiremos tu vivienda propia!\nEscríbenos para más información en la modalidad CONSTRUCCIÓN EN SITIO PROPIO 🏘\n\nINSCRIBETE CON NOSOTROS!\n#FMV #ProgramaTechoPropio #FondoMiVivienda #ConstruccionEnSitioPropio #MiVivienda #MiCasaPropia #CSP #TechoPropio\n📞 Contactanos al 921731481 (Trujillo)\n📌 Oficina: Ca. Guillermo Marconi #622 - Urb. Pay Pay\n🕐 Horario: lunes a Viernes de 9:00 am. a 1:00 pm. / 3:00 pm. a 7:00 pm. y Sábados: De 9:00 am. a 1:00 pm.',
			created_time: 1569079846000,
			permalink_url: 'https://www.facebook.com/107707667247920/posts/129946568357363/',
			type: 'fb'
		},
		{
			id: '107707667247920_128400241845329',
			message:
				'PROGRAMA TECHO PROPIO 🏠🌳\nNo dejes pasar esta oportunidad que da el estado! Inscríbete con nosotros en esta convocatoria 3N-2019 y juntos construiremos tu vivienda propia!\nEscríbenos para más información en la modalidad CONSTRUCCIÓN EN SITIO PROPIO 🏘\n\nJUNTOS CONSTRUYENDO TUS SUEÑOS‼️\n#FMV #ProgramaTechoPropio #FondoMiVivienda #ConstruccionEnSitioPropio #MiVivienda #MiCasaPropia #CSP #TechoPropio\n📌 Oficina: Ca. Guillermo Marconi #622 - Urb. Pay Pay',
			created_time: 1568667479000,
			permalink_url: 'https://www.facebook.com/107707667247920/posts/128400241845329/',
			type: 'fb'
		},
		{
			id: '107707667247920_124055485613138',
			message:
				'No dejes pasar esta oportunidad‼️🏠\nSomos una empresa autorizada, INSCRIBETE CON NOSOTROS!\nEscríbenos para conocer los requisitos y obtener tu casa propia con EL BONO FAMILIAR HABITACIONAL 🏠🌳👪\n📞 Contactanos al 940696382 o al 921731481\n📌 En oficina Ca. Guillermo Marconi #622 - Urb. Pay Pay\n🕐 Horario: lunes a Viernes de 9:00 am. a 1:00 pm. / 3:00 pm. a 7:00 pm. y Sábados: De 9:00 am. a 1:00 pm.',
			created_time: 1567549494000,
			permalink_url: 'https://www.facebook.com/107707667247920/posts/124055485613138/',
			type: 'fb'
		},
		{
			id: '107707667247920_122438302441523',
			message:
				'‼️🏆 GANAMOS 🏆‼️ 🥳🎉\nGANADORES DEL SORTEO del 28 de Agosto 2019 para otorgamiento del BONO FAMILIAR HABITACIONAL - BFH en la modalidad de aplicación de CONSTRUCCIÓN EN SITIO PROPIO para la población damnificada. 🏠🌳\nAMG Constructora e Inmobiliaria SAC #FondoMiVivienda #TechoPropio #ViviendaPropia #CSP #ProgramaTechoPropio #ConstruyendoJuntos 🏘',
			created_time: 1567208666000,
			permalink_url: 'https://www.facebook.com/107707667247920/posts/122438302441523/',
			type: 'fb'
		},
		{
			id: '107707667247920_119360046082682',
			message:
				'APROVECHA‼️ #TechoPropio #FondoMiVivienda\nGran beneficio del estado "BONO FAMILIAR HABITACIONAL" en la modalidad Construcción en Sitio Propio‼️🏠👨🏻‍👩🏻‍👧🏻‍👦🏻\nSomos una constructora con código autorizado 3N -2019 👍🏻\nCon más de 300 Viviendas construidas a nivel nacional 🏠👍🏻\n\nSi tienes titulo de propiedad inscrito en registros públicos sin cargos ni gravámenes, consulta los requisitos para iniciar la inscripción.\nNuestros asesores están esperando por ti!!\nNO ESPERES MAS PARA CONSTRUIR TU CASA 🏠',
			created_time: 1566595899000,
			permalink_url: 'https://www.facebook.com/107707667247920/posts/119360046082682/',
			type: 'fb'
		},
		{
			id: '107707667247920_118463542838999',
			message:
				'Cumpliendo sueños juntos a nivel Nacional con el programa Techo propio 🏡\nAgunos de nuestros PROYECTOS DE RECONSTRUCCIÓN terminados en PIURA, LAMBAYEQUE Y LIMA 2018!! 👨‍👩‍👧‍👦🏡\n\n#TechoPropio 2018 #FondoMiVivienda #FMV #Reconstrucción #CasaPropia #Lima #Piura #lambayeque',
			created_time: 1566428448000,
			permalink_url: 'https://www.facebook.com/107707667247920/posts/118463542838999/',
			type: 'fb'
		}
	];

	let activeIndex = $state(0);
	let itemsToShow = $state(1);

	$effect(() => {
		const update = () => {
			itemsToShow = window.innerWidth < 580 ? 1 : 3;
		};
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	});

	const maxIndex = $derived(Math.max(0, entradas.length - itemsToShow));
	const visible = $derived(entradas.slice(activeIndex, activeIndex + itemsToShow));

	function prev() {
		activeIndex = Math.max(0, activeIndex - 1);
	}
	function next() {
		activeIndex = Math.min(maxIndex, activeIndex + 1);
	}

	const btnBase =
		'align-self: center; background: transparent; border: 2px solid #ffffff69; border-radius: 5px; color: #ffffffd4; cursor: pointer; font-size: 20px; line-height: 1; text-align: center; position: absolute; z-index: 50;';

	const prevStyle = $derived(
		itemsToShow === 1
			? `${btnBase} width: 3.2rem; height: 2rem; bottom: -2.4rem; left: 3rem;`
			: `${btnBase} width: 2rem; height: 2.6rem; left: -1rem;`
	);

	const nextStyle = $derived(
		itemsToShow === 1
			? `${btnBase} width: 3.2rem; height: 2rem; bottom: -2.4rem; right: 3rem;`
			: `${btnBase} width: 2rem; height: 2.6rem; right: -1rem;`
	);
</script>

<div class="publicaciones" style="position: relative; display: flex; justify-content: center; align-items: center;">
	<button style={prevStyle} onclick={prev} disabled={activeIndex === 0}>{'<'}</button>

	{#each visible as et (et.id)}
		<div class="card2-c" style="padding: 6px">
			<div class="card2">
				<img src="/cms/facebook/{et.id}.jpeg" alt="facebook" />
				<div>
					<span>@AMGconstructoraSAC</span>
					<span class="icon icon-calendar">
						<span>{formatTime(et.created_time, 11)}</span>
					</span>
				</div>
				<span class="h5">{et.message}</span>
				<button onclick={() => window.open(et.permalink_url, '_blank')}>VER MÁS</button>
			</div>
		</div>
	{/each}

	<button style={nextStyle} onclick={next} disabled={activeIndex >= maxIndex}>{'>'}</button>
</div>
