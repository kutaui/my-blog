type DateStyle = 'short' | 'medium' | 'long' | 'full';

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: '2-digit'
	};

	const formatter = new Intl.DateTimeFormat(locales, options);
	return formatter.format(new Date(date));
}
