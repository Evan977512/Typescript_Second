interface IBhaviour {
  play(): void;
  // wow(): void;
}

class Soccer implements IBhaviour {
  play() {
    console.log("Play Soccer");
  }
}

class Guitar implements IBhaviour {
  play() {
    console.log("play the guitar");
  }
}

let bhaviour = new Guitar();
bhaviour.play(); // play the guitar
bhaviour = new Soccer();
bhaviour.play(); // Play Soccer
