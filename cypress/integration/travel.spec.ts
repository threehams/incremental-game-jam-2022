import localForage from "localforage";
import produce from "immer";
import { initialState } from "@laundry/store";
import { hoursToSeconds } from "date-fns";

describe("time travel", () => {
  it("calculates the correct things", () => {
    cy.wrap(null).then(async () => {
      const VERSION = 1;
      const databaseName = "reconciliation_game";
      const savedGameKey = "saved_game";
      localForage.config({
        version: VERSION,
        name: databaseName,
        storeName: databaseName,
      });
      await localForage.setItem(
        savedGameKey,
        produce(initialState, (draft) => {
          draft.upgrades = {
            upgradeThings: 2,
          };
          draft.timeline.push({
            action: {
              type: "BUY_UPGRADE",
              payload: {
                key: "upgradeThings",
              },
            },
            time: hoursToSeconds(24),
          });
          draft.timeline.push({
            action: {
              type: "BUY_UPGRADE",
              payload: {
                key: "upgradeThings",
              },
            },
            time: hoursToSeconds(49),
          });
          draft.timedUpgrades = {
            postUpgradeThings: {
              level: 1,
              time: hoursToSeconds(50),
            },
          };
          draft.phase = "traveling";
          draft.time = hoursToSeconds(24 * 60);
          draft.resources.things = 0;
        }),
      );
    });
    cy.visit("/");
    cy.findByText("You have 0 things.");
  });
});