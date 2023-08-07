dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Branch",
    key: "branch",
    tooltip: "Check this to restrict classes from certain branches.",
    checked: false,
    sub: [
      { name: "Explorers", key: "exp" },
      { name: "Cygnus Knights  ", key: "koc" },
      { name: "Heroes", key: "hero" },
      { name: "Resistance", key: "res" },
      { name: "Nova", key: "nova" },
      { name: "Sengoku", key: "jp" },
      { name: "Flora", key: "flora" },
      { name: "FriendStory", key: "friend" },
      { name: "Child of God", key: "zero" },      
      { name: "Anima", key: "furry" },
      { name: "Beast Tamer", key: "bt" },
    ]
  },
  {
    name: "Exclude Non KMS",
    key: "kms",
    tooltip: "Check this to Jett, Sengoku, and Beast Tamer.",
    checked: false
  },
  {
    name: "Exclude Jett",
    key: "removed",
    tooltip: "Check this to exclude Jett.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Adele",
    img: "IF2OF28.png",
    opts: {
      branch: ["flora"],
      kms: true
    }
  },
  {
    name: "Angelic Buster",
    img: "T32Os69.png",
    opts: {
      branch: ["nova"],
      kms: true
    }
  },
  {
    name: "Aran",
    img: "rmgsldd.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Ark",
    img: "CkYJd3Z.png",
    opts: {
      branch: ["flora"],
      kms: true
    }
  },
  {
    name: "Battle Mage",
    img: "CJAIOT2.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Beast Tamer",
    img: "xdgniua.png",
    opts: {
      branch: ["jp"],
      kms: false
    }
  },
  {
    name: "Bishop",
    img: "Lkkhf81.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Blaster",
    img: "tzb33TZ.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Blaze Wizard",
    img: "fls9qtz.png",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {	
    name: "Bowmaster",
    img: "pyLKwMy.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Buccaneer",
    img: "MIsQN6Y.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Cadena",
    img: "Zzk9kaT.png",
    opts: {
      branch: ["nova"],
      kms: true
    }
  },
  {
    name: "Cannoneer",
    img: "4hGuTqE.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Corsair",
    img: "lwEyiDe.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Dark Knight",
    img: "9Q30N6z.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Dawn Warrior",
    img: "lHY2IO8.png",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Demon Avenger",
    img: "mRPVrCd.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Demon Slayer",
    img: "PXpvEcL.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Dual Blade",
    img: "z3HhQO8.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Evan",
    img: "J8f8F9a.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Fire Poison",
    img: "wka1irN.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Hayato",
    img: "7hh55Km.png",
    opts: {
      branch: ["jp"],
      kms: false
    }
  },
  {
    name: "Hero",
    img: "J5C9mG7.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Ho Young",
    img: "AphKFad.png",
    opts: {
      branch: ["furry"],
      kms: true
    }
  },
  {
    name: "Ice Lightning",
    img: "GNVzGXo.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Illium",
    img: "1cM1WqS.png",
    opts: {
      branch: ["flora"],
      kms: true
    }
  },
  {
    name: "Jett",
    img: "rPfjviO.png",
    opts: {
      branch: ["exp"],
      kms: false,
      removed: true
    }
  },
  {
    name: "Kain",
    img: "CD8yBOn.png",
    opts: {
      branch: ["nova"],
      kms: true
    }
  },
  {
    name: "Kaiser",
    img: "ha9OzlO.png",
    opts: {
      branch: ["nova"],
      kms: true
    }
  },
  {
    name: "Kanna",
    img: "fMgtLy5.png",
    opts: {
      branch: ["jp"],
      kms: false
    }
  },
  {
    name: "Khali",
    img: "Wxwses5.png",
    opts: {
      branch: ["flora"],
      kms: true
    }
  },
  {
    name: "Kinesis",
    img: "G2oHUjU.png",
    opts: {
      branch: ["friend"],
      kms: true
    }
  },
  {
    name: "Lara",
    img: "mWPgpXY.png",
    opts: {
      branch: ["furry"],
      kms: true
    }
  },
  {
    name: "Luminous",
    img: "lcRKW3c.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Marksman",
    img: "nAXZCB2.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Mechanic",
    img: "bhhAQlG.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Mercedes",
    img: "HfReeeW.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Mihile",
    img: "zF8YKmh.png",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Night Lord",
    img: "7YKKScM.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Night Walker",
    img: "rR9w5Z9.png",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Paladin",
    img: "mjQosdw.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Pathfinder",
    img: "le5fFwc.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Phantom",
    img: "DLuvaFu.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Shade",
    img: "FshNvX8.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Shadower",
    img: "PY3JtCV.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Thunder Breaker",
    img: "Y5jI1Hm.png",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Wild Hunter",
    img: "EkCs70m.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Wind Archer",
    img: "roEsQ38.png",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Xenon",
    img: "gMFjmxh.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Zero",
    img: "IHn1rAg.png",
    opts: {
      branch: ["zero"],
      kms: true
    }
  }
];
