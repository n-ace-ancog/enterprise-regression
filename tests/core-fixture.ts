import { test as baseTest, expect as baseExpect } from '@playwright/test';

export const Personalize = {
    THEMES: {
        NEW: 'new',
        CLASSIC: 'classic'
    },
    MODES: {
        LIGHT: 'light',
        DARK: 'dark',
        HIGH_CONTRAST: 'contrast'
    },
    COLORS: {
        DEFAULT: 'default',
        ALABASTER: 'ffffff',
        AMBER: 'BB5500',
        AMETHYST: '7928E1'
    },
    LOCALE: {
        DEFAULT: 'en-US',
        ARABIC: 'ar-EG'
    }
}

export type Settings = {
    personalize: {
        theme: string,
        mode: string,
        color: string,
        locale: string,
    }
}

export function personalizeUtils(personalize: any) {
    return {
        extURL: (personalize ? `theme=${personalize.theme}&` +
        `mode=${personalize.mode}&` +
        `colors=${personalize.color}&` +
        `locale=${personalize.locale}` : ''),
        shortName: (personalize ? `${personalize.theme}-` +
        `${personalize.mode}-` +
        `${personalize.color}-` +
        `${personalize.locale}` : '')
    }
}

export const test = baseTest.extend<Settings>({
    personalize: [{
        theme: Personalize.THEMES.NEW,
        mode: Personalize.MODES.LIGHT,
        color: Personalize.COLORS.DEFAULT,
        locale: Personalize.LOCALE.DEFAULT
    }, { option: true }],
});

export const expect = baseExpect;