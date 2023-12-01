function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 2000,
        bonus: 200,
        addSkill: function (skill) {
            this.skills.push(skill);
        },
        getSalary: function () {
            return this.salary + this.bonus;
        }
    };
    return member;
}