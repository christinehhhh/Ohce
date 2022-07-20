import { Ohce } from "./Ohce";

describe("Ohce", () => {
  // Arrange:
  const ohce = new Ohce();

  // Test Unit Greeting:
  describe("Greeting user", () => {
    // it("good night", () => {
    //   console.log = jest.fn();
    //   ohce.greetingUser("ohce Pedro");
    //   expect(console.log).toHaveBeenCalledWith("¡Buenas noches Pedro!");
    // });
    it("good day", () => {
      console.log = jest.fn();
      ohce.greetingUser("ohce Pedro");
      expect(console.log).toHaveBeenCalledWith("¡Buenas tardes Pedro!");
    });
    // it("good morning", () => {
    //   console.log = jest.fn();
    //   ohce.greetingUser("ohce Pedro");
    //   expect(console.log).toHaveBeenCalledWith("¡Buenas días Pedro!");
    // });
  });

  // Test Unit pelindrome:
  describe("Using palindrom", () => {
    it("not palindrom", () => {
      console.log = jest.fn();
      ohce.greetingUser("hola");
      expect(console.log).toHaveBeenCalledWith("aloh");
    });
    it("palindrom", () => {
      console.log = jest.fn();
      ohce.greetingUser("oto");
      expect(console.log).toHaveBeenCalledWith("oto");
      expect(console.log).toHaveBeenCalledWith("¡Bonita palabra");
    });
  });

  // Test Unit stop:
  describe("Stop action", () => {
    it("stop", () => {
      console.log = jest.fn();
      ohce.greetingUser("Stop!");
      expect(console.log).toHaveBeenCalledWith("Adios");
    });
  });
});
