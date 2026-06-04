export const parseSVG = (svgContent: string) => {
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
};

export function formatTime(date: any, mode: any): any {
	let d: Date;
	if (!date) { d = new Date(); }
	else if (typeof date === 'number') {
		if (date < 30000) { date = date * 1000 * 86400 + 36000000; }
		else if (date < 180000000000) { date = date * 1000; }
		d = new Date(date);
	} else if (typeof date === 'object' && date.constructor === Date) {
		d = date;
	} else if (typeof date === 'string' && date.length === 8) {
		const year = parseInt(date.substring(0, 4));
		const month = parseInt(date.substring(4, 6)) - 1;
		const day = parseInt(date.substring(6, 8));
		d = new Date(year, month, day);
	} else if (typeof date === 'string') {
		if (date.includes('T')) date = date.replace('T', ' ');
		if (date.includes('Z') && date.includes('.')) {
			const idx1 = date.lastIndexOf('.');
			date = date.substring(0, idx1);
		}
		const portions = date.split(' ');
		let day = portions[0];
		const regex1 = /[0-9]{1,2}(\.|-|\/)[0-9]{1,2}(\.|-|\/)[0-9]{4}/g;
		const regex2 = /[0-9]{4}(\.|-|\/)[0-9]{1,2}(\.|-|\/)[0-9]{1,2}/g;
		const r1 = regex1.test(day);
		const r2 = r1 ? undefined : regex2.test(day);
		if (r1 || r2) {
			for (const s of ['/', '-', '.']) {
				if (day.includes(s)) {
					let parsed: any = day.split(s);
					if (r1) parsed.reverse();
					parsed = parsed.join('-') + 'T' + (portions[1] || '12:00:00');
					d = new Date(parsed);
					if (!d.getTime) return;
				}
			}
		} else { return; }
	} else { return; }

	if (!d! || !(d! instanceof Date) || !d!.getTime) return mode === -1 ? null : '';
	const _dia = d!.getDate();
	if (isNaN(_dia)) return mode === -1 ? null : '';
	const dia = _dia < 10 ? '0' + _dia : String(_dia);
	if (mode === -1) { return d; }
	const _mes = d!.getMonth() + 1;
	const mes = _mes < 10 ? '0' + _mes : String(_mes);
	const fullYear = d!.getFullYear();
	const year = String(fullYear).substr(2, 2);

	if (!mode || mode === 1) return dia + '-' + mes + '-' + year;
	else if (mode === 4) return fullYear + '-' + mes + '-' + dia;
	else if (mode === 11) return dia + '-' + mes + '-' + fullYear;
	else if (mode === 8) return dia + '/' + mes + '/' + fullYear;

	let hora: string | number = d!.getHours();
	if (hora < 10) hora = '0' + hora;
	let min: string | number = d!.getMinutes();
	if (min < 10) min = '0' + min;

	if (mode === 2) return dia + '-' + mes + '-' + year + ' ' + hora + ':' + min;
	else if (mode === 6) return dia + '-' + mes + '-' + fullYear + ' ' + hora + ':' + min;

	let sec: string | number = d!.getSeconds();
	if (sec < 10) sec = '0' + sec;
	if (mode === 5) return hora + ':' + min + ':' + sec;
}
