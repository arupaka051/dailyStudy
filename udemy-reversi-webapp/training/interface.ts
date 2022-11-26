const STONE = 0;
const PAPER = 1;
const SCISSORS = 2;

class RandomHandGenerator {
  generate(): number {
  return Math.floor(Math.random() * 3)
  }

  generateArray(): number[] {
    return [];
  }
}

class Janken {

  play() {
    const handGenerator = new RandomHandGenerator();

    const computerHand = handGenerator.generate();

    console.log(`computerHand = ${computerHand}`);

    //勝敗判定などが続く・・・

  }

}

const janken = new Janken();
janken.play();