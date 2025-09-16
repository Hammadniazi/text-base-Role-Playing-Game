class Character {
  #health: number;
  name: string;
  damage: number;

  constructor(name: string, health: number, damage: number) {
    this.name = name;
    this.#health = Number(health);
    this.damage = Number(damage);
  }

  get health(): number {
    return this.#health;
  }
  takeDamage(amount: number): void {
    this.#health = Math.max(0, this.#health - amount);
    console.log(
      `${this.name} takes ${amount} damage and has ${this.#health} HP `
    );
  }

  attack(target: Character): void {
    console.log(
      `${this.name} attacks ${target.name} for ${this.damage} damage!`
    );
    target.takeDamage(this.damage);
  }
}
