import { describe, expect, it } from 'vitest';

import {
  ROBCO_TERMINAL_BOOT_LINES,
  ROBCO_TERMINAL_CSS_SELECTOR,
  ROBCO_TERMINAL_PALETTE_FLAVOR,
  ROBCO_TERMINAL_SKIN_ID,
  robcoTerminalSkin,
} from '../src/index';

describe('robcoTerminalSkin', () => {
  it('matches portable SkinDefinition contract', () => {
    expect(robcoTerminalSkin.id).toBe(ROBCO_TERMINAL_SKIN_ID);
    expect(robcoTerminalSkin.label).toBe('RobCo Industries Terminal');
    expect(robcoTerminalSkin.family).toBe('terminal');
    expect(robcoTerminalSkin.cycle).toBe(true);

    expect(robcoTerminalSkin.bootIntroLines).toEqual([...ROBCO_TERMINAL_BOOT_LINES]);
    expect(robcoTerminalSkin.bootIntroLines?.length).toBeGreaterThanOrEqual(5);
    expect(robcoTerminalSkin.bootIntroLines?.length).toBeLessThanOrEqual(8);

    expect(robcoTerminalSkin.paletteFlavor).toMatchObject({
      prompt: ROBCO_TERMINAL_PALETTE_FLAVOR.prompt,
      placeholder: ROBCO_TERMINAL_PALETTE_FLAVOR.placeholder,
      welcome: ROBCO_TERMINAL_PALETTE_FLAVOR.welcome,
    });
  });

  it('exports stable css selector sentinel', () => {
    expect(ROBCO_TERMINAL_CSS_SELECTOR).toContain("data-skin='robco-terminal'");
  });
});
