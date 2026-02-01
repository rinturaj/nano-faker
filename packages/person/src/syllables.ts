/**
 * Minimal syllable data for procedural name generation.
 * Keeps bundle size extremely small while generating realistic-sounding names.
 */

// First name syllables - common phonetic patterns
export const firstSyllables = [
    'al', 'an', 'ar', 'bel', 'ben', 'car', 'chris', 'dan', 'el', 'em',
    'er', 'ev', 'ja', 'jen', 'jo', 'ka', 'kel', 'lar', 'mar', 'mat',
    'mi', 'na', 'ni', 'ol', 'pat', 'ra', 'ro', 'sam', 'sar', 'ta',
    'ter', 'tom', 'vi', 'will', 'za'
] as const;

export const middleSyllables = [
    'a', 'an', 'ar', 'bri', 'ca', 'da', 'der', 'di', 'dra', 'e',
    'en', 'er', 'i', 'la', 'le', 'li', 'lo', 'ly', 'ma', 'mi',
    'na', 'ne', 'ni', 'o', 'ra', 're', 'ri', 'ro', 'ry', 'sa',
    'si', 'son', 'ta', 'the', 'ti', 'ton', 'va', 'ver', 'vi', 'za'
] as const;

export const lastSyllables = [
    'a', 'ah', 'an', 'anna', 'bella', 'beth', 'ca', 'ce', 'da', 'den',
    'der', 'dia', 'don', 'el', 'en', 'er', 'ett', 'ia', 'iel', 'ina',
    'is', 'la', 'le', 'ley', 'lie', 'lin', 'lyn', 'ma', 'man', 'na',
    'ne', 'ny', 'on', 'ra', 'ren', 'ry', 'sa', 'son', 'ta', 'th',
    'ton', 'ty', 'us', 'va', 'vin', 'ya', 'yn', 'za'
] as const;

// Last name syllables
export const surnameFirst = [
    'ander', 'bai', 'bak', 'bar', 'ben', 'bro', 'car', 'clar', 'col', 'dav',
    'gar', 'gil', 'gon', 'har', 'hen', 'jack', 'john', 'jon', 'kel', 'lar',
    'mar', 'mill', 'mor', 'par', 'pat', 'rob', 'rod', 'san', 'smith', 'tay',
    'thom', 'turn', 'wal', 'wil', 'wil', 'young'
] as const;

export const surnameLast = [
    'aker', 'andez', 'ard', 'berg', 'bury', 'by', 'dale', 'den', 'der', 'dez',
    'don', 'er', 'ez', 'field', 'ford', 'gart', 'ham', 'is', 'kins', 'ler',
    'ley', 'lin', 'lis', 'man', 'mer', 'ner', 'ney', 'quez', 'ris', 'rod',
    'sen', 'son', 'ster', 'stone', 'ter', 'ton', 'ver', 'ward', 'well', 'wood'
] as const;

// Gender options
export const genders = ['male', 'female', 'non-binary', 'other'] as const;
