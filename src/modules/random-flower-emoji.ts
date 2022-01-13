import { declareModule } from '@collboard/modules-sdk';
import { contributors, description, license, repository, version } from '../../package.json';
import { makeRandomTextToolModule } from '../makers/makeRandomTextToolModule';

declareModule(
    makeRandomTextToolModule({
        manifest: {
            name: '@hejny/random-flower-emoji',
            deprecatedNames: ['FlowersEmojis'],
            title: { en: 'Drawing of flowers', cs: 'Kreslení květin' },
            categories: ['Emojis', 'Fun'],
            icon: '🥀',
            contributors,
            description,
            license,
            repository,
            version,
        },
        fontSizeRange: { min: 15, max: 80 },
        placeFrequency: 0.07,
        items: ['🥀', '💮', '🌼', '💐', '🌻', '🌺', '🌹', '🌸', '🌷', '💠', '🏵️', '🌵', '⚜️'],
    }),
);
