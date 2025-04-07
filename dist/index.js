"use strict";
class Character {
    constructor(id, name, level, _hp) {
        this.id = id;
        this.name = name;
        this.level = level;
        this._hp = _hp;
    }
    levelUp() {
        this.level = this.level + 1;
        return this.level;
    }
    static addCharacter() {
        Character.team++;
    }
    change_Hp(amount) {
        this._hp = this._hp + amount;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    static getTeam() {
        return Character.team;
    }
}
Character.team = 1;
const character = new Character(1, 'Quocka', 1, 100);
character.change_Hp(-10);
const character1 = new Character(2, 'Koala', 1, 120);
Character.addCharacter();
console.log(character, character1);
console.log(Character.getTeam());
//# sourceMappingURL=index.js.map