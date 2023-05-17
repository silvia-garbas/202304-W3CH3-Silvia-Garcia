import { Pet } from '../models/pet';

export const getMockPets = (): Pet[] => [
  new Pet('Bamban', 'mil leches', 'S'),
  new Pet('Paco', 'Pastor alemán', 'L'),
  new Pet('Pepa', 'Perro Lobo', 'D'),
];
