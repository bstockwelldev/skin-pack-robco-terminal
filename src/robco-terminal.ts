import type { SkinDefinition } from '@bstockwelldev/react-skin-system';

export const ROBCO_TERMINAL_SKIN_ID = 'robco-terminal' as const;

export type RobcoTerminalSkinId = typeof ROBCO_TERMINAL_SKIN_ID;

/** Display selector for documentation and host CSS co-location checks. */
export const ROBCO_TERMINAL_CSS_SELECTOR = "html[data-skin='robco-terminal']";

export const ROBCO_TERMINAL_BOOT_LINES = [
  'ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM v7.42',
  'COPYRIGHT © ROBCO — ALL RIGHTS RESERVED',
  'CALIBRATING PRODUCTION FABRICATORS... READY',
  'DESIGN MODULE: AUTHORIZED',
  'ESTABLISHING SECURE DESIGN CHANNEL... ONLINE',
  'OPERATOR CONSOLE ENGAGED — AWAIT COMMAND',
  'PLEASE STAND CLEAR OF MOVING COMPONENTS',
] as const;

export const ROBCO_TERMINAL_PALETTE_FLAVOR = {
  prompt: 'ROBCO> ',
  placeholder: 'execute command, sku, project id… e.g. skin robco-terminal',
  welcome:
    'RobCo operator console nominal. Efficient design is patriotic design.',
} as const;

export const robcoTerminalSkin = {
  id: ROBCO_TERMINAL_SKIN_ID,
  label: 'RobCo Industries Terminal',
  family: 'terminal',
  bootIntroLines: ROBCO_TERMINAL_BOOT_LINES,
  paletteFlavor: { ...ROBCO_TERMINAL_PALETTE_FLAVOR },
  cycle: true,
} satisfies SkinDefinition<RobcoTerminalSkinId>;
