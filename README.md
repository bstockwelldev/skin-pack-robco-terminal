# @bstockwelldev/skin-pack-robco-terminal

Portable **RobCo Industries terminal** skin for hosts that use **`html[data-skin="robco-terminal"]`** with [`@bstockwelldev/react-skin-system`](https://github.com/bstockwelldev/react-skin-system).

- **TypeScript**: `SkinDefinition` metadata (boot lines, palette flavor, id).
- **CSS**: shadcn-style **HSL token** layer under a single attribute selector — no route or component coupling.

## Install (unpublished)

From a sibling checkout:

```bash
pnpm add @bstockwelldev/skin-pack-robco-terminal@file:../skin-pack-robco-terminal
pnpm add @bstockwelldev/react-skin-system@file:../react-skin-system
```

## Runtime usage

Merge this skin into your host registry (with your app’s other skins and `storageKey`):

```ts
import { createSkinRegistry } from '@bstockwelldev/react-skin-system';
import { robcoTerminalSkin } from '@bstockwelldev/skin-pack-robco-terminal';

const registry = createSkinRegistry(
  [robcoTerminalSkin, /* your other defs */],
  { storageKey: 'my-app/skin', defaultSkin: 'robco-terminal' },
);
```

Alternatively import narrow constants (`ROBCO_TERMINAL_BOOT_LINES`, `ROBCO_TERMINAL_PALETTE_FLAVOR`, `ROBCO_TERMINAL_CSS_SELECTOR`) if your host merges fields manually.

## CSS import

### Next.js (App Router)

In your global stylesheet (e.g. `app/globals.css`):

```css
@import '@bstockwelldev/skin-pack-robco-terminal/style.css';
```

Ensure the app still sets **`data-skin`** on `<html>` via `SkinProvider` / bootstrap script.

### Vite

```css
@import '@bstockwelldev/skin-pack-robco-terminal/style.css';
```

## Tabletop Studio (later adoption — not Step 2)

Integration is intentionally **not** applied in this package. When you dogfood, align:

- Definitions / cycle / labels: `tabletop-studio/src/lib/skins/skinRegistry.ts`.
- Bootstrap allowlist parity with `buildSkinBootstrapScript` from `@bstockwelldev/react-skin-system` and the root layout inline script.
- Import **`@bstockwelldev/skin-pack-robco-terminal/style.css`** from the app’s global CSS so tokens apply under `html[data-skin='robco-terminal']`.

## Next: Steps 3–4

Distribution and automation (**`@bstockwelldev/skin-cli`**, registry publishing, CI) live in [`react-skin-system` **docs/steps-3-4-roadmap**](https://github.com/bstockwelldev/react-skin-system/blob/master/docs/steps-3-4-roadmap.md) after that repo is pushed to GitHub.

## Development

```bash
pnpm install
pnpm run build
pnpm run typecheck
pnpm run test
```

## License

MIT — see [`LICENSE`](LICENSE).
