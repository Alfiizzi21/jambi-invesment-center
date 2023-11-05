import { goto } from '$app/navigation';

export const copyToClipboard = (textToCopy: string): void => {
	const textarea = document.createElement('textarea');
	textarea.value = textToCopy;

	document.body.appendChild(textarea);
	textarea.select();

	try {
		document.execCommand('copy');
		alert('Link has been copied to the clipboard.');
		console.log('Text has been copied to the clipboard.');
	} catch (err) {
		console.error('Failed to copy text to the clipboard:', err);
	}

	document.body.removeChild(textarea);
};

export const gotoLink = (link: string): void => {
	goto(link);
};

export function formatData(value: number, type: string, locale: string = 'id-ID'): string {
	const numberFormatter = new Intl.NumberFormat(locale, {
		style: 'decimal',
		maximumFractionDigits: 2
	});

	if (type === 'integer') {
		if (value >= 1e12) {
			return numberFormatter.format(value / 1e12) + (locale == 'en-US' ? ' T' : ' T');
		} else if (value >= 1e9) {
			return numberFormatter.format(value / 1e9) + (locale == 'en-US' ? ' B' : ' M');
		} else if (value >= 1e6) {
			return numberFormatter.format(value / 1e6) + (locale == 'en-US' ? ' M' : ' Jt');
		} else if (value >= 1e3) {
			return numberFormatter.format(value / 1e3) + (locale == 'en-US' ? 'K ' : ' Rb');
		} else {
			return numberFormatter.format(value);
		}
	} else if (type === 'currency') {
		if (value >= 1e12) {
			return 'Rp ' + numberFormatter.format(value / 1e12) + (locale == 'en-US' ? ' T' : ' T');
		} else if (value >= 1e9) {
			return 'Rp ' + numberFormatter.format(value / 1e9) + (locale == 'en-US' ? ' B' : ' M');
		} else if (value >= 1e6) {
			return 'Rp ' + numberFormatter.format(value / 1e6) + (locale == 'en-US' ? ' M' : ' Jt');
		} else if (value >= 1e3) {
			return 'Rp ' + numberFormatter.format(value / 1e3) + (locale == 'en-US' ? 'K ' : ' Rb');
		} else {
			return 'Rp ' + numberFormatter.format(value);
		}
	} else if (type === 'area') {
		if (value >= 1e4) {
			return numberFormatter.format(value / 1e4) + ' ha';
		} else {
			return numberFormatter.format(value) + ' m²';
		}
	} else {
		return value.toString();
	}
}

export const timeAgo = (param: string): string => {
	const date = new Date(param);
	const now = new Date();
	const diff = now.getTime() - date.getTime();

	const minute = 60 * 1000;
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;
	const month = day * 30;
	const year = day * 365;

	if (diff < minute) {
		return Math.floor(diff / 1000) + ' seconds ago';
	} else if (diff < hour) {
		return Math.floor(diff / minute) + ' minutes ago';
	} else if (diff < day) {
		return Math.floor(diff / hour) + ' hours ago';
	} else if (diff < week) {
		return Math.floor(diff / day) + ' days ago';
	} else if (diff < month) {
		return Math.floor(diff / week) + ' weeks ago';
	} else if (diff < year) {
		return Math.floor(diff / month) + ' months ago';
	} else {
		return Math.floor(diff / year) + ' years ago';
	}
};

export function truncateNewsContent(content: string, maxLength: number): string {
	if (content.length <= maxLength) {
		return content;
	}

	const truncatedContent = content.substr(0, maxLength);
	const lastSpaceIndex = truncatedContent.lastIndexOf(' ');

	return truncatedContent.substr(0, lastSpaceIndex) + '...';
}
