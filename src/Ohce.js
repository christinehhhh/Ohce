function greetingUser(input) {
  let today = new Date();
  let hour = today.getHours();

  if (input.includes("ohce")) {
    if (hour >= 6 && hour <= 12) {
      console.log("¡Buenas días" + input);
    }
    if (hour >= 12 && hour <= 20) {
      console.log("¡Buenas tardes" + input);
    } else {
      console.log("¡Buenas noches" + input);
    }
  } else if (input === "Stop!") {
    null;
  } else if (input == input.split("").reverse().join("")) {
    console.log(input.split("").reverse().join(""));
    console.log("¡Bonita palabra");
  } else {
    console.log(input.split("").reverse().join(""));
  }
}
greetingUser("ohce Pedro");
