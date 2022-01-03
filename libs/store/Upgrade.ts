import { ActionKey, Phase } from ".";

export type UpgradeKey = "upgradeThings" | "postUpgradeThings";

export type UnlockKey = "buyClothes" | "autoClothes";
export type UpgradeEffect = {
  // Unlock a particular feature permanently
  unlock?: UnlockKey;
  // Change rate of things increase
  things?: (num: number, level: number) => number;
  // Is this additive or multiplicative with other upgrades?
  type: "add" | "multiply";
};

export type Upgrade = {
  phase: Phase;
  // Max level of this upgrade
  max: number;
  // Required for this upgrade to appear. Once that happens, it's
  // always visible
  requirements: {
    things?: number;
    savedTime?: number;
    action?: ActionKey;
  };
  // Required to buy this upgrade
  costs: {
    things?: (level: number, distance: number) => number;
    savedTime?: (level: number, distance: number) => number;
  };
  // Readable name in-game
  name: string;
  // Flavor text for all levels
  description: string;
  // Precise key for the upgrade (not string)
  key: UpgradeKey;
  // Changes caused by this upgrade
  effect: UpgradeEffect;
  // Message shown with each upgrade
  flavorTexts: {
    [level: number]: string | undefined;
  };
};
