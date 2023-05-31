export enum SelectedPage {
  Home = "home",
  Plan = "plan",
}

export enum DogSpecies {
  Golden = "golden retriever",
  Beagle = "beagle",
  BullDog = "bullDog",
  Pug = "pug",
  Samoyed = "samoyed",
  Chow2 = "chow",
  Shihtzu = "shihtzu",
  Corgi = "corgi",
}

export enum CatSpecies {
  Siamese = "Siamese",
  British = "British shorthair",
  Persian = "Persian",
  Ragdoll = "Ragdoll",
  KhaoManee = "Khao Manee",
}

export type PetInfoType = {
  type: string;
  species: string;
  img?: string;
  isVacinated?: boolean;
  isHealthy?: boolean;
  isTrained?: boolean;
  tags?: { tag: string; id: string }[];
};
