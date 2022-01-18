import CZECH_FIRST_FEMALE_NAMES from '../../../data/czech-first-female-names.json';
import CZECH_FIRST_MALE_NAMES from '../../../data/czech-first-male-names.json';
import CZECH_LAST_FEMALE_NAMES from '../../../data/czech-last-female-names.json';
import CZECH_LAST_MALE_NAMES from '../../../data/czech-last-male-names.json';
import { IName } from '../../../scripts/scraper/IName';
import { randomItem } from '../../utils/randomItem';
import { randomProportionalItem } from '../../utils/randomProportionalItem';
import { IRandomCzechNameOptions } from './IRandomCzechNameOptions';

export enum Gender {
    Male,
    Female,
}

const CZECH_FIRST_NAMES: Record<Gender, IName[]> = {
    [Gender.Female]: CZECH_FIRST_FEMALE_NAMES,
    [Gender.Male]: CZECH_FIRST_MALE_NAMES,
};

const CZECH_LAST_NAMES: Record<Gender, IName[]> = {
    [Gender.Female]: CZECH_LAST_FEMALE_NAMES,
    [Gender.Male]: CZECH_LAST_MALE_NAMES,
};

export function randomCzechName({
    isProportionallyRandom,
    pickGender,
    hasFirstName,
    hasLastName,
}: IRandomCzechNameOptions): string {
    const gender: Gender = pickGender || randomItem(Gender.Female, Gender.Male);
    const randomFunction = isProportionallyRandom ? randomProportionalItem : randomItem;

    const names: string[] = [];

    if (hasFirstName) {
        names.push(randomFunction<IName>(...CZECH_FIRST_NAMES[gender]).name);
    }

    if (hasLastName) {
        names.push(randomFunction<IName>(...CZECH_LAST_NAMES[gender]).name);
    }

    return names.join(' ');
}

/**
 * TODO: Names like Anna Marie Červená
 * TODO: Names like Anežka Hodinová-Spurná
 * TODO: Names like Anna Červený
 * TODO: Joke names like X Æ A-Xii Musk
 * Note: Names are separated by "-" not "–⁠" @see https://prirucka.ujc.cas.cz/?id=164
 */
