<script lang="ts">
	import AnimateEffect from '$lib/components/AnimateEffect.svelte';
	import CarruselEntradas from '$lib/components/CarruselEntradas.svelte';
	import FooterBar from '$lib/components/FooterBar.svelte';
	import ImgDesk from '$lib/components/ImgDesk.svelte';
	import ImgMob from '$lib/components/ImgMob.svelte';
	import MenuBar from '$lib/components/MenuBar.svelte';
	import { parseSVG } from '$lib/globals.js';

	import sobreNosotrosSvg from '$lib/svg/sobre_nosotros.svg?raw';
	import logoamg4Svg from '$lib/svg/logoamg4.svg?raw';
	import agmbanner3Svg from '$lib/svg/agmbanner3.svg?raw';
	import esquinam8Svg from '$lib/svg/esquinam8.svg?raw';
	import fondomobil3Svg from '$lib/svg/fondomobil3.svg?raw';
	import logoamg2Svg from '$lib/svg/logoamg2.svg?raw';
	import lunablancaSvg from '$lib/svg/lunablanca.svg?raw';
	import servicios2Svg from '$lib/svg/servicios2.svg?raw';
	import esquina2Svg from '$lib/svg/esquina2.svg?raw';
	import esquina3Svg from '$lib/svg/esquina3.svg?raw';
	import esquina4sideSvg from '$lib/svg/esquina4side.svg?raw';
	import bannersitio4Svg from '$lib/svg/bannersitio4.svg?raw';
	import camara2Svg from '$lib/svg/camara2.svg?raw';
	import mision5Svg from '$lib/svg/mision5.svg?raw';
	import mision8Svg from '$lib/svg/mision8.svg?raw';
	import objetivos2Svg from '$lib/svg/objetivos2.svg?raw';
	import contactanosSvg from '$lib/svg/contactanos.svg?raw';
	import mensajeEnviadoSvg from '$lib/svg/mensaje_enviado.svg?raw';
	import esquinam10Svg from '$lib/svg/esquinam10.svg?raw';
	import imagenborderSvg from '$lib/svg/imagenborder.svg?raw';
	import fondo2Svg from '$lib/svg/fondo2.svg?raw';
</script>

<MenuBar />

<div id="inicio" class="fondo1 inline-h mob-0 bg-center-center w100">
	<img src={parseSVG(agmbanner3Svg)} alt="banner AMG" />
	<img class="esquina" src={parseSVG(esquinam8Svg)} alt="" />
</div>

<div id="nosotros" class="fondo2 inline-v mob-0 w100">
	<img class="nosotros" src={parseSVG(sobreNosotrosSvg)} alt="sobre nosotros" />
	<div class="inline-h w100">
		<img class="logo1" src={parseSVG(logoamg4Svg)} alt="logo AMG" />
		<div class="text3 tx2 mb3 jus">
			<span>AMG Constructura e Inmobiliaria SAC es una empresa dedicada a brindar servicios arquitectónicos y de construcción. Contamos con un equipo de arquitectos e ingenieros que guía a nuestros clientes en cada etapa de sus proyectos, desde el análisis de prefactibilidad, el expediente técnico, la elaboración de los planos hasta la realización de la obra.</span>
			<span>Brindamos consultoría, realizamos estudios de impacto ambiental y estamos inscritos como entidad técnica ante el ministerio de vivienda.</span>
		</div>
	</div>
	<div class="encuentranos inline-h">
		<span style="margin-right: 0.5vw">ENCUÉNTRANOS EN:</span>
		<img
			onclick={() => window.open('https://facebook.com/AMGconstructoraSAC/', '_blank')}
			src="images/fblogo2.png"
			alt="fb logo"
		/>
		<img
			onclick={() => window.open('https://www.instagram.com/AMGconstructoraSAC/', '_blank')}
			src="images/instagram2.png"
			alt="instagram logo"
		/>
	</div>
</div>

<div id="inicio-mobile" class="m-inicio inline-v jc mob-1 w100">
	<img src={parseSVG(fondomobil3Svg)} alt="" />
</div>

<div id="nosotros-mobile" class="m-nosotros inline-v mob-1 w100">
	<img src={parseSVG(sobreNosotrosSvg)} alt="sobre nosotros" />
	<div class="ctn5 tx2 mb2">
		<img class="amglogo" src={parseSVG(logoamg2Svg)} alt="logo amg" />
		<span>AMG Constructura e Inmobiliaria SAC es una empresa dedicada a brindar servicios arquitectónicos y de construcción. Contamos con un equipo de arquitectos e ingenieros que guía a nuestros clientes en cada etapa de sus proyectos, desde el análisis de prefactibilidad, el expediente técnico, la elaboración de los planos hasta la realización de la obra.</span>
		<span>Brindamos consultoría, realizamos estudios de impacto ambiental y estamos inscritos como entidad técnica ante el ministerio de vivienda.</span>
	</div>
</div>

<div class="capa-rubros inline-v jc mob-0 w100">
	<div class="circle1 inline-v jc">
		<span class="bigt">RUBROS</span>
	</div>
	<div class="ctn-rubros">
		<div class="rubro left r1">
			<div class="fulltext">
				Elaboramos el proyecto arquitectónico y el expediente técnicos y nos encargamos de los trámites y la puesta en marcha de la obra.
			</div>
			<div class="tx0 tx1">
				<h3>PROYECTOS Y CONSTRUCCIÓN</h3>
			</div>
			<div class="img1">
				<img src="images/circle1.jpg" alt="" />
			</div>
		</div>
		<div class="rubro r2">
			<div class="fulltext">
				Estudiamos el impacto que tu obra tiene sobre el medio ambiente para que pueda cumplir con las regulaciones y normas.
			</div>
			<div class="img1">
				<img src="images/imagen2.jpg" alt="" />
			</div>
			<div class="tx0 tx2">
				<h3>ESTUDIOS DE IMPACTO AMBIENTAL</h3>
			</div>
		</div>
		<div class="rubro left r3">
			<div class="fulltext">
				Somos entidad técnica ganadora de 4 sorteos del programa Techo Propio, trabajamos con el FMV en la reconstrucción de viviendas de interés social.
			</div>
			<div class="tx0 tx1">
				<h3>PROGRAMA TECHO PROPIO</h3>
			</div>
			<div class="img1">
				<img src="images/imagen3.jpg" alt="" />
			</div>
		</div>
		<div class="rubro r4">
			<div class="fulltext">
				Nos dedicamos a la compra y venta de inmuebles asesorándolos para que consigan la casa que más se adapte a sus requerimientos.
			</div>
			<div class="img1">
				<img src="images/imagen4.jpg" alt="" />
			</div>
			<div class="tx0 tx2">
				<h3>INMMOBILIARIA</h3>
			</div>
		</div>
	</div>
</div>

<div class="m-rubros inline-v mob-1 w100">
	<div class="title"><h1>RUBROS</h1></div>
</div>

<div class="m-rubros2 inline-v mob-1 w100">
	<AnimateEffect class="m-rubro left">
		<div class="text">
			<h3>PROYECTOS Y CONSTRUCCIÓN</h3>
			<span>Elaboramos el proyecto arquitectónico y el expediente técnicos y nos encargamos de los trámites y la puesta en marcha de la obra.</span>
		</div>
		<div class="circle">
			<img src="images/circle1.jpg" alt="" />
		</div>
	</AnimateEffect>
	<AnimateEffect class="m-rubro right">
		<div class="text">
			<h3>ESTUDIOS DE IMPACTO AMBIENTAL</h3>
			<span>Estudiamos el impacto que tu obra tiene sobre el medio ambiente para que pueda cumplir con las regulaciones y normas.</span>
		</div>
		<div class="circle">
			<img src="images/imagen2.jpg" alt="" />
		</div>
	</AnimateEffect>
	<AnimateEffect class="m-rubro left">
		<div class="text">
			<h3>PROGRAMA TECHO PROPIO</h3>
			<span>Elaboramos el proyecto arquitectónico y el expediente técnicos y nos encargamos de los trámites y la puesta en marcha de la obra.</span>
		</div>
		<div class="circle">
			<img src="images/imagen3.jpg" alt="" />
		</div>
	</AnimateEffect>
	<AnimateEffect class="m-rubro right">
		<div class="text">
			<h3>INMMOBILIARIA</h3>
			<span>Somos entidad técnica ganadora de 4 sorteos del programa Techo Propio, trabajamos con el FMV en la reconstrucción de viviendas de interés social.</span>
		</div>
		<div class="circle">
			<img src="images/imagen4.jpg" alt="" />
		</div>
	</AnimateEffect>
</div>

<div class="noticias inline-v jc w100">
	<h2>NOTICIAS</h2>
	<div class="posts">
		<div class="publicaciones s1 glide">
			<CarruselEntradas />
		</div>
	</div>
</div>

<div class="construye1 w100">
	<img class="hide" src="images/construye1.jpg" alt="" />
	<div class="flex-column w100 jc ac">
		<span class="tt5">CONSTRUYE TU CASA ¡GRATIS!</span>
		<span>SOLO HASTA FIN DE AÑO</span>
	</div>
	<div class="flex1 c5 w100">
		<div class="flex">
			<img class="img2" src="images/techo-propio.jpg" alt="" />
		</div>
		<div class="flex">
			<div class="c6">
				<div class="c7">Documentos</div>
				<div class="c12 p07rem">
					<p class="flex1">
						<i class="icon-ok"></i>
						<span>Copia o fotografía del propietario del predio y del cónyugue o de la carga familiar menor a 25 años.</span>
					</p>
					<p class="flex1">
						<i class="icon-ok"></i>
						<span>Copia literal del predio emitia por SUNARP, solicítalo virtualmente en:
							<span id="linksunarpweb" class="link1">
								https://enlinea.sunarp.gob.pe/sunarpweb/pages/acceso/ingreso.faces
							</span>
						</span>
					</p>
					<p class="flex1"><i class="icon-ok"></i><span>Ficha de Registro</span></p>
					<p class="flex1"><i class="icon-ok"></i><span>Formulario de Inscripcion</span></p>
					<p class="flex1"><i class="icon-ok"></i><span>Declaración Jurada</span></p>
					<p class="flex1"><i class="icon-ok"></i><span>Carta Poder de Representación</span></p>
					<div class="flex1 w100 jc">
						<button id="descargarDocumentos" class="bn21">
							DESCARGAR DOCUMENTOS
							<i class="icon-download"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="capa-arq inline-v jc mob-0 w100">
	<img class="img-esquina" src="images/arquitectura8.png" alt="" />
	<h2 class="mB02">PROYECTOS Y CONSTRUCCIÓN</h2>
	<div class="ctn1 tx2 mb2 jus z05">
		<span>Te ayudamos a llevar a cabo tu proyecto arquitectónico, comenzando por la asesoría técnica y la pre-fectibilidad hasta la elección de los materiales, la elaboración de los planos, estructuras y conexiones, el expediente técnico, el diseño de interiores, la licencia de construcción y finalmente la supervición y ejecución de la obra.</span>
		<span>Contamos con un equipo de arquitectos e ingenieros de alto nivel. Te asesoramos en tu proyecto en curso y nos aseguramos que la obra cumpla con los requisitos técnicos y las normas vigentes. Las siguientes con imágenes de algunos de los proyectos que hemos realizado.</span>
	</div>
</div>

<div class="capa-gal1 inline-v z05 mob-0 w100">
	<img src={parseSVG(camara2Svg)} alt="" />
	<div class="gal1 inline-v">
		<img src={parseSVG(lunablancaSvg)} alt="" />
		<div class="head1 w100">
			<div></div>
			<h2>GALERÍA DE IMÁGENES</h2>
			<div></div>
		</div>
		<div id="gallery1" class="gallery1 flex w100">
			<img src="cms/S_1569253384.jpeg" alt="techopropio8" />
			<img src="cms/S_1569253317.jpeg" alt="techopropio7" />
			<img src="cms/S_1569253301.jpeg" alt="techopropio6" />
			<img src="cms/S_1569253288.jpeg" alt="techopropio5" />
			<img src="cms/S_1569253267.jpeg" alt="techopropio4" />
			<img src="cms/S_1569204495.jpeg" alt="techopropio3" />
			<img src="cms/S_1569203261.jpeg" alt="techopropio2" />
			<img src="cms/S_1569203243.jpeg" alt="techopropio1" />
		</div>
	</div>
</div>

<div class="capa-arq2 inline-v jc mob-0 w100">
	<img src={parseSVG(servicios2Svg)} alt="" />
	<div class="cards">
		<div class="card1 inline-v">
			<div class="circle">
				<img src="images/asesoria2.jpg" alt="" />
			</div>
			<h2>Asesoría y Factibilidad</h2>
			<span>Te asesoramos en el diseño y planteamiento de tu proyecto acorde a los requisitos técnicos, el presupuesto y las normas vigentes.</span>
		</div>
		<div class="card1 inline-v">
			<div class="circle">
				<img src="images/diseño5.jpg" alt="" />
			</div>
			<h2>Planificación y Diseño</h2>
			<span>Realizamos el diseño arquitectónico y los planos de las estructuras eléctricas y sanitarias y elaboramos el expediente técnico.</span>
		</div>
		<div class="card1 inline-v">
			<div class="circle">
				<img src="images/document5.jpg" alt="" />
			</div>
			<h2>Trámites y Documentos</h2>
			<span>Gestionamos la licencia de construcción en coordinación con las entidades correspondientes. Realizamos la conformidad de obra.</span>
		</div>
		<div class="card1 inline-v">
			<div class="circle">
				<img src="images/build3.jpg" alt="" />
			</div>
			<h2>Puesta en Marcha</h2>
			<span>Llevamos a cabo la ejecución y supervisión de la obra y el suministro de materiales en conformidad con los planos y estructuras.</span>
		</div>
	</div>
</div>

<div class="capa-ambiental inline-v jc mob-0 w100">
	<img class="arbol z10" src="images/arbol4.png" alt="" />
	<img class="esquina1" src={parseSVG(esquina2Svg)} alt="" />
	<img class="esquina2" src={parseSVG(esquina3Svg)} alt="" />
	<h2>ESTUDIOS DE IMPACTO AMBIENTAL</h2>
	<div class="ctn1 tx2 mb2 mT02 jus z05">
		<span>Te asesoramos en las normativas técnicas y las buenas prácticas que debe cumplir tu proyecto para reducir su impacto en el medio ambiente y en la comunidad.</span>
		<span>Elaboramos programas de adecuación medio ambiental y diagnosticamos el impacto de tu obra o actividad para asegurar que se adecue a la normativa ambiental vigente aplicable a tu rubro, evitando multas o sanciones y asegurando la sostenibilidad de tu proyecto.</span>
	</div>
</div>

<div class="capa-ambiental2 inline-h mob-0 bg-center-right-c w100">
	<img class="arbol2" src="images/arbol6.png" alt="" />
	<img src={parseSVG(esquina4sideSvg)} alt="" />
	<div class="text1 tx2 mb2 jus">
		<h2>¿POR QUÉ HACER ESTUDIOS <br /> DE IMPACTO AMBIENTAL?</h2>
		<div class="tx2">
			<span>Los estudios de impacto ambiental son importantes para diagnosticar el impacto de la actividad de una empresa o proyecto dentro de su entorno inmediato, asegurando su sostenibilidad y una sinergia adecuada con los actores involucrados.</span>
			<span>Las regulaciones con cada vez más exigentes y específicas por ello es importante asegurar que su proyecto cumpla con dichas normas para que sea viable y no haya inconvenientes.</span>
		</div>
	</div>
</div>

<div class="capa-sitio inline-h jc mob-0 w100">
	<img src={parseSVG(bannersitio4Svg)} alt="" />
	<div class="ctn5 tx2 mb2">
		<h2>¿QUÉ ES TECHO PROPIO?</h2>
		<div class="tx2">
			<span>Es un programa dirigido a las familias con ingresos familiares mensuales que no excedan el valor de S/ 3,538 para comprar y S/ 2,627 para construir o mejorar su vivienda, la misma que contará con servicios básicos de luz, agua, desagüe.</span>
		</div>
		<img class="logomivivienda" src="images/mivivienda1.png" alt="logo fondo mi vivienda" />
	</div>
	<div class="circle4">
		<ImgDesk src="images/sitiopropio.jpg" />
	</div>
	<div class="ctn5 tx2 mb2">
		<h2>¿QUÉ HACEMOS?</h2>
		<div class="tx2">
			<span>Trabajos en coordinación con el Fondo Mi Vivienda para la reconstrucción de viviendas de interés social que fueron afectadas por el fenómeno del niño costero.</span>
			<span>Estamos certificados como entidad técnica lo que nos permite participar en diferentes programas como construcción en Sitio Propio (modalidad reconstrucción y 3N) y AVN.</span>
		</div>
	</div>
</div>

<div class="capa-medalla w100 mob-0">
	<div class="medalla inline-h jc">
		<img src="images/medalla5.png" alt="" />
		<div class="inline-v text2">
			<h3>GANADORES DE 4 SORTEOS</h3>
			<span>Gracias a la calidad de nuestro trabajo y equipo técnico. Puedes revisar los documentos del sorteo aquí.</span>
			<button>DOCUMENTOS</button>
		</div>
	</div>
</div>

<div class="capa-galeria2 inline-v z05 mob-0 w100">
	<img src={parseSVG(camara2Svg)} alt="" />
	<div class="gal1 inline-v">
		<img src={parseSVG(lunablancaSvg)} alt="" />
		<div class="head1 w100">
			<div></div>
			<h2>GALERÍA DE IMÁGENES</h2>
			<div></div>
		</div>
		<div id="gallery2" class="gallery1 flex w100">
			<img src="cms/S_1569253384.jpeg" alt="techopropio8" />
			<img src="cms/S_1569253317.jpeg" alt="techopropio7" />
			<img src="cms/S_1569253301.jpeg" alt="techopropio6" />
			<img src="cms/S_1569253288.jpeg" alt="techopropio5" />
			<img src="cms/S_1569253267.jpeg" alt="techopropio4" />
			<img src="cms/S_1569204495.jpeg" alt="techopropio3" />
			<img src="cms/S_1569203261.jpeg" alt="techopropio2" />
			<img src="cms/S_1569203243.jpeg" alt="techopropio1" />
		</div>
	</div>
</div>

<div class="inmobiliaria1 inline-v jc mob-0 bg-top-center w100">
	<div class="box inline-v jc">
		<h2>INMOBILIARIA</h2>
		<div class="tx2">
			Llevamos a cabo la ejecución de la obra, el suministro de materiales y la supervisión de la misma, brindando así un servicio integral que asegura el cumplimiento del proyecto. Tenemos departamentos en venta de proyectos que hemos realizado.
		</div>
	</div>
</div>

<div class="inmobiliaria2 inline-h mob-0 w100">
	<div class="proyecto a1">
		<div class="etiqueta"><h3>LOS GIRASOLES 2</h3></div>
		<img src="images/girasoles3.jpg" alt="" />
	</div>
	<div class="circle4 inline-v jc">
		<h2>PROYECTOS</h2>
	</div>
	<div class="proyecto a2">
		<img src="images/orquideas4.jpg" alt="" />
		<div class="etiqueta"><h3>LAS ORQUIDEAS 2</h3></div>
	</div>
</div>

<div class="inmobiliaria3 w100 inline-v jc mob-0">
	<div class="inline-h text">
		<div class="inline-v">
			<div class="inline-v mB01 w100 masinfo">
				<button class="bn3">+INFORMACIÓN</button>
			</div>
			<span>A pocos minutos del Mall Aventura Plaza de Trujillo, Penta Mall, Macro de Trujillo ubicado estrategicamente en el distrito de San Isidro y vias de facil circulación. Cerca a comercios, centros de salud, restuarantes, centros de estudio y Centro Historico.</span>
		</div>
		<div class="separador"></div>
		<div class="inline-v">
			<div class="inline-v mB01 w100 masinfo">
				<button class="bn3">+INFORMACIÓN</button>
			</div>
			<span>A pocos minutos del Mall Aventura Plaza. Diseñado y equipado pensando en ofrecerte la maxima comodidad en todas tus actividades, conscientes de lo importante que es para ti encontrar un lugar donde se respire tranquilidad y bienestar</span>
		</div>
	</div>
	<div class="gal1 g2 inline-v">
		<div class="circle"></div>
		<div class="head1 w100">
			<div></div>
			<h2>GALERÍA</h2>
			<div></div>
		</div>
		<div id="gallery3" class="gallery1 flex w100">
			<img src="cms/S_1569352747.jpeg" alt="girasoles1" />
			<img src="cms/S_1569352764.jpeg" alt="girasoles2" />
			<img src="cms/S_1569352774.jpeg" alt="girasoles3" />
			<img src="cms/S_1569352786.jpeg" alt="orquedeas1" />
			<img src="cms/S_1569352796.jpeg" alt="orquedeas2" />
			<img src="cms/S_1569352806.jpeg" alt="orquedeas3" />
		</div>
	</div>
</div>

<div id="mision-d" class="mision inline-h mob-0 w100">
	<img src={parseSVG(mision5Svg)} alt="" />
	<div class="inline-v jc mision1">
		<div class="line11 l1 inline-h">
			<div></div>
			<div><h1>MISION</h1></div>
		</div>
		<div class="ctn3 tx2">
			<span>Elaboramos proyectos arquitectónicos, ejecución y supervisión de obras públicas y privadas, consultorías y estudios de impacto ambiental. con un equipo técnico conformado por profesionales de primer nivel y amplia trayectoria en el sector construcción, servicios generales, consultorías y en la ejecución de proyectos y obras diversas.</span>
		</div>
	</div>
</div>

<div class="vision inline-v jc mob-0 w100">
	<img src={parseSVG(mision8Svg)} alt="" />
	<div class="image5">
		<img src="images/architech.jpg" alt="" />
	</div>
	<div class="vision1"><h1>VISION</h1></div>
	<div class="ctn6">
		<span>Ser una empresa reconocida a nivel nacional y de Latinoamérica, mostrando en cada momento confiabilidad y dedicación en nuestro trabajo, liderando mercados y contribuyendo al desarrollo sostenible y medioambiental de las zonas donde ejecutemos nuestros proyectos.</span>
	</div>
</div>

<div class="objetivos inline-h jc mob-0 w100">
	<img src={parseSVG(objetivos2Svg)} alt="" />
	<div class="title"><h1>VALORES</h1></div>
	<div class="h-line"></div>
	<div class="objetivos-1">
		<span>Íntegros:&nbsp;La transparencia y honestidad rigen todas nuestras relaciones.</span>
		<span>Serviciales:&nbsp;Comprometidos con la satisfacción a largo plazo de nuestros clientes.</span>
		<span>Innovadores:&nbsp;Enfocados en la calidad y mejora continua de los espacios que creamos.</span>
		<span>Respetuosos:&nbsp;Valoramos a las personas, las comunidades y el medio ambiente.</span>
		<span>Trabajo en Equipo: Potenciamos las aptitudes y esfuerzos de nuestros profesionales, logrando eficacia en los trabajos que realizamos.</span>
	</div>
</div>

<div id="contacto-d" class="contacto inline-h mob-0 w100">
	<div class="inline-h jc w100">
		<div class="contacto-img">
			<img src={parseSVG(contactanosSvg)} alt="" />
		</div>
		<div class="inline-v contact-form-ctn">
			<div id="contact-form1" class="inline-v contact-form">
				<span class="mB01"><h3>¿Tienes alguna consulta?</h3></span>
				<span class="mB03">Déjanos un mensaje. Te responderemos a la brevedad</span>
				<div class="inline-h mB014">
					<span>NOMBRES</span>
					<input name="Nombre" type="text" required />
				</div>
				<div class="inline-h mB014">
					<span>EMAIL</span>
					<input name="Email" type="email" required />
				</div>
				<div class="inline-h">
					<span>MENSAJE</span>
					<textarea name="Mensaje" rows={12} required></textarea>
				</div>
				<div class="inline-h">
					<button class="b1 mT02 enviar">ENVIAR</button>
				</div>
			</div>
			<div id="enviando1" class="enviando-mensaje">
				<div class="loader">Enviado...</div>
				<span>Enviado mensaje...</span>
			</div>
			<div id="enviado1" class="mensaje-enviado">
				<span>Hemos recibido su mensaje</span>
				<img src={parseSVG(mensajeEnviadoSvg)} alt="mensaje enviado" />
				<span>Nos pondremos en contacto con usted en breve de ser el caso.</span>
				<span>Muchas gracias por su interés <br /> en AMG Constructura SAC.</span>
			</div>
		</div>
	</div>
</div>

<div class="m-arqui inline-v mob-1 w100">
	<img src="images/arquitectura8.png" alt="" />
	<h2>PROYECTOS Y <br /> CONSTRUCCIÓN</h2>
	<div class="ctn5 tx2 mb2">
		<span>Te ayudamos a llevar a cabo tu proyecto arquitectónico, comenzando por la asesoría técnica y la pre-fectibilidad hasta la elección de los materiales, la elaboración de los planos, estructuras y conexiones, el expediente técnico, el diseño de interiores, la licencia de construcción y finalmente la supervición y ejecución de la obra.</span>
		<span>Contamos con un equipo de arquitectos e ingenieros de alto nivel. Te asesoramos en tu proyecto en curso y nos aseguramos que la obra cumpla con los requisitos técnicos y las normas vigentes. Las siguientes con imágenes de algunos de los proyectos que hemos realizado.</span>
	</div>
	<img class="esquina1" src={parseSVG(esquinam10Svg)} alt="" />
</div>

<div class="m-gal1 inline-v mob-1 w100">
	<img class="esquina1" src={parseSVG(esquinam10Svg)} alt="" />
	<img class="camara" src={parseSVG(camara2Svg)} alt="" />
	<div class="mB04 tt1 inline-v jc">
		<img src={parseSVG(imagenborderSvg)} alt="" />
		<h2>GALERÍA</h2>
	</div>
	<div id="gallery4" class="gallery4">
		<img src="cms/S_1569253384.jpeg" alt="techopropio8" />
		<img src="cms/S_1569253317.jpeg" alt="techopropio7" />
		<img src="cms/S_1569253301.jpeg" alt="techopropio6" />
		<img src="cms/S_1569253288.jpeg" alt="techopropio5" />
		<img src="cms/S_1569253267.jpeg" alt="techopropio4" />
		<img src="cms/S_1569204495.jpeg" alt="techopropio3" />
		<img src="cms/S_1569203261.jpeg" alt="techopropio2" />
		<img src="cms/S_1569203243.jpeg" alt="techopropio1" />
	</div>
</div>

<div class="m-arqui2 inline-v mob-1 w100">
	<img src={parseSVG(servicios2Svg)} alt="" />
	<div class="servicio w100 inline-v jc">
		<div class="label"><h3>Asesoría y Factibilidad</h3></div>
		<div class="circle2"><img src="images/imagen2.jpg" alt="" /></div>
	</div>
	<span class="text1">Te asesoramos en el diseño y planteamiento de tu proyecto acorde a los requisitos técnicos, el presupuesto y las normas vigentes.</span>
	<div class="servicio w100 inline-v jc">
		<div class="label"><h3>Planificación y Diseño</h3></div>
		<div class="circle2"><img src="images/imagen3.jpg" alt="" /></div>
	</div>
	<span class="text1">Realizamos el diseño arquitectónico y los planos de las estructuras eléctricas y sanitarias y elaboramos el expediente técnico.</span>
	<div class="servicio w100 inline-v jc">
		<div class="label"><h3>Trámites y Documentos</h3></div>
		<div class="circle2"><img src="images/imagen5.jpg" alt="" /></div>
	</div>
	<span class="text1">Gestionamos la licencia de construcción en coordinación con las entidades correspondientes. Realizamos la conformidad de obra.</span>
	<div class="servicio w100 inline-v jc">
		<div class="label"><h3>Puesta en Marcha</h3></div>
		<div class="circle2"><img src="images/imagen4.jpg" alt="" /></div>
	</div>
	<span class="text1">Llevamos a cabo la ejecución y supervisión de la obra y el suministro de materiales en conformidad con los planos y estructuras.</span>
</div>

<div class="m-ambiental inline-v jc mob-1 w100">
	<img src="images/arbol4.png" alt="" />
	<h2>ESTUDIOS DE IMPACTO AMBIENTAL</h2>
</div>

<div class="m-ambiental2 inline-v jc mob-1 w100">
	<img src="images/arbolblanco2.png" alt="" />
	<div class="ctn5 tx2 mb2">
		<span>Te asesoramos en las normativas técnicas y las buenas prácticas que debe cumplir tu proyecto para reducir su impacto en el medio ambiente y en la comunidad.</span>
		<span>Elaboramos programas de adecuación medio ambiental y diagnosticamos el impacto de tu obra o actividad para asegurar que se adecue a la normativa ambiental vigente aplicable a tu rubro, evitando multas o sanciones y asegurando la sostenibilidad de tu proyecto.</span>
	</div>
</div>

<div class="m-ambiental3 inline-v jc mob-1 bg-center-center w100">
	<div class="circle5 inline-h">¿POR QUÉ UN ESTUDIO DE IMPACTO AMBIENTAL?</div>
</div>

<div class="m-ambiental4 inline-v jc mob-1 w100">
	<ImgMob src="images/plantas3.png" />
	<div class="ctn5 tx2 mb2">
		<span>Los estudios de impacto ambiental son importantes para diagnosticar el impacto de la actividad de una empresa o proyecto dentro de su entorno inmediato, asegurando su sostenibilidad y una sinergia adecuada con los actores involucrados.</span>
		<span>Las regulaciones con cada vez más exigentes y específicas por ello es importante asegurar que su proyecto cumpla con dichas normas para que sea viable y no haya inconvenientes.</span>
	</div>
</div>

<div class="m-techo mob-1 bg-bottom-center w100">
	<div class="programa inline-v">
		<h2 class="z10">PROGRAMA TECHO <br /> PROPIO</h2>
		<img src={parseSVG(fondo2Svg)} alt="" />
	</div>
</div>

<div class="m-techo2 inline-v mob-1 w100">
	<h3 class="mB02">¿QUÉ ES TECHO PROPIO?</h3>
	<div class="ctn5 tx2 mb2">
		<span>Es un programa dirigido a las familias con ingresos familiares mensuales que no excedan el valor de S/ 3,538 para comprar y S/ 2,627 para construir o mejorar su vivienda, la misma que contará con servicios básicos de luz, agua, desagüe.</span>
	</div>
	<img src="images/mivivienda1.png" alt="logo mi vivienda" />
</div>

<div class="m-techo3 inline-v jc mob-1 bg-bottom-center w100">
	<div class="title2"><h2>¿QUÉ HACEMOS?</h2></div>
</div>

<div class="m-techo4 inline-v mob-1 w100">
	<div class="ctn5 tx2 mb2">
		<span>Trabajos en coordinación con el Fondo Mi Vivienda para la reconstrucción de viviendas de interés social que fueron afectadas por el fenómeno del niño costero.</span>
		<span>Estamos certificados como entidad técnica lo que nos permite participar en diferentes programas como construcción en Sitio Propio (modalidad reconstrucción y 3N) y AVN.</span>
	</div>
</div>

<div class="m-techo5 mob-1 w100">
	<div class="ganadores inline-h">
		<img src="images/medalla5.png" alt="" />
		<div class="text inline-v jc">
			<span>GANADORES DE 4 SORTEOS</span>
			<button class="bn2">Ver Documentos</button>
		</div>
	</div>
	<img class="esquina1" src={parseSVG(esquinam10Svg)} alt="" />
</div>

<div class="m-gal1 inline-v mob-1 w100">
	<img class="esquina1" src={parseSVG(esquinam10Svg)} alt="" />
	<img class="camara" src={parseSVG(camara2Svg)} alt="" />
	<div class="mB04 tt1 inline-v jc">
		<img src={parseSVG(imagenborderSvg)} alt="" />
		<h2>GALERÍA</h2>
	</div>
	<div id="gallery5" class="gallery4">
		<img src="cms/S_1569253384.jpeg" alt="techopropio8" />
		<img src="cms/S_1569253317.jpeg" alt="techopropio7" />
		<img src="cms/S_1569253301.jpeg" alt="techopropio6" />
		<img src="cms/S_1569253288.jpeg" alt="techopropio5" />
		<img src="cms/S_1569253267.jpeg" alt="techopropio4" />
		<img src="cms/S_1569204495.jpeg" alt="techopropio3" />
		<img src="cms/S_1569203261.jpeg" alt="techopropio2" />
		<img src="cms/S_1569203243.jpeg" alt="techopropio1" />
	</div>
</div>

<div class="m-inmobiliaria mob-1 inline-v jc bg-center-center w100">
	<div class="ctn7 tx2">
		<h2>INMOBILIARIA</h2>
		<div>
			<span>Llevamos a cabo la ejecución de la obra, el suministro de materiales y la supervisión de la misma, brindando así un servicio integral que asegura el cumplimiento del proyecto. Tenemos departamentos en venta de proyectos que hemos realizado.</span>
		</div>
	</div>
</div>

<div class="m-inmobi2 inline-v jc mob-1 w100">
	<h2 class="mB02">PROYECTOS</h2>
	<div class="edificio inline-h">
		<div class="label"><h3>GIRASOLES II</h3></div>
		<img src="images/girasoles3.jpg" alt="" />
	</div>
	<div class="ctn5 tx2 mb2">
		<span>A pocos minutos del Mall Aventura Plaza de Trujillo, Penta Mall, Macro de Trujillo ubicado estrategicamente en el distrito de San Isidro y vias de facil circulación. Cerca a comercios, centros de salud, restuarantes, centros de estudio y Centro Historico.</span>
	</div>
	<button class="bn2 mB04">+INFORMACIÓN</button>
	<div class="edificio inline-h">
		<div class="label"><h3>ORQUÍDEAS II</h3></div>
		<img src="images/orquideas4.jpg" alt="" />
	</div>
	<div class="ctn5 tx2 mb2">
		<span>A pocos minutos del Mall Aventura Plaza. Diseñado y equipado pensando en ofrecerte la maxima comodidad en todas tus actividades, conscientes de lo importante que es para ti encontrar un lugar donde se respire tranquilidad y bienestar</span>
	</div>
	<button class="bn2">+INFORMACIÓN</button>
</div>

<div class="m-gal1 inline-v mob-1 w100">
	<img class="camara" src={parseSVG(camara2Svg)} alt="" />
	<div class="mB04 tt1 inline-v jc">
		<img src={parseSVG(imagenborderSvg)} alt="" />
		<h2>GALERÍA</h2>
	</div>
	<div id="gallery6" class="gallery4">
		<img src="cms/S_1569352747.jpeg" alt="girasoles1" />
		<img src="cms/S_1569352764.jpeg" alt="girasoles2" />
		<img src="cms/S_1569352774.jpeg" alt="girasoles3" />
		<img src="cms/S_1569352786.jpeg" alt="orquedeas1" />
		<img src="cms/S_1569352796.jpeg" alt="orquedeas2" />
		<img src="cms/S_1569352806.jpeg" alt="orquedeas3" />
	</div>
</div>

<div id="mision-m" class="m-mision inline-v jc mob-1 bg-bottom-center w100">
	<div class="box1"><h1>MISIÓN</h1></div>
	<div class="ctn5 tx2 mb2">
		<span>Elaboramos proyectos arquitectónicos, ejecución y supervisión de obras públicas y privadas, consultorías y estudios de impacto ambiental. con un equipo técnico conformado por profesionales de primer nivel y amplia trayectoria en el sector construcción, servicios generales, consultorías y en la ejecución de proyectos y obras diversas.</span>
	</div>
	<img class="esquina" src={parseSVG(esquinam8Svg)} alt="" />
</div>

<div class="m-vision inline-v jc mob-1 w100">
	<img class="esquina" src={parseSVG(esquinam8Svg)} alt="" />
	<div class="box1"><h1>VISIÓN</h1></div>
	<div class="ctn5 tx2 mb2 z15">
		<span>Ser una empresa reconocida a nivel nacional y de Latinoamérica, mostrando en cada momento confiabilidad y dedicación en nuestro trabajo, liderando mercados y contribuyendo al desarrollo sostenible y medioambiental de las zonas donde ejecutemos nuestros proyectos.</span>
	</div>
	<div class="image5">
		<img src="images/architech.jpg" alt="" />
	</div>
</div>

<div class="m-objetivos inline-v jc mob-1 w100">
	<div class="box1"><h1>VALORES</h1></div>
	<div class="ctn5 tx2 mb2 z15">
		<span>Íntegros:&nbsp;La transparencia y honestidad rigen todas nuestras relaciones.</span>
		<span>Serviciales:&nbsp;Comprometidos con la satisfacción a largo plazo de nuestros clientes.</span>
		<span>Innovadores:&nbsp;Enfocados en la calidad y mejora continua de los espacios que creamos.</span>
		<span>Respetuosos:&nbsp;Valoramos a las personas, las comunidades y el medio ambiente.</span>
		<span>Trabajo en Equipo: Potenciamos las aptitudes y esfuerzos de nuestros profesionales, logrando eficacia en los trabajos que realizamos.</span>
	</div>
	<img class="icon1" src={parseSVG(objetivos2Svg)} alt="" />
</div>

<div id="contacto-m" class="m-contacto inline-v jc mob-1 w100">
	<div class="inline-v contact-form-ctn">
		<h3>¿TIENES ALGUNA CONSULTA?</h3>
		<span>Escríbemos y te responderemos a la brevedad.</span>
		<div id="contact-form2" class="form-contacto contact-form">
			<div class="w100 ml mB01"><span>Nombre</span></div>
			<input name="Nombre" class="in4 mB02" type="text" required />
			<div class="w100 ml mB01"><span>Correo Electrónico</span></div>
			<input name="Correo Electrónico" class="in4 mB02" type="email" required />
			<div class="w100 ml mB01"><span>Mensaje</span></div>
			<textarea class="in4 mB02" name="Contenido de Mensaje" rows={7} required></textarea>
			<div class="inline-h w100">
				<button class="b3 enviar">ENVIAR</button>
			</div>
		</div>
		<div id="enviando2" class="enviando-mensaje">
			<div class="loader">Enviado...</div>
			<span>Enviado mensaje...</span>
		</div>
		<div id="enviado2" class="mensaje-enviado">
			<span>Hemos recibido su mensaje</span>
			<img src={parseSVG(mensajeEnviadoSvg)} alt="mensaje enviado" />
			<span>Nos pondremos en contacto con usted en breve de ser el caso.</span>
			<span>Muchas gracias por su interés <br /> en AMG Constructora</span>
		</div>
	</div>
</div>

<FooterBar />
