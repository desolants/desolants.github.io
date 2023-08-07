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
    img: "adele.png",
    opts: {
      branch: ["flora"],
      kms: true
    }
  },
  {
    name: "Angelic Buster",
    img: "angelic_buster.png",
    opts: {
      branch: ["nova"],
      kms: true
    }
  },
  {
    name: "Aran",
    img: "aran.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Ark",
    img: "ark.png",
    opts: {
      branch: ["flora"],
      kms: true
    }
  },
  {
    name: "Battle Mage",
    img: "battle_mage.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Beast Tamer",
    img: "beast_tamer.png",
    opts: {
      branch: ["jp"],
      kms: false
    }
  },
  {
    name: "Bishop",
    img: "bishop.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Blaster",
    img: "blaster.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Blaze Wizard",
    img: "blaze_wizard.png",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {	
    name: "Bowmaster",
    img: "bowmaster.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Buccaneer",
    img: "buccaneer.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Cadena",
    img: "cadena.png",
    opts: {
      branch: ["nova"],
      kms: true
    }
  },
  {
    name: "Cannoneer",
    img: "cannoneer.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Corsair",
    img: "corsair.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Dark Knight",
    img: "dark_knight.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Dawn Warrior",
    img: "dawn_warrior.png",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Demon Avenger",
    img: "demon_avenger.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Demon Slayer",
    img: "demon_slayer.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Dual Blade",
    img: "dual_blade.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Evan",
    img: "evan.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Fire Poison",
    img: "fire_poison.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Hayato",
    img: "hayato.png",
    opts: {
      branch: ["jp"],
      kms: false
    }
  },
  {
    name: "Hero",
    img: "hero.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Ho Young",
    img: "ho_young.png",
    opts: {
      branch: ["furry"],
      kms: true
    }
  },
  {
    name: "Ice Lightning",
    img: "ice_lightning.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Illium",
    img: "illium.png",
    opts: {
      branch: ["flora"],
      kms: true
    }
  },
  {
    name: "Jett",
    img: "jett.png",
    opts: {
      branch: ["exp"],
      kms: false,
      removed: true
    }
  },
  {
    name: "Kain",
    img: "kain.png",
    opts: {
      branch: ["nova"],
      kms: true
    }
  },
  {
    name: "Kaiser",
    img: "kaiser.png",
    opts: {
      branch: ["nova"],
      kms: true
    }
  },
  {
    name: "Kanna",
    img: "kanna.png",
    opts: {
      branch: ["jp"],
      kms: false
    }
  },
  {
    name: "Khali",
    img: "khali.png",
    opts: {
      branch: ["flora"],
      kms: true
    }
  },
  {
    name: "Kinesis",
    img: "kinesis.png",
    opts: {
      branch: ["friend"],
      kms: true
    }
  },
  {
    name: "Lara",
    img: "lara.png",
    opts: {
      branch: ["furry"],
      kms: true
    }
  },
  {
    name: "Luminous",
    img: "luminous.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Marksman",
    img: "marksman.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Mechanic",
    img: "mechanic.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Mercedes",
    img: "mercedes.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Mihile",
    img: "mihile.png",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Night Lord",
    img: "night_lord.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Night Walker",
    img: "night_walker.png",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Paladin",
    img: "paladin.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Pathfinder",
    img: "pathfinder.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Phantom",
    img: "phantom.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Shade",
    img: "shade.png",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Shadower",
    img: "shadower.png",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Thunder Breaker",
    img: "thunder_breaker.png",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Wild Hunter",
    img: "wild_hunter.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Wind Archer",
    img: "wind_archer.png",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Xenon",
    img: "xenon.png",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Zero",
    img: "zero.png",
    opts: {
      branch: ["zero"],
      kms: true
    }
  }
];
