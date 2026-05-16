import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { describe, expect, it } from 'vitest';

describe('robco-terminal.css contract', () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  const cssPath = join(dir, '../src/robco-terminal.css');
  const css = readFileSync(cssPath, 'utf8');

  it('scopes only to robco-terminal data-skin', () => {
    expect(css).toContain("html[data-skin='robco-terminal']");
  });

  it('declares expected token layer', () => {
    for (const token of [
      '--background',
      '--foreground',
      '--card',
      '--primary',
      '--sidebar-background',
      '--skin-terminal-glow',
      '--skin-scanline-opacity',
      '--skin-font-mono',
    ]) {
      expect(css).toContain(token);
    }
  });

  it('excludes host-app-specific selectors', () => {
    expect(css).not.toMatch(/\/dashboard/i);
    expect(css).not.toMatch(/AppSidebar/);
    expect(css).not.toMatch(/data-nextjs/i);
  });
});
