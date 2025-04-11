// src/utils/sum.test.ts
import { sum } from "./sum"; // Importiamo la funzione da testare

describe("Funzione sum", () => {
  test("Dovrebbe sommare 2 e 3 e restituire 5", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("Dovrebbe sommare -1 e 1 e restituire 0", () => {
    expect(sum(-1, 1)).toBe(0);
  });

  test("Dovrebbe sommare 0 e 0 e restituire 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
});