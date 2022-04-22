class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    vampire.creator = this;
    this.offspring.push(vampire);
    return;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let counter = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      counter++;
    }
    return counter;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const thisAge = this.numberOfVampiresFromOriginal;
    const otherAge = vampire.numberOfVampiresFromOriginal;

    return thisAge < otherAge;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let currentVampire = this;
    let output = null;

    if (currentVampire.creator === null) {
      return currentVampire;
    }
    if (vampire.creator === null) {
      return vampire;
    }

    if (currentVampire.numberOfVampiresFromOriginal === 1) {
      return currentVampire.creator;
    }

    if (vampire.numberOfVampiresFromOriginal === 1) {
      return vampire.creator;
    }
   
    return output;
  }




}

module.exports = Vampire;

