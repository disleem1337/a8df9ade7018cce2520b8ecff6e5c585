import { fontWeight } from "styled-system";

export const theme = {
  colors: {
    primary: "#008641",
    secondary: "#F3E300",
    white: "#ffffff",
    black: "#000000",
    mirage2: "#1D2225",
    bunker: "#192125",
    lightAlabaster: "#fafafa",
    balticSea: "#282f33",
    zeus: "#262626",
    mineShaft: "#212121",
    coralRed: "#ff4242",
    acidGreen: "#A9D023",
    lapisLazuli: "#1C6A9F",
    abbey: "#474c51",
    trinidad: "#e84a00",
    tuna: "#34373b",
    outerSpace: "#2F373C",
    outerSpace2: "#414E55",
    limedSpruce: "#384750",
    bleached: "#212629",
    gunmetal: "#2E3438",
    oldBurgundy: "#313a3f",
    arsenic: "#353F45",
    arsenic2: "#3A4449",
    harp: "#e8edef",
    catskillWhite: "#f4f4f4",
    platinum: "#DBE3E7",
    cadetGrey: "#9BABB5",
    cadetGrey2: "#8BA1AD",
    lightSilver: "#D9D9D9",
    brightGray: "#EDEFF1",
    philippineGray: "#898F92",
  },
  fontSize:{
    xxxs: "10px",
    xxs: "11px",
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  width:{
    container: "1140px",
  }
};

export type Color = keyof typeof theme.colors;
export type FontSize = keyof typeof theme.fontSize;

// boulder: "#7b7b7b",
// funGreen: "#008641",
// funGreenNew: "#006D35",
// turbo: "#f3e300",
// turbo2: "#f7e102",
// selectiveYellow: "#f3b900",
// greenPea: "#194c2d",
// jewel: "#146a36",
// mantis: "#6ac24a",
// coralRed: "#ff4242",
// westSide: "#FF9211",
// havelockBlue: "#4A90E2",
// shark: "#25272a",
// shark2: "#212629",
// tuna: "#34373b",
// abbey: "#474c51",
// dustyGrey: "#999999",
// quillGrey: "#d1d1cf",
// silver: "#c7c7c7",
// gallery: "#eaeaea",
// gallery2: "#ececec",
// gallery3: "#ededed",
// mineShaft: "#212121",
// white: "#ffffff",
// black: "#000000",
// hampton: "#e0e4b2",
// quillGray: "#dddddc",
// guardsmanRed: "#cb0000",
// alto: "#d4d4d4",
// alto2: "#d8d8d8",
// alto3: "#dfdfdf",
// gradient: "linear-gradient(180deg, #008641 0%, #146a36 100%);",
// emerald: "#35C759",
// trinidad: "#e84a00",
// yourPink: "#ffbebe",
// snowFlurry: "#ccffbe",
// abbey2: "#494e54",
// tundora: "#444444",
// Persimmon: "#ff5858",
// neongreen: "#59e525",
// Pomegranate: "#ee3030",
// mercury: "#e3e3e3",
// alabaster: "#f8f8f8",
// wildSand: "#f5f5f5",
// darkTundora: "#404040",
// curiousBlue: "#358bd8",
// lightAlabaster: "#fafafa",
// funDarkGreen: "#027238",
// outerSpace: "#313a3f",
// harp: "#e8edef",
// porcelain: "#E8EEEF",
// darkJungleGreen: "#181c1f",
// lightMercury: "#e5e5e5",
// blackCow: "#434343",
// seaShell: "#f1f1f1",
// nobel: "#b1b1b1",
// champagne: "#fdeccc",
// bamboo: "#db5c00",
// crystalBlue: "#6ea7fd",
// midGrey: "#5e6267",
// azureRadiance: "#0377FF",
// gunmetal: "#2E3438",
// bleached: "#212629",
// balticSea: "#282f33",
// smokeyGrey: "#737373",
// kellyGreen: "#46b51d",
// lightRed: "#fb4a4a",
// fire: "#ba3f05",
// zeus: "#262626",
// water: "#f0f3f4",
// charcoalGrey: "#384247",
// butteryWhite: "#FFFBEB",
// gunSmoke: "#82898D",
// amber: "#f3be00",
// mako: "#414A4F",
// dustyGray: "#979797",
// everGreen: "#024d27",
// jewel2: "#016d36",
// geyser: "#dde3e4",
// sunsetOrange: "#ff5454",
// bleached2: "#252B2E",
// wildSandTwo: "#f6f6f6",
// concrete: "#f3f3f3",
// mercuryTwo: "#e5e5e5",
// bilbao: "#2C860C",
// alto4: "#dbdbdb",
// tundora2: "#4d4d4d",
// mountainMeadow: "#15CF74",
// alabasterTwo: "#f9f9f9",
// silverTwo: "#c8c8c8",
// tundoraTwo: "#444343",
// doveGray: "#717171",
// oslogray: "#909496",
// camarone: "#03582A",
// bunker: "#192125",
// regentGray: "#85949A",
// thunderbird: "#C51D23",
// limedSpruce: "#384750",
// outerSpace4: "#282F33",
// OuterSpace2: "#2E3438",
// OuterSpace3: "#313A3F",
// desertStorm: "#f8f8f8",
// greyGoose: "#CDCECE",
// mirage: "#151c20",
// mirage2: "#1D2225",
// platinum: "#e4e4e4",
// slate: "#536269",
// catskillWhite: "#f4f4f4",
// dawnPink: "#e8edef",
// cedar: "#262626",
// mist: "#e7e7e7",
// greenWhite: "#d4eedf",
// shipGrey: "#384247",
// malachite: "#00d266",
// aquaSpring: "#f1f5f6",
// carbonGrey: "#606060",
// warmGrey: "#8f8f8f",
// aqua: "#f2f2f2",
// bgGreen: "#00864133",
// lemon: "#f8e008",
// AquaSqueeze: "#e7f2f6",
// aliceBlue: "#f1f7fb"
