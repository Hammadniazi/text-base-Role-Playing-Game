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

  // 4) isAlive as a getter — reads nicely as `if (player.isAlive) { ... }`
  get isAlive(): boolean {
    return this.#health > 0;
  }
}

// 5) Player and Enemy inherit from Character
class Player extends Character {}
class Enemy extends Character {}

// 6) Instantiate characters
const player = new Player("Hero", 100, 15);
const enemy = new Enemy("Goblin", 50, 10);

// 7) Starting stats
console.log("--- Battle start ---");
console.log(`${player.name}: ${player.health} HP, ${player.damage} DMG`);
console.log(`${enemy.name}: ${enemy.health} HP, ${enemy.damage} DMG`);

// 8) Turn-based loop: continues while both are alive
while (player.isAlive && enemy.isAlive) {
  // Player's turn
  player.attack(enemy);
  console.log(`${enemy.name} has ${enemy.health} health left.`);
  if (!enemy.isAlive) break; // enemy died; end the fight

  // Enemy's turn
  enemy.attack(player);
  console.log(`${player.name} has ${player.health} health left.`);
}

// 9) Outcome
console.log("--- Battle end ---");
if (player.isAlive && !enemy.isAlive) {
  console.log(`${player.name} has defeated the ${enemy.name}!`);
} else if (!player.isAlive && enemy.isAlive) {
  console.log(`${enemy.name} was victorious!`);
} else {
  console.log(`Both ${player.name} and ${enemy.name} have fallen!`);
}
