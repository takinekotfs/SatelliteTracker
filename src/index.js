import satvisSetup from "./app";

const { cc } = satvisSetup();

// cc.sats.addFromTleUrl("data/tle/norad/active.txt", ["Active"]);
cc.sats.addFromTleUrl("data/tle/norad/spire.txt", ["Spire"]);
cc.sats.addFromTleUrl("data/tle/norad/planet.txt", ["Planet"]);
cc.sats.addFromTleUrl("data/tle/norad/starlink.txt", ["Starlink"]);
cc.sats.addFromTleUrl("data/tle/norad/globalstar.txt", ["Globalstar"]);
cc.sats.addFromTleUrl("data/tle/norad/resource.txt", ["Resource"]);
cc.sats.addFromTleUrl("data/tle/norad/science.txt", ["Science"]);
cc.sats.addFromTleUrl("data/tle/norad/stations.txt", ["Stations"]);
cc.sats.addFromTleUrl("data/tle/norad/weather.txt", ["Weather"]);
cc.sats.addFromTleUrl("data/tle/norad/tle-new.txt", ["New"]);

cc.sats.addFromTleUrl("data/tle/ext/move.txt", ["MOVE"]);

window.addEventListener("load", () => {
  if (cc.sats.enabledTags.length === 0) {
    console.log("TAGS", cc.sats.enabledTags);
    cc.sats.enabledTags = ["MOVE"];
  }
});
