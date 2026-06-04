<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>AMG Inmobiliaria & Constructora</title>
	<meta property="og:locale" content="es_ES" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/images/logo_amg7.jpg" />
	<meta property="og:image:secure_url" content="/images/logo_amg7.jpg" />
	<meta property="og:image:width" content="500" />
	<meta property="og:image:height" content="500" />
	<meta property="og:image:alt" content="AMG Logo" />
	<meta name="description" content="AMG Constructora e Inmobiliaria | Elaboración de proyectos arquitectónicos y de construcción, consultoría de obras y estudios de impacto ambiental. En Trujillo, Perú." />
	<link rel="canonical" href="https://agmconstructora.un.pe/" />
	<meta property="og:title" content="AMG Constructora e Inmobiliaria | Elaboración de proyectos arquitectónicos y de construcción, consultoría de obras y estudios de impacto ambiental. En Trujillo, Perú." />
	<meta property="og:description" content="Elaboración de proyectos arquitectónicos y de construcción, consultoría de obras y estudios de impacto ambiental. En Trujillo, Perú." />
	<meta property="og:url" content="https://agmconstructora.un.pe/" />
	<meta property="og:site_name" content="AGM CONSTRUCTURA" />
	<link rel="stylesheet" href="/libs/fontello-embedded.css" />
</svelte:head>

{@render children()}
