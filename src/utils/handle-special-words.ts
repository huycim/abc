import acronyms from '../constants/acronyms';
import articles from '../constants/articles';
import conjunctions from '../constants/conjunctions';
import prepositions from '../constants/prepositions';
import specialCase from '../constants/special-case';

export function handleSpecialWords(str: string, index: number, words: string[]): string {
	const lowercaseStr = str.toLowerCase();
	const uppercaseStr = str.toUpperCase();

	for (const special of specialCase) {
		if (special.toLowerCase() === lowercaseStr) return special;
	}

	if (acronyms.includes(uppercaseStr)) return uppercaseStr;

	// If the word is the first word in the sentence, but it's not a specially
	// cased word or an acronym, return the capitalized string
	if (index === 0) return str;

	// If the word is the last word in the sentence, but it's not a specially
	// cased word or an acronym, return the capitalized string
	if (index === words.length - 1) return str;

	if (prepositions.includes(lowercaseStr)) return lowercaseStr;
	if (conjunctions.includes(lowercaseStr)) return lowercaseStr;
	if (articles.includes(lowercaseStr)) return lowercaseStr;

	return str;
}
