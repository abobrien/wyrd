const items = {
    armor: [
        {
            "id": "5tiuiewzok",
            "name": "Quilted Armor",
            "type": "Common",
            "defense": 1,
            "weight": "Light",
            "coverage": "Full Body"
        },
        {
            "id": "upyy0xfs41",
            "name": "Inscribed Robes",
            "type": "Common",
            "defense": 1,
            "weight": "Light",
            "coverage": "Full Body",
            "special": {
                "name": "Arcane Resistance",
                "type": "Passive",
                "description": "Gain Resistance to Arcane Magical damage."
            }
        },
        {
            "id": "ymcn9di7qg",
            "name": "Leather Armor",
            "type": "Common",
            "defense": 2,
            "weight": "Light",
            "coverage": "Full Body"
        },
        {
            "id": "3pnnfo1vg7",
            "name": "Minotaur Hide",
            "type": "Rare",
            "defense": 2,
            "weight": "Light",
            "coverage": "Full Body",
            "special": {
                "name": "Minotaur Resistance",
                "type": "Passive",
                "description": "Gain Resistance to all Elemental damage."
            }
        },
        {
            "id": "odkokbqy0q",
            "name": "Chain Mail",
            "type": "Common",
            "defense": 3,
            "weight": "Medium",
            "coverage": "Full Body"
        },
        {
            "id": "s97g1gpf36",
            "name": "Mithral Chain Mail",
            "type": "Rare",
            "defense": 3,
            "weight": "Light",
            "coverage": "Full Body",
            "special": {
                "name": "Mithral Resistance",
                "type": "Passive",
                "description": "Gain Resistance to Sharp Physical damage."
            }
        },
        {
            "id": "a7wzah2rfp",
            "name": "Scale Mail",
            "type": "Common",
            "defense": 4,
            "weight": "Medium",
            "coverage": "Full Body"
        },
        {
            "id": "rvqs5l0rp4",
            "name": "Half Plate",
            "type": "Common",
            "defense": 5,
            "weight": "Heavy",
            "coverage": "Full Body",
        },
        {
            "id": "8mqyo3ix5u",
            "name": "Full Plate",
            "type": "Common",
            "defense": 6,
            "weight": "Heavy",
            "coverage": "Full Body"
        },
    ],
    shields: [
        {
            "name": "Buckler",
            "type": "Common",
            "defense": 1,
            "weight": "Light",
            "coverage": "Shield",
            "special": {
                "name": "Deflect",
                "type": "Reaction",
                "description": "Roll 3d6 + Physique + Discipline against an incoming attack. On success, negate all Physical damage."
            }
        },
        {
            "name": "Targe",
            "type": "Common",
            "defense": 2,
            "weight": "Medium",
            "coverage": "Shield"
        },
        {
            "name": "Heater",
            "type": "Common",
            "defense": 2,
            "weight": "Medium",
            "coverage": "Shield"
        },
    ],
    weapons: [
        {
            "name": "Dagger",
            "type": "Common",
            "damage": 2,
            "damage_type": "Sharp",
            "target": "Enemy",
            "range": "Close"
        },
        {
            "name": "Hatchet",
            "type": "Common",
            "damage": 2,
            "damage_type": "Blunt",
            "target": "Enemy",
            "range": "Close",
            "special": {
                "name": "Throwable",
                "type": "Property",
                "description": "May be used as a thrown weapon."
            }
        },
        {
            "name": "Shortsword",
            "type": "Common",
            "damage": 4,
            "damage_type": "Sharp",
            "target": "Enemy",
            "range": "Close"
        },
        {
            "name": "Mace",
            "type": "Common",
            "damage": 4,
            "damage_type": "Blunt",
            "target": "Enemy",
            "range": "Close"
        },
        {
            "name": "Longsword",
            "type": "Common",
            "damage": 6,
            "damage_type": "Sharp",
            "target": "Enemy",
            "range": "Close"
        },
        {
            "name": "Maul",
            "type": "Common",
            "damage": 6,
            "damage_type": "Blunt",
            "target": "Enemy",
            "range": "Close"
        },
    ],
    tools: [
        {
            "name": "Potion of Healing",
            "type": "Common",
            "target": "Self",
            "range": "Self",
            "effect": "Instant",
            "special": {
                "name": "Consume",
                "type": "Minor Action",
                "description": "Recover Vitality equal to 4 + Physique + Resolve."
            }
        },
        {
            "name": "Potion of Resistance",
            "type": "Common",
            "target": "Self",
            "range": "Self",
            "effect": "Instant",
            "special": {
                "name": "Consume",
                "type": "Minor Action",
                "description": "Gain Resistance to the associated damage type."
            }
        },
    ]
}

export default items;