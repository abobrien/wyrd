const character = {
    name: "Fletch",
    level: 1,

    background: [
        { label: "", value: "" }
    ],

    aptitudes: [
        { label: "Physique", value: 2 },
        { label: "Intellect", value: 1 },
        { label: "Psyche", value: 3 }
    ],

    approaches: [
        { label: "Reflex", value: 2 },
        { label: "Discipline", value: 1 },
        { label: "Resolve", value: 3 }
    ],

    stats: [
        { label: "Vitality", value: "" }
    ],

    skills: [
        { label: "", value: "" }
    ]
};

character.abilityGrid = character.aptitudes.map(aptitude => ({
    ...aptitude,
    cells: character.approaches.map(approach => ({
        label: approach.label,
        value: aptitude.value + approach.value
    }))
}));

export default character;