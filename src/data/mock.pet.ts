import { Pet } from '../models/pet';

export const getMockPets = (): Pet[] => [
  new Pet('Bamban', 'Mil leches', 'S'),
  new Pet('Paco', 'Pastor alemán', 'L'),
  new Pet('Pepa', 'Mil leches', 'D'),
];
