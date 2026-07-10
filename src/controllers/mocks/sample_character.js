const character = {
    name: "Sample",
    level: 1,
    ancestry: "Human",
    heritage: "Imperial",

    aptitudes: [
        { label: "Physique", value: 1 },
        { label: "Intellect", value: 2 },
        { label: "Psyche", value: 2 }
    ],

    approaches: [
        { label: "Reflex", value: 2 },
        { label: "Discipline", value: 2 },
        { label: "Resolve", value: 1 }
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