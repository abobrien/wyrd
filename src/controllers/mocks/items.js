const items = {
    armor: [
        {
            "id": "5tiuiewzok",
            "name": "Gambeson",
            "grade": "Common",
            "defense": 1,
            "weight": "Light"
        },
        {
            "id": "ymcn9di7qg",
            "name": "Leather Armor",
            "grade": "Common",
            "defense": 2,
            "weight": "Light"
        },
        {
            "id": "odkokbqy0q",
            "name": "Chain Mail",
            "grade": "Common",
            "defense": 3,
            "weight": "Medium"
        },
        {
            "id": "a7wzah2rfp",
            "name": "Scale Mail",
            "grade": "Common",
            "defense": 4,
            "weight": "Medium"
        },
        {
            "id": "rvqs5l0rp4",
            "name": "Half Plate",
            "grade": "Common",
            "defense": 5,
            "weight": "Heavy"
        },
        {
            "id": "8mqyo3ix5u",
            "name": "Full Plate",
            "grade": "Common",
            "defense": 6,
            "weight": "Heavy"
        },
    ],
    shield: [
        {
            "id": "f3a8d9b2c1",
            "name": "Buckler",
            "grade": "Common",
            "defense": 1,
            "weight": "Light",
            "properties": [
                "Shield",
                "Throwable"
            ]
        },
        {
            "id": "x9Hj38KqL2",
            "name": "Targe",
            "grade": "Common",
            "defense": 2,
            "weight": "Medium",
            "properties": [
                "Shield"
            ]
        },
        {
            "id": "8Fwz51PmR7",
            "name": "Pavise",
            "grade": "Common",
            "defense": 2,
            "weight": "Medium",
            "properties": [
                "Cover",
                "Deployable"
            ]
        },
    ],
    weapon: [
        {
            "id": "1I4BXbSs",
            "name": "Dagger",
            "grade": "Common",
            "damage": 2,
            "damage_type": "Sharp",
            "target": "Enemy",
            "range": "Close"
        },
        {
            "id": "n0Kw4Jks",
            "name": "Axe",
            "grade": "Common",
            "damage": 2,
            "damage_type": "Blunt",
            "target": "Enemy",
            "range": "Close",
            "properties": [
                "Throwable"
            ]
        },
        {
            "id": "rkHefLMG",
            "name": "Sword",
            "grade": "Common",
            "damage": 4,
            "damage_type": "Sharp",
            "target": "Enemy",
            "range": "Close"
        },
        {
            "id": "Ge8wtuAX",
            "name": "Mace",
            "grade": "Common",
            "damage": 4,
            "damage_type": "Blunt",
            "target": "Enemy",
            "range": "Close"
        },
        {
            "id": "OmLySuQf",
            "name": "Spear",
            "grade": "Common",
            "damage": 6,
            "damage_type": "Sharp",
            "target": "Enemy",
            "range": "Close",
            "properties": [
                "Two-Handed"
            ]
        },
        {
            "id": "Gl8EUWtd",
            "name": "Warhammer",
            "grade": "Common",
            "damage": 6,
            "damage_type": "Blunt",
            "target": "Enemy",
            "range": "Close",
            "properties": [
                "Two-Handed"
            ]
        },
    ],
    tool: [
        {
            "id": "xN3zY9Vp",
            "name": "Potion of Healing",
            "grade": "Common",
            "target": "Self",
            "effect": "Instant",
            "properties": [
                "Consumable"
            ],
            "special": "Recover Vitality equal to 4 + Physique + Resolve."
        },
        {
            "id": "Km7tW2qX",
            "name": "Potion of Resistance",
            "grade": "Common",
            "target": "Self",
            "effect": "Instant",
            "properties": [
                "Consumable"
            ]
        },
    ],
    pack: [
        {
            "id": "bbzyHC69",
            "name": "Expeditionary Pack",
            "grade": "Common",
            "inventory_slots": 6,
            "rests": 3
        },
    ]
}

export default items;