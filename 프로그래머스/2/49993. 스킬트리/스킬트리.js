function solution(skill, skill_trees) {
	function filters(skills) {
		const temp = skill.split("");
		for (let i = 0; i < skills.length; i++) {
			if (!skill.includes(skills[i])) continue;
			if (skills[i] === temp.shift()) continue;
			return false;
		}
		return true;
	}
	return skill_trees.filter(filters).length;
}