import { decamelize } from './utils/decamelize';
import { capitalize } from './utils/capitalize';
import { handleSpecialWords } from './utils/handle-special-words';
import { combine } from './utils/combine';

export function formatTitle(title: string, separator?: RegExp): string {
	if (!separator) separator = new RegExp('/s|-|_| ', 'g');
	return decamelize(title).split(separator).map(capitalize).map(handleSpecialWords).reduce(combine);
}

export default formatTitle;
