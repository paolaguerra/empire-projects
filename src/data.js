import React from 'react'

const empireProyect = [
  {
    id: "Inq",
    name: "Inquisitorius",
    dangerLevel: 60,
    imgUrl:
      "https://static.wikia.nocookie.net/starwars/images/2/25/Inquisitorius_Vader_Comic.png/revision/latest/top-crop/width/200/height/150?cb=20180429025857",
    description: "The Inquisitorius, also known as the Inquisitorius Program, the Order of Inquisitors, and the Imperial Inquisition, was an organization of mysterious, Force-sensitive dark side agents who served the Sith-ruled Galactic Empire. The operatives of the Imperial Inquisition were called Imperial Inquisitors, or simply Inquisitors, and were also nicknamed Red Blades. They were tasked with hunting down the remaining Jedi who had survived Order 66 at the end of the Clone Wars as part of the Great Jedi Purge, as well as other political dissidents, and retrieving any children identified as Force-sensitive for Project Harvester. The Inquisitors were governed by the Commander-in-Chief Darth Vader, who was also the Sith apprentice of the Galactic Emperor, Darth Sidious, though directly led by an individual known only by his title, the Grand Inquisitor, and briefly by his temporary substitute, the Third Sister.",
    cost: 1000,
  },
  {
    id: "TIE",
    name: "TIE/d Defender Multi-Role Starfighter",
    dangerLevel: 40,
    imgUrl:
      "https://static.wikia.nocookie.net/starwars/images/4/44/SWB_TIE_Defender.png/revision/latest/top-crop/width/200/height/150?cb=20171030173108",
    description: "The TIE/d Defender Multi-Role Starfighter, also called the TIE/D Defender or simply the TIE Defender, was an advanced experimental TIE line starfighter manufactured by Sienar Fleet Systems for the Imperial Navy of the Galactic Empire. The starfighter was referred to as the TIE Defender project while under development. Unlike previous TIE models, the starfighter featured a hyperdrive as well as deflector shields, and was easily recognized by its three wings mounted around an aft section of the cockpit. These specifications made the fighter much more difficult to destroy than standard TIE fighters.",
  },
  {
    id: "Destro",
    name: "Onager-class Star Destroyer",
    dangerLevel: 70,
    imgUrl:
      "https://static.wikia.nocookie.net/starwars/images/3/39/Cataclysm.jpg/revision/latest/top-crop/width/200/height/150?cb=20191207233509",
    description: "The Onager-class Star Destroyer, nicknamed the Imperial Siege Breaker by members of the Rebel Alliance, was a type of rare capital ship and superweapon deployed by the Galactic Empire that was shrouded in secrecy. Initially developed to swiftly eradicate Separatist holdouts that remained after the Clone Wars and to bring Core Worlds under the control of the Empire, the Onager-class saw service throughout the Imperial Era. Following the deployment of the Death Star, the Onager was considered to be a possibly greater threat than the battle station.",
    cost: 100,
  },
  {
    id: "DS-1",
    name: "DS-1 Death Star Mobile Battle Station",
    dangerLevel: 100,
    imgUrl:
      "https://static.wikia.nocookie.net/starwars/images/7/72/DeathStar1-SWE.png/revision/latest/top-crop/width/200/height/150?cb=20150121020639",
    description: "The DS-1 Death Star Mobile Battle Station, also designated as the DS-1 Orbital Battle Station and referred to as the Ultimate Weapon in early development stages and later as the Death Star I and the First Death Star, but simply referred to as the Death Star was a moon-sized, deep-space mobile battle station constructed by the Galactic Empire. It had been designed to fire a single planet-destroying superlaser powered by massive kyber crystals which would destroy any planet targeted. It was the pet project of Emperor Palpatine, Director Orson Callan Krennic, and its eventual commander Grand Moff Wilhuff Tarkin to expound the military philosophy of the aptly named Tarkin Doctrine.",
    cost: 5000,
  },
  {
    id: "I71A",
    name: "Imperial bioweapons Project I71A",
    dangerLevel: 90,
    imgUrl:
      "https://static.wikia.nocookie.net/starwars/images/2/24/Zombie_trooper.jpg/revision/latest/top-crop/width/200/height/150?cb=20120122022419",
    description: "The Imperial bioweapons Project I71A, known as the Sickness, was an infectious viral agent created through the powers of Sith alchemy that attacked biological tissue and transformed its victims into undead monstrosities. The disease was originally created by the Sith Lord Darth Drear on Odacer-Faustin sometime prior to 4645 BBY, and was intended to grant immortality to its crafter. Drear's initial experiments resulted in failure, and the Sith Lord fell victim to his creation. Over one thousand years later, during the period of unrest following the Great Galactic War, the Sith Lord Darth Scabrous attempted to recreate Drear's disease in the hope that he would succeed where his predecessor had failed. Scabrous likewise failed to create a path to immortality, and in the process unleashed the virus upon the unsuspecting students and staff of the Odacer-Faustin Sith academy. Before long, all of the Sith Acolytes and Masters on the planet died and were born anew as cannibalistic monstrosities motivated only by the will to eat.",
    cost: 50,
  },
  {
    id: "WM",
    name: "War-Mantle",
    dangerLevel: 500,
    imgUrl:
      "https://static.wikia.nocookie.net/starwars/images/b/b0/The-Replacements.png/revision/latest/top-crop/width/200/height/150?cb=20220105010821",
    description: "Project War-Mantle,[4] also known as simply War-Mantle,[8] or War Mantle,[9] was an initiative of the Galactic Empire enacted soon after its founding that sought to fill out the ranks of the burgeoning Imperial Army with conscripted and willingly recruited human soldiers, a departure from the clone army of the Galactic Republic. The first of these soldiers served in the Elite Squad led by Clone Commander CT-9904, previously known as Crosshair, a former member of Clone Force 99. The project was part of Vice Admiral Rampart's vision for the Empire, and he received support from Governor Wilhuff Tarkin.[1]",
    cost: 80,
  },
  {
    id: "DTP",
    name: "Dark trooper program",
    dangerLevel: 74,
    imgUrl: "https://static.wikia.nocookie.net/starwars/images/b/bf/Darktrooperprogram.png/revision/latest/scale-to-width-down/500?cb=20201223061944",
    description: "The dark trooper program[2] was an Imperial Department of Military Research[3] program whose goal was to create[2] a force of soldiers known as Dark Troopers for the Galactic Empire.[2] Although it was originally launched as a way to supply humans with a new armor,[3] the program eventually became focused on creating Imperial battle droids, only for it to end in failure. The failure contributed to the Joint Chiefs becoming disinterested in the use of combat droids, with the notable exception of the KX-series security droid.[2]",
    cost: 200,
  },
  {
    id: "ICP",
    name: "Imperial cloning program",
    dangerLevel: 85,
    imgUrl: "https://static.wikia.nocookie.net/starwars/images/9/95/The_Scalpel_of_Creation.png/revision/latest/scale-to-width-down/499?cb=20210803040248",
    description: "The Galactic Empire's cloning program referred to a vast array of projects undertaken by the Imperial regime and its affiliated organizations to further study, reproduce, and improve upon Kaminoan cloning and genetic technology utilized during the Clone Wars. As part of Emperor Palpatine's Contingency, the Imperial cloning program sought to create a Force-sensitive strandcast capable of serving as a replacement body for Palpatine, thus allowing him to achieve immortality.",
    cost: 754,
  },
];

export const data = () => {
  return (
    <div></div>
  )
}