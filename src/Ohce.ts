export class Ohce {
  greetingUser(input: string): void {
    const today = new Date();
    const hour = today.getHours();
    let name = "";

    if (input.includes("ohce")) {
      name = input.split(" ")[1];
      if (hour >= 6 && hour <= 12) {
        console.log("¡Buenas días " + name + "!");
      }
      if (hour >= 12 && hour <= 20) {
        console.log("¡Buenas tardes " + name + "!");
      } else {
        console.log("¡Buenas noches " + name + "!");
      }
    } else if (input === "Stop!") {
      console.log("Adios");
    } else if (input == input.split("").reverse().join("")) {
      console.log(input.split("").reverse().join(""));
      console.log("¡Bonita palabra");
    } else {
      console.log(input.split("").reverse().join(""));
    }
  }
}
