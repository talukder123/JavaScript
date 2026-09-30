function commonSkills(skills1, skills2) {
    const set2 = new Set(skills2.map(skill => skill.toLowerCase()));

    return [...new Set(
        skills1
            .map(skill => skill.toLowerCase())
            .filter(skill => set2.has(skill))
    )].sort();
}