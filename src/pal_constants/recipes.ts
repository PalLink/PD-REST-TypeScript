import { ItemId } from "./items.js";

export type RecipeMaterialId = string;

export type RecipeMaterialMap = Readonly<Partial<Record<RecipeMaterialId, number>>>;

export interface Recipe {
  product: ItemId;
  materials: RecipeMaterialMap;
}

type ItemRecipeMap = Partial<Record<ItemId, Recipe>>;

const _ITEM_RECIPES: ItemRecipeMap = {
  [ItemId.PalSphere]: {
    product: ItemId.PalSphere,
    materials: {
      [ItemId.PaldiumFragment]: 1,
      [ItemId.Wood]: 3,
      [ItemId.Stone]: 3,
    },
  },
  [ItemId.MegaSphere]: {
    product: ItemId.MegaSphere,
    materials: {
      [ItemId.PaldiumFragment]: 1,
      [ItemId.Ingot]: 1,
      [ItemId.Wood]: 5,
      [ItemId.Stone]: 5,
    },
  },
  [ItemId.GigaSphere]: {
    product: ItemId.GigaSphere,
    materials: {
      [ItemId.PaldiumFragment]: 2,
      [ItemId.Ingot]: 2,
      [ItemId.Wood]: 7,
      [ItemId.Stone]: 7,
    },
  },
  [ItemId.HyperSphere]: {
    product: ItemId.HyperSphere,
    materials: {
      [ItemId.PaldiumFragment]: 3,
      [ItemId.Ingot]: 3,
      [ItemId.Wood]: 10,
      [ItemId.Cement]: 2,
    },
  },
  [ItemId.UltraSphere]: {
    product: ItemId.UltraSphere,
    materials: {
      [ItemId.PaldiumFragment]: 5,
      [ItemId.RefinedIngot]: 5,
      [ItemId.CarbonFiber]: 2,
      [ItemId.Cement]: 3,
    },
  },
  [ItemId.LegendarySphere]: {
    product: ItemId.LegendarySphere,
    materials: {
      [ItemId.PaldiumFragment]: 10,
      [ItemId.PalMetalIngot]: 5,
      [ItemId.CarbonFiber]: 3,
      [ItemId.Cement]: 5,
    },
  },
  [ItemId.UltimateSphere]: {
    product: ItemId.UltimateSphere,
    materials: {
      [ItemId.PaldiumFragment]: 20,
      [ItemId.PalMetalIngot]: 10,
      [ItemId.CarbonFiber]: 5,
      [ItemId.Plasteel]: 1,
    },
  },
  [ItemId.ExoticSphere]: {
    product: ItemId.ExoticSphere,
    materials: {
      [ItemId.PaldiumFragment]: 30,
      [ItemId.Plasteel]: 2,
      [ItemId.CarbonFiber]: 7,
      [ItemId.Hexolite]: 1,
    },
  },
  [ItemId.HeavyWeightModule]: {
    product: ItemId.HeavyWeightModule,
    materials: {
      [ItemId.PaldiumFragment]: 10,
      [ItemId.Ingot]: 10,
      [ItemId.Stone]: 20,
    },
  },
  [ItemId.CurveModule]: {
    product: ItemId.CurveModule,
    materials: {
      [ItemId.PaldiumFragment]: 30,
      [ItemId.Ingot]: 30,
      [ItemId.Stone]: 50,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.SniperModule]: {
    product: ItemId.SniperModule,
    materials: {
      [ItemId.PaldiumFragment]: 50,
      [ItemId.Ingot]: 50,
      [ItemId.Cement]: 30,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.SliderModule]: {
    product: ItemId.SliderModule,
    materials: {
      [ItemId.PaldiumFragment]: 100,
      [ItemId.RefinedIngot]: 50,
      [ItemId.CarbonFiber]: 50,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.SniperModuleSphereModuleSniper2]: {
    product: ItemId.SniperModuleSphereModuleSniper2,
    materials: {
      [ItemId.PaldiumFragment]: 200,
      [ItemId.PalMetalIngot]: 50,
      [ItemId.CarbonFiber]: 30,
      [ItemId.AncientCivilizationParts]: 30,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.HomingModule]: {
    product: ItemId.HomingModule,
    materials: {
      [ItemId.Plasteel]: 50,
      [ItemId.CarbonFiber]: 100,
      [ItemId.AncientCivilizationParts]: 50,
      [ItemId.DarkFragment]: 50,
      [ItemId.AncientCivilizationCore]: 10,
    },
  },
  [ItemId.WoodenClub]: {
    product: ItemId.WoodenClub,
    materials: {
      [ItemId.Wood]: 5,
    },
  },
  [ItemId.Bat]: {
    product: ItemId.Bat,
    materials: {
      [ItemId.Wood]: 30,
      [ItemId.Stone]: 10,
    },
  },
  [ItemId.HandHeldTorch]: {
    product: ItemId.HandHeldTorch,
    materials: {
      [ItemId.Wood]: 2,
      [ItemId.Stone]: 2,
    },
  },
  [ItemId.MeatCleaver]: {
    product: ItemId.MeatCleaver,
    materials: {
      [ItemId.Ingot]: 5,
      [ItemId.Wood]: 20,
      [ItemId.Stone]: 5,
    },
  },
  [ItemId.StonePickaxe]: {
    product: ItemId.StonePickaxe,
    materials: {
      [ItemId.Stone]: 5,
      [ItemId.Wood]: 5,
    },
  },
  [ItemId.MetalPickaxe]: {
    product: ItemId.MetalPickaxe,
    materials: {
      [ItemId.Stone]: 15,
      [ItemId.Wood]: 20,
      [ItemId.Ingot]: 5,
    },
  },
  [ItemId.RefinedMetalPickaxe]: {
    product: ItemId.RefinedMetalPickaxe,
    materials: {
      [ItemId.Stone]: 30,
      [ItemId.Wood]: 40,
      [ItemId.RefinedIngot]: 10,
    },
  },
  [ItemId.PalMetalPickaxe]: {
    product: ItemId.PalMetalPickaxe,
    materials: {
      [ItemId.Stone]: 50,
      [ItemId.Wood]: 100,
      [ItemId.PalMetalIngot]: 10,
    },
  },
  [ItemId.StoneAxe]: {
    product: ItemId.StoneAxe,
    materials: {
      [ItemId.Stone]: 5,
      [ItemId.Wood]: 5,
    },
  },
  [ItemId.MetalAxe]: {
    product: ItemId.MetalAxe,
    materials: {
      [ItemId.Stone]: 15,
      [ItemId.Wood]: 20,
      [ItemId.Ingot]: 5,
    },
  },
  [ItemId.RefinedMetalAxe]: {
    product: ItemId.RefinedMetalAxe,
    materials: {
      [ItemId.Stone]: 30,
      [ItemId.Wood]: 40,
      [ItemId.RefinedIngot]: 10,
    },
  },
  [ItemId.PalMetalAxe]: {
    product: ItemId.PalMetalAxe,
    materials: {
      [ItemId.Stone]: 50,
      [ItemId.Wood]: 100,
      [ItemId.PalMetalIngot]: 10,
    },
  },
  [ItemId.StoneSpear]: {
    product: ItemId.StoneSpear,
    materials: {
      [ItemId.Wood]: 18,
      [ItemId.Stone]: 6,
    },
  },
  [ItemId.MetalSpear]: {
    product: ItemId.MetalSpear,
    materials: {
      [ItemId.Wood]: 27,
      [ItemId.Stone]: 12,
      [ItemId.Ingot]: 10,
    },
  },
  [ItemId.RefinedMetalSpear]: {
    product: ItemId.RefinedMetalSpear,
    materials: {
      [ItemId.Wood]: 36,
      [ItemId.Stone]: 18,
      [ItemId.RefinedIngot]: 10,
    },
  },
  [ItemId.LilySSpear]: {
    product: ItemId.LilySSpear,
    materials: {
      [ItemId.PaldiumFragment]: 20,
      [ItemId.RefinedIngot]: 30,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.Wood]: 50,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.LilySSpear4]: {
    product: ItemId.LilySSpear4,
    materials: {
      [ItemId.PaldiumFragment]: 45,
      [ItemId.RefinedIngot]: 67,
      [ItemId.HighQualityCloth]: 45,
      [ItemId.Wood]: 112,
      [ItemId.AncientCivilizationParts]: 40,
    },
  },
  [ItemId.StunBaton]: {
    product: ItemId.StunBaton,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.ElectricOrgan]: 20,
    },
  },
  [ItemId.Katana]: {
    product: ItemId.Katana,
    materials: {
      [ItemId.PalMetalIngot]: 20,
      [ItemId.Wood]: 20,
    },
  },
  [ItemId.Katana1]: {
    product: ItemId.Katana1,
    materials: {
      [ItemId.PalMetalIngot]: 40,
      [ItemId.Wood]: 40,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.Katana2]: {
    product: ItemId.Katana2,
    materials: {
      [ItemId.PalMetalIngot]: 60,
      [ItemId.Wood]: 60,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.Katana3]: {
    product: ItemId.Katana3,
    materials: {
      [ItemId.PalMetalIngot]: 90,
      [ItemId.Wood]: 90,
      [ItemId.AncientCivilizationParts]: 16,
    },
  },
  [ItemId.Katana4]: {
    product: ItemId.Katana4,
    materials: {
      [ItemId.PalMetalIngot]: 135,
      [ItemId.Wood]: 135,
      [ItemId.AncientCivilizationParts]: 32,
    },
  },
  [ItemId.Sword]: {
    product: ItemId.Sword,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Wood]: 20,
      [ItemId.Stone]: 20,
    },
  },
  [ItemId.Sword1]: {
    product: ItemId.Sword1,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.Wood]: 40,
      [ItemId.Stone]: 40,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.Sword2]: {
    product: ItemId.Sword2,
    materials: {
      [ItemId.Ingot]: 90,
      [ItemId.Wood]: 60,
      [ItemId.Stone]: 60,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.Sword3]: {
    product: ItemId.Sword3,
    materials: {
      [ItemId.Ingot]: 135,
      [ItemId.Wood]: 90,
      [ItemId.Stone]: 90,
      [ItemId.AncientCivilizationParts]: 12,
    },
  },
  [ItemId.Sword4]: {
    product: ItemId.Sword4,
    materials: {
      [ItemId.Ingot]: 202,
      [ItemId.Wood]: 135,
      [ItemId.Stone]: 135,
      [ItemId.AncientCivilizationParts]: 24,
    },
  },
  [ItemId.MetalDetector]: {
    product: ItemId.MetalDetector,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PaldiumFragment]: 100,
      [ItemId.CircuitBoard]: 30,
      [ItemId.NightstarSand]: 20,
    },
  },
  [ItemId.BeamSword]: {
    product: ItemId.BeamSword,
    materials: {
      [ItemId.Hexolite]: 30,
      [ItemId.PaldiumFragment]: 100,
      [ItemId.NightstarSand]: 20,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.BeamSword1]: {
    product: ItemId.BeamSword1,
    materials: {
      [ItemId.Hexolite]: 60,
      [ItemId.PaldiumFragment]: 200,
      [ItemId.NightstarSand]: 40,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.BeamSword2]: {
    product: ItemId.BeamSword2,
    materials: {
      [ItemId.Hexolite]: 90,
      [ItemId.PaldiumFragment]: 300,
      [ItemId.NightstarSand]: 60,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.BeamSword3]: {
    product: ItemId.BeamSword3,
    materials: {
      [ItemId.Hexolite]: 135,
      [ItemId.PaldiumFragment]: 450,
      [ItemId.NightstarSand]: 90,
      [ItemId.AncientCivilizationParts]: 30,
    },
  },
  [ItemId.BeamSword4]: {
    product: ItemId.BeamSword4,
    materials: {
      [ItemId.Hexolite]: 202,
      [ItemId.PaldiumFragment]: 675,
      [ItemId.NightstarSand]: 135,
      [ItemId.AncientCivilizationParts]: 40,
    },
  },
  [ItemId.OldBow]: {
    product: ItemId.OldBow,
    materials: {
      [ItemId.Wood]: 30,
      [ItemId.Stone]: 5,
      [ItemId.Fiber]: 15,
    },
  },
  [ItemId.OldBow1]: {
    product: ItemId.OldBow1,
    materials: {
      [ItemId.Wood]: 60,
      [ItemId.Stone]: 10,
      [ItemId.Fiber]: 30,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.OldBow2]: {
    product: ItemId.OldBow2,
    materials: {
      [ItemId.Wood]: 90,
      [ItemId.Stone]: 15,
      [ItemId.Fiber]: 45,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.OldBow3]: {
    product: ItemId.OldBow3,
    materials: {
      [ItemId.Wood]: 135,
      [ItemId.Stone]: 22,
      [ItemId.Fiber]: 67,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.OldBow4]: {
    product: ItemId.OldBow4,
    materials: {
      [ItemId.Wood]: 202,
      [ItemId.Stone]: 33,
      [ItemId.Fiber]: 100,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.FireBow]: {
    product: ItemId.FireBow,
    materials: {
      [ItemId.Wood]: 40,
      [ItemId.Stone]: 8,
      [ItemId.Fiber]: 20,
      [ItemId.FlameOrgan]: 2,
    },
  },
  [ItemId.PoisonBow]: {
    product: ItemId.PoisonBow,
    materials: {
      [ItemId.Wood]: 40,
      [ItemId.Stone]: 8,
      [ItemId.Fiber]: 20,
      [ItemId.VenomGland]: 2,
    },
  },
  [ItemId.ThreeShotBow]: {
    product: ItemId.ThreeShotBow,
    materials: {
      [ItemId.Wood]: 50,
      [ItemId.Stone]: 12,
      [ItemId.Fiber]: 30,
    },
  },
  [ItemId.Crossbow]: {
    product: ItemId.Crossbow,
    materials: {
      [ItemId.Wood]: 50,
      [ItemId.Stone]: 40,
      [ItemId.Ingot]: 10,
      [ItemId.Nail]: 5,
    },
  },
  [ItemId.Crossbow1]: {
    product: ItemId.Crossbow1,
    materials: {
      [ItemId.Wood]: 100,
      [ItemId.Stone]: 80,
      [ItemId.Ingot]: 20,
      [ItemId.Nail]: 10,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.Crossbow2]: {
    product: ItemId.Crossbow2,
    materials: {
      [ItemId.Wood]: 150,
      [ItemId.Stone]: 120,
      [ItemId.Ingot]: 30,
      [ItemId.Nail]: 15,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.Crossbow3]: {
    product: ItemId.Crossbow3,
    materials: {
      [ItemId.Wood]: 225,
      [ItemId.Stone]: 180,
      [ItemId.Ingot]: 45,
      [ItemId.Nail]: 22,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.Crossbow4]: {
    product: ItemId.Crossbow4,
    materials: {
      [ItemId.Wood]: 337,
      [ItemId.Stone]: 270,
      [ItemId.Ingot]: 67,
      [ItemId.Nail]: 33,
      [ItemId.AncientCivilizationParts]: 12,
    },
  },
  [ItemId.FireArrowCrossbow]: {
    product: ItemId.FireArrowCrossbow,
    materials: {
      [ItemId.Wood]: 50,
      [ItemId.Stone]: 50,
      [ItemId.Ingot]: 15,
      [ItemId.Nail]: 5,
      [ItemId.FlameOrgan]: 5,
    },
  },
  [ItemId.FireArrowCrossbow1]: {
    product: ItemId.FireArrowCrossbow1,
    materials: {
      [ItemId.Wood]: 100,
      [ItemId.Stone]: 100,
      [ItemId.Ingot]: 30,
      [ItemId.Nail]: 10,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.FireArrowCrossbow2]: {
    product: ItemId.FireArrowCrossbow2,
    materials: {
      [ItemId.Wood]: 150,
      [ItemId.Stone]: 150,
      [ItemId.Ingot]: 45,
      [ItemId.Nail]: 15,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.FireArrowCrossbow3]: {
    product: ItemId.FireArrowCrossbow3,
    materials: {
      [ItemId.Wood]: 225,
      [ItemId.Stone]: 225,
      [ItemId.Ingot]: 67,
      [ItemId.Nail]: 22,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.FireArrowCrossbow4]: {
    product: ItemId.FireArrowCrossbow4,
    materials: {
      [ItemId.Wood]: 337,
      [ItemId.Stone]: 337,
      [ItemId.Ingot]: 100,
      [ItemId.Nail]: 33,
      [ItemId.AncientCivilizationParts]: 12,
    },
  },
  [ItemId.PoisonArrowCrossbow]: {
    product: ItemId.PoisonArrowCrossbow,
    materials: {
      [ItemId.Wood]: 50,
      [ItemId.Stone]: 50,
      [ItemId.Ingot]: 15,
      [ItemId.Nail]: 5,
      [ItemId.VenomGland]: 5,
    },
  },
  [ItemId.PoisonArrowCrossbow1]: {
    product: ItemId.PoisonArrowCrossbow1,
    materials: {
      [ItemId.Wood]: 100,
      [ItemId.Stone]: 100,
      [ItemId.Ingot]: 30,
      [ItemId.Nail]: 10,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.PoisonArrowCrossbow2]: {
    product: ItemId.PoisonArrowCrossbow2,
    materials: {
      [ItemId.Wood]: 150,
      [ItemId.Stone]: 150,
      [ItemId.Ingot]: 45,
      [ItemId.Nail]: 15,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.PoisonArrowCrossbow3]: {
    product: ItemId.PoisonArrowCrossbow3,
    materials: {
      [ItemId.Wood]: 225,
      [ItemId.Stone]: 225,
      [ItemId.Ingot]: 67,
      [ItemId.Nail]: 22,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.PoisonArrowCrossbow4]: {
    product: ItemId.PoisonArrowCrossbow4,
    materials: {
      [ItemId.Wood]: 337,
      [ItemId.Stone]: 337,
      [ItemId.Ingot]: 100,
      [ItemId.Nail]: 33,
      [ItemId.AncientCivilizationParts]: 12,
    },
  },
  [ItemId.CompoundBow]: {
    product: ItemId.CompoundBow,
    materials: {
      [ItemId.Ingot]: 50,
      [ItemId.Fiber]: 40,
      [ItemId.Nail]: 20,
    },
  },
  [ItemId.CompoundBow1]: {
    product: ItemId.CompoundBow1,
    materials: {
      [ItemId.Ingot]: 100,
      [ItemId.Fiber]: 80,
      [ItemId.Nail]: 40,
    },
  },
  [ItemId.CompoundBow2]: {
    product: ItemId.CompoundBow2,
    materials: {
      [ItemId.Ingot]: 200,
      [ItemId.Fiber]: 160,
      [ItemId.Nail]: 80,
    },
  },
  [ItemId.CompoundBow3]: {
    product: ItemId.CompoundBow3,
    materials: {
      [ItemId.Ingot]: 400,
      [ItemId.Fiber]: 320,
      [ItemId.Nail]: 160,
    },
  },
  [ItemId.CompoundBow4]: {
    product: ItemId.CompoundBow4,
    materials: {
      [ItemId.Ingot]: 800,
      [ItemId.Fiber]: 640,
      [ItemId.Nail]: 320,
    },
  },
  [ItemId.AdvancedBow]: {
    product: ItemId.AdvancedBow,
    materials: {
      [ItemId.Hexolite]: 40,
      [ItemId.CarbonFiber]: 100,
      [ItemId.NightstarSand]: 20,
    },
  },
  [ItemId.AdvancedBow1]: {
    product: ItemId.AdvancedBow1,
    materials: {
      [ItemId.Hexolite]: 80,
      [ItemId.CarbonFiber]: 200,
      [ItemId.NightstarSand]: 40,
    },
  },
  [ItemId.AdvancedBow2]: {
    product: ItemId.AdvancedBow2,
    materials: {
      [ItemId.Hexolite]: 120,
      [ItemId.CarbonFiber]: 300,
      [ItemId.NightstarSand]: 60,
    },
  },
  [ItemId.AdvancedBow3]: {
    product: ItemId.AdvancedBow3,
    materials: {
      [ItemId.Hexolite]: 180,
      [ItemId.CarbonFiber]: 450,
      [ItemId.NightstarSand]: 90,
    },
  },
  [ItemId.AdvancedBow4]: {
    product: ItemId.AdvancedBow4,
    materials: {
      [ItemId.Hexolite]: 270,
      [ItemId.CarbonFiber]: 675,
      [ItemId.NightstarSand]: 135,
    },
  },
  [ItemId.Musket]: {
    product: ItemId.Musket,
    materials: {
      [ItemId.Ingot]: 25,
      [ItemId.HighQualityPalOil]: 5,
      [ItemId.Wood]: 30,
    },
  },
  [ItemId.Musket1]: {
    product: ItemId.Musket1,
    materials: {
      [ItemId.Ingot]: 50,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.Wood]: 60,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.Musket2]: {
    product: ItemId.Musket2,
    materials: {
      [ItemId.Ingot]: 75,
      [ItemId.HighQualityPalOil]: 15,
      [ItemId.Wood]: 90,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.Musket3]: {
    product: ItemId.Musket3,
    materials: {
      [ItemId.Ingot]: 112,
      [ItemId.HighQualityPalOil]: 22,
      [ItemId.Wood]: 135,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.Musket4]: {
    product: ItemId.Musket4,
    materials: {
      [ItemId.Ingot]: 168,
      [ItemId.HighQualityPalOil]: 33,
      [ItemId.Wood]: 202,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.MakeshiftHandgun]: {
    product: ItemId.MakeshiftHandgun,
    materials: {
      [ItemId.Ingot]: 35,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.Fiber]: 30,
    },
  },
  [ItemId.MakeshiftHandgun1]: {
    product: ItemId.MakeshiftHandgun1,
    materials: {
      [ItemId.Ingot]: 70,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.Fiber]: 60,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.MakeshiftHandgun2]: {
    product: ItemId.MakeshiftHandgun2,
    materials: {
      [ItemId.Ingot]: 105,
      [ItemId.HighQualityPalOil]: 30,
      [ItemId.Fiber]: 90,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.MakeshiftHandgun3]: {
    product: ItemId.MakeshiftHandgun3,
    materials: {
      [ItemId.Ingot]: 157,
      [ItemId.HighQualityPalOil]: 45,
      [ItemId.Fiber]: 135,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.MakeshiftHandgun4]: {
    product: ItemId.MakeshiftHandgun4,
    materials: {
      [ItemId.Ingot]: 235,
      [ItemId.HighQualityPalOil]: 67,
      [ItemId.Fiber]: 202,
      [ItemId.AncientCivilizationParts]: 16,
    },
  },
  [ItemId.MakeshiftSMG]: {
    product: ItemId.MakeshiftSMG,
    materials: {
      [ItemId.Ingot]: 40,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.Fiber]: 30,
    },
  },
  [ItemId.MakeshiftSMG1]: {
    product: ItemId.MakeshiftSMG1,
    materials: {
      [ItemId.Ingot]: 80,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.Fiber]: 60,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.MakeshiftSMG2]: {
    product: ItemId.MakeshiftSMG2,
    materials: {
      [ItemId.Ingot]: 120,
      [ItemId.HighQualityPalOil]: 30,
      [ItemId.Fiber]: 90,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.MakeshiftSMG3]: {
    product: ItemId.MakeshiftSMG3,
    materials: {
      [ItemId.Ingot]: 180,
      [ItemId.HighQualityPalOil]: 45,
      [ItemId.Fiber]: 135,
      [ItemId.AncientCivilizationParts]: 12,
    },
  },
  [ItemId.MakeshiftSMG4]: {
    product: ItemId.MakeshiftSMG4,
    materials: {
      [ItemId.Ingot]: 270,
      [ItemId.HighQualityPalOil]: 67,
      [ItemId.Fiber]: 202,
      [ItemId.AncientCivilizationParts]: 24,
    },
  },
  [ItemId.MakeshiftShotgun]: {
    product: ItemId.MakeshiftShotgun,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.HighQualityPalOil]: 15,
      [ItemId.Fiber]: 50,
    },
  },
  [ItemId.MakeshiftShotgun1]: {
    product: ItemId.MakeshiftShotgun1,
    materials: {
      [ItemId.Ingot]: 120,
      [ItemId.HighQualityPalOil]: 30,
      [ItemId.Fiber]: 100,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.MakeshiftShotgun2]: {
    product: ItemId.MakeshiftShotgun2,
    materials: {
      [ItemId.Ingot]: 180,
      [ItemId.HighQualityPalOil]: 45,
      [ItemId.Fiber]: 150,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.MakeshiftShotgun3]: {
    product: ItemId.MakeshiftShotgun3,
    materials: {
      [ItemId.Ingot]: 270,
      [ItemId.HighQualityPalOil]: 67,
      [ItemId.Fiber]: 225,
      [ItemId.AncientCivilizationParts]: 16,
    },
  },
  [ItemId.MakeshiftShotgun4]: {
    product: ItemId.MakeshiftShotgun4,
    materials: {
      [ItemId.Ingot]: 405,
      [ItemId.HighQualityPalOil]: 100,
      [ItemId.Fiber]: 337,
      [ItemId.AncientCivilizationParts]: 32,
    },
  },
  [ItemId.MakeshiftAssaultRifle]: {
    product: ItemId.MakeshiftAssaultRifle,
    materials: {
      [ItemId.Ingot]: 70,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.Fiber]: 60,
    },
  },
  [ItemId.MakeshiftAssaultRifle1]: {
    product: ItemId.MakeshiftAssaultRifle1,
    materials: {
      [ItemId.Ingot]: 140,
      [ItemId.HighQualityPalOil]: 40,
      [ItemId.Fiber]: 120,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.MakeshiftAssaultRifle2]: {
    product: ItemId.MakeshiftAssaultRifle2,
    materials: {
      [ItemId.Ingot]: 210,
      [ItemId.HighQualityPalOil]: 60,
      [ItemId.Fiber]: 180,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.MakeshiftAssaultRifle3]: {
    product: ItemId.MakeshiftAssaultRifle3,
    materials: {
      [ItemId.Ingot]: 315,
      [ItemId.HighQualityPalOil]: 90,
      [ItemId.Fiber]: 270,
      [ItemId.AncientCivilizationParts]: 16,
    },
  },
  [ItemId.MakeshiftAssaultRifle4]: {
    product: ItemId.MakeshiftAssaultRifle4,
    materials: {
      [ItemId.Ingot]: 472,
      [ItemId.HighQualityPalOil]: 135,
      [ItemId.Fiber]: 405,
      [ItemId.AncientCivilizationParts]: 32,
    },
  },
  [ItemId.BoostGun]: {
    product: ItemId.BoostGun,
    materials: {
      [ItemId.Ingot]: 45,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.Fiber]: 30,
    },
  },
  [ItemId.MegaboostGun]: {
    product: ItemId.MegaboostGun,
    materials: {
      [ItemId.CoralumIngot]: 150,
      [ItemId.Hexolite]: 120,
      [ItemId.CarbonFiber]: 200,
      [ItemId.CircuitBoard]: 100,
    },
  },
  [ItemId.Handgun]: {
    product: ItemId.Handgun,
    materials: {
      [ItemId.Ingot]: 50,
      [ItemId.HighQualityPalOil]: 15,
    },
  },
  [ItemId.Handgun1]: {
    product: ItemId.Handgun1,
    materials: {
      [ItemId.Ingot]: 100,
      [ItemId.HighQualityPalOil]: 30,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.Handgun2]: {
    product: ItemId.Handgun2,
    materials: {
      [ItemId.Ingot]: 150,
      [ItemId.HighQualityPalOil]: 45,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.Handgun3]: {
    product: ItemId.Handgun3,
    materials: {
      [ItemId.Ingot]: 225,
      [ItemId.HighQualityPalOil]: 67,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.Handgun4]: {
    product: ItemId.Handgun4,
    materials: {
      [ItemId.Ingot]: 337,
      [ItemId.HighQualityPalOil]: 100,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.OldRevolver]: {
    product: ItemId.OldRevolver,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.HighQualityPalOil]: 20,
    },
  },
  [ItemId.OldRevolver1]: {
    product: ItemId.OldRevolver1,
    materials: {
      [ItemId.Ingot]: 120,
      [ItemId.HighQualityPalOil]: 40,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.OldRevolver2]: {
    product: ItemId.OldRevolver2,
    materials: {
      [ItemId.Ingot]: 240,
      [ItemId.HighQualityPalOil]: 80,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.OldRevolver3]: {
    product: ItemId.OldRevolver3,
    materials: {
      [ItemId.Ingot]: 480,
      [ItemId.HighQualityPalOil]: 160,
      [ItemId.AncientCivilizationParts]: 16,
    },
  },
  [ItemId.OldRevolver4]: {
    product: ItemId.OldRevolver4,
    materials: {
      [ItemId.Ingot]: 960,
      [ItemId.HighQualityPalOil]: 320,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.SingleShotRifle]: {
    product: ItemId.SingleShotRifle,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Polymer]: 5,
    },
  },
  [ItemId.SingleShotRifle1]: {
    product: ItemId.SingleShotRifle1,
    materials: {
      [ItemId.RefinedIngot]: 40,
      [ItemId.Polymer]: 10,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.SingleShotRifle2]: {
    product: ItemId.SingleShotRifle2,
    materials: {
      [ItemId.RefinedIngot]: 60,
      [ItemId.Polymer]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.SingleShotRifle3]: {
    product: ItemId.SingleShotRifle3,
    materials: {
      [ItemId.RefinedIngot]: 90,
      [ItemId.Polymer]: 22,
      [ItemId.AncientCivilizationParts]: 16,
    },
  },
  [ItemId.SingleShotRifle4]: {
    product: ItemId.SingleShotRifle4,
    materials: {
      [ItemId.RefinedIngot]: 135,
      [ItemId.Polymer]: 33,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.SMG]: {
    product: ItemId.SMG,
    materials: {
      [ItemId.RefinedIngot]: 25,
      [ItemId.Polymer]: 6,
    },
  },
  [ItemId.SMG1]: {
    product: ItemId.SMG1,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.Polymer]: 12,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.SMG2]: {
    product: ItemId.SMG2,
    materials: {
      [ItemId.RefinedIngot]: 75,
      [ItemId.Polymer]: 18,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.SMG3]: {
    product: ItemId.SMG3,
    materials: {
      [ItemId.RefinedIngot]: 112,
      [ItemId.Polymer]: 27,
      [ItemId.AncientCivilizationParts]: 16,
    },
  },
  [ItemId.SMG4]: {
    product: ItemId.SMG4,
    materials: {
      [ItemId.RefinedIngot]: 168,
      [ItemId.Polymer]: 40,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.DoubleBarreledShotgun]: {
    product: ItemId.DoubleBarreledShotgun,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.Polymer]: 7,
    },
  },
  [ItemId.DoubleBarreledShotgun1]: {
    product: ItemId.DoubleBarreledShotgun1,
    materials: {
      [ItemId.RefinedIngot]: 60,
      [ItemId.Polymer]: 14,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.DoubleBarreledShotgun2]: {
    product: ItemId.DoubleBarreledShotgun2,
    materials: {
      [ItemId.RefinedIngot]: 90,
      [ItemId.Polymer]: 21,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.DoubleBarreledShotgun3]: {
    product: ItemId.DoubleBarreledShotgun3,
    materials: {
      [ItemId.RefinedIngot]: 135,
      [ItemId.Polymer]: 31,
      [ItemId.AncientCivilizationParts]: 16,
    },
  },
  [ItemId.DoubleBarreledShotgun4]: {
    product: ItemId.DoubleBarreledShotgun4,
    materials: {
      [ItemId.RefinedIngot]: 202,
      [ItemId.Polymer]: 46,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.SemiAutoRifle]: {
    product: ItemId.SemiAutoRifle,
    materials: {
      [ItemId.RefinedIngot]: 35,
      [ItemId.Polymer]: 10,
    },
  },
  [ItemId.SemiAutoRifle1]: {
    product: ItemId.SemiAutoRifle1,
    materials: {
      [ItemId.RefinedIngot]: 70,
      [ItemId.Polymer]: 20,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.SemiAutoRifle2]: {
    product: ItemId.SemiAutoRifle2,
    materials: {
      [ItemId.RefinedIngot]: 105,
      [ItemId.Polymer]: 30,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.SemiAutoRifle3]: {
    product: ItemId.SemiAutoRifle3,
    materials: {
      [ItemId.RefinedIngot]: 157,
      [ItemId.Polymer]: 45,
      [ItemId.AncientCivilizationParts]: 16,
    },
  },
  [ItemId.SemiAutoRifle4]: {
    product: ItemId.SemiAutoRifle4,
    materials: {
      [ItemId.RefinedIngot]: 235,
      [ItemId.Polymer]: 67,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.AssaultRifle]: {
    product: ItemId.AssaultRifle,
    materials: {
      [ItemId.RefinedIngot]: 40,
      [ItemId.Polymer]: 10,
      [ItemId.CarbonFiber]: 30,
    },
  },
  [ItemId.AssaultRifle1]: {
    product: ItemId.AssaultRifle1,
    materials: {
      [ItemId.RefinedIngot]: 80,
      [ItemId.Polymer]: 20,
      [ItemId.CarbonFiber]: 60,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.AssaultRifle2]: {
    product: ItemId.AssaultRifle2,
    materials: {
      [ItemId.RefinedIngot]: 120,
      [ItemId.Polymer]: 30,
      [ItemId.CarbonFiber]: 90,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.AssaultRifle3]: {
    product: ItemId.AssaultRifle3,
    materials: {
      [ItemId.RefinedIngot]: 180,
      [ItemId.Polymer]: 45,
      [ItemId.CarbonFiber]: 135,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.AssaultRifle4]: {
    product: ItemId.AssaultRifle4,
    materials: {
      [ItemId.RefinedIngot]: 270,
      [ItemId.Polymer]: 67,
      [ItemId.CarbonFiber]: 202,
      [ItemId.AncientCivilizationParts]: 30,
    },
  },
  [ItemId.PumpActionShotgun]: {
    product: ItemId.PumpActionShotgun,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.Polymer]: 20,
      [ItemId.CarbonFiber]: 40,
    },
  },
  [ItemId.PumpActionShotgun1]: {
    product: ItemId.PumpActionShotgun1,
    materials: {
      [ItemId.RefinedIngot]: 60,
      [ItemId.Polymer]: 40,
      [ItemId.CarbonFiber]: 80,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.PumpActionShotgun2]: {
    product: ItemId.PumpActionShotgun2,
    materials: {
      [ItemId.RefinedIngot]: 90,
      [ItemId.Polymer]: 60,
      [ItemId.CarbonFiber]: 120,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.PumpActionShotgun3]: {
    product: ItemId.PumpActionShotgun3,
    materials: {
      [ItemId.RefinedIngot]: 135,
      [ItemId.Polymer]: 90,
      [ItemId.CarbonFiber]: 180,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.PumpActionShotgun4]: {
    product: ItemId.PumpActionShotgun4,
    materials: {
      [ItemId.RefinedIngot]: 202,
      [ItemId.Polymer]: 135,
      [ItemId.CarbonFiber]: 270,
      [ItemId.AncientCivilizationParts]: 30,
    },
  },
  [ItemId.SemiAutoShotgun]: {
    product: ItemId.SemiAutoShotgun,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.Polymer]: 20,
      [ItemId.CarbonFiber]: 40,
    },
  },
  [ItemId.SemiAutoShotgun1]: {
    product: ItemId.SemiAutoShotgun1,
    materials: {
      [ItemId.RefinedIngot]: 100,
      [ItemId.Polymer]: 40,
      [ItemId.CarbonFiber]: 80,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.SemiAutoShotgun2]: {
    product: ItemId.SemiAutoShotgun2,
    materials: {
      [ItemId.RefinedIngot]: 150,
      [ItemId.Polymer]: 60,
      [ItemId.CarbonFiber]: 120,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.SemiAutoShotgun3]: {
    product: ItemId.SemiAutoShotgun3,
    materials: {
      [ItemId.RefinedIngot]: 225,
      [ItemId.Polymer]: 90,
      [ItemId.CarbonFiber]: 180,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.SemiAutoShotgun4]: {
    product: ItemId.SemiAutoShotgun4,
    materials: {
      [ItemId.RefinedIngot]: 337,
      [ItemId.Polymer]: 135,
      [ItemId.CarbonFiber]: 270,
      [ItemId.AncientCivilizationParts]: 30,
    },
  },
  [ItemId.RocketLauncher]: {
    product: ItemId.RocketLauncher,
    materials: {
      [ItemId.PalMetalIngot]: 75,
      [ItemId.Polymer]: 30,
      [ItemId.CarbonFiber]: 50,
    },
  },
  [ItemId.RocketLauncher1]: {
    product: ItemId.RocketLauncher1,
    materials: {
      [ItemId.PalMetalIngot]: 150,
      [ItemId.Polymer]: 60,
      [ItemId.CarbonFiber]: 100,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.RocketLauncher2]: {
    product: ItemId.RocketLauncher2,
    materials: {
      [ItemId.PalMetalIngot]: 225,
      [ItemId.Polymer]: 90,
      [ItemId.CarbonFiber]: 150,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.RocketLauncher3]: {
    product: ItemId.RocketLauncher3,
    materials: {
      [ItemId.PalMetalIngot]: 337,
      [ItemId.Polymer]: 135,
      [ItemId.CarbonFiber]: 225,
      [ItemId.AncientCivilizationParts]: 30,
    },
  },
  [ItemId.RocketLauncher4]: {
    product: ItemId.RocketLauncher4,
    materials: {
      [ItemId.PalMetalIngot]: 505,
      [ItemId.Polymer]: 202,
      [ItemId.CarbonFiber]: 337,
      [ItemId.AncientCivilizationParts]: 40,
    },
  },
  [ItemId.LaserRifle]: {
    product: ItemId.LaserRifle,
    materials: {
      [ItemId.PalMetalIngot]: 50,
      [ItemId.Plasteel]: 40,
      [ItemId.CarbonFiber]: 40,
    },
  },
  [ItemId.LaserRifle1]: {
    product: ItemId.LaserRifle1,
    materials: {
      [ItemId.PalMetalIngot]: 100,
      [ItemId.Plasteel]: 80,
      [ItemId.CarbonFiber]: 80,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.LaserRifle2]: {
    product: ItemId.LaserRifle2,
    materials: {
      [ItemId.PalMetalIngot]: 150,
      [ItemId.Plasteel]: 120,
      [ItemId.CarbonFiber]: 120,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.LaserRifle3]: {
    product: ItemId.LaserRifle3,
    materials: {
      [ItemId.PalMetalIngot]: 225,
      [ItemId.Plasteel]: 180,
      [ItemId.CarbonFiber]: 180,
      [ItemId.AncientCivilizationParts]: 30,
    },
  },
  [ItemId.LaserRifle4]: {
    product: ItemId.LaserRifle4,
    materials: {
      [ItemId.PalMetalIngot]: 337,
      [ItemId.Plasteel]: 270,
      [ItemId.CarbonFiber]: 270,
      [ItemId.AncientCivilizationParts]: 40,
    },
  },
  [ItemId.Flamethrower]: {
    product: ItemId.Flamethrower,
    materials: {
      [ItemId.PalMetalIngot]: 40,
      [ItemId.Plasteel]: 30,
      [ItemId.CarbonFiber]: 35,
      [ItemId.FlameOrgan]: 30,
    },
  },
  [ItemId.Flamethrower1]: {
    product: ItemId.Flamethrower1,
    materials: {
      [ItemId.PalMetalIngot]: 80,
      [ItemId.Plasteel]: 60,
      [ItemId.CarbonFiber]: 70,
      [ItemId.FlameOrgan]: 60,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.Flamethrower2]: {
    product: ItemId.Flamethrower2,
    materials: {
      [ItemId.PalMetalIngot]: 120,
      [ItemId.Plasteel]: 90,
      [ItemId.CarbonFiber]: 105,
      [ItemId.FlameOrgan]: 90,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.Flamethrower3]: {
    product: ItemId.Flamethrower3,
    materials: {
      [ItemId.PalMetalIngot]: 180,
      [ItemId.Plasteel]: 135,
      [ItemId.CarbonFiber]: 157,
      [ItemId.FlameOrgan]: 135,
      [ItemId.AncientCivilizationParts]: 30,
    },
  },
  [ItemId.Flamethrower4]: {
    product: ItemId.Flamethrower4,
    materials: {
      [ItemId.PalMetalIngot]: 270,
      [ItemId.Plasteel]: 202,
      [ItemId.CarbonFiber]: 235,
      [ItemId.FlameOrgan]: 202,
      [ItemId.AncientCivilizationParts]: 40,
    },
  },
  [ItemId.GrenadeLauncher]: {
    product: ItemId.GrenadeLauncher,
    materials: {
      [ItemId.PalMetalIngot]: 75,
      [ItemId.Plasteel]: 60,
      [ItemId.CarbonFiber]: 60,
    },
  },
  [ItemId.GrenadeLauncher1]: {
    product: ItemId.GrenadeLauncher1,
    materials: {
      [ItemId.PalMetalIngot]: 150,
      [ItemId.Plasteel]: 120,
      [ItemId.CarbonFiber]: 120,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.GrenadeLauncher2]: {
    product: ItemId.GrenadeLauncher2,
    materials: {
      [ItemId.PalMetalIngot]: 225,
      [ItemId.Plasteel]: 180,
      [ItemId.CarbonFiber]: 180,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.GrenadeLauncher3]: {
    product: ItemId.GrenadeLauncher3,
    materials: {
      [ItemId.PalMetalIngot]: 337,
      [ItemId.Plasteel]: 270,
      [ItemId.CarbonFiber]: 270,
      [ItemId.AncientCivilizationParts]: 30,
    },
  },
  [ItemId.GrenadeLauncher4]: {
    product: ItemId.GrenadeLauncher4,
    materials: {
      [ItemId.PalMetalIngot]: 505,
      [ItemId.Plasteel]: 405,
      [ItemId.CarbonFiber]: 405,
      [ItemId.AncientCivilizationParts]: 40,
    },
  },
  [ItemId.GuidedMissileLauncher]: {
    product: ItemId.GuidedMissileLauncher,
    materials: {
      [ItemId.PalMetalIngot]: 100,
      [ItemId.Plasteel]: 50,
      [ItemId.CarbonFiber]: 100,
      [ItemId.CircuitBoard]: 20,
    },
  },
  [ItemId.GuidedMissileLauncher1]: {
    product: ItemId.GuidedMissileLauncher1,
    materials: {
      [ItemId.PalMetalIngot]: 200,
      [ItemId.Plasteel]: 100,
      [ItemId.CarbonFiber]: 200,
      [ItemId.CircuitBoard]: 40,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.GuidedMissileLauncher2]: {
    product: ItemId.GuidedMissileLauncher2,
    materials: {
      [ItemId.PalMetalIngot]: 300,
      [ItemId.Plasteel]: 150,
      [ItemId.CarbonFiber]: 300,
      [ItemId.CircuitBoard]: 60,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.GuidedMissileLauncher3]: {
    product: ItemId.GuidedMissileLauncher3,
    materials: {
      [ItemId.PalMetalIngot]: 450,
      [ItemId.Plasteel]: 225,
      [ItemId.CarbonFiber]: 450,
      [ItemId.CircuitBoard]: 90,
      [ItemId.AncientCivilizationParts]: 30,
    },
  },
  [ItemId.GuidedMissileLauncher4]: {
    product: ItemId.GuidedMissileLauncher4,
    materials: {
      [ItemId.PalMetalIngot]: 675,
      [ItemId.Plasteel]: 337,
      [ItemId.CarbonFiber]: 675,
      [ItemId.CircuitBoard]: 135,
      [ItemId.AncientCivilizationParts]: 40,
    },
  },
  [ItemId.MultiGuidedMissileLauncher]: {
    product: ItemId.MultiGuidedMissileLauncher,
    materials: {
      [ItemId.PalMetalIngot]: 150,
      [ItemId.Plasteel]: 80,
      [ItemId.CarbonFiber]: 120,
      [ItemId.CircuitBoard]: 30,
    },
  },
  [ItemId.MultiGuidedMissileLauncher1]: {
    product: ItemId.MultiGuidedMissileLauncher1,
    materials: {
      [ItemId.PalMetalIngot]: 300,
      [ItemId.Plasteel]: 160,
      [ItemId.CarbonFiber]: 240,
      [ItemId.CircuitBoard]: 60,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.MultiGuidedMissileLauncher2]: {
    product: ItemId.MultiGuidedMissileLauncher2,
    materials: {
      [ItemId.PalMetalIngot]: 450,
      [ItemId.Plasteel]: 240,
      [ItemId.CarbonFiber]: 360,
      [ItemId.CircuitBoard]: 90,
      [ItemId.AncientCivilizationParts]: 30,
    },
  },
  [ItemId.MultiGuidedMissileLauncher3]: {
    product: ItemId.MultiGuidedMissileLauncher3,
    materials: {
      [ItemId.PalMetalIngot]: 675,
      [ItemId.Plasteel]: 360,
      [ItemId.CarbonFiber]: 540,
      [ItemId.CircuitBoard]: 135,
      [ItemId.AncientCivilizationParts]: 40,
    },
  },
  [ItemId.MultiGuidedMissileLauncher4]: {
    product: ItemId.MultiGuidedMissileLauncher4,
    materials: {
      [ItemId.PalMetalIngot]: 1012,
      [ItemId.Plasteel]: 540,
      [ItemId.CarbonFiber]: 810,
      [ItemId.CircuitBoard]: 202,
      [ItemId.AncientCivilizationParts]: 50,
    },
  },
  [ItemId.GatlingGun]: {
    product: ItemId.GatlingGun,
    materials: {
      [ItemId.PalMetalIngot]: 150,
      [ItemId.Plasteel]: 70,
      [ItemId.CarbonFiber]: 140,
    },
  },
  [ItemId.GatlingGun1]: {
    product: ItemId.GatlingGun1,
    materials: {
      [ItemId.PalMetalIngot]: 300,
      [ItemId.Plasteel]: 140,
      [ItemId.CarbonFiber]: 280,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.GatlingGun2]: {
    product: ItemId.GatlingGun2,
    materials: {
      [ItemId.PalMetalIngot]: 450,
      [ItemId.Plasteel]: 210,
      [ItemId.CarbonFiber]: 420,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.GatlingGun3]: {
    product: ItemId.GatlingGun3,
    materials: {
      [ItemId.PalMetalIngot]: 675,
      [ItemId.Plasteel]: 315,
      [ItemId.CarbonFiber]: 630,
      [ItemId.AncientCivilizationParts]: 35,
    },
  },
  [ItemId.GatlingGun4]: {
    product: ItemId.GatlingGun4,
    materials: {
      [ItemId.PalMetalIngot]: 1012,
      [ItemId.Plasteel]: 472,
      [ItemId.CarbonFiber]: 945,
      [ItemId.AncientCivilizationParts]: 45,
    },
  },
  [ItemId.MeteorLauncher]: {
    product: ItemId.MeteorLauncher,
    materials: {
      [ItemId.MeteoriteFragment]: 100,
      [ItemId.RefinedIngot]: 30,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.MeteorLauncher4]: {
    product: ItemId.MeteorLauncher4,
    materials: {
      [ItemId.MeteoriteFragment]: 675,
      [ItemId.RefinedIngot]: 200,
      [ItemId.PaldiumFragment]: 135,
    },
  },
  [ItemId.LaserGatlingGun]: {
    product: ItemId.LaserGatlingGun,
    materials: {
      [ItemId.Plasteel]: 110,
      [ItemId.Hexolite]: 100,
      [ItemId.CarbonFiber]: 200,
    },
  },
  [ItemId.LaserGatlingGun1]: {
    product: ItemId.LaserGatlingGun1,
    materials: {
      [ItemId.Plasteel]: 220,
      [ItemId.Hexolite]: 200,
      [ItemId.CarbonFiber]: 400,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.LaserGatlingGun2]: {
    product: ItemId.LaserGatlingGun2,
    materials: {
      [ItemId.Plasteel]: 330,
      [ItemId.Hexolite]: 300,
      [ItemId.CarbonFiber]: 600,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.LaserGatlingGun3]: {
    product: ItemId.LaserGatlingGun3,
    materials: {
      [ItemId.Plasteel]: 495,
      [ItemId.Hexolite]: 450,
      [ItemId.CarbonFiber]: 900,
      [ItemId.AncientCivilizationParts]: 35,
    },
  },
  [ItemId.LaserGatlingGun4]: {
    product: ItemId.LaserGatlingGun4,
    materials: {
      [ItemId.Plasteel]: 742,
      [ItemId.Hexolite]: 675,
      [ItemId.CarbonFiber]: 1350,
      [ItemId.AncientCivilizationParts]: 45,
    },
  },
  [ItemId.PlasmaCannon]: {
    product: ItemId.PlasmaCannon,
    materials: {
      [ItemId.Plasteel]: 150,
      [ItemId.Hexolite]: 130,
      [ItemId.CarbonFiber]: 200,
      [ItemId.CircuitBoard]: 100,
    },
  },
  [ItemId.PlasmaCannon1]: {
    product: ItemId.PlasmaCannon1,
    materials: {
      [ItemId.Plasteel]: 300,
      [ItemId.Hexolite]: 260,
      [ItemId.CarbonFiber]: 400,
      [ItemId.CircuitBoard]: 200,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.PlasmaCannon2]: {
    product: ItemId.PlasmaCannon2,
    materials: {
      [ItemId.Plasteel]: 450,
      [ItemId.Hexolite]: 390,
      [ItemId.CarbonFiber]: 600,
      [ItemId.CircuitBoard]: 300,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.PlasmaCannon3]: {
    product: ItemId.PlasmaCannon3,
    materials: {
      [ItemId.Plasteel]: 675,
      [ItemId.Hexolite]: 585,
      [ItemId.CarbonFiber]: 900,
      [ItemId.CircuitBoard]: 450,
      [ItemId.AncientCivilizationParts]: 35,
    },
  },
  [ItemId.PlasmaCannon4]: {
    product: ItemId.PlasmaCannon4,
    materials: {
      [ItemId.Plasteel]: 1012,
      [ItemId.Hexolite]: 877,
      [ItemId.CarbonFiber]: 1350,
      [ItemId.CircuitBoard]: 675,
      [ItemId.AncientCivilizationParts]: 45,
    },
  },
  [ItemId.EnergyShotgun]: {
    product: ItemId.EnergyShotgun,
    materials: {
      [ItemId.CoralumIngot]: 155,
      [ItemId.Hexolite]: 130,
      [ItemId.CarbonFiber]: 220,
      [ItemId.CircuitBoard]: 120,
    },
  },
  [ItemId.EnergyShotgun1]: {
    product: ItemId.EnergyShotgun1,
    materials: {
      [ItemId.CoralumIngot]: 310,
      [ItemId.Hexolite]: 260,
      [ItemId.CarbonFiber]: 440,
      [ItemId.CircuitBoard]: 240,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.EnergyShotgun2]: {
    product: ItemId.EnergyShotgun2,
    materials: {
      [ItemId.CoralumIngot]: 465,
      [ItemId.Hexolite]: 390,
      [ItemId.CarbonFiber]: 660,
      [ItemId.CircuitBoard]: 360,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.EnergyShotgun3]: {
    product: ItemId.EnergyShotgun3,
    materials: {
      [ItemId.CoralumIngot]: 697,
      [ItemId.Hexolite]: 585,
      [ItemId.CarbonFiber]: 990,
      [ItemId.CircuitBoard]: 540,
      [ItemId.AncientCivilizationParts]: 35,
    },
  },
  [ItemId.EnergyShotgun4]: {
    product: ItemId.EnergyShotgun4,
    materials: {
      [ItemId.CoralumIngot]: 1045,
      [ItemId.Hexolite]: 877,
      [ItemId.CarbonFiber]: 1485,
      [ItemId.CircuitBoard]: 810,
      [ItemId.AncientCivilizationParts]: 45,
    },
  },
  [ItemId.OverheatRifle]: {
    product: ItemId.OverheatRifle,
    materials: {
      [ItemId.CoralumIngot]: 160,
      [ItemId.Hexolite]: 135,
      [ItemId.CarbonFiber]: 250,
      [ItemId.CircuitBoard]: 130,
    },
  },
  [ItemId.OverheatRifle1]: {
    product: ItemId.OverheatRifle1,
    materials: {
      [ItemId.CoralumIngot]: 320,
      [ItemId.Hexolite]: 270,
      [ItemId.CarbonFiber]: 500,
      [ItemId.CircuitBoard]: 260,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.OverheatRifle2]: {
    product: ItemId.OverheatRifle2,
    materials: {
      [ItemId.CoralumIngot]: 480,
      [ItemId.Hexolite]: 405,
      [ItemId.CarbonFiber]: 750,
      [ItemId.CircuitBoard]: 390,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.OverheatRifle3]: {
    product: ItemId.OverheatRifle3,
    materials: {
      [ItemId.CoralumIngot]: 720,
      [ItemId.Hexolite]: 607,
      [ItemId.CarbonFiber]: 1125,
      [ItemId.CircuitBoard]: 585,
      [ItemId.AncientCivilizationParts]: 35,
    },
  },
  [ItemId.OverheatRifle4]: {
    product: ItemId.OverheatRifle4,
    materials: {
      [ItemId.CoralumIngot]: 1080,
      [ItemId.Hexolite]: 910,
      [ItemId.CarbonFiber]: 1687,
      [ItemId.CircuitBoard]: 877,
      [ItemId.AncientCivilizationParts]: 45,
    },
  },
  [ItemId.ChargeRifle]: {
    product: ItemId.ChargeRifle,
    materials: {
      [ItemId.CoralumIngot]: 200,
      [ItemId.Hexolite]: 150,
      [ItemId.CarbonFiber]: 300,
      [ItemId.CircuitBoard]: 150,
    },
  },
  [ItemId.ChargeRifle1]: {
    product: ItemId.ChargeRifle1,
    materials: {
      [ItemId.CoralumIngot]: 400,
      [ItemId.Hexolite]: 300,
      [ItemId.CarbonFiber]: 600,
      [ItemId.CircuitBoard]: 300,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.ChargeRifle2]: {
    product: ItemId.ChargeRifle2,
    materials: {
      [ItemId.CoralumIngot]: 600,
      [ItemId.Hexolite]: 450,
      [ItemId.CarbonFiber]: 900,
      [ItemId.CircuitBoard]: 450,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.ChargeRifle3]: {
    product: ItemId.ChargeRifle3,
    materials: {
      [ItemId.CoralumIngot]: 900,
      [ItemId.Hexolite]: 675,
      [ItemId.CarbonFiber]: 1350,
      [ItemId.CircuitBoard]: 675,
      [ItemId.AncientCivilizationParts]: 35,
    },
  },
  [ItemId.ChargeRifle4]: {
    product: ItemId.ChargeRifle4,
    materials: {
      [ItemId.CoralumIngot]: 1350,
      [ItemId.Hexolite]: 1012,
      [ItemId.CarbonFiber]: 2025,
      [ItemId.CircuitBoard]: 1012,
      [ItemId.AncientCivilizationParts]: 45,
    },
  },
  [ItemId.HomingSphereLauncher]: {
    product: ItemId.HomingSphereLauncher,
    materials: {
      [ItemId.PalMetalIngot]: 100,
      [ItemId.Polymer]: 50,
      [ItemId.PaldiumFragment]: 200,
      [ItemId.CarbonFiber]: 50,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.ScatterSphereLauncher]: {
    product: ItemId.ScatterSphereLauncher,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.Polymer]: 15,
      [ItemId.PaldiumFragment]: 50,
      [ItemId.CarbonFiber]: 30,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.SingleShotSphereLauncher]: {
    product: ItemId.SingleShotSphereLauncher,
    materials: {
      [ItemId.Ingot]: 50,
      [ItemId.Stone]: 100,
      [ItemId.PaldiumFragment]: 50,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.DecalGun1]: {
    product: ItemId.DecalGun1,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Polymer]: 10,
      [ItemId.PaldiumFragment]: 15,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.DecalGun2]: {
    product: ItemId.DecalGun2,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Polymer]: 10,
      [ItemId.PaldiumFragment]: 15,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.DecalGun3]: {
    product: ItemId.DecalGun3,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Polymer]: 10,
      [ItemId.PaldiumFragment]: 15,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.DecalGun4]: {
    product: ItemId.DecalGun4,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Polymer]: 10,
      [ItemId.PaldiumFragment]: 15,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.DecalGun5]: {
    product: ItemId.DecalGun5,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Polymer]: 10,
      [ItemId.PaldiumFragment]: 15,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.GrapplingGun]: {
    product: ItemId.GrapplingGun,
    materials: {
      [ItemId.PaldiumFragment]: 10,
      [ItemId.Ingot]: 10,
      [ItemId.Fiber]: 30,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.MegaGrapplingGun]: {
    product: ItemId.MegaGrapplingGun,
    materials: {
      [ItemId.PaldiumFragment]: 20,
      [ItemId.Ingot]: 20,
      [ItemId.Fiber]: 50,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.GigaGrapplingGun]: {
    product: ItemId.GigaGrapplingGun,
    materials: {
      [ItemId.PaldiumFragment]: 30,
      [ItemId.Ingot]: 30,
      [ItemId.Fiber]: 80,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.HyperGrapplingGun]: {
    product: ItemId.HyperGrapplingGun,
    materials: {
      [ItemId.PaldiumFragment]: 40,
      [ItemId.RefinedIngot]: 30,
      [ItemId.CarbonFiber]: 20,
      [ItemId.Polymer]: 20,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.UltraGrapplingGun]: {
    product: ItemId.UltraGrapplingGun,
    materials: {
      [ItemId.PaldiumFragment]: 100,
      [ItemId.CoralumIngot]: 30,
      [ItemId.CarbonFiber]: 50,
      [ItemId.Polymer]: 50,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.MarksmanRevolver]: {
    product: ItemId.MarksmanRevolver,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.HighQualityPalOil]: 15,
      [ItemId.GoldCoin]: 1,
      [ItemId.ElectricOrgan]: 30,
    },
  },
  [ItemId.MarksmanRevolver1]: {
    product: ItemId.MarksmanRevolver1,
    materials: {
      [ItemId.Ingot]: 120,
      [ItemId.HighQualityPalOil]: 30,
      [ItemId.GoldCoin]: 1,
      [ItemId.ElectricOrgan]: 50,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.MarksmanRevolver2]: {
    product: ItemId.MarksmanRevolver2,
    materials: {
      [ItemId.Ingot]: 180,
      [ItemId.HighQualityPalOil]: 45,
      [ItemId.GoldCoin]: 1,
      [ItemId.ElectricOrgan]: 70,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.MarksmanRevolver3]: {
    product: ItemId.MarksmanRevolver3,
    materials: {
      [ItemId.Ingot]: 270,
      [ItemId.HighQualityPalOil]: 67,
      [ItemId.GoldCoin]: 1,
      [ItemId.ElectricOrgan]: 90,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.MarksmanRevolver4]: {
    product: ItemId.MarksmanRevolver4,
    materials: {
      [ItemId.Ingot]: 405,
      [ItemId.HighQualityPalOil]: 100,
      [ItemId.GoldCoin]: 1,
      [ItemId.ElectricOrgan]: 110,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.CoreEjectShotgun]: {
    product: ItemId.CoreEjectShotgun,
    materials: {
      [ItemId.PalMetalIngot]: 80,
      [ItemId.Plasteel]: 65,
      [ItemId.CarbonFiber]: 65,
      [ItemId.FlameOrgan]: 40,
    },
  },
  [ItemId.CoreEjectShotgun1]: {
    product: ItemId.CoreEjectShotgun1,
    materials: {
      [ItemId.PalMetalIngot]: 160,
      [ItemId.Plasteel]: 130,
      [ItemId.CarbonFiber]: 130,
      [ItemId.FlameOrgan]: 60,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.CoreEjectShotgun2]: {
    product: ItemId.CoreEjectShotgun2,
    materials: {
      [ItemId.PalMetalIngot]: 240,
      [ItemId.Plasteel]: 195,
      [ItemId.CarbonFiber]: 195,
      [ItemId.FlameOrgan]: 80,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.CoreEjectShotgun3]: {
    product: ItemId.CoreEjectShotgun3,
    materials: {
      [ItemId.PalMetalIngot]: 360,
      [ItemId.Plasteel]: 292,
      [ItemId.CarbonFiber]: 292,
      [ItemId.FlameOrgan]: 100,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.CoreEjectShotgun4]: {
    product: ItemId.CoreEjectShotgun4,
    materials: {
      [ItemId.PalMetalIngot]: 540,
      [ItemId.Plasteel]: 438,
      [ItemId.CarbonFiber]: 438,
      [ItemId.FlameOrgan]: 130,
      [ItemId.AncientCivilizationParts]: 30,
    },
  },
  [ItemId.FragGrenade]: {
    product: ItemId.FragGrenade,
    materials: {
      [ItemId.Fiber]: 10,
      [ItemId.Stone]: 10,
      [ItemId.Gunpowder1]: 1,
    },
  },
  [ItemId.IncendiaryGrenade]: {
    product: ItemId.IncendiaryGrenade,
    materials: {
      [ItemId.Fiber]: 10,
      [ItemId.Stone]: 10,
      [ItemId.FlameOrgan]: 1,
    },
  },
  [ItemId.ShockGrenade]: {
    product: ItemId.ShockGrenade,
    materials: {
      [ItemId.Fiber]: 10,
      [ItemId.Stone]: 10,
      [ItemId.ElectricOrgan]: 1,
    },
  },
  [ItemId.IceGrenade]: {
    product: ItemId.IceGrenade,
    materials: {
      [ItemId.Fiber]: 10,
      [ItemId.Stone]: 10,
      [ItemId.IceOrgan]: 1,
    },
  },
  [ItemId.WaterGrenade]: {
    product: ItemId.WaterGrenade,
    materials: {
      [ItemId.Fiber]: 10,
      [ItemId.Stone]: 10,
      [ItemId.PalFluids]: 1,
    },
  },
  [ItemId.GrassGrenade]: {
    product: ItemId.GrassGrenade,
    materials: {
      [ItemId.Fiber]: 10,
      [ItemId.Stone]: 10,
      [ItemId.Wood]: 10,
    },
  },
  [ItemId.GroundGrenade]: {
    product: ItemId.GroundGrenade,
    materials: {
      [ItemId.Fiber]: 10,
      [ItemId.Stone]: 10,
      [ItemId.Ore]: 1,
    },
  },
  [ItemId.DarkGrenade]: {
    product: ItemId.DarkGrenade,
    materials: {
      [ItemId.Fiber]: 10,
      [ItemId.Stone]: 10,
      [ItemId.VenomGland]: 1,
    },
  },
  [ItemId.DragonGrenade]: {
    product: ItemId.DragonGrenade,
    materials: {
      [ItemId.Fiber]: 10,
      [ItemId.Stone]: 10,
      [ItemId.Horn]: 1,
    },
  },
  [ItemId.FragGrenadeMk2]: {
    product: ItemId.FragGrenadeMk2,
    materials: {
      [ItemId.Fiber]: 20,
      [ItemId.PalMetalIngot]: 3,
      [ItemId.Gunpowder1]: 3,
      [ItemId.CrudeOil]: 3,
    },
  },
  [ItemId.PalRecoveryGrenade]: {
    product: ItemId.PalRecoveryGrenade,
    materials: {
      [ItemId.Fiber]: 10,
      [ItemId.Stone]: 10,
      [ItemId.CavernMushroom]: 5,
    },
  },
  [ItemId.ClothOutfit]: {
    product: ItemId.ClothOutfit,
    materials: {
      [ItemId.Cloth]: 2,
    },
  },
  [ItemId.ClothOutfit1]: {
    product: ItemId.ClothOutfit1,
    materials: {
      [ItemId.Cloth]: 4,
      [ItemId.AncientCivilizationParts]: 1,
    },
  },
  [ItemId.ClothOutfit2]: {
    product: ItemId.ClothOutfit2,
    materials: {
      [ItemId.Cloth]: 6,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.ClothOutfit3]: {
    product: ItemId.ClothOutfit3,
    materials: {
      [ItemId.Cloth]: 9,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.ClothOutfit4]: {
    product: ItemId.ClothOutfit4,
    materials: {
      [ItemId.Cloth]: 13,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.TropicalOutfit]: {
    product: ItemId.TropicalOutfit,
    materials: {
      [ItemId.Cloth]: 3,
      [ItemId.FlameOrgan]: 2,
    },
  },
  [ItemId.TropicalOutfit1]: {
    product: ItemId.TropicalOutfit1,
    materials: {
      [ItemId.Cloth]: 6,
      [ItemId.FlameOrgan]: 4,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.TropicalOutfit2]: {
    product: ItemId.TropicalOutfit2,
    materials: {
      [ItemId.Cloth]: 9,
      [ItemId.FlameOrgan]: 6,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.TropicalOutfit3]: {
    product: ItemId.TropicalOutfit3,
    materials: {
      [ItemId.Cloth]: 13,
      [ItemId.FlameOrgan]: 9,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.TropicalOutfit4]: {
    product: ItemId.TropicalOutfit4,
    materials: {
      [ItemId.Cloth]: 19,
      [ItemId.FlameOrgan]: 13,
      [ItemId.AncientCivilizationParts]: 12,
    },
  },
  [ItemId.TundraOutfit]: {
    product: ItemId.TundraOutfit,
    materials: {
      [ItemId.Cloth]: 3,
      [ItemId.IceOrgan]: 2,
    },
  },
  [ItemId.TundraOutfit1]: {
    product: ItemId.TundraOutfit1,
    materials: {
      [ItemId.Cloth]: 6,
      [ItemId.IceOrgan]: 4,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.TundraOutfit2]: {
    product: ItemId.TundraOutfit2,
    materials: {
      [ItemId.Cloth]: 9,
      [ItemId.IceOrgan]: 6,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.TundraOutfit3]: {
    product: ItemId.TundraOutfit3,
    materials: {
      [ItemId.Cloth]: 13,
      [ItemId.IceOrgan]: 9,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.TundraOutfit4]: {
    product: ItemId.TundraOutfit4,
    materials: {
      [ItemId.Cloth]: 19,
      [ItemId.IceOrgan]: 13,
      [ItemId.AncientCivilizationParts]: 12,
    },
  },
  [ItemId.PeltArmor]: {
    product: ItemId.PeltArmor,
    materials: {
      [ItemId.Leather]: 10,
    },
  },
  [ItemId.PeltArmor1]: {
    product: ItemId.PeltArmor1,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.PeltArmor2]: {
    product: ItemId.PeltArmor2,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.PeltArmor3]: {
    product: ItemId.PeltArmor3,
    materials: {
      [ItemId.Leather]: 45,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.PeltArmor4]: {
    product: ItemId.PeltArmor4,
    materials: {
      [ItemId.Leather]: 67,
      [ItemId.AncientCivilizationParts]: 13,
    },
  },
  [ItemId.HeatResistantPeltArmor]: {
    product: ItemId.HeatResistantPeltArmor,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.FlameOrgan]: 4,
    },
  },
  [ItemId.HeatResistantPeltArmor1]: {
    product: ItemId.HeatResistantPeltArmor1,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.FlameOrgan]: 8,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.HeatResistantPeltArmor2]: {
    product: ItemId.HeatResistantPeltArmor2,
    materials: {
      [ItemId.Leather]: 45,
      [ItemId.FlameOrgan]: 12,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.HeatResistantPeltArmor3]: {
    product: ItemId.HeatResistantPeltArmor3,
    materials: {
      [ItemId.Leather]: 67,
      [ItemId.FlameOrgan]: 18,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.HeatResistantPeltArmor4]: {
    product: ItemId.HeatResistantPeltArmor4,
    materials: {
      [ItemId.Leather]: 100,
      [ItemId.FlameOrgan]: 27,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.ColdResistantPeltArmor]: {
    product: ItemId.ColdResistantPeltArmor,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.IceOrgan]: 4,
    },
  },
  [ItemId.ColdResistantPeltArmor1]: {
    product: ItemId.ColdResistantPeltArmor1,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.IceOrgan]: 8,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.ColdResistantPeltArmor2]: {
    product: ItemId.ColdResistantPeltArmor2,
    materials: {
      [ItemId.Leather]: 45,
      [ItemId.IceOrgan]: 12,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.ColdResistantPeltArmor3]: {
    product: ItemId.ColdResistantPeltArmor3,
    materials: {
      [ItemId.Leather]: 67,
      [ItemId.IceOrgan]: 18,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.ColdResistantPeltArmor4]: {
    product: ItemId.ColdResistantPeltArmor4,
    materials: {
      [ItemId.Leather]: 100,
      [ItemId.IceOrgan]: 27,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.MetalArmor]: {
    product: ItemId.MetalArmor,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Leather]: 10,
      [ItemId.Cloth]: 5,
    },
  },
  [ItemId.MetalArmor1]: {
    product: ItemId.MetalArmor1,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.MetalArmor2]: {
    product: ItemId.MetalArmor2,
    materials: {
      [ItemId.Ingot]: 90,
      [ItemId.Leather]: 30,
      [ItemId.Cloth]: 15,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.MetalArmor3]: {
    product: ItemId.MetalArmor3,
    materials: {
      [ItemId.Ingot]: 135,
      [ItemId.Leather]: 45,
      [ItemId.Cloth]: 22,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.MetalArmor4]: {
    product: ItemId.MetalArmor4,
    materials: {
      [ItemId.Ingot]: 202,
      [ItemId.Leather]: 67,
      [ItemId.Cloth]: 33,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.HeatResistantMetalArmor]: {
    product: ItemId.HeatResistantMetalArmor,
    materials: {
      [ItemId.Ingot]: 40,
      [ItemId.Leather]: 13,
      [ItemId.Cloth]: 8,
      [ItemId.FlameOrgan]: 8,
    },
  },
  [ItemId.HeatResistantMetalArmor1]: {
    product: ItemId.HeatResistantMetalArmor1,
    materials: {
      [ItemId.Ingot]: 80,
      [ItemId.Leather]: 26,
      [ItemId.Cloth]: 16,
      [ItemId.FlameOrgan]: 16,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.HeatResistantMetalArmor2]: {
    product: ItemId.HeatResistantMetalArmor2,
    materials: {
      [ItemId.Ingot]: 120,
      [ItemId.Leather]: 39,
      [ItemId.Cloth]: 24,
      [ItemId.FlameOrgan]: 24,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.HeatResistantMetalArmor3]: {
    product: ItemId.HeatResistantMetalArmor3,
    materials: {
      [ItemId.Ingot]: 180,
      [ItemId.Leather]: 58,
      [ItemId.Cloth]: 36,
      [ItemId.FlameOrgan]: 36,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.HeatResistantMetalArmor4]: {
    product: ItemId.HeatResistantMetalArmor4,
    materials: {
      [ItemId.Ingot]: 270,
      [ItemId.Leather]: 87,
      [ItemId.Cloth]: 54,
      [ItemId.FlameOrgan]: 54,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.ColdResistantMetalArmor]: {
    product: ItemId.ColdResistantMetalArmor,
    materials: {
      [ItemId.Ingot]: 40,
      [ItemId.Leather]: 13,
      [ItemId.Cloth]: 8,
      [ItemId.IceOrgan]: 8,
    },
  },
  [ItemId.ColdResistantMetalArmor1]: {
    product: ItemId.ColdResistantMetalArmor1,
    materials: {
      [ItemId.Ingot]: 80,
      [ItemId.Leather]: 26,
      [ItemId.Cloth]: 16,
      [ItemId.IceOrgan]: 16,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.ColdResistantMetalArmor2]: {
    product: ItemId.ColdResistantMetalArmor2,
    materials: {
      [ItemId.Ingot]: 120,
      [ItemId.Leather]: 39,
      [ItemId.Cloth]: 24,
      [ItemId.IceOrgan]: 24,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.ColdResistantMetalArmor3]: {
    product: ItemId.ColdResistantMetalArmor3,
    materials: {
      [ItemId.Ingot]: 180,
      [ItemId.Leather]: 58,
      [ItemId.Cloth]: 36,
      [ItemId.IceOrgan]: 36,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.ColdResistantMetalArmor4]: {
    product: ItemId.ColdResistantMetalArmor4,
    materials: {
      [ItemId.Ingot]: 270,
      [ItemId.Leather]: 87,
      [ItemId.Cloth]: 54,
      [ItemId.IceOrgan]: 54,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.RefinedMetalArmor]: {
    product: ItemId.RefinedMetalArmor,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.Leather]: 15,
      [ItemId.HighQualityCloth]: 2,
    },
  },
  [ItemId.RefinedMetalArmor1]: {
    product: ItemId.RefinedMetalArmor1,
    materials: {
      [ItemId.RefinedIngot]: 60,
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 4,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.RefinedMetalArmor2]: {
    product: ItemId.RefinedMetalArmor2,
    materials: {
      [ItemId.RefinedIngot]: 90,
      [ItemId.Leather]: 45,
      [ItemId.HighQualityCloth]: 6,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.RefinedMetalArmor3]: {
    product: ItemId.RefinedMetalArmor3,
    materials: {
      [ItemId.RefinedIngot]: 135,
      [ItemId.Leather]: 67,
      [ItemId.HighQualityCloth]: 9,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.RefinedMetalArmor4]: {
    product: ItemId.RefinedMetalArmor4,
    materials: {
      [ItemId.RefinedIngot]: 202,
      [ItemId.Leather]: 100,
      [ItemId.HighQualityCloth]: 13,
      [ItemId.AncientCivilizationParts]: 16,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmor]: {
    product: ItemId.HeatResistantRefinedMetalArmor,
    materials: {
      [ItemId.RefinedIngot]: 40,
      [ItemId.Leather]: 20,
      [ItemId.HighQualityCloth]: 3,
      [ItemId.FlameOrgan]: 12,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmor1]: {
    product: ItemId.HeatResistantRefinedMetalArmor1,
    materials: {
      [ItemId.RefinedIngot]: 80,
      [ItemId.Leather]: 40,
      [ItemId.HighQualityCloth]: 6,
      [ItemId.FlameOrgan]: 24,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmor2]: {
    product: ItemId.HeatResistantRefinedMetalArmor2,
    materials: {
      [ItemId.RefinedIngot]: 120,
      [ItemId.Leather]: 60,
      [ItemId.HighQualityCloth]: 9,
      [ItemId.FlameOrgan]: 36,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmor3]: {
    product: ItemId.HeatResistantRefinedMetalArmor3,
    materials: {
      [ItemId.RefinedIngot]: 180,
      [ItemId.Leather]: 90,
      [ItemId.HighQualityCloth]: 13,
      [ItemId.FlameOrgan]: 54,
      [ItemId.AncientCivilizationParts]: 11,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmor4]: {
    product: ItemId.HeatResistantRefinedMetalArmor4,
    materials: {
      [ItemId.RefinedIngot]: 270,
      [ItemId.Leather]: 135,
      [ItemId.HighQualityCloth]: 19,
      [ItemId.FlameOrgan]: 81,
      [ItemId.AncientCivilizationParts]: 17,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmor]: {
    product: ItemId.ColdResistantRefinedMetalArmor,
    materials: {
      [ItemId.RefinedIngot]: 40,
      [ItemId.Leather]: 20,
      [ItemId.HighQualityCloth]: 3,
      [ItemId.IceOrgan]: 12,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmor1]: {
    product: ItemId.ColdResistantRefinedMetalArmor1,
    materials: {
      [ItemId.RefinedIngot]: 80,
      [ItemId.Leather]: 40,
      [ItemId.HighQualityCloth]: 6,
      [ItemId.IceOrgan]: 24,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmor2]: {
    product: ItemId.ColdResistantRefinedMetalArmor2,
    materials: {
      [ItemId.RefinedIngot]: 120,
      [ItemId.Leather]: 60,
      [ItemId.HighQualityCloth]: 9,
      [ItemId.IceOrgan]: 36,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmor3]: {
    product: ItemId.ColdResistantRefinedMetalArmor3,
    materials: {
      [ItemId.RefinedIngot]: 180,
      [ItemId.Leather]: 90,
      [ItemId.HighQualityCloth]: 13,
      [ItemId.IceOrgan]: 54,
      [ItemId.AncientCivilizationParts]: 11,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmor4]: {
    product: ItemId.ColdResistantRefinedMetalArmor4,
    materials: {
      [ItemId.RefinedIngot]: 270,
      [ItemId.Leather]: 135,
      [ItemId.HighQualityCloth]: 19,
      [ItemId.IceOrgan]: 81,
      [ItemId.AncientCivilizationParts]: 17,
    },
  },
  [ItemId.PalMetalArmor]: {
    product: ItemId.PalMetalArmor,
    materials: {
      [ItemId.PalMetalIngot]: 20,
      [ItemId.Leather]: 20,
      [ItemId.HighQualityCloth]: 4,
    },
  },
  [ItemId.PalMetalArmor1]: {
    product: ItemId.PalMetalArmor1,
    materials: {
      [ItemId.PalMetalIngot]: 40,
      [ItemId.Leather]: 40,
      [ItemId.HighQualityCloth]: 8,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.PalMetalArmor2]: {
    product: ItemId.PalMetalArmor2,
    materials: {
      [ItemId.PalMetalIngot]: 60,
      [ItemId.Leather]: 60,
      [ItemId.HighQualityCloth]: 12,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.PalMetalArmor3]: {
    product: ItemId.PalMetalArmor3,
    materials: {
      [ItemId.PalMetalIngot]: 90,
      [ItemId.Leather]: 90,
      [ItemId.HighQualityCloth]: 18,
      [ItemId.AncientCivilizationParts]: 12,
    },
  },
  [ItemId.PalMetalArmor4]: {
    product: ItemId.PalMetalArmor4,
    materials: {
      [ItemId.PalMetalIngot]: 135,
      [ItemId.Leather]: 135,
      [ItemId.HighQualityCloth]: 27,
      [ItemId.AncientCivilizationParts]: 18,
    },
  },
  [ItemId.HeatResistantPalMetalArmor]: {
    product: ItemId.HeatResistantPalMetalArmor,
    materials: {
      [ItemId.PalMetalIngot]: 30,
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 6,
      [ItemId.FlameOrgan]: 16,
    },
  },
  [ItemId.HeatResistantPalMetalArmor1]: {
    product: ItemId.HeatResistantPalMetalArmor1,
    materials: {
      [ItemId.PalMetalIngot]: 60,
      [ItemId.Leather]: 60,
      [ItemId.HighQualityCloth]: 12,
      [ItemId.FlameOrgan]: 32,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.HeatResistantPalMetalArmor2]: {
    product: ItemId.HeatResistantPalMetalArmor2,
    materials: {
      [ItemId.PalMetalIngot]: 90,
      [ItemId.Leather]: 90,
      [ItemId.HighQualityCloth]: 18,
      [ItemId.FlameOrgan]: 48,
      [ItemId.AncientCivilizationParts]: 11,
    },
  },
  [ItemId.HeatResistantPalMetalArmor3]: {
    product: ItemId.HeatResistantPalMetalArmor3,
    materials: {
      [ItemId.PalMetalIngot]: 135,
      [ItemId.Leather]: 135,
      [ItemId.HighQualityCloth]: 27,
      [ItemId.FlameOrgan]: 72,
      [ItemId.AncientCivilizationParts]: 13,
    },
  },
  [ItemId.HeatResistantPalMetalArmor4]: {
    product: ItemId.HeatResistantPalMetalArmor4,
    materials: {
      [ItemId.PalMetalIngot]: 202,
      [ItemId.Leather]: 202,
      [ItemId.HighQualityCloth]: 40,
      [ItemId.FlameOrgan]: 108,
      [ItemId.AncientCivilizationParts]: 19,
    },
  },
  [ItemId.ColdResistantPalMetalArmor]: {
    product: ItemId.ColdResistantPalMetalArmor,
    materials: {
      [ItemId.PalMetalIngot]: 30,
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 6,
      [ItemId.IceOrgan]: 16,
    },
  },
  [ItemId.ColdResistantPalMetalArmor1]: {
    product: ItemId.ColdResistantPalMetalArmor1,
    materials: {
      [ItemId.PalMetalIngot]: 60,
      [ItemId.Leather]: 60,
      [ItemId.HighQualityCloth]: 12,
      [ItemId.IceOrgan]: 32,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.ColdResistantPalMetalArmor2]: {
    product: ItemId.ColdResistantPalMetalArmor2,
    materials: {
      [ItemId.PalMetalIngot]: 90,
      [ItemId.Leather]: 90,
      [ItemId.HighQualityCloth]: 18,
      [ItemId.IceOrgan]: 48,
      [ItemId.AncientCivilizationParts]: 11,
    },
  },
  [ItemId.ColdResistantPalMetalArmor3]: {
    product: ItemId.ColdResistantPalMetalArmor3,
    materials: {
      [ItemId.PalMetalIngot]: 135,
      [ItemId.Leather]: 135,
      [ItemId.HighQualityCloth]: 27,
      [ItemId.IceOrgan]: 72,
      [ItemId.AncientCivilizationParts]: 13,
    },
  },
  [ItemId.ColdResistantPalMetalArmor4]: {
    product: ItemId.ColdResistantPalMetalArmor4,
    materials: {
      [ItemId.PalMetalIngot]: 202,
      [ItemId.Leather]: 202,
      [ItemId.HighQualityCloth]: 40,
      [ItemId.IceOrgan]: 108,
      [ItemId.AncientCivilizationParts]: 19,
    },
  },
  [ItemId.PlasteelArmor]: {
    product: ItemId.PlasteelArmor,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.HighQualityCloth]: 10,
    },
  },
  [ItemId.PlasteelArmor1]: {
    product: ItemId.PlasteelArmor1,
    materials: {
      [ItemId.Plasteel]: 60,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.PlasteelArmor2]: {
    product: ItemId.PlasteelArmor2,
    materials: {
      [ItemId.Plasteel]: 90,
      [ItemId.PalMetalIngot]: 90,
      [ItemId.HighQualityCloth]: 30,
      [ItemId.AncientCivilizationParts]: 17,
    },
  },
  [ItemId.PlasteelArmor3]: {
    product: ItemId.PlasteelArmor3,
    materials: {
      [ItemId.Plasteel]: 135,
      [ItemId.PalMetalIngot]: 135,
      [ItemId.HighQualityCloth]: 45,
      [ItemId.AncientCivilizationParts]: 19,
    },
  },
  [ItemId.PlasteelArmor4]: {
    product: ItemId.PlasteelArmor4,
    materials: {
      [ItemId.Plasteel]: 202,
      [ItemId.PalMetalIngot]: 202,
      [ItemId.HighQualityCloth]: 67,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.HeatResistantPlasteelArmor]: {
    product: ItemId.HeatResistantPlasteelArmor,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.FlameOrgan]: 20,
    },
  },
  [ItemId.HeatResistantPlasteelArmor1]: {
    product: ItemId.HeatResistantPlasteelArmor1,
    materials: {
      [ItemId.Plasteel]: 60,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.FlameOrgan]: 40,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.HeatResistantPlasteelArmor2]: {
    product: ItemId.HeatResistantPlasteelArmor2,
    materials: {
      [ItemId.Plasteel]: 90,
      [ItemId.PalMetalIngot]: 90,
      [ItemId.HighQualityCloth]: 30,
      [ItemId.FlameOrgan]: 60,
      [ItemId.AncientCivilizationParts]: 17,
    },
  },
  [ItemId.HeatResistantPlasteelArmor3]: {
    product: ItemId.HeatResistantPlasteelArmor3,
    materials: {
      [ItemId.Plasteel]: 135,
      [ItemId.PalMetalIngot]: 135,
      [ItemId.HighQualityCloth]: 45,
      [ItemId.FlameOrgan]: 90,
      [ItemId.AncientCivilizationParts]: 19,
    },
  },
  [ItemId.HeatResistantPlasteelArmor4]: {
    product: ItemId.HeatResistantPlasteelArmor4,
    materials: {
      [ItemId.Plasteel]: 202,
      [ItemId.PalMetalIngot]: 202,
      [ItemId.HighQualityCloth]: 67,
      [ItemId.FlameOrgan]: 135,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.ColdResistantPlasteelArmor]: {
    product: ItemId.ColdResistantPlasteelArmor,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.IceOrgan]: 20,
    },
  },
  [ItemId.ColdResistantPlasteelArmor1]: {
    product: ItemId.ColdResistantPlasteelArmor1,
    materials: {
      [ItemId.Plasteel]: 60,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.IceOrgan]: 40,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.ColdResistantPlasteelArmor2]: {
    product: ItemId.ColdResistantPlasteelArmor2,
    materials: {
      [ItemId.Plasteel]: 90,
      [ItemId.PalMetalIngot]: 90,
      [ItemId.HighQualityCloth]: 30,
      [ItemId.IceOrgan]: 60,
      [ItemId.AncientCivilizationParts]: 17,
    },
  },
  [ItemId.ColdResistantPlasteelArmor3]: {
    product: ItemId.ColdResistantPlasteelArmor3,
    materials: {
      [ItemId.Plasteel]: 135,
      [ItemId.PalMetalIngot]: 135,
      [ItemId.HighQualityCloth]: 45,
      [ItemId.IceOrgan]: 90,
      [ItemId.AncientCivilizationParts]: 19,
    },
  },
  [ItemId.ColdResistantPlasteelArmor4]: {
    product: ItemId.ColdResistantPlasteelArmor4,
    materials: {
      [ItemId.Plasteel]: 202,
      [ItemId.PalMetalIngot]: 202,
      [ItemId.HighQualityCloth]: 67,
      [ItemId.IceOrgan]: 135,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.LightweightPlasteelArmor]: {
    product: ItemId.LightweightPlasteelArmor,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.HighQualityCloth]: 10,
    },
  },
  [ItemId.LightweightPlasteelArmor1]: {
    product: ItemId.LightweightPlasteelArmor1,
    materials: {
      [ItemId.Plasteel]: 60,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.LightweightPlasteelArmor2]: {
    product: ItemId.LightweightPlasteelArmor2,
    materials: {
      [ItemId.Plasteel]: 90,
      [ItemId.PalMetalIngot]: 90,
      [ItemId.HighQualityCloth]: 30,
      [ItemId.AncientCivilizationParts]: 17,
    },
  },
  [ItemId.LightweightPlasteelArmor3]: {
    product: ItemId.LightweightPlasteelArmor3,
    materials: {
      [ItemId.Plasteel]: 135,
      [ItemId.PalMetalIngot]: 135,
      [ItemId.HighQualityCloth]: 45,
      [ItemId.AncientCivilizationParts]: 19,
    },
  },
  [ItemId.LightweightPlasteelArmor4]: {
    product: ItemId.LightweightPlasteelArmor4,
    materials: {
      [ItemId.Plasteel]: 202,
      [ItemId.PalMetalIngot]: 202,
      [ItemId.HighQualityCloth]: 67,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.HexoliteArmor]: {
    product: ItemId.HexoliteArmor,
    materials: {
      [ItemId.Hexolite]: 50,
      [ItemId.Plasteel]: 20,
      [ItemId.HighQualityCloth]: 20,
    },
  },
  [ItemId.HexoliteArmor1]: {
    product: ItemId.HexoliteArmor1,
    materials: {
      [ItemId.Hexolite]: 100,
      [ItemId.Plasteel]: 40,
      [ItemId.HighQualityCloth]: 40,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.HexoliteArmor2]: {
    product: ItemId.HexoliteArmor2,
    materials: {
      [ItemId.Hexolite]: 150,
      [ItemId.Plasteel]: 60,
      [ItemId.HighQualityCloth]: 60,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.HexoliteArmor3]: {
    product: ItemId.HexoliteArmor3,
    materials: {
      [ItemId.Hexolite]: 225,
      [ItemId.Plasteel]: 90,
      [ItemId.HighQualityCloth]: 90,
      [ItemId.AncientCivilizationParts]: 35,
    },
  },
  [ItemId.HexoliteArmor4]: {
    product: ItemId.HexoliteArmor4,
    materials: {
      [ItemId.Hexolite]: 337,
      [ItemId.Plasteel]: 135,
      [ItemId.HighQualityCloth]: 135,
      [ItemId.AncientCivilizationParts]: 45,
    },
  },
  [ItemId.HeatResistantHexoliteArmor]: {
    product: ItemId.HeatResistantHexoliteArmor,
    materials: {
      [ItemId.Hexolite]: 50,
      [ItemId.Plasteel]: 20,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.FlameOrgan]: 30,
    },
  },
  [ItemId.HeatResistantHexoliteArmor1]: {
    product: ItemId.HeatResistantHexoliteArmor1,
    materials: {
      [ItemId.Hexolite]: 100,
      [ItemId.Plasteel]: 40,
      [ItemId.HighQualityCloth]: 40,
      [ItemId.FlameOrgan]: 60,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.HeatResistantHexoliteArmor2]: {
    product: ItemId.HeatResistantHexoliteArmor2,
    materials: {
      [ItemId.Hexolite]: 150,
      [ItemId.Plasteel]: 60,
      [ItemId.HighQualityCloth]: 60,
      [ItemId.FlameOrgan]: 90,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.HeatResistantHexoliteArmor3]: {
    product: ItemId.HeatResistantHexoliteArmor3,
    materials: {
      [ItemId.Hexolite]: 225,
      [ItemId.Plasteel]: 90,
      [ItemId.HighQualityCloth]: 90,
      [ItemId.FlameOrgan]: 135,
      [ItemId.AncientCivilizationParts]: 35,
    },
  },
  [ItemId.HeatResistantHexoliteArmor4]: {
    product: ItemId.HeatResistantHexoliteArmor4,
    materials: {
      [ItemId.Hexolite]: 337,
      [ItemId.Plasteel]: 135,
      [ItemId.HighQualityCloth]: 135,
      [ItemId.FlameOrgan]: 202,
      [ItemId.AncientCivilizationParts]: 45,
    },
  },
  [ItemId.ColdResistantHexoliteArmor]: {
    product: ItemId.ColdResistantHexoliteArmor,
    materials: {
      [ItemId.Hexolite]: 50,
      [ItemId.Plasteel]: 20,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.IceOrgan]: 30,
    },
  },
  [ItemId.ColdResistantHexoliteArmor1]: {
    product: ItemId.ColdResistantHexoliteArmor1,
    materials: {
      [ItemId.Hexolite]: 100,
      [ItemId.Plasteel]: 40,
      [ItemId.HighQualityCloth]: 40,
      [ItemId.IceOrgan]: 60,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.ColdResistantHexoliteArmor2]: {
    product: ItemId.ColdResistantHexoliteArmor2,
    materials: {
      [ItemId.Hexolite]: 150,
      [ItemId.Plasteel]: 60,
      [ItemId.HighQualityCloth]: 60,
      [ItemId.IceOrgan]: 90,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.ColdResistantHexoliteArmor3]: {
    product: ItemId.ColdResistantHexoliteArmor3,
    materials: {
      [ItemId.Hexolite]: 225,
      [ItemId.Plasteel]: 90,
      [ItemId.HighQualityCloth]: 90,
      [ItemId.IceOrgan]: 135,
      [ItemId.AncientCivilizationParts]: 35,
    },
  },
  [ItemId.ColdResistantHexoliteArmor4]: {
    product: ItemId.ColdResistantHexoliteArmor4,
    materials: {
      [ItemId.Hexolite]: 337,
      [ItemId.Plasteel]: 135,
      [ItemId.HighQualityCloth]: 135,
      [ItemId.IceOrgan]: 202,
      [ItemId.AncientCivilizationParts]: 45,
    },
  },
  [ItemId.LightweightHexoliteArmor]: {
    product: ItemId.LightweightHexoliteArmor,
    materials: {
      [ItemId.Hexolite]: 100,
      [ItemId.Plasteel]: 20,
      [ItemId.HighQualityCloth]: 20,
    },
  },
  [ItemId.LightweightHexoliteArmor1]: {
    product: ItemId.LightweightHexoliteArmor1,
    materials: {
      [ItemId.Hexolite]: 200,
      [ItemId.Plasteel]: 40,
      [ItemId.HighQualityCloth]: 40,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.LightweightHexoliteArmor2]: {
    product: ItemId.LightweightHexoliteArmor2,
    materials: {
      [ItemId.Hexolite]: 300,
      [ItemId.Plasteel]: 60,
      [ItemId.HighQualityCloth]: 60,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.LightweightHexoliteArmor3]: {
    product: ItemId.LightweightHexoliteArmor3,
    materials: {
      [ItemId.Hexolite]: 450,
      [ItemId.Plasteel]: 90,
      [ItemId.HighQualityCloth]: 90,
      [ItemId.AncientCivilizationParts]: 35,
    },
  },
  [ItemId.LightweightHexoliteArmor4]: {
    product: ItemId.LightweightHexoliteArmor4,
    materials: {
      [ItemId.Hexolite]: 675,
      [ItemId.Plasteel]: 135,
      [ItemId.HighQualityCloth]: 135,
      [ItemId.AncientCivilizationParts]: 45,
    },
  },
  [ItemId.FeatheredHairBand]: {
    product: ItemId.FeatheredHairBand,
    materials: {
      [ItemId.Fiber]: 10,
      [ItemId.PaldiumFragment]: 5,
    },
  },
  [ItemId.FeatheredHairBand1]: {
    product: ItemId.FeatheredHairBand1,
    materials: {
      [ItemId.Fiber]: 20,
      [ItemId.PaldiumFragment]: 10,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.FeatheredHairBand2]: {
    product: ItemId.FeatheredHairBand2,
    materials: {
      [ItemId.Fiber]: 30,
      [ItemId.PaldiumFragment]: 15,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.FeatheredHairBand3]: {
    product: ItemId.FeatheredHairBand3,
    materials: {
      [ItemId.Fiber]: 45,
      [ItemId.PaldiumFragment]: 22,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.FeatheredHairBand4]: {
    product: ItemId.FeatheredHairBand4,
    materials: {
      [ItemId.Fiber]: 67,
      [ItemId.PaldiumFragment]: 33,
      [ItemId.AncientCivilizationParts]: 13,
    },
  },
  [ItemId.MetalHelm]: {
    product: ItemId.MetalHelm,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.MetalHelm1]: {
    product: ItemId.MetalHelm1,
    materials: {
      [ItemId.Ingot]: 40,
      [ItemId.PaldiumFragment]: 20,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.MetalHelm2]: {
    product: ItemId.MetalHelm2,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.MetalHelm3]: {
    product: ItemId.MetalHelm3,
    materials: {
      [ItemId.Ingot]: 90,
      [ItemId.PaldiumFragment]: 45,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.MetalHelm4]: {
    product: ItemId.MetalHelm4,
    materials: {
      [ItemId.Ingot]: 135,
      [ItemId.PaldiumFragment]: 67,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.RefinedMetalHelm]: {
    product: ItemId.RefinedMetalHelm,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.RefinedMetalHelm1]: {
    product: ItemId.RefinedMetalHelm1,
    materials: {
      [ItemId.RefinedIngot]: 40,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.RefinedMetalHelm2]: {
    product: ItemId.RefinedMetalHelm2,
    materials: {
      [ItemId.RefinedIngot]: 60,
      [ItemId.PaldiumFragment]: 45,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.RefinedMetalHelm3]: {
    product: ItemId.RefinedMetalHelm3,
    materials: {
      [ItemId.RefinedIngot]: 90,
      [ItemId.PaldiumFragment]: 67,
      [ItemId.AncientCivilizationParts]: 11,
    },
  },
  [ItemId.RefinedMetalHelm4]: {
    product: ItemId.RefinedMetalHelm4,
    materials: {
      [ItemId.RefinedIngot]: 135,
      [ItemId.PaldiumFragment]: 100,
      [ItemId.AncientCivilizationParts]: 17,
    },
  },
  [ItemId.PalMetalHelm]: {
    product: ItemId.PalMetalHelm,
    materials: {
      [ItemId.PalMetalIngot]: 20,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.PalMetalHelm1]: {
    product: ItemId.PalMetalHelm1,
    materials: {
      [ItemId.PalMetalIngot]: 40,
      [ItemId.PaldiumFragment]: 40,
      [ItemId.AncientCivilizationParts]: 9,
    },
  },
  [ItemId.PalMetalHelm2]: {
    product: ItemId.PalMetalHelm2,
    materials: {
      [ItemId.PalMetalIngot]: 60,
      [ItemId.PaldiumFragment]: 60,
      [ItemId.AncientCivilizationParts]: 11,
    },
  },
  [ItemId.PalMetalHelm3]: {
    product: ItemId.PalMetalHelm3,
    materials: {
      [ItemId.PalMetalIngot]: 90,
      [ItemId.PaldiumFragment]: 90,
      [ItemId.AncientCivilizationParts]: 13,
    },
  },
  [ItemId.PalMetalHelm4]: {
    product: ItemId.PalMetalHelm4,
    materials: {
      [ItemId.PalMetalIngot]: 135,
      [ItemId.PaldiumFragment]: 135,
      [ItemId.AncientCivilizationParts]: 19,
    },
  },
  [ItemId.PlasteelHelmet]: {
    product: ItemId.PlasteelHelmet,
    materials: {
      [ItemId.Plasteel]: 20,
      [ItemId.PalMetalIngot]: 25,
    },
  },
  [ItemId.PlasteelHelmet1]: {
    product: ItemId.PlasteelHelmet1,
    materials: {
      [ItemId.Plasteel]: 40,
      [ItemId.PalMetalIngot]: 50,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.PlasteelHelmet2]: {
    product: ItemId.PlasteelHelmet2,
    materials: {
      [ItemId.Plasteel]: 60,
      [ItemId.PalMetalIngot]: 75,
      [ItemId.AncientCivilizationParts]: 17,
    },
  },
  [ItemId.PlasteelHelmet3]: {
    product: ItemId.PlasteelHelmet3,
    materials: {
      [ItemId.Plasteel]: 90,
      [ItemId.PalMetalIngot]: 112,
      [ItemId.AncientCivilizationParts]: 19,
    },
  },
  [ItemId.PlasteelHelmet4]: {
    product: ItemId.PlasteelHelmet4,
    materials: {
      [ItemId.Plasteel]: 135,
      [ItemId.PalMetalIngot]: 168,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.HexoliteHelmet]: {
    product: ItemId.HexoliteHelmet,
    materials: {
      [ItemId.Hexolite]: 40,
      [ItemId.Plasteel]: 15,
    },
  },
  [ItemId.HexoliteHelmet1]: {
    product: ItemId.HexoliteHelmet1,
    materials: {
      [ItemId.Hexolite]: 80,
      [ItemId.Plasteel]: 30,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.HexoliteHelmet2]: {
    product: ItemId.HexoliteHelmet2,
    materials: {
      [ItemId.Hexolite]: 120,
      [ItemId.Plasteel]: 45,
      [ItemId.AncientCivilizationParts]: 25,
    },
  },
  [ItemId.HexoliteHelmet3]: {
    product: ItemId.HexoliteHelmet3,
    materials: {
      [ItemId.Hexolite]: 180,
      [ItemId.Plasteel]: 67,
      [ItemId.AncientCivilizationParts]: 35,
    },
  },
  [ItemId.HexoliteHelmet4]: {
    product: ItemId.HexoliteHelmet4,
    materials: {
      [ItemId.Hexolite]: 270,
      [ItemId.Plasteel]: 100,
      [ItemId.AncientCivilizationParts]: 45,
    },
  },
  [ItemId.V1Armor]: {
    product: ItemId.V1Armor,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.HighQualityPalOil]: 15,
    },
  },
  [ItemId.V1Armor4]: {
    product: ItemId.V1Armor4,
    materials: {
      [ItemId.Ingot]: 270,
      [ItemId.HighQualityPalOil]: 85,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.V2Armor]: {
    product: ItemId.V2Armor,
    materials: {
      [ItemId.Plasteel]: 40,
      [ItemId.PalMetalIngot]: 40,
      [ItemId.HighQualityCloth]: 20,
    },
  },
  [ItemId.V2Armor4]: {
    product: ItemId.V2Armor4,
    materials: {
      [ItemId.Plasteel]: 270,
      [ItemId.PalMetalIngot]: 202,
      [ItemId.HighQualityCloth]: 80,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.MonarchSCrown]: {
    product: ItemId.MonarchSCrown,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Cloth]: 3,
    },
  },
  [ItemId.MonarchSCrown1]: {
    product: ItemId.MonarchSCrown1,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Cloth]: 4,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.MonarchSCrown2]: {
    product: ItemId.MonarchSCrown2,
    materials: {
      [ItemId.Ingot]: 45,
      [ItemId.Cloth]: 6,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.MonarchSCrown3]: {
    product: ItemId.MonarchSCrown3,
    materials: {
      [ItemId.Ingot]: 67,
      [ItemId.Cloth]: 9,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.MonarchSCrown4]: {
    product: ItemId.MonarchSCrown4,
    materials: {
      [ItemId.Ingot]: 100,
      [ItemId.Cloth]: 13,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.GoldenCrown]: {
    product: ItemId.GoldenCrown,
    materials: {
      [ItemId.Ingot]: 25,
    },
  },
  [ItemId.GoldenCrown1]: {
    product: ItemId.GoldenCrown1,
    materials: {
      [ItemId.Ingot]: 37,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.GoldenCrown2]: {
    product: ItemId.GoldenCrown2,
    materials: {
      [ItemId.Ingot]: 55,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.GoldenCrown3]: {
    product: ItemId.GoldenCrown3,
    materials: {
      [ItemId.Ingot]: 82,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.GoldenCrown4]: {
    product: ItemId.GoldenCrown4,
    materials: {
      [ItemId.Ingot]: 123,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.LongEaredHeadband]: {
    product: ItemId.LongEaredHeadband,
    materials: {
      [ItemId.Cloth]: 12,
      [ItemId.Ingot]: 2,
    },
  },
  [ItemId.LongEaredHeadband1]: {
    product: ItemId.LongEaredHeadband1,
    materials: {
      [ItemId.Cloth]: 18,
      [ItemId.Ingot]: 3,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.LongEaredHeadband2]: {
    product: ItemId.LongEaredHeadband2,
    materials: {
      [ItemId.Cloth]: 27,
      [ItemId.Ingot]: 4,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.LongEaredHeadband3]: {
    product: ItemId.LongEaredHeadband3,
    materials: {
      [ItemId.Cloth]: 40,
      [ItemId.Ingot]: 6,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.LongEaredHeadband4]: {
    product: ItemId.LongEaredHeadband4,
    materials: {
      [ItemId.Cloth]: 60,
      [ItemId.Ingot]: 9,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.WitchHat]: {
    product: ItemId.WitchHat,
    materials: {
      [ItemId.Cloth]: 10,
      [ItemId.Ingot]: 3,
    },
  },
  [ItemId.WitchHat1]: {
    product: ItemId.WitchHat1,
    materials: {
      [ItemId.Cloth]: 15,
      [ItemId.Ingot]: 4,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.WitchHat2]: {
    product: ItemId.WitchHat2,
    materials: {
      [ItemId.Cloth]: 22,
      [ItemId.Ingot]: 6,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.WitchHat3]: {
    product: ItemId.WitchHat3,
    materials: {
      [ItemId.Cloth]: 33,
      [ItemId.Ingot]: 9,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.WitchHat4]: {
    product: ItemId.WitchHat4,
    materials: {
      [ItemId.Cloth]: 49,
      [ItemId.Ingot]: 13,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.SoftHat]: {
    product: ItemId.SoftHat,
    materials: {
      [ItemId.Cloth]: 10,
      [ItemId.Fiber]: 10,
    },
  },
  [ItemId.SoftHat1]: {
    product: ItemId.SoftHat1,
    materials: {
      [ItemId.Cloth]: 15,
      [ItemId.Fiber]: 15,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.SoftHat2]: {
    product: ItemId.SoftHat2,
    materials: {
      [ItemId.Cloth]: 22,
      [ItemId.Fiber]: 22,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.SoftHat3]: {
    product: ItemId.SoftHat3,
    materials: {
      [ItemId.Cloth]: 33,
      [ItemId.Fiber]: 33,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.SoftHat4]: {
    product: ItemId.SoftHat4,
    materials: {
      [ItemId.Cloth]: 49,
      [ItemId.Fiber]: 49,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.Helmet]: {
    product: ItemId.Helmet,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Wool]: 5,
    },
  },
  [ItemId.Helmet1]: {
    product: ItemId.Helmet1,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.Wool]: 7,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.Helmet2]: {
    product: ItemId.Helmet2,
    materials: {
      [ItemId.Ingot]: 45,
      [ItemId.Wool]: 10,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.Helmet3]: {
    product: ItemId.Helmet3,
    materials: {
      [ItemId.Ingot]: 67,
      [ItemId.Wool]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.Helmet4]: {
    product: ItemId.Helmet4,
    materials: {
      [ItemId.Ingot]: 100,
      [ItemId.Wool]: 22,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.SilkHat]: {
    product: ItemId.SilkHat,
    materials: {
      [ItemId.Cloth]: 15,
    },
  },
  [ItemId.SilkHat1]: {
    product: ItemId.SilkHat1,
    materials: {
      [ItemId.Cloth]: 22,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.SilkHat2]: {
    product: ItemId.SilkHat2,
    materials: {
      [ItemId.Cloth]: 33,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.SilkHat3]: {
    product: ItemId.SilkHat3,
    materials: {
      [ItemId.Cloth]: 49,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.SilkHat4]: {
    product: ItemId.SilkHat4,
    materials: {
      [ItemId.Cloth]: 73,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.Tricorne]: {
    product: ItemId.Tricorne,
    materials: {
      [ItemId.Leather]: 10,
    },
  },
  [ItemId.Tricorne1]: {
    product: ItemId.Tricorne1,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.Tricorne2]: {
    product: ItemId.Tricorne2,
    materials: {
      [ItemId.Leather]: 22,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.Tricorne3]: {
    product: ItemId.Tricorne3,
    materials: {
      [ItemId.Leather]: 33,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.Tricorne4]: {
    product: ItemId.Tricorne4,
    materials: {
      [ItemId.Leather]: 49,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.ExplorerCap]: {
    product: ItemId.ExplorerCap,
    materials: {
      [ItemId.Cloth]: 10,
      [ItemId.Leather]: 3,
      [ItemId.Ingot]: 2,
    },
  },
  [ItemId.ExplorerCap1]: {
    product: ItemId.ExplorerCap1,
    materials: {
      [ItemId.Cloth]: 15,
      [ItemId.Leather]: 4,
      [ItemId.Ingot]: 3,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.ExplorerCap2]: {
    product: ItemId.ExplorerCap2,
    materials: {
      [ItemId.Cloth]: 22,
      [ItemId.Leather]: 6,
      [ItemId.Ingot]: 4,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.ExplorerCap3]: {
    product: ItemId.ExplorerCap3,
    materials: {
      [ItemId.Cloth]: 33,
      [ItemId.Leather]: 9,
      [ItemId.Ingot]: 6,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.ExplorerCap4]: {
    product: ItemId.ExplorerCap4,
    materials: {
      [ItemId.Cloth]: 49,
      [ItemId.Leather]: 13,
      [ItemId.Ingot]: 9,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.GraduationCap]: {
    product: ItemId.GraduationCap,
    materials: {
      [ItemId.Cloth]: 20,
      [ItemId.Fiber]: 10,
    },
  },
  [ItemId.GraduationCap1]: {
    product: ItemId.GraduationCap1,
    materials: {
      [ItemId.Cloth]: 30,
      [ItemId.Fiber]: 15,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.GraduationCap2]: {
    product: ItemId.GraduationCap2,
    materials: {
      [ItemId.Cloth]: 45,
      [ItemId.Fiber]: 22,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.GraduationCap3]: {
    product: ItemId.GraduationCap3,
    materials: {
      [ItemId.Cloth]: 67,
      [ItemId.Fiber]: 33,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.GraduationCap4]: {
    product: ItemId.GraduationCap4,
    materials: {
      [ItemId.Cloth]: 100,
      [ItemId.Fiber]: 49,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.FarmingHat]: {
    product: ItemId.FarmingHat,
    materials: {
      [ItemId.Fiber]: 30,
      [ItemId.Wood]: 10,
    },
  },
  [ItemId.FarmingHat1]: {
    product: ItemId.FarmingHat1,
    materials: {
      [ItemId.Fiber]: 45,
      [ItemId.Wood]: 15,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.FarmingHat2]: {
    product: ItemId.FarmingHat2,
    materials: {
      [ItemId.Fiber]: 67,
      [ItemId.Wood]: 22,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.FarmingHat3]: {
    product: ItemId.FarmingHat3,
    materials: {
      [ItemId.Fiber]: 100,
      [ItemId.Wood]: 33,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.FarmingHat4]: {
    product: ItemId.FarmingHat4,
    materials: {
      [ItemId.Fiber]: 150,
      [ItemId.Wood]: 49,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.BowlerHat]: {
    product: ItemId.BowlerHat,
    materials: {
      [ItemId.Cloth]: 15,
    },
  },
  [ItemId.BowlerHat1]: {
    product: ItemId.BowlerHat1,
    materials: {
      [ItemId.Cloth]: 22,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.BowlerHat2]: {
    product: ItemId.BowlerHat2,
    materials: {
      [ItemId.Cloth]: 33,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.BowlerHat3]: {
    product: ItemId.BowlerHat3,
    materials: {
      [ItemId.Cloth]: 49,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.BowlerHat4]: {
    product: ItemId.BowlerHat4,
    materials: {
      [ItemId.Cloth]: 73,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.TocotocoCap]: {
    product: ItemId.TocotocoCap,
    materials: {
      [ItemId.TocotocoFeather]: 5,
    },
  },
  [ItemId.TocotocoCap1]: {
    product: ItemId.TocotocoCap1,
    materials: {
      [ItemId.TocotocoFeather]: 7,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.TocotocoCap2]: {
    product: ItemId.TocotocoCap2,
    materials: {
      [ItemId.TocotocoFeather]: 10,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.TocotocoCap3]: {
    product: ItemId.TocotocoCap3,
    materials: {
      [ItemId.TocotocoFeather]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.TocotocoCap4]: {
    product: ItemId.TocotocoCap4,
    materials: {
      [ItemId.TocotocoFeather]: 22,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.GrinningTocotocoCap]: {
    product: ItemId.GrinningTocotocoCap,
    materials: {
      [ItemId.TocotocoFeather]: 5,
    },
  },
  [ItemId.GrinningTocotocoCap1]: {
    product: ItemId.GrinningTocotocoCap1,
    materials: {
      [ItemId.TocotocoFeather]: 7,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.GrinningTocotocoCap2]: {
    product: ItemId.GrinningTocotocoCap2,
    materials: {
      [ItemId.TocotocoFeather]: 10,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.GrinningTocotocoCap3]: {
    product: ItemId.GrinningTocotocoCap3,
    materials: {
      [ItemId.TocotocoFeather]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.GrinningTocotocoCap4]: {
    product: ItemId.GrinningTocotocoCap4,
    materials: {
      [ItemId.TocotocoFeather]: 22,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.GumossCap]: {
    product: ItemId.GumossCap,
    materials: {
      [ItemId.GumossLeaf]: 5,
    },
  },
  [ItemId.GumossCap1]: {
    product: ItemId.GumossCap1,
    materials: {
      [ItemId.GumossLeaf]: 7,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.GumossCap2]: {
    product: ItemId.GumossCap2,
    materials: {
      [ItemId.GumossLeaf]: 10,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.GumossCap3]: {
    product: ItemId.GumossCap3,
    materials: {
      [ItemId.GumossLeaf]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.GumossCap4]: {
    product: ItemId.GumossCap4,
    materials: {
      [ItemId.GumossLeaf]: 22,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.PenkingCap]: {
    product: ItemId.PenkingCap,
    materials: {
      [ItemId.PenkingPlume]: 5,
    },
  },
  [ItemId.PenkingCap1]: {
    product: ItemId.PenkingCap1,
    materials: {
      [ItemId.PenkingPlume]: 7,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.PenkingCap2]: {
    product: ItemId.PenkingCap2,
    materials: {
      [ItemId.PenkingPlume]: 10,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.PenkingCap3]: {
    product: ItemId.PenkingCap3,
    materials: {
      [ItemId.PenkingPlume]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.PenkingCap4]: {
    product: ItemId.PenkingCap4,
    materials: {
      [ItemId.PenkingPlume]: 22,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.KatressCap]: {
    product: ItemId.KatressCap,
    materials: {
      [ItemId.KatressHair]: 5,
    },
  },
  [ItemId.KatressCap1]: {
    product: ItemId.KatressCap1,
    materials: {
      [ItemId.KatressHair]: 7,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.KatressCap2]: {
    product: ItemId.KatressCap2,
    materials: {
      [ItemId.KatressHair]: 10,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.KatressCap3]: {
    product: ItemId.KatressCap3,
    materials: {
      [ItemId.KatressHair]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.KatressCap4]: {
    product: ItemId.KatressCap4,
    materials: {
      [ItemId.KatressHair]: 22,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.RibbunyHeadband]: {
    product: ItemId.RibbunyHeadband,
    materials: {
      [ItemId.RibbunyRibbon]: 5,
    },
  },
  [ItemId.RibbunyHeadband1]: {
    product: ItemId.RibbunyHeadband1,
    materials: {
      [ItemId.RibbunyRibbon]: 7,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.RibbunyHeadband2]: {
    product: ItemId.RibbunyHeadband2,
    materials: {
      [ItemId.RibbunyRibbon]: 10,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.RibbunyHeadband3]: {
    product: ItemId.RibbunyHeadband3,
    materials: {
      [ItemId.RibbunyRibbon]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.RibbunyHeadband4]: {
    product: ItemId.RibbunyHeadband4,
    materials: {
      [ItemId.RibbunyRibbon]: 22,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.LeezpunkHood]: {
    product: ItemId.LeezpunkHood,
    materials: {
      [ItemId.LeezpunkCrest]: 5,
    },
  },
  [ItemId.LeezpunkHood1]: {
    product: ItemId.LeezpunkHood1,
    materials: {
      [ItemId.LeezpunkCrest]: 7,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.LeezpunkHood2]: {
    product: ItemId.LeezpunkHood2,
    materials: {
      [ItemId.LeezpunkCrest]: 10,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.LeezpunkHood3]: {
    product: ItemId.LeezpunkHood3,
    materials: {
      [ItemId.LeezpunkCrest]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.LeezpunkHood4]: {
    product: ItemId.LeezpunkHood4,
    materials: {
      [ItemId.LeezpunkCrest]: 22,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.KillamariCap]: {
    product: ItemId.KillamariCap,
    materials: {
      [ItemId.KillamariTentacle]: 5,
    },
  },
  [ItemId.KillamariCap1]: {
    product: ItemId.KillamariCap1,
    materials: {
      [ItemId.KillamariTentacle]: 7,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.KillamariCap2]: {
    product: ItemId.KillamariCap2,
    materials: {
      [ItemId.KillamariTentacle]: 10,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.KillamariCap3]: {
    product: ItemId.KillamariCap3,
    materials: {
      [ItemId.KillamariTentacle]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.KillamariCap4]: {
    product: ItemId.KillamariCap4,
    materials: {
      [ItemId.KillamariTentacle]: 22,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.SweeCap]: {
    product: ItemId.SweeCap,
    materials: {
      [ItemId.SweeHair]: 5,
    },
  },
  [ItemId.SweeCap1]: {
    product: ItemId.SweeCap1,
    materials: {
      [ItemId.SweeHair]: 7,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.SweeCap2]: {
    product: ItemId.SweeCap2,
    materials: {
      [ItemId.SweeHair]: 10,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.SweeCap3]: {
    product: ItemId.SweeCap3,
    materials: {
      [ItemId.SweeHair]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.SweeCap4]: {
    product: ItemId.SweeCap4,
    materials: {
      [ItemId.SweeHair]: 22,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.DazziHat]: {
    product: ItemId.DazziHat,
    materials: {
      [ItemId.DazziCloud]: 5,
    },
  },
  [ItemId.DazziHat1]: {
    product: ItemId.DazziHat1,
    materials: {
      [ItemId.DazziCloud]: 7,
      [ItemId.AncientCivilizationParts]: 4,
    },
  },
  [ItemId.DazziHat2]: {
    product: ItemId.DazziHat2,
    materials: {
      [ItemId.DazziCloud]: 10,
      [ItemId.AncientCivilizationParts]: 6,
    },
  },
  [ItemId.DazziHat3]: {
    product: ItemId.DazziHat3,
    materials: {
      [ItemId.DazziCloud]: 15,
      [ItemId.AncientCivilizationParts]: 8,
    },
  },
  [ItemId.DazziHat4]: {
    product: ItemId.DazziHat4,
    materials: {
      [ItemId.DazziCloud]: 22,
      [ItemId.AncientCivilizationParts]: 14,
    },
  },
  [ItemId.RingOfMercy]: {
    product: ItemId.RingOfMercy,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.PaldiumFragment]: 20,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.AbilityGlasses]: {
    product: ItemId.AbilityGlasses,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.PaldiumFragment]: 20,
      [ItemId.AncientCivilizationParts]: 10,
      [ItemId.AncientCivilizationCore]: 5,
    },
  },
  [ItemId.AntiGravityBelt]: {
    product: ItemId.AntiGravityBelt,
    materials: {
      [ItemId.Ingot]: 30,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.NightstarSand]: 10,
    },
  },
  [ItemId.DoubleJumpBoots]: {
    product: ItemId.DoubleJumpBoots,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.PaldiumFragment]: 50,
      [ItemId.NightstarSand]: 20,
    },
  },
  [ItemId.TripleJumpBoots]: {
    product: ItemId.TripleJumpBoots,
    materials: {
      [ItemId.Hexolite]: 30,
      [ItemId.PaldiumFragment]: 150,
      [ItemId.NightstarSand]: 50,
      [ItemId.DarkFragment]: 50,
    },
  },
  [ItemId.AirDashBoots]: {
    product: ItemId.AirDashBoots,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.PaldiumFragment]: 50,
      [ItemId.NightstarSand]: 20,
    },
  },
  [ItemId.DoubleAirDashBoots]: {
    product: ItemId.DoubleAirDashBoots,
    materials: {
      [ItemId.Plasteel]: 30,
      [ItemId.PaldiumFragment]: 100,
      [ItemId.NightstarSand]: 30,
      [ItemId.DarkFragment]: 30,
    },
  },
  [ItemId.TripleAirDashBoots]: {
    product: ItemId.TripleAirDashBoots,
    materials: {
      [ItemId.CoralumIngot]: 30,
      [ItemId.PaldiumFragment]: 150,
      [ItemId.NightstarSand]: 40,
      [ItemId.DarkFragment]: 50,
    },
  },
  [ItemId.Arrow]: {
    product: ItemId.Arrow,
    materials: {
      [ItemId.Wood]: 1,
      [ItemId.Stone]: 1,
    },
  },
  [ItemId.FireArrow]: {
    product: ItemId.FireArrow,
    materials: {
      [ItemId.Wood]: 3,
      [ItemId.Stone]: 3,
      [ItemId.FlameOrgan]: 1,
    },
  },
  [ItemId.PoisonArrow]: {
    product: ItemId.PoisonArrow,
    materials: {
      [ItemId.Wood]: 3,
      [ItemId.Stone]: 3,
      [ItemId.VenomGland]: 1,
    },
  },
  [ItemId.ReinforcedArrow]: {
    product: ItemId.ReinforcedArrow,
    materials: {
      [ItemId.Ingot]: 1,
      [ItemId.Stone]: 2,
    },
  },
  [ItemId.AdvancedArrow]: {
    product: ItemId.AdvancedArrow,
    materials: {
      [ItemId.Hexolite]: 1,
      [ItemId.Stone]: 10,
    },
  },
  [ItemId.CoarseAmmo]: {
    product: ItemId.CoarseAmmo,
    materials: {
      [ItemId.Ingot]: 2,
      [ItemId.Gunpowder1]: 1,
    },
  },
  [ItemId.BoostGunAmmo]: {
    product: ItemId.BoostGunAmmo,
    materials: {
      [ItemId.Ingot]: 2,
      [ItemId.ElectricOrgan]: 1,
    },
  },
  [ItemId.HandgunAmmo]: {
    product: ItemId.HandgunAmmo,
    materials: {
      [ItemId.Ingot]: 2,
      [ItemId.Gunpowder1]: 1,
    },
  },
  [ItemId.RifleAmmo]: {
    product: ItemId.RifleAmmo,
    materials: {
      [ItemId.RefinedIngot]: 1,
      [ItemId.Gunpowder1]: 2,
    },
  },
  [ItemId.ShotgunShell]: {
    product: ItemId.ShotgunShell,
    materials: {
      [ItemId.RefinedIngot]: 1,
      [ItemId.Gunpowder1]: 3,
    },
  },
  [ItemId.AssaultRifleAmmo]: {
    product: ItemId.AssaultRifleAmmo,
    materials: {
      [ItemId.RefinedIngot]: 1,
      [ItemId.Gunpowder1]: 2,
    },
  },
  [ItemId.RocketAmmo]: {
    product: ItemId.RocketAmmo,
    materials: {
      [ItemId.PalMetalIngot]: 1,
      [ItemId.Gunpowder1]: 5,
    },
  },
  [ItemId.FlamethrowerFuel]: {
    product: ItemId.FlamethrowerFuel,
    materials: {
      [ItemId.CrudeOil]: 1,
    },
  },
  [ItemId.EnergyCartridge]: {
    product: ItemId.EnergyCartridge,
    materials: {
      [ItemId.ElectricOrgan]: 5,
      [ItemId.PalMetalIngot]: 1,
    },
  },
  [ItemId.GrenadeAmmo]: {
    product: ItemId.GrenadeAmmo,
    materials: {
      [ItemId.PalMetalIngot]: 1,
      [ItemId.Fiber]: 20,
      [ItemId.Gunpowder1]: 3,
    },
  },
  [ItemId.MissileAmmo]: {
    product: ItemId.MissileAmmo,
    materials: {
      [ItemId.PalMetalIngot]: 1,
      [ItemId.CrudeOil]: 1,
      [ItemId.CircuitBoard]: 1,
      [ItemId.PalFluids]: 1,
    },
  },
  [ItemId.GatlingGunAmmo]: {
    product: ItemId.GatlingGunAmmo,
    materials: {
      [ItemId.PalMetalIngot]: 1,
      [ItemId.Gunpowder1]: 3,
    },
  },
  [ItemId.LaserGatlingCartridge]: {
    product: ItemId.LaserGatlingCartridge,
    materials: {
      [ItemId.ElectricOrgan]: 5,
      [ItemId.Plasteel]: 1,
    },
  },
  [ItemId.PlasmaCartridge]: {
    product: ItemId.PlasmaCartridge,
    materials: {
      [ItemId.ElectricOrgan]: 10,
      [ItemId.Hexolite]: 1,
    },
  },
  [ItemId.MeteoriteAmmo]: {
    product: ItemId.MeteoriteAmmo,
    materials: {
      [ItemId.MeteoriteFragment]: 2,
    },
  },
  [ItemId.EnergyShotgunAmmo]: {
    product: ItemId.EnergyShotgunAmmo,
    materials: {
      [ItemId.ElectricOrgan]: 10,
      [ItemId.Hexolite]: 1,
      [ItemId.CoralumIngot]: 1,
    },
  },
  [ItemId.OverheatRifleAmmo]: {
    product: ItemId.OverheatRifleAmmo,
    materials: {
      [ItemId.ElectricOrgan]: 10,
      [ItemId.Hexolite]: 1,
      [ItemId.CoralumIngot]: 1,
    },
  },
  [ItemId.ChargeRifleAmmo]: {
    product: ItemId.ChargeRifleAmmo,
    materials: {
      [ItemId.ElectricOrgan]: 10,
      [ItemId.Hexolite]: 1,
      [ItemId.CoralumIngot]: 1,
    },
  },
  [ItemId.DecalInk]: {
    product: ItemId.DecalInk,
    materials: {
      [ItemId.PalFluids]: 1,
      [ItemId.HighQualityPalOil]: 1,
    },
  },
  [ItemId.CommonShield]: {
    product: ItemId.CommonShield,
    materials: {
      [ItemId.PaldiumFragment]: 10,
      [ItemId.Wood]: 20,
      ["stone"]: 20,
      [ItemId.Fiber]: 10,
    },
  },
  [ItemId.MegaShield]: {
    product: ItemId.MegaShield,
    materials: {
      [ItemId.AncientCivilizationParts]: 5,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.GigaShield]: {
    product: ItemId.GigaShield,
    materials: {
      [ItemId.AncientCivilizationParts]: 15,
      [ItemId.PaldiumFragment]: 50,
    },
  },
  [ItemId.HyperShield]: {
    product: ItemId.HyperShield,
    materials: {
      [ItemId.AncientCivilizationParts]: 30,
      [ItemId.PaldiumFragment]: 100,
    },
  },
  [ItemId.UltraShield]: {
    product: ItemId.UltraShield,
    materials: {
      [ItemId.AncientCivilizationParts]: 50,
      [ItemId.PaldiumFragment]: 150,
      [ItemId.Plasteel]: 50,
      [ItemId.AncientCivilizationCore]: 30,
    },
  },
  [ItemId.AdvancedShield]: {
    product: ItemId.AdvancedShield,
    materials: {
      [ItemId.AncientCivilizationParts]: 80,
      [ItemId.PaldiumFragment]: 200,
      [ItemId.Hexolite]: 50,
      [ItemId.AncientCivilizationCore]: 30,
    },
  },
  [ItemId.NormalParachute]: {
    product: ItemId.NormalParachute,
    materials: {
      [ItemId.Wood]: 10,
      [ItemId.Cloth]: 2,
    },
  },
  [ItemId.MegaGlider]: {
    product: ItemId.MegaGlider,
    materials: {
      [ItemId.Wood]: 50,
      [ItemId.Bone]: 10,
      ["cloth"]: 20,
    },
  },
  [ItemId.GigaGlider]: {
    product: ItemId.GigaGlider,
    materials: {
      [ItemId.RefinedIngot]: 20,
      [ItemId.Wood]: 100,
      [ItemId.CarbonFiber]: 20,
      ["cloth2"]: 10,
    },
  },
  [ItemId.HyperGlider1]: {
    product: ItemId.HyperGlider1,
    materials: {
      [ItemId.PalMetalIngot]: 40,
      [ItemId.Wood]: 200,
      [ItemId.CarbonFiber]: 50,
      ["cloth2"]: 20,
    },
  },
  [ItemId.HipLantern]: {
    product: ItemId.HipLantern,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Wood]: 10,
      [ItemId.FlameOrgan]: 10,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.EnhancedHipLantern]: {
    product: ItemId.EnhancedHipLantern,
    materials: {
      [ItemId.RefinedIngot]: 30,
      [ItemId.Wood]: 30,
      [ItemId.FlameOrgan]: 30,
      [ItemId.AncientCivilizationParts]: 20,
    },
  },
  [ItemId.SmallFeedBag]: {
    product: ItemId.SmallFeedBag,
    materials: {
      [ItemId.Wood]: 5,
      [ItemId.Fiber]: 10,
      [ItemId.Leather]: 3,
    },
  },
  [ItemId.AverageFeedBag]: {
    product: ItemId.AverageFeedBag,
    materials: {
      [ItemId.Wood]: 10,
      [ItemId.Fiber]: 30,
      [ItemId.Leather]: 10,
    },
  },
  [ItemId.LargeFeedBag]: {
    product: ItemId.LargeFeedBag,
    materials: {
      [ItemId.Wood]: 20,
      [ItemId.Fiber]: 50,
      [ItemId.Leather]: 20,
    },
  },
  [ItemId.HugeFeedBag]: {
    product: ItemId.HugeFeedBag,
    materials: {
      [ItemId.Wood]: 30,
      [ItemId.Fiber]: 90,
      [ItemId.Leather]: 35,
      [ItemId.CarbonFiber]: 10,
    },
  },
  [ItemId.GiantFeedBag]: {
    product: ItemId.GiantFeedBag,
    materials: {
      [ItemId.Wood]: 50,
      [ItemId.Fiber]: 200,
      [ItemId.Leather]: 50,
      [ItemId.CarbonFiber]: 20,
    },
  },
  [ItemId.SmallPouch]: {
    product: ItemId.SmallPouch,
    materials: {
      [ItemId.PredatorCore]: 1,
      [ItemId.Fiber]: 20,
      [ItemId.Leather]: 10,
    },
  },
  [ItemId.MediumPouch]: {
    product: ItemId.MediumPouch,
    materials: {
      [ItemId.PredatorCore]: 5,
      [ItemId.Fiber]: 50,
      [ItemId.Leather]: 20,
    },
  },
  [ItemId.LargePouch]: {
    product: ItemId.LargePouch,
    materials: {
      [ItemId.PredatorCore]: 10,
      [ItemId.Fiber]: 80,
      [ItemId.Leather]: 30,
      [ItemId.CarbonFiber]: 10,
    },
  },
  [ItemId.GiantPouch]: {
    product: ItemId.GiantPouch,
    materials: {
      [ItemId.PredatorCore]: 20,
      [ItemId.Fiber]: 120,
      [ItemId.Leather]: 40,
      [ItemId.CarbonFiber]: 20,
    },
  },
  [ItemId.Cloth]: {
    product: ItemId.Cloth,
    materials: {
      [ItemId.Wool]: 2,
    },
  },
  [ItemId.HighQualityCloth]: {
    product: ItemId.HighQualityCloth,
    materials: {
      [ItemId.Wool]: 10,
    },
  },
  [ItemId.Gunpowder1]: {
    product: ItemId.Gunpowder1,
    materials: {
      [ItemId.Charcoal]: 2,
      [ItemId.Sulfur]: 1,
    },
  },
  [ItemId.Charcoal]: {
    product: ItemId.Charcoal,
    materials: {
      [ItemId.Wood]: 2,
    },
  },
  [ItemId.Nail]: {
    product: ItemId.Nail,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
  [ItemId.CircuitBoard]: {
    product: ItemId.CircuitBoard,
    materials: {
      [ItemId.PureQuartz]: 4,
      [ItemId.Polymer]: 2,
    },
  },
  [ItemId.Polymer]: {
    product: ItemId.Polymer,
    materials: {
      [ItemId.HighQualityPalOil]: 2,
    },
  },
  [ItemId.Cement]: {
    product: ItemId.Cement,
    materials: {
      [ItemId.Stone]: 50,
      [ItemId.Bone]: 1,
      [ItemId.PalFluids]: 1,
    },
  },
  [ItemId.CarbonFiber]: {
    product: ItemId.CarbonFiber,
    materials: {
      [ItemId.Charcoal]: 5,
    },
  },
  [ItemId.HomewardThundercloud]: {
    product: ItemId.HomewardThundercloud,
    materials: {
      [ItemId.DazziCloud]: 1,
      [ItemId.ElectricOrgan]: 5,
      [ItemId.AncientCivilizationParts]: 2,
    },
  },
  [ItemId.RepairKit]: {
    product: ItemId.RepairKit,
    materials: {
      [ItemId.Fiber]: 5,
      [ItemId.Stone]: 5,
    },
  },
  [ItemId.Ingot]: {
    product: ItemId.Ingot,
    materials: {
      [ItemId.Ore]: 2,
    },
  },
  [ItemId.RefinedIngot]: {
    product: ItemId.RefinedIngot,
    materials: {
      [ItemId.Ore]: 2,
      [ItemId.Coal]: 2,
    },
  },
  [ItemId.PalMetalIngot]: {
    product: ItemId.PalMetalIngot,
    materials: {
      [ItemId.Ore]: 4,
      [ItemId.PaldiumFragment]: 2,
    },
  },
  [ItemId.Plasteel]: {
    product: ItemId.Plasteel,
    materials: {
      [ItemId.CrudeOil]: 5,
      [ItemId.PaldiumFragment]: 5,
      [ItemId.Ore]: 10,
    },
  },
  [ItemId.Hexolite]: {
    product: ItemId.Hexolite,
    materials: {
      [ItemId.Chromite]: 5,
      [ItemId.HexoliteQuartz]: 12,
      [ItemId.Ore]: 20,
    },
  },
  [ItemId.CoralumIngot]: {
    product: ItemId.CoralumIngot,
    materials: {
      [ItemId.CoralumOre]: 5,
      [ItemId.Ore]: 30,
      [ItemId.Coal]: 20,
    },
  },
  [ItemId.LowQualityRecoveryMeds]: {
    product: ItemId.LowQualityRecoveryMeds,
    materials: {
      [ItemId.CavernMushroom]: 3,
      [ItemId.RedBerries]: 5,
      [ItemId.PalFluids]: 2,
    },
  },
  [ItemId.RecoveryMeds]: {
    product: ItemId.RecoveryMeds,
    materials: {
      [ItemId.CavernMushroom]: 5,
      [ItemId.RedBerries]: 5,
      [ItemId.PalFluids]: 5,
      [ItemId.CottonCandy]: 3,
    },
  },
  [ItemId.HighQualityRecoveryMeds]: {
    product: ItemId.HighQualityRecoveryMeds,
    materials: {
      [ItemId.CavernMushroom]: 10,
      [ItemId.RedBerries]: 20,
      [ItemId.HighQualityPalOil]: 5,
      [ItemId.CottonCandy]: 5,
      [ItemId.Sulfur]: 5,
    },
  },
  [ItemId.AdvancedRecoveryMeds]: {
    product: ItemId.AdvancedRecoveryMeds,
    materials: {
      [ItemId.CavernMushroom]: 15,
      [ItemId.RedBerries]: 30,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.CottonCandy]: 7,
      [ItemId.Sulfur]: 10,
    },
  },
  [ItemId.RevivalPotion]: {
    product: ItemId.RevivalPotion,
    materials: {
      [ItemId.CavernMushroom]: 30,
      [ItemId.RedBerries]: 50,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.CottonCandy]: 10,
      [ItemId.Sulfur]: 20,
    },
  },
  [ItemId.LowGradeMedicalSupplies]: {
    product: ItemId.LowGradeMedicalSupplies,
    materials: {
      [ItemId.RedBerries]: 5,
      [ItemId.Horn]: 2,
    },
  },
  [ItemId.MedicalSupplies]: {
    product: ItemId.MedicalSupplies,
    materials: {
      [ItemId.Ingot]: 3,
      [ItemId.Horn]: 3,
      [ItemId.Bone]: 1,
    },
  },
  [ItemId.HighGradeMedicalSupplies]: {
    product: ItemId.HighGradeMedicalSupplies,
    materials: {
      [ItemId.Ingot]: 5,
      [ItemId.Horn]: 5,
      [ItemId.Bone]: 2,
    },
  },
  [ItemId.MindControlMeds]: {
    product: ItemId.MindControlMeds,
    materials: {
      [ItemId.RefinedIngot]: 10,
      [ItemId.Horn]: 10,
      [ItemId.Bone]: 5,
      [ItemId.PalFluids]: 3,
    },
  },
  [ItemId.SuspiciousJuice]: {
    product: ItemId.SuspiciousJuice,
    materials: {
      [ItemId.BeautifulFlower]: 3,
      [ItemId.Horn]: 3,
      [ItemId.Bone]: 1,
      [ItemId.PalFluids]: 1,
    },
  },
  [ItemId.StrangeJuice]: {
    product: ItemId.StrangeJuice,
    materials: {
      [ItemId.BeautifulFlower]: 5,
      [ItemId.Horn]: 5,
      [ItemId.Bone]: 2,
      [ItemId.PalFluids]: 2,
    },
  },
  [ItemId.MysteriousMushroomJuice]: {
    product: ItemId.MysteriousMushroomJuice,
    materials: {
      [ItemId.MysteriousMushroom]: 20,
      [ItemId.BeautifulFlower]: 10,
      [ItemId.Horn]: 10,
      [ItemId.Bone]: 5,
      [ItemId.PalFluids]: 5,
    },
  },
  [ItemId.MemoryWipingMedicine]: {
    product: ItemId.MemoryWipingMedicine,
    materials: {
      [ItemId.BeautifulFlower]: 99,
      [ItemId.Horn]: 50,
      [ItemId.Bone]: 50,
      [ItemId.PalFluids]: 50,
    },
  },
  [ItemId.Fiber]: {
    product: ItemId.Fiber,
    materials: {
      [ItemId.Wood]: 1,
    },
  },
  [ItemId.PaldiumFragment]: {
    product: ItemId.PaldiumFragment,
    materials: {
      [ItemId.ExoticSphere]: 1,
    },
  },
  [ItemId.Flour]: {
    product: ItemId.Flour,
    materials: {
      [ItemId.Wheat]: 3,
    },
  },
  [ItemId.BakedBerries]: {
    product: ItemId.BakedBerries,
    materials: {
      [ItemId.RedBerries]: 1,
    },
  },
  [ItemId.BakedMushroom]: {
    product: ItemId.BakedMushroom,
    materials: {
      [ItemId.Mushroom]: 1,
    },
  },
  [ItemId.Bread]: {
    product: ItemId.Bread,
    materials: {
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.FriedEgg]: {
    product: ItemId.FriedEgg,
    materials: {
      [ItemId.Egg]: 1,
    },
  },
  [ItemId.HotMilk]: {
    product: ItemId.HotMilk,
    materials: {
      [ItemId.Milk]: 1,
    },
  },
  [ItemId.JamFilledBun]: {
    product: ItemId.JamFilledBun,
    materials: {
      [ItemId.Flour]: 1,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.Pancake]: {
    product: ItemId.Pancake,
    materials: {
      [ItemId.Flour]: 1,
      [ItemId.Milk]: 1,
    },
  },
  [ItemId.Salad]: {
    product: ItemId.Salad,
    materials: {
      [ItemId.Lettuce]: 2,
      [ItemId.Tomato]: 2,
    },
  },
  [ItemId.Omelet]: {
    product: ItemId.Omelet,
    materials: {
      [ItemId.Tomato]: 1,
      [ItemId.Egg]: 2,
    },
  },
  [ItemId.MarinatedMushrooms]: {
    product: ItemId.MarinatedMushrooms,
    materials: {
      [ItemId.Mushroom]: 1,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.MushroomSoup]: {
    product: ItemId.MushroomSoup,
    materials: {
      [ItemId.Mushroom]: 1,
      [ItemId.Milk]: 2,
    },
  },
  [ItemId.Pizza]: {
    product: ItemId.Pizza,
    materials: {
      [ItemId.Flour]: 1,
      [ItemId.RedBerries]: 2,
      [ItemId.Tomato]: 2,
      [ItemId.Milk]: 2,
    },
  },
  [ItemId.Carbonara]: {
    product: ItemId.Carbonara,
    materials: {
      [ItemId.Flour]: 1,
      [ItemId.Egg]: 2,
      [ItemId.Milk]: 2,
    },
  },
  [ItemId.Cake]: {
    product: ItemId.Cake,
    materials: {
      [ItemId.Flour]: 5,
      [ItemId.RedBerries]: 8,
      [ItemId.Milk]: 7,
      [ItemId.Egg]: 8,
      [ItemId.Honey]: 2,
    },
  },
  [ItemId.JolthogSGloves]: {
    product: ItemId.JolthogSGloves,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.ElectricOrgan]: 5,
      [ItemId.PaldiumFragment]: 5,
    },
  },
  [ItemId.JolthogCrystSGloves]: {
    product: ItemId.JolthogCrystSGloves,
    materials: {
      [ItemId.Cloth]: 6,
      [ItemId.IceOrgan]: 6,
      [ItemId.PaldiumFragment]: 6,
    },
  },
  [ItemId.FoxparksHarness]: {
    product: ItemId.FoxparksHarness,
    materials: {
      [ItemId.Leather]: 3,
      [ItemId.FlameOrgan]: 5,
      [ItemId.PaldiumFragment]: 5,
    },
  },
  [ItemId.FoxparksCrystSHarness]: {
    product: ItemId.FoxparksCrystSHarness,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.IceOrgan]: 10,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.MelpacaSaddle]: {
    product: ItemId.MelpacaSaddle,
    materials: {
      [ItemId.Leather]: 3,
      [ItemId.Wool]: 5,
      [ItemId.PaldiumFragment]: 5,
    },
  },
  [ItemId.SweepaSaddle]: {
    product: ItemId.SweepaSaddle,
    materials: {
      [ItemId.Leather]: 3,
      [ItemId.Cloth]: 8,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.RushoarSaddle]: {
    product: ItemId.RushoarSaddle,
    materials: {
      [ItemId.Leather]: 3,
      [ItemId.Stone]: 10,
      [ItemId.PaldiumFragment]: 5,
    },
  },
  [ItemId.CelaraySGloves]: {
    product: ItemId.CelaraySGloves,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.PalFluids]: 3,
      [ItemId.PaldiumFragment]: 5,
    },
  },
  [ItemId.CelarayLuxSGloves]: {
    product: ItemId.CelarayLuxSGloves,
    materials: {
      [ItemId.Cloth]: 10,
      [ItemId.ElectricOrgan]: 5,
      [ItemId.PaldiumFragment]: 6,
    },
  },
  [ItemId.LifmunkSSubmachineGun]: {
    product: ItemId.LifmunkSSubmachineGun,
    materials: {
      [ItemId.Ingot]: 5,
      [ItemId.Stone]: 10,
      [ItemId.Wood]: 20,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.DirehowlSSaddledHarness]: {
    product: ItemId.DirehowlSSaddledHarness,
    materials: {
      [ItemId.Leather]: 10,
      ["wood"]: 20,
      [ItemId.Fiber]: 15,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.TanzeeSAssaultRifle]: {
    product: ItemId.TanzeeSAssaultRifle,
    materials: {
      [ItemId.Ingot]: 5,
      [ItemId.Stone]: 15,
      [ItemId.Wood]: 15,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.SurfentSaddle]: {
    product: ItemId.SurfentSaddle,
    materials: {
      [ItemId.Leather]: 5,
      [ItemId.PalFluids]: 5,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.SurfentTerraSaddle]: {
    product: ItemId.SurfentTerraSaddle,
    materials: {
      [ItemId.Leather]: 6,
      [ItemId.Ingot]: 6,
      [ItemId.PaldiumFragment]: 12,
    },
  },
  [ItemId.EikthyrdeerSaddle]: {
    product: ItemId.EikthyrdeerSaddle,
    materials: {
      [ItemId.Leather]: 5,
      [ItemId.Fiber]: 20,
      [ItemId.Ingot]: 10,
      [ItemId.Horn]: 3,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.EikthyrdeerTerraSaddle]: {
    product: ItemId.EikthyrdeerTerraSaddle,
    materials: {
      [ItemId.Leather]: 6,
      [ItemId.Fiber]: 24,
      [ItemId.Ingot]: 12,
      [ItemId.Horn]: 3,
      [ItemId.PaldiumFragment]: 18,
    },
  },
  [ItemId.GrintaleSaddle]: {
    product: ItemId.GrintaleSaddle,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.HerbilSHarness]: {
    product: ItemId.HerbilSHarness,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 40,
      [ItemId.Ingot]: 20,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.PolapupSaddle]: {
    product: ItemId.PolapupSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 60,
      [ItemId.RefinedIngot]: 30,
      [ItemId.IceOrgan]: 6,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.UnivoltSaddle]: {
    product: ItemId.UnivoltSaddle,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.Ingot]: 5,
      [ItemId.ElectricOrgan]: 10,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.KillamariSGloves]: {
    product: ItemId.KillamariSGloves,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.VenomGland]: 5,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.KillamariPrimoSGloves]: {
    product: ItemId.KillamariPrimoSGloves,
    materials: {
      [ItemId.Cloth]: 6,
      [ItemId.PalFluids]: 4,
      [ItemId.PaldiumFragment]: 12,
    },
  },
  [ItemId.TocotocoSGloves]: {
    product: ItemId.TocotocoSGloves,
    materials: {
      [ItemId.Cloth]: 10,
      [ItemId.Leather]: 10,
      [ItemId.Fiber]: 15,
      [ItemId.FlameOrgan]: 10,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.NitewingSaddle]: {
    product: ItemId.NitewingSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.Ingot]: 15,
      [ItemId.Fiber]: 20,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.ArsoxSaddle]: {
    product: ItemId.ArsoxSaddle,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.Fiber]: 25,
      [ItemId.FlameOrgan]: 10,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.FlopieSNecklace]: {
    product: ItemId.FlopieSNecklace,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.Fiber]: 20,
      [ItemId.Ingot]: 5,
      [ItemId.PaldiumFragment]: 15,
    },
  },
  [ItemId.DigtoiseSHeadband]: {
    product: ItemId.DigtoiseSHeadband,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.Ingot]: 10,
      [ItemId.Stone]: 50,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.PengulletRocketLauncher]: {
    product: ItemId.PengulletRocketLauncher,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.Stone]: 20,
      [ItemId.Wood]: 30,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.PengulletLuxSRocketLauncher]: {
    product: ItemId.PengulletLuxSRocketLauncher,
    materials: {
      [ItemId.Ingot]: 24,
      [ItemId.Stone]: 24,
      [ItemId.Wood]: 36,
      [ItemId.ElectricOrgan]: 20,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.DinossomSaddle]: {
    product: ItemId.DinossomSaddle,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.Fiber]: 30,
      [ItemId.Ingot]: 10,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.DinossomLuxSaddle]: {
    product: ItemId.DinossomLuxSaddle,
    materials: {
      [ItemId.Leather]: 18,
      [ItemId.Fiber]: 36,
      [ItemId.Ingot]: 12,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.DaedreamSNecklace]: {
    product: ItemId.DaedreamSNecklace,
    materials: {
      [ItemId.Leather]: 5,
      [ItemId.Fiber]: 10,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.BroncherrySaddle]: {
    product: ItemId.BroncherrySaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.Ingot]: 15,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.BroncherryAquaSaddle]: {
    product: ItemId.BroncherryAquaSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Fiber]: 36,
      [ItemId.Ingot]: 18,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.VanwyrmSaddle]: {
    product: ItemId.VanwyrmSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.FlameOrgan]: 10,
      [ItemId.Ingot]: 15,
      [ItemId.Fiber]: 30,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.VanwyrmCrystSaddle]: {
    product: ItemId.VanwyrmCrystSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.IceOrgan]: 12,
      [ItemId.Ingot]: 18,
      [ItemId.Fiber]: 36,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.ChilletSaddle]: {
    product: ItemId.ChilletSaddle,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.Fiber]: 20,
      [ItemId.Cloth]: 5,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.ChilletIgnisSaddle]: {
    product: ItemId.ChilletIgnisSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.Cloth]: 10,
      [ItemId.FlameOrgan]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.HangyuSGloves]: {
    product: ItemId.HangyuSGloves,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.Leather]: 3,
      [ItemId.Fiber]: 10,
      [ItemId.Ingot]: 3,
      [ItemId.PaldiumFragment]: 10,
    },
  },
  [ItemId.HangyuCrystSGlove]: {
    product: ItemId.HangyuCrystSGlove,
    materials: {
      [ItemId.Cloth]: 6,
      [ItemId.Leather]: 3,
      [ItemId.Fiber]: 12,
      [ItemId.Ingot]: 3,
      [ItemId.PaldiumFragment]: 12,
    },
  },
  [ItemId.KingpacaSaddle]: {
    product: ItemId.KingpacaSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 20,
      [ItemId.Ingot]: 15,
      [ItemId.Wool]: 30,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.KingpacaCrystSaddle]: {
    product: ItemId.KingpacaCrystSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Fiber]: 24,
      [ItemId.Ingot]: 18,
      [ItemId.Wool]: 36,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.ElphidranSaddle]: {
    product: ItemId.ElphidranSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 20,
      [ItemId.Ingot]: 15,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.ElphidranAquaSaddle]: {
    product: ItemId.ElphidranAquaSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Fiber]: 24,
      [ItemId.Ingot]: 18,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.DazziSNecklace]: {
    product: ItemId.DazziSNecklace,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.Fiber]: 15,
      [ItemId.Ingot]: 10,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.DazziNoctSNecklace]: {
    product: ItemId.DazziNoctSNecklace,
    materials: {
      [ItemId.Leather]: 10,
      [ItemId.Fiber]: 30,
      [ItemId.DarkFragment]: 10,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.DazemuSaddle]: {
    product: ItemId.DazemuSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.Ingot]: 15,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.GaleclawSGloves]: {
    product: ItemId.GaleclawSGloves,
    materials: {
      [ItemId.Cloth]: 20,
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.MaraithSaddle]: {
    product: ItemId.MaraithSaddle,
    materials: {
      [ItemId.Leather]: 15,
      [ItemId.Fiber]: 25,
      [ItemId.Ingot]: 10,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.GhanglerSaddle]: {
    product: ItemId.GhanglerSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.Ingot]: 20,
      [ItemId.PalFluids]: 20,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.GhanglerIgnisSaddle]: {
    product: ItemId.GhanglerIgnisSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Cloth]: 12,
      [ItemId.Ingot]: 24,
      [ItemId.FlameOrgan]: 24,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.BralohaSaddle]: {
    product: ItemId.BralohaSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.RefinedIngot]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.PalumbaSaddle]: {
    product: ItemId.PalumbaSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Cloth]: 30,
      [ItemId.Ingot]: 30,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.MossandaSGrenadeLauncher]: {
    product: ItemId.MossandaSGrenadeLauncher,
    materials: {
      [ItemId.Ingot]: 50,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.MossandaLuxSGrenadeLauncher]: {
    product: ItemId.MossandaLuxSGrenadeLauncher,
    materials: {
      [ItemId.Ingot]: 60,
      [ItemId.HighQualityPalOil]: 24,
      [ItemId.PaldiumFragment]: 48,
    },
  },
  [ItemId.TarantrissSaddle]: {
    product: ItemId.TarantrissSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 50,
      [ItemId.VenomGland]: 30,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.ReptyroSaddle]: {
    product: ItemId.ReptyroSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Ingot]: 20,
      [ItemId.FlameOrgan]: 20,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.ReptyroCrystSaddle]: {
    product: ItemId.ReptyroCrystSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Ingot]: 24,
      [ItemId.IceOrgan]: 24,
      [ItemId.PaldiumFragment]: 24,
    },
  },
  [ItemId.PyrinSaddle]: {
    product: ItemId.PyrinSaddle,
    materials: {
      [ItemId.Leather]: 25,
      [ItemId.Fiber]: 30,
      [ItemId.FlameOrgan]: 20,
      [ItemId.Ingot]: 15,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.PyrinNoctSaddle]: {
    product: ItemId.PyrinNoctSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 36,
      [ItemId.FlameOrgan]: 24,
      [ItemId.Ingot]: 18,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.MammorestSaddle]: {
    product: ItemId.MammorestSaddle,
    materials: {
      [ItemId.Leather]: 50,
      [ItemId.Fiber]: 70,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.Wood]: 100,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.MammorestCrystSaddle]: {
    product: ItemId.MammorestCrystSaddle,
    materials: {
      [ItemId.Leather]: 60,
      [ItemId.Fiber]: 84,
      [ItemId.HighQualityPalOil]: 12,
      [ItemId.Wood]: 120,
      [ItemId.PaldiumFragment]: 72,
    },
  },
  [ItemId.AzurobeSaddle]: {
    product: ItemId.AzurobeSaddle,
    materials: {
      [ItemId.Leather]: 25,
      [ItemId.Fiber]: 30,
      [ItemId.Cloth]: 10,
      [ItemId.PalFluids]: 10,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.AzurobeCrystSaddle]: {
    product: ItemId.AzurobeCrystSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 36,
      [ItemId.Cloth]: 12,
      [ItemId.IceOrgan]: 12,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.JormuntideSaddle]: {
    product: ItemId.JormuntideSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 50,
      [ItemId.Ingot]: 50,
      [ItemId.PalFluids]: 20,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.JormuntideIgnisSaddle]: {
    product: ItemId.JormuntideIgnisSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.Fiber]: 60,
      [ItemId.Ingot]: 60,
      [ItemId.FlameOrgan]: 24,
      [ItemId.PaldiumFragment]: 48,
    },
  },
  [ItemId.KitsunSaddle]: {
    product: ItemId.KitsunSaddle,
    materials: {
      [ItemId.Leather]: 25,
      [ItemId.Cloth]: 10,
      [ItemId.FlameOrgan]: 15,
      [ItemId.PaldiumFragment]: 20,
    },
  },
  [ItemId.KitsunNoctSaddle]: {
    product: ItemId.KitsunNoctSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.FlameOrgan]: 30,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.RayhoundSaddle]: {
    product: ItemId.RayhoundSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 40,
      [ItemId.Ingot]: 20,
      [ItemId.ElectricOrgan]: 15,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.BlazehowlSaddle]: {
    product: ItemId.BlazehowlSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Ingot]: 30,
      [ItemId.Fiber]: 50,
      [ItemId.FlameOrgan]: 20,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.BlazehowlNoctSaddle]: {
    product: ItemId.BlazehowlNoctSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.Ingot]: 36,
      [ItemId.Fiber]: 60,
      [ItemId.FlameOrgan]: 24,
      [ItemId.PaldiumFragment]: 36,
    },
  },
  [ItemId.ReindrixSaddle]: {
    product: ItemId.ReindrixSaddle,
    materials: {
      [ItemId.Leather]: 25,
      [ItemId.IceOrgan]: 10,
      [ItemId.Ingot]: 20,
      [ItemId.Horn]: 20,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.BeakonSaddle]: {
    product: ItemId.BeakonSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.Ingot]: 20,
      [ItemId.ElectricOrgan]: 20,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.RagnahawkSaddle]: {
    product: ItemId.RagnahawkSaddle,
    materials: {
      [ItemId.Leather]: 25,
      [ItemId.Cloth]: 15,
      [ItemId.Ingot]: 20,
      [ItemId.FlameOrgan]: 20,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.FalerisSaddle]: {
    product: ItemId.FalerisSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Cloth]: 10,
      [ItemId.RefinedIngot]: 30,
      [ItemId.FlameOrgan]: 25,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.FalerisAquaSaddle]: {
    product: ItemId.FalerisAquaSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.Plasteel]: 5,
      [ItemId.PalFluids]: 30,
      [ItemId.PaldiumFragment]: 75,
    },
  },
  [ItemId.QuivernSaddle]: {
    product: ItemId.QuivernSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Ingot]: 30,
      [ItemId.Cloth]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.QuivernBotanSaddle]: {
    product: ItemId.QuivernBotanSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Ingot]: 30,
      [ItemId.Cloth]: 20,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.HelzephyrSaddle]: {
    product: ItemId.HelzephyrSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Cloth]: 10,
      [ItemId.RefinedIngot]: 30,
      [ItemId.ElectricOrgan]: 20,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.HelzephyrLuxSaddle]: {
    product: ItemId.HelzephyrLuxSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Plasteel]: 10,
      [ItemId.ElectricOrgan]: 30,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.FenglopeSaddle]: {
    product: ItemId.FenglopeSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 30,
      [ItemId.Ingot]: 20,
      [ItemId.Cloth]: 20,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.FenglopeLuxSaddle]: {
    product: ItemId.FenglopeLuxSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 30,
      [ItemId.ElectricOrgan]: 20,
      [ItemId.HighQualityCloth]: 10,
      [ItemId.PaldiumFragment]: 45,
    },
  },
  [ItemId.SuzakuSaddle]: {
    product: ItemId.SuzakuSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.RefinedIngot]: 25,
      [ItemId.FlameOrgan]: 20,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.SuzakuAquaSaddle]: {
    product: ItemId.SuzakuAquaSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.RefinedIngot]: 30,
      [ItemId.PalFluids]: 24,
      [ItemId.PaldiumFragment]: 48,
    },
  },
  [ItemId.YakumoSaddle]: {
    product: ItemId.YakumoSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Fiber]: 50,
      [ItemId.Ingot]: 30,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.BlazamutSaddle]: {
    product: ItemId.BlazamutSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.RefinedIngot]: 30,
      [ItemId.Ingot]: 20,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.BlazamutRyuSaddle]: {
    product: ItemId.BlazamutRyuSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Plasteel]: 30,
      [ItemId.FlameOrgan]: 50,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.WumpoSaddle]: {
    product: ItemId.WumpoSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.IceOrgan]: 20,
      [ItemId.Fiber]: 50,
      [ItemId.RefinedIngot]: 10,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.WumpoBotanSaddle]: {
    product: ItemId.WumpoBotanSaddle,
    materials: {
      [ItemId.Leather]: 36,
      [ItemId.BeautifulFlower]: 24,
      [ItemId.Fiber]: 60,
      [ItemId.RefinedIngot]: 12,
      [ItemId.PaldiumFragment]: 48,
    },
  },
  [ItemId.WhalaskaSaddle]: {
    product: ItemId.WhalaskaSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Cloth]: 10,
      [ItemId.Ingot]: 20,
      [ItemId.IceOrgan]: 20,
      [ItemId.PaldiumFragment]: 25,
    },
  },
  [ItemId.WhalaskaIgnisSaddle]: {
    product: ItemId.WhalaskaIgnisSaddle,
    materials: {
      [ItemId.Leather]: 24,
      [ItemId.Cloth]: 12,
      [ItemId.Ingot]: 24,
      [ItemId.FlameOrgan]: 24,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.GrizzboltSMinigun]: {
    product: ItemId.GrizzboltSMinigun,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.Polymer]: 20,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.PaldiumFragment]: 75,
    },
  },
  [ItemId.ShadowbeakSaddle]: {
    product: ItemId.ShadowbeakSaddle,
    materials: {
      [ItemId.Leather]: 50,
      [ItemId.RefinedIngot]: 40,
      [ItemId.VenomGland]: 25,
      [ItemId.PaldiumFragment]: 45,
    },
  },
  [ItemId.AstegonSaddle]: {
    product: ItemId.AstegonSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.RefinedIngot]: 50,
      [ItemId.Ingot]: 50,
      [ItemId.PaldiumFragment]: 55,
    },
  },
  [ItemId.RelaxaurusMissileLauncher]: {
    product: ItemId.RelaxaurusMissileLauncher,
    materials: {
      [ItemId.RefinedIngot]: 100,
      [ItemId.Polymer]: 35,
      [ItemId.Ingot]: 100,
      [ItemId.PaldiumFragment]: 85,
    },
  },
  [ItemId.RelaxaurusLuxSMissileLauncher]: {
    product: ItemId.RelaxaurusLuxSMissileLauncher,
    materials: {
      [ItemId.RefinedIngot]: 120,
      [ItemId.Polymer]: 42,
      [ItemId.Ingot]: 120,
      [ItemId.PaldiumFragment]: 102,
    },
  },
  [ItemId.ShroomerSaddle]: {
    product: ItemId.ShroomerSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Mushroom]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.RefinedIngot]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.ShroomerNoctSaddle]: {
    product: ItemId.ShroomerNoctSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.MysteriousMushroom]: 20,
      [ItemId.Fiber]: 30,
      [ItemId.RefinedIngot]: 10,
      [ItemId.PaldiumFragment]: 30,
    },
  },
  [ItemId.FrostallionSaddle]: {
    product: ItemId.FrostallionSaddle,
    materials: {
      [ItemId.Leather]: 100,
      [ItemId.RefinedIngot]: 200,
      [ItemId.IceOrgan]: 50,
      [ItemId.PaldiumFragment]: 75,
    },
  },
  [ItemId.FrostallionNoctSaddle]: {
    product: ItemId.FrostallionNoctSaddle,
    materials: {
      [ItemId.Leather]: 120,
      [ItemId.RefinedIngot]: 240,
      [ItemId.VenomGland]: 60,
      [ItemId.PaldiumFragment]: 90,
    },
  },
  [ItemId.PaladiusSaddle]: {
    product: ItemId.PaladiusSaddle,
    materials: {
      [ItemId.Leather]: 100,
      [ItemId.RefinedIngot]: 200,
      [ItemId.Ingot]: 300,
      [ItemId.PaldiumFragment]: 85,
    },
  },
  [ItemId.NecromusSaddle]: {
    product: ItemId.NecromusSaddle,
    materials: {
      [ItemId.Leather]: 100,
      [ItemId.RefinedIngot]: 200,
      [ItemId.Ingot]: 300,
      [ItemId.PaldiumFragment]: 85,
    },
  },
  [ItemId.JetragonSMissileLauncher]: {
    product: ItemId.JetragonSMissileLauncher,
    materials: {
      [ItemId.Leather]: 100,
      [ItemId.RefinedIngot]: 200,
      [ItemId.CircuitBoard]: 50,
      [ItemId.PaldiumFragment]: 140,
    },
  },
  [ItemId.XenogardSaddle]: {
    product: ItemId.XenogardSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.MeteoriteFragment]: 30,
      [ItemId.PaldiumFragment]: 50,
    },
  },
  [ItemId.SelyneSaddle]: {
    product: ItemId.SelyneSaddle,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Plasteel]: 30,
      [ItemId.MeteoriteFragment]: 10,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.SmokieSHarness]: {
    product: ItemId.SmokieSHarness,
    materials: {
      [ItemId.Leather]: 20,
      [ItemId.Fiber]: 50,
      [ItemId.DarkFragment]: 10,
      [ItemId.PaldiumFragment]: 40,
    },
  },
  [ItemId.StarryonSaddle]: {
    product: ItemId.StarryonSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 15,
      [ItemId.DarkFragment]: 20,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.AzurmaneSaddle]: {
    product: ItemId.AzurmaneSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 15,
      [ItemId.ElectricOrgan]: 50,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.GildaneSaddle]: {
    product: ItemId.GildaneSaddle,
    materials: {
      [ItemId.Leather]: 40,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.PaldiumFragment]: 60,
    },
  },
  [ItemId.NyafiaSShotgun]: {
    product: ItemId.NyafiaSShotgun,
    materials: {
      [ItemId.RefinedIngot]: 50,
      [ItemId.DarkFragment]: 30,
      [ItemId.Polymer]: 30,
      [ItemId.PaldiumFragment]: 85,
    },
  },
  [ItemId.CelesdirSaddle]: {
    product: ItemId.CelesdirSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.HighQualityCloth]: 20,
      [ItemId.HighQualityRecoveryMeds]: 10,
      [ItemId.PaldiumFragment]: 75,
    },
  },
  [ItemId.SilvegisSaddle]: {
    product: ItemId.SilvegisSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.Hexolite]: 15,
      [ItemId.PaldiumFragment]: 75,
    },
  },
  [ItemId.BastigorSHammer]: {
    product: ItemId.BastigorSHammer,
    materials: {
      [ItemId.Hexolite]: 30,
      [ItemId.IceOrgan]: 50,
      [ItemId.PaldiumFragment]: 140,
    },
  },
  [ItemId.XenolordSaddle]: {
    product: ItemId.XenolordSaddle,
    materials: {
      [ItemId.Leather]: 30,
      [ItemId.DarkFragment]: 50,
      [ItemId.MeteoriteFragment]: 30,
      [ItemId.PaldiumFragment]: 200,
    },
  },
  [ItemId.NeptiliusSaddle]: {
    product: ItemId.NeptiliusSaddle,
    materials: {
      [ItemId.Leather]: 100,
      [ItemId.CoralumIngot]: 40,
      [ItemId.PalFluids]: 68,
      [ItemId.PaldiumFragment]: 200,
    },
  },
  [ItemId.GrilledChikipi]: {
    product: ItemId.GrilledChikipi,
    materials: {
      [ItemId.ChikipiPoultry]: 1,
    },
  },
  [ItemId.LamballKebab]: {
    product: ItemId.LamballKebab,
    materials: {
      [ItemId.LamballMutton]: 1,
    },
  },
  [ItemId.GrilledKelpsea]: {
    product: ItemId.GrilledKelpsea,
    materials: {
      [ItemId.RawKelpsea]: 1,
    },
  },
  [ItemId.GrilledGaleclaw]: {
    product: ItemId.GrilledGaleclaw,
    materials: {
      [ItemId.GaleclawPoultry]: 1,
    },
  },
  [ItemId.RoastRushoar]: {
    product: ItemId.RoastRushoar,
    materials: {
      [ItemId.RushoarPork]: 1,
    },
  },
  [ItemId.BroiledDumud]: {
    product: ItemId.BroiledDumud,
    materials: {
      [ItemId.RawDumud]: 1,
    },
  },
  [ItemId.RoastEikthyrdeer]: {
    product: ItemId.RoastEikthyrdeer,
    materials: {
      [ItemId.EikthyrdeerVenison]: 1,
    },
  },
  [ItemId.RoastReindrix]: {
    product: ItemId.RoastReindrix,
    materials: {
      [ItemId.ReindrixVenison]: 1,
    },
  },
  [ItemId.HerbRoastedCaprity]: {
    product: ItemId.HerbRoastedCaprity,
    materials: {
      [ItemId.CaprityMeat]: 1,
    },
  },
  [ItemId.MozzarinaSteak]: {
    product: ItemId.MozzarinaSteak,
    materials: {
      [ItemId.MozzarinaMeat]: 1,
    },
  },
  [ItemId.BroncherryRibRoast]: {
    product: ItemId.BroncherryRibRoast,
    materials: {
      [ItemId.BroncherryMeat]: 1,
    },
  },
  [ItemId.MammorestSteak]: {
    product: ItemId.MammorestSteak,
    materials: {
      [ItemId.MammorestMeat]: 1,
    },
  },
  [ItemId.MunchillSteak]: {
    product: ItemId.MunchillSteak,
    materials: {
      [ItemId.MunchillMeat]: 1,
    },
  },
  [ItemId.ChikipiSaut]: {
    product: ItemId.ChikipiSaut,
    materials: {
      [ItemId.ChikipiPoultry]: 1,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.HerbRoastedLamball]: {
    product: ItemId.HerbRoastedLamball,
    materials: {
      [ItemId.LamballMutton]: 1,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.GrilledLamball]: {
    product: ItemId.GrilledLamball,
    materials: {
      [ItemId.LamballMutton]: 1,
      [ItemId.Lettuce]: 2,
    },
  },
  [ItemId.StewedGaleclaw]: {
    product: ItemId.StewedGaleclaw,
    materials: {
      [ItemId.GaleclawPoultry]: 1,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.RushoarBaconNEggs]: {
    product: ItemId.RushoarBaconNEggs,
    materials: {
      [ItemId.RushoarPork]: 2,
      [ItemId.Egg]: 2,
    },
  },
  [ItemId.ReindrixStew]: {
    product: ItemId.ReindrixStew,
    materials: {
      [ItemId.ReindrixVenison]: 1,
      [ItemId.Tomato]: 2,
    },
  },
  [ItemId.RushoarGyoza]: {
    product: ItemId.RushoarGyoza,
    materials: {
      [ItemId.RushoarPork]: 1,
      [ItemId.Mushroom]: 1,
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.StirFriedVegetables]: {
    product: ItemId.StirFriedVegetables,
    materials: {
      [ItemId.Onion]: 2,
      [ItemId.Carrot]: 2,
    },
  },
  [ItemId.FrenchFries]: {
    product: ItemId.FrenchFries,
    materials: {
      [ItemId.Potato]: 2,
      [ItemId.HighQualityPalOil]: 1,
    },
  },
  [ItemId.FriedGloopieBalls]: {
    product: ItemId.FriedGloopieBalls,
    materials: {
      [ItemId.GloopieTentacle]: 2,
      [ItemId.Flour]: 3,
    },
  },
  [ItemId.JellietteSJigglyJelly]: {
    product: ItemId.JellietteSJigglyJelly,
    materials: {
      [ItemId.JellietteBellFlesh]: 2,
      [ItemId.PalFluids]: 2,
    },
  },
  [ItemId.JellroySJollyJelly]: {
    product: ItemId.JellroySJollyJelly,
    materials: {
      [ItemId.JellroyBellFlesh]: 2,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.FriedChikipi]: {
    product: ItemId.FriedChikipi,
    materials: {
      [ItemId.ChikipiPoultry]: 1,
      [ItemId.Flour]: 1,
      [ItemId.Egg]: 1,
      [ItemId.HighQualityPalOil]: 1,
    },
  },
  [ItemId.RushoarHotDog]: {
    product: ItemId.RushoarHotDog,
    materials: {
      [ItemId.RushoarPork]: 1,
      [ItemId.Flour]: 1,
      [ItemId.Lettuce]: 2,
    },
  },
  [ItemId.EikthyrdeerLocoMoco]: {
    product: ItemId.EikthyrdeerLocoMoco,
    materials: {
      [ItemId.EikthyrdeerVenison]: 1,
      [ItemId.RedBerries]: 2,
      [ItemId.Egg]: 2,
    },
  },
  [ItemId.EikthyrdeerStew]: {
    product: ItemId.EikthyrdeerStew,
    materials: {
      [ItemId.EikthyrdeerVenison]: 2,
      [ItemId.Mushroom]: 1,
      [ItemId.Milk]: 2,
    },
  },
  [ItemId.MozzarinaHamburger]: {
    product: ItemId.MozzarinaHamburger,
    materials: {
      [ItemId.MozzarinaMeat]: 1,
      [ItemId.Flour]: 1,
      [ItemId.Lettuce]: 2,
    },
  },
  [ItemId.MozzarinaCheeseburger]: {
    product: ItemId.MozzarinaCheeseburger,
    materials: {
      [ItemId.MozzarinaMeat]: 2,
      [ItemId.Flour]: 1,
      [ItemId.Tomato]: 2,
      [ItemId.Milk]: 2,
    },
  },
  [ItemId.FriedKelpsea]: {
    product: ItemId.FriedKelpsea,
    materials: {
      [ItemId.RawKelpsea]: 1,
      [ItemId.Flour]: 1,
      [ItemId.Egg]: 1,
      [ItemId.HighQualityPalOil]: 1,
    },
  },
  [ItemId.DumudChowder]: {
    product: ItemId.DumudChowder,
    materials: {
      [ItemId.RawDumud]: 1,
      [ItemId.Lettuce]: 2,
      [ItemId.Tomato]: 2,
    },
  },
  [ItemId.BroncherryFriedNoodles]: {
    product: ItemId.BroncherryFriedNoodles,
    materials: {
      [ItemId.BroncherryMeat]: 1,
      [ItemId.Onion]: 1,
      [ItemId.Carrot]: 1,
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.SpringRolls]: {
    product: ItemId.SpringRolls,
    materials: {
      [ItemId.Onion]: 2,
      [ItemId.Mushroom]: 2,
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.Gratin]: {
    product: ItemId.Gratin,
    materials: {
      [ItemId.Milk]: 2,
      [ItemId.Potato]: 2,
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.Minestrone]: {
    product: ItemId.Minestrone,
    materials: {
      [ItemId.Tomato]: 3,
      [ItemId.Carrot]: 2,
      [ItemId.Onion]: 2,
      [ItemId.Potato]: 1,
    },
  },
  [ItemId.SeafoodSalad]: {
    product: ItemId.SeafoodSalad,
    materials: {
      [ItemId.GloopieTentacle]: 3,
      [ItemId.Lettuce]: 4,
    },
  },
  [ItemId.MammorestCurry]: {
    product: ItemId.MammorestCurry,
    materials: {
      [ItemId.MammorestMeat]: 1,
      [ItemId.Onion]: 2,
      [ItemId.Carrot]: 2,
      [ItemId.Potato]: 2,
      [ItemId.RedBerries]: 2,
    },
  },
  [ItemId.GaleclawNikujaga]: {
    product: ItemId.GaleclawNikujaga,
    materials: {
      [ItemId.GaleclawPoultry]: 1,
      [ItemId.Onion]: 2,
      [ItemId.Carrot]: 2,
      [ItemId.Potato]: 2,
    },
  },
  [ItemId.MushroomQuiche]: {
    product: ItemId.MushroomQuiche,
    materials: {
      [ItemId.Flour]: 1,
      [ItemId.Mushroom]: 2,
      [ItemId.Onion]: 2,
      [ItemId.Egg]: 2,
      [ItemId.Milk]: 2,
    },
  },
  [ItemId.VitalRemedy]: {
    product: ItemId.VitalRemedy,
    materials: {
      [ItemId.LifeLotusS]: 4,
      [ItemId.RawKelpsea]: 3,
      [ItemId.GumossLeaf]: 2,
      [ItemId.PalFluids]: 2,
    },
  },
  [ItemId.StaminaRemedy]: {
    product: ItemId.StaminaRemedy,
    materials: {
      [ItemId.StaminaLotusS]: 4,
      [ItemId.EikthyrdeerVenison]: 3,
      [ItemId.Honey]: 2,
      [ItemId.PalFluids]: 2,
    },
  },
  [ItemId.MightRemedy]: {
    product: ItemId.MightRemedy,
    materials: {
      [ItemId.PowerLotusS]: 4,
      [ItemId.RushoarPork]: 3,
      [ItemId.MozzarinaMeat]: 2,
      [ItemId.PalFluids]: 2,
    },
  },
  [ItemId.SpeedRemedy]: {
    product: ItemId.SpeedRemedy,
    materials: {
      [ItemId.SpeedLotusS]: 4,
      [ItemId.RibbunyRibbon]: 3,
      [ItemId.KatressHair]: 2,
      [ItemId.PalFluids]: 2,
    },
  },
  [ItemId.BurdenRemedy]: {
    product: ItemId.BurdenRemedy,
    materials: {
      [ItemId.CarryingLotusS]: 4,
      [ItemId.SweeHair]: 3,
      [ItemId.CottonCandy]: 2,
      [ItemId.PalFluids]: 2,
    },
  },
  [ItemId.VitalElixir]: {
    product: ItemId.VitalElixir,
    materials: {
      [ItemId.LifeLotusL]: 6,
      [ItemId.GaleclawPoultry]: 3,
      [ItemId.KillamariTentacle]: 2,
      [ItemId.HighQualityPalOil]: 2,
    },
  },
  [ItemId.StaminaElixir]: {
    product: ItemId.StaminaElixir,
    materials: {
      [ItemId.StaminaLotusL]: 6,
      [ItemId.ReindrixVenison]: 3,
      [ItemId.CaprityMeat]: 2,
      [ItemId.HighQualityPalOil]: 2,
    },
  },
  [ItemId.MightElixir]: {
    product: ItemId.MightElixir,
    materials: {
      [ItemId.PowerLotusL]: 6,
      [ItemId.MammorestMeat]: 3,
      [ItemId.BroncherryMeat]: 2,
      [ItemId.HighQualityPalOil]: 2,
    },
  },
  [ItemId.SpeedElixir]: {
    product: ItemId.SpeedElixir,
    materials: {
      [ItemId.SpeedLotusL]: 6,
      [ItemId.DazziCloud]: 3,
      [ItemId.TocotocoFeather]: 2,
      [ItemId.HighQualityPalOil]: 2,
    },
  },
  [ItemId.BurdenElixir]: {
    product: ItemId.BurdenElixir,
    materials: {
      [ItemId.CarryingLotusL]: 6,
      [ItemId.LeezpunkCrest]: 3,
      [ItemId.RawDumud]: 2,
      [ItemId.HighQualityPalOil]: 2,
    },
  },
  [ItemId.BellanoirSSlab]: {
    product: ItemId.BellanoirSSlab,
    materials: {
      [ItemId.BellanoirSSlabFragment]: 4,
    },
  },
  [ItemId.BellanoirLiberoSSlab]: {
    product: ItemId.BellanoirLiberoSSlab,
    materials: {
      [ItemId.BellanoirLiberoSSlabFragment]: 4,
    },
  },
  [ItemId.BellanoirLiberoUltraSlab]: {
    product: ItemId.BellanoirLiberoUltraSlab,
    materials: {
      [ItemId.BellanoirLiberoUltraSlabFragment]: 4,
    },
  },
  [ItemId.BlazamutRyuSlab]: {
    product: ItemId.BlazamutRyuSlab,
    materials: {
      [ItemId.BlazamutRyuSlabFragment]: 4,
    },
  },
  [ItemId.BlazamutRyuUltraSlab]: {
    product: ItemId.BlazamutRyuUltraSlab,
    materials: {
      [ItemId.BlazamutRyuUltraSlabFragment]: 4,
    },
  },
  [ItemId.XenolordSlab]: {
    product: ItemId.XenolordSlab,
    materials: {
      [ItemId.XenolordSlabFragment]: 4,
    },
  },
  [ItemId.XenolordUltraSlab]: {
    product: ItemId.XenolordUltraSlab,
    materials: {
      [ItemId.XenolordUltraSlabFragment]: 4,
    },
  },
  [ItemId.SmallPalSoul]: {
    product: ItemId.SmallPalSoul,
    materials: {
      [ItemId.MediumPalSoul]: 1,
    },
  },
  [ItemId.MediumPalSoul]: {
    product: ItemId.MediumPalSoul,
    materials: {
      [ItemId.LargePalSoul]: 1,
    },
  },
  [ItemId.LargePalSoul]: {
    product: ItemId.LargePalSoul,
    materials: {
      [ItemId.GiantPalSoul]: 1,
    },
  },
  [ItemId.GiantPalSoul]: {
    product: ItemId.GiantPalSoul,
    materials: {
      [ItemId.LargePalSoul]: 2,
    },
  },
  [ItemId.WitchSCrown]: {
    product: ItemId.WitchSCrown,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
  [ItemId.HornsOfSupremacy]: {
    product: ItemId.HornsOfSupremacy,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
  [ItemId.ZoeHat]: {
    product: ItemId.ZoeHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.AxelHat]: {
    product: ItemId.AxelHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.LilyHat]: {
    product: ItemId.LilyHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.VictorHat]: {
    product: ItemId.VictorHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.MarcusHat]: {
    product: ItemId.MarcusHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.SayaHat]: {
    product: ItemId.SayaHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.BjornHat]: {
    product: ItemId.BjornHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.LockpickingToolV1]: {
    product: ItemId.LockpickingToolV1,
    materials: {
      [ItemId.Ingot]: 10,
      [ItemId.PaldiumFragment]: 10,
      [ItemId.Nail]: 5,
    },
  },
  [ItemId.LockpickingToolV2]: {
    product: ItemId.LockpickingToolV2,
    materials: {
      [ItemId.Ingot]: 20,
      [ItemId.PaldiumFragment]: 20,
      [ItemId.Nail]: 10,
    },
  },
  [ItemId.LockpickingToolV3]: {
    product: ItemId.LockpickingToolV3,
    materials: {
      [ItemId.PalMetalIngot]: 30,
      [ItemId.PaldiumFragment]: 30,
      [ItemId.Nail]: 20,
    },
  },
  [ItemId.CattivaHat]: {
    product: ItemId.CattivaHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.LamballHelm]: {
    product: ItemId.LamballHelm,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.CawgnitoHat]: {
    product: ItemId.CawgnitoHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.DumudHelm]: {
    product: ItemId.DumudHelm,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.SibelyxHat]: {
    product: ItemId.SibelyxHat,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.LyleenFloralCap]: {
    product: ItemId.LyleenFloralCap,
    materials: {
      [ItemId.Cloth]: 1,
    },
  },
  [ItemId.GoldCoin]: {
    product: ItemId.GoldCoin,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
  [ItemId.SwordSchematic2]: {
    product: ItemId.SwordSchematic2,
    materials: {
      [ItemId.SwordSchematic1]: 5,
    },
  },
  [ItemId.SwordSchematic3]: {
    product: ItemId.SwordSchematic3,
    materials: {
      [ItemId.SwordSchematic2]: 5,
    },
  },
  [ItemId.SwordSchematic4]: {
    product: ItemId.SwordSchematic4,
    materials: {
      [ItemId.SwordSchematic3]: 5,
    },
  },
  [ItemId.KatanaSchematic2]: {
    product: ItemId.KatanaSchematic2,
    materials: {
      [ItemId.KatanaSchematic1]: 5,
    },
  },
  [ItemId.KatanaSchematic3]: {
    product: ItemId.KatanaSchematic3,
    materials: {
      [ItemId.KatanaSchematic2]: 5,
    },
  },
  [ItemId.KatanaSchematic4]: {
    product: ItemId.KatanaSchematic4,
    materials: {
      [ItemId.KatanaSchematic3]: 5,
    },
  },
  [ItemId.BeamSwordSchematic2]: {
    product: ItemId.BeamSwordSchematic2,
    materials: {
      [ItemId.BeamSwordSchematic1]: 5,
    },
  },
  [ItemId.BeamSwordSchematic3]: {
    product: ItemId.BeamSwordSchematic3,
    materials: {
      [ItemId.BeamSwordSchematic2]: 5,
    },
  },
  [ItemId.BeamSwordSchematic4]: {
    product: ItemId.BeamSwordSchematic4,
    materials: {
      [ItemId.BeamSwordSchematic3]: 5,
    },
  },
  [ItemId.OldBowSchematic2]: {
    product: ItemId.OldBowSchematic2,
    materials: {
      [ItemId.OldBowSchematic1]: 5,
    },
  },
  [ItemId.OldBowSchematic3]: {
    product: ItemId.OldBowSchematic3,
    materials: {
      [ItemId.OldBowSchematic2]: 5,
    },
  },
  [ItemId.OldBowSchematic4]: {
    product: ItemId.OldBowSchematic4,
    materials: {
      [ItemId.OldBowSchematic3]: 5,
    },
  },
  [ItemId.CrossbowSchematic2]: {
    product: ItemId.CrossbowSchematic2,
    materials: {
      [ItemId.CrossbowSchematic1]: 5,
    },
  },
  [ItemId.CrossbowSchematic3]: {
    product: ItemId.CrossbowSchematic3,
    materials: {
      [ItemId.CrossbowSchematic2]: 5,
    },
  },
  [ItemId.CrossbowSchematic4]: {
    product: ItemId.CrossbowSchematic4,
    materials: {
      [ItemId.CrossbowSchematic3]: 5,
    },
  },
  [ItemId.FireArrowCrossbowSchematic2]: {
    product: ItemId.FireArrowCrossbowSchematic2,
    materials: {
      [ItemId.FireArrowCrossbowSchematic1]: 5,
    },
  },
  [ItemId.FireArrowCrossbowSchematic3]: {
    product: ItemId.FireArrowCrossbowSchematic3,
    materials: {
      [ItemId.FireArrowCrossbowSchematic2]: 5,
    },
  },
  [ItemId.FireArrowCrossbowSchematic4]: {
    product: ItemId.FireArrowCrossbowSchematic4,
    materials: {
      [ItemId.FireArrowCrossbowSchematic3]: 5,
    },
  },
  [ItemId.PoisonArrowCrossbowSchematic2]: {
    product: ItemId.PoisonArrowCrossbowSchematic2,
    materials: {
      [ItemId.PoisonArrowCrossbowSchematic1]: 5,
    },
  },
  [ItemId.PoisonArrowCrossbowSchematic3]: {
    product: ItemId.PoisonArrowCrossbowSchematic3,
    materials: {
      [ItemId.PoisonArrowCrossbowSchematic2]: 5,
    },
  },
  [ItemId.PoisonArrowCrossbowSchematic4]: {
    product: ItemId.PoisonArrowCrossbowSchematic4,
    materials: {
      [ItemId.PoisonArrowCrossbowSchematic3]: 5,
    },
  },
  [ItemId.MakeshiftHandgunSchematic2]: {
    product: ItemId.MakeshiftHandgunSchematic2,
    materials: {
      [ItemId.MakeshiftHandgunSchematic1]: 5,
    },
  },
  [ItemId.MakeshiftHandgunSchematic3]: {
    product: ItemId.MakeshiftHandgunSchematic3,
    materials: {
      [ItemId.MakeshiftHandgunSchematic2]: 5,
    },
  },
  [ItemId.MakeshiftHandgunSchematic4]: {
    product: ItemId.MakeshiftHandgunSchematic4,
    materials: {
      [ItemId.MakeshiftHandgunSchematic3]: 5,
    },
  },
  [ItemId.MusketSchematic2]: {
    product: ItemId.MusketSchematic2,
    materials: {
      [ItemId.MusketSchematic1]: 5,
    },
  },
  [ItemId.MusketSchematic3]: {
    product: ItemId.MusketSchematic3,
    materials: {
      [ItemId.MusketSchematic2]: 5,
    },
  },
  [ItemId.MusketSchematic4]: {
    product: ItemId.MusketSchematic4,
    materials: {
      [ItemId.MusketSchematic3]: 5,
    },
  },
  [ItemId.HandgunSchematic2]: {
    product: ItemId.HandgunSchematic2,
    materials: {
      [ItemId.HandgunSchematic1]: 5,
    },
  },
  [ItemId.HandgunSchematic3]: {
    product: ItemId.HandgunSchematic3,
    materials: {
      [ItemId.HandgunSchematic2]: 5,
    },
  },
  [ItemId.HandgunSchematic4]: {
    product: ItemId.HandgunSchematic4,
    materials: {
      [ItemId.HandgunSchematic3]: 5,
    },
  },
  [ItemId.OldRevolverSchematic2]: {
    product: ItemId.OldRevolverSchematic2,
    materials: {
      [ItemId.OldRevolverSchematic1]: 5,
    },
  },
  [ItemId.OldRevolverSchematic3]: {
    product: ItemId.OldRevolverSchematic3,
    materials: {
      [ItemId.OldRevolverSchematic2]: 5,
    },
  },
  [ItemId.OldRevolverSchematic4]: {
    product: ItemId.OldRevolverSchematic4,
    materials: {
      [ItemId.OldRevolverSchematic3]: 5,
    },
  },
  [ItemId.SingleShotRifleSchematic2]: {
    product: ItemId.SingleShotRifleSchematic2,
    materials: {
      [ItemId.SingleShotRifleSchematic1]: 5,
    },
  },
  [ItemId.SingleShotRifleSchematic3]: {
    product: ItemId.SingleShotRifleSchematic3,
    materials: {
      [ItemId.SingleShotRifleSchematic2]: 5,
    },
  },
  [ItemId.SingleShotRifleSchematic4]: {
    product: ItemId.SingleShotRifleSchematic4,
    materials: {
      [ItemId.SingleShotRifleSchematic3]: 5,
    },
  },
  [ItemId.SemiAutoRifleSchematic2]: {
    product: ItemId.SemiAutoRifleSchematic2,
    materials: {
      [ItemId.SemiAutoRifleSchematic1]: 5,
    },
  },
  [ItemId.SemiAutoRifleSchematic3]: {
    product: ItemId.SemiAutoRifleSchematic3,
    materials: {
      [ItemId.SemiAutoRifleSchematic2]: 5,
    },
  },
  [ItemId.SemiAutoRifleSchematic4]: {
    product: ItemId.SemiAutoRifleSchematic4,
    materials: {
      [ItemId.SemiAutoRifleSchematic3]: 5,
    },
  },
  [ItemId.MakeshiftAssaultRifleSchematic2]: {
    product: ItemId.MakeshiftAssaultRifleSchematic2,
    materials: {
      [ItemId.MakeshiftAssaultRifleSchematic1]: 5,
    },
  },
  [ItemId.MakeshiftAssaultRifleSchematic3]: {
    product: ItemId.MakeshiftAssaultRifleSchematic3,
    materials: {
      [ItemId.MakeshiftAssaultRifleSchematic2]: 5,
    },
  },
  [ItemId.MakeshiftAssaultRifleSchematic4]: {
    product: ItemId.MakeshiftAssaultRifleSchematic4,
    materials: {
      [ItemId.MakeshiftAssaultRifleSchematic3]: 5,
    },
  },
  [ItemId.AssaultRifleSchematic2]: {
    product: ItemId.AssaultRifleSchematic2,
    materials: {
      [ItemId.AssaultRifleSchematic1]: 5,
    },
  },
  [ItemId.AssaultRifleSchematic3]: {
    product: ItemId.AssaultRifleSchematic3,
    materials: {
      [ItemId.AssaultRifleSchematic2]: 5,
    },
  },
  [ItemId.AssaultRifleSchematic4]: {
    product: ItemId.AssaultRifleSchematic4,
    materials: {
      [ItemId.AssaultRifleSchematic3]: 5,
    },
  },
  [ItemId.MakeshiftShotgunSchematic2]: {
    product: ItemId.MakeshiftShotgunSchematic2,
    materials: {
      [ItemId.MakeshiftShotgunSchematic1]: 5,
    },
  },
  [ItemId.MakeshiftShotgunSchematic3]: {
    product: ItemId.MakeshiftShotgunSchematic3,
    materials: {
      [ItemId.MakeshiftShotgunSchematic2]: 5,
    },
  },
  [ItemId.MakeshiftShotgunSchematic4]: {
    product: ItemId.MakeshiftShotgunSchematic4,
    materials: {
      [ItemId.MakeshiftShotgunSchematic3]: 5,
    },
  },
  [ItemId.DoubleBarreledShotgunSchematic2]: {
    product: ItemId.DoubleBarreledShotgunSchematic2,
    materials: {
      [ItemId.DoubleBarreledShotgunSchematic1]: 5,
    },
  },
  [ItemId.DoubleBarreledShotgunSchematic3]: {
    product: ItemId.DoubleBarreledShotgunSchematic3,
    materials: {
      [ItemId.DoubleBarreledShotgunSchematic2]: 5,
    },
  },
  [ItemId.DoubleBarreledShotgunSchematic4]: {
    product: ItemId.DoubleBarreledShotgunSchematic4,
    materials: {
      [ItemId.DoubleBarreledShotgunSchematic3]: 5,
    },
  },
  [ItemId.PumpActionShotgunSchematic2]: {
    product: ItemId.PumpActionShotgunSchematic2,
    materials: {
      [ItemId.PumpActionShotgunSchematic1]: 5,
    },
  },
  [ItemId.PumpActionShotgunSchematic3]: {
    product: ItemId.PumpActionShotgunSchematic3,
    materials: {
      [ItemId.PumpActionShotgunSchematic2]: 5,
    },
  },
  [ItemId.PumpActionShotgunSchematic4]: {
    product: ItemId.PumpActionShotgunSchematic4,
    materials: {
      [ItemId.PumpActionShotgunSchematic3]: 5,
    },
  },
  [ItemId.SemiAutoShotgunSchematic2]: {
    product: ItemId.SemiAutoShotgunSchematic2,
    materials: {
      [ItemId.SemiAutoShotgunSchematic1]: 5,
    },
  },
  [ItemId.SemiAutoShotgunSchematic3]: {
    product: ItemId.SemiAutoShotgunSchematic3,
    materials: {
      [ItemId.SemiAutoShotgunSchematic2]: 5,
    },
  },
  [ItemId.SemiAutoShotgunSchematic4]: {
    product: ItemId.SemiAutoShotgunSchematic4,
    materials: {
      [ItemId.SemiAutoShotgunSchematic3]: 5,
    },
  },
  [ItemId.MakeshiftSMGSchematic2]: {
    product: ItemId.MakeshiftSMGSchematic2,
    materials: {
      [ItemId.MakeshiftSMGSchematic1]: 5,
    },
  },
  [ItemId.MakeshiftSMGSchematic3]: {
    product: ItemId.MakeshiftSMGSchematic3,
    materials: {
      [ItemId.MakeshiftSMGSchematic2]: 5,
    },
  },
  [ItemId.MakeshiftSMGSchematic4]: {
    product: ItemId.MakeshiftSMGSchematic4,
    materials: {
      [ItemId.MakeshiftSMGSchematic3]: 5,
    },
  },
  [ItemId.SMGSchematic2]: {
    product: ItemId.SMGSchematic2,
    materials: {
      [ItemId.SMGSchematic1]: 5,
    },
  },
  [ItemId.SMGSchematic3]: {
    product: ItemId.SMGSchematic3,
    materials: {
      [ItemId.SMGSchematic2]: 5,
    },
  },
  [ItemId.SMGSchematic4]: {
    product: ItemId.SMGSchematic4,
    materials: {
      [ItemId.SMGSchematic3]: 5,
    },
  },
  [ItemId.RocketLauncherSchematic2]: {
    product: ItemId.RocketLauncherSchematic2,
    materials: {
      [ItemId.RocketLauncherSchematic1]: 5,
    },
  },
  [ItemId.RocketLauncherSchematic3]: {
    product: ItemId.RocketLauncherSchematic3,
    materials: {
      [ItemId.RocketLauncherSchematic2]: 5,
    },
  },
  [ItemId.RocketLauncherSchematic4]: {
    product: ItemId.RocketLauncherSchematic4,
    materials: {
      [ItemId.RocketLauncherSchematic3]: 5,
    },
  },
  [ItemId.LaserRifleSchematic2]: {
    product: ItemId.LaserRifleSchematic2,
    materials: {
      [ItemId.LaserRifleSchematic1]: 5,
    },
  },
  [ItemId.LaserRifleSchematic3]: {
    product: ItemId.LaserRifleSchematic3,
    materials: {
      [ItemId.LaserRifleSchematic2]: 5,
    },
  },
  [ItemId.LaserRifleSchematic4]: {
    product: ItemId.LaserRifleSchematic4,
    materials: {
      [ItemId.LaserRifleSchematic3]: 5,
    },
  },
  [ItemId.FlamethrowerSchematic2]: {
    product: ItemId.FlamethrowerSchematic2,
    materials: {
      [ItemId.FlamethrowerSchematic1]: 5,
    },
  },
  [ItemId.FlamethrowerSchematic3]: {
    product: ItemId.FlamethrowerSchematic3,
    materials: {
      [ItemId.FlamethrowerSchematic2]: 5,
    },
  },
  [ItemId.FlamethrowerSchematic4]: {
    product: ItemId.FlamethrowerSchematic4,
    materials: {
      [ItemId.FlamethrowerSchematic3]: 5,
    },
  },
  [ItemId.GrenadeLauncherSchematic2]: {
    product: ItemId.GrenadeLauncherSchematic2,
    materials: {
      [ItemId.GrenadeLauncherSchematic1]: 5,
    },
  },
  [ItemId.GrenadeLauncherSchematic3]: {
    product: ItemId.GrenadeLauncherSchematic3,
    materials: {
      [ItemId.GrenadeLauncherSchematic2]: 5,
    },
  },
  [ItemId.GrenadeLauncherSchematic4]: {
    product: ItemId.GrenadeLauncherSchematic4,
    materials: {
      [ItemId.GrenadeLauncherSchematic3]: 5,
    },
  },
  [ItemId.GuidedMissileLauncherSchematic2]: {
    product: ItemId.GuidedMissileLauncherSchematic2,
    materials: {
      [ItemId.GuidedMissileLauncherSchematic1]: 5,
    },
  },
  [ItemId.GuidedMissileLauncherSchematic3]: {
    product: ItemId.GuidedMissileLauncherSchematic3,
    materials: {
      [ItemId.GuidedMissileLauncherSchematic2]: 5,
    },
  },
  [ItemId.GuidedMissileLauncherSchematic4]: {
    product: ItemId.GuidedMissileLauncherSchematic4,
    materials: {
      [ItemId.GuidedMissileLauncherSchematic3]: 5,
    },
  },
  [ItemId.MultiGuidedMissileLauncherSchematic1]: {
    product: ItemId.MultiGuidedMissileLauncherSchematic1,
    materials: {
      [ItemId.MultiGuidedMissileLauncherSchematic]: 5,
    },
  },
  [ItemId.MultiGuidedMissileLauncherSchematic2]: {
    product: ItemId.MultiGuidedMissileLauncherSchematic2,
    materials: {
      [ItemId.MultiGuidedMissileLauncherSchematic1]: 5,
    },
  },
  [ItemId.MultiGuidedMissileLauncherSchematic3]: {
    product: ItemId.MultiGuidedMissileLauncherSchematic3,
    materials: {
      [ItemId.MultiGuidedMissileLauncherSchematic2]: 5,
    },
  },
  [ItemId.MultiGuidedMissileLauncherSchematic4]: {
    product: ItemId.MultiGuidedMissileLauncherSchematic4,
    materials: {
      [ItemId.MultiGuidedMissileLauncherSchematic3]: 5,
    },
  },
  [ItemId.GatlingGunSchematic2]: {
    product: ItemId.GatlingGunSchematic2,
    materials: {
      [ItemId.GatlingGunSchematic1]: 5,
    },
  },
  [ItemId.GatlingGunSchematic3]: {
    product: ItemId.GatlingGunSchematic3,
    materials: {
      [ItemId.GatlingGunSchematic2]: 5,
    },
  },
  [ItemId.GatlingGunSchematic4]: {
    product: ItemId.GatlingGunSchematic4,
    materials: {
      [ItemId.GatlingGunSchematic3]: 5,
    },
  },
  [ItemId.LaserGatlingGunSchematic2]: {
    product: ItemId.LaserGatlingGunSchematic2,
    materials: {
      [ItemId.LaserGatlingGunSchematic1]: 5,
    },
  },
  [ItemId.LaserGatlingGunSchematic3]: {
    product: ItemId.LaserGatlingGunSchematic3,
    materials: {
      [ItemId.LaserGatlingGunSchematic2]: 5,
    },
  },
  [ItemId.LaserGatlingGunSchematic4]: {
    product: ItemId.LaserGatlingGunSchematic4,
    materials: {
      [ItemId.LaserGatlingGunSchematic3]: 5,
    },
  },
  [ItemId.PlasmaCannonSchematic2]: {
    product: ItemId.PlasmaCannonSchematic2,
    materials: {
      [ItemId.PlasmaCannonSchematic1]: 5,
    },
  },
  [ItemId.PlasmaCannonSchematic3]: {
    product: ItemId.PlasmaCannonSchematic3,
    materials: {
      [ItemId.PlasmaCannonSchematic2]: 5,
    },
  },
  [ItemId.PlasmaCannonSchematic4]: {
    product: ItemId.PlasmaCannonSchematic4,
    materials: {
      [ItemId.PlasmaCannonSchematic3]: 5,
    },
  },
  [ItemId.CompoundBowSchematic2]: {
    product: ItemId.CompoundBowSchematic2,
    materials: {
      [ItemId.CompoundBowSchematic1]: 5,
    },
  },
  [ItemId.CompoundBowSchematic3]: {
    product: ItemId.CompoundBowSchematic3,
    materials: {
      [ItemId.CompoundBowSchematic2]: 5,
    },
  },
  [ItemId.CompoundBowSchematic4]: {
    product: ItemId.CompoundBowSchematic4,
    materials: {
      [ItemId.CompoundBowSchematic3]: 5,
    },
  },
  [ItemId.AdvancedBowSchematic2]: {
    product: ItemId.AdvancedBowSchematic2,
    materials: {
      [ItemId.AdvancedBowSchematic1]: 5,
    },
  },
  [ItemId.AdvancedBowSchematic3]: {
    product: ItemId.AdvancedBowSchematic3,
    materials: {
      [ItemId.AdvancedBowSchematic2]: 5,
    },
  },
  [ItemId.AdvancedBowSchematic4]: {
    product: ItemId.AdvancedBowSchematic4,
    materials: {
      [ItemId.AdvancedBowSchematic3]: 5,
    },
  },
  [ItemId.EnergyShotgunSchematic2]: {
    product: ItemId.EnergyShotgunSchematic2,
    materials: {
      [ItemId.EnergyShotgunSchematic1]: 5,
    },
  },
  [ItemId.EnergyShotgunSchematic3]: {
    product: ItemId.EnergyShotgunSchematic3,
    materials: {
      [ItemId.EnergyShotgunSchematic2]: 5,
    },
  },
  [ItemId.EnergyShotgunSchematic4]: {
    product: ItemId.EnergyShotgunSchematic4,
    materials: {
      [ItemId.EnergyShotgunSchematic3]: 5,
    },
  },
  [ItemId.OverheatRifleSchematic2]: {
    product: ItemId.OverheatRifleSchematic2,
    materials: {
      [ItemId.OverheatRifleSchematic1]: 5,
    },
  },
  [ItemId.OverheatRifleSchematic3]: {
    product: ItemId.OverheatRifleSchematic3,
    materials: {
      [ItemId.OverheatRifleSchematic2]: 5,
    },
  },
  [ItemId.OverheatRifleSchematic4]: {
    product: ItemId.OverheatRifleSchematic4,
    materials: {
      [ItemId.OverheatRifleSchematic3]: 5,
    },
  },
  [ItemId.ChargeRifleSchematic2]: {
    product: ItemId.ChargeRifleSchematic2,
    materials: {
      [ItemId.ChargeRifleSchematic1]: 5,
    },
  },
  [ItemId.ChargeRifleSchematic3]: {
    product: ItemId.ChargeRifleSchematic3,
    materials: {
      [ItemId.ChargeRifleSchematic2]: 5,
    },
  },
  [ItemId.ChargeRifleSchematic4]: {
    product: ItemId.ChargeRifleSchematic4,
    materials: {
      [ItemId.ChargeRifleSchematic3]: 5,
    },
  },
  [ItemId.ExcaliburSchematic1]: {
    product: ItemId.ExcaliburSchematic1,
    materials: {
      [ItemId.ExcaliburSchematic]: 5,
    },
  },
  [ItemId.ExcaliburSchematic2]: {
    product: ItemId.ExcaliburSchematic2,
    materials: {
      [ItemId.ExcaliburSchematic1]: 5,
    },
  },
  [ItemId.ExcaliburSchematic3]: {
    product: ItemId.ExcaliburSchematic3,
    materials: {
      [ItemId.ExcaliburSchematic2]: 5,
    },
  },
  [ItemId.ExcaliburSchematic4]: {
    product: ItemId.ExcaliburSchematic4,
    materials: {
      [ItemId.ExcaliburSchematic3]: 5,
    },
  },
  [ItemId.TerraprismaSchematic1]: {
    product: ItemId.TerraprismaSchematic1,
    materials: {
      [ItemId.TerraprismaSchematic]: 5,
    },
  },
  [ItemId.TerraprismaSchematic2]: {
    product: ItemId.TerraprismaSchematic2,
    materials: {
      [ItemId.TerraprismaSchematic1]: 5,
    },
  },
  [ItemId.TerraprismaSchematic3]: {
    product: ItemId.TerraprismaSchematic3,
    materials: {
      [ItemId.TerraprismaSchematic2]: 5,
    },
  },
  [ItemId.TerraprismaSchematic4]: {
    product: ItemId.TerraprismaSchematic4,
    materials: {
      [ItemId.TerraprismaSchematic3]: 5,
    },
  },
  [ItemId.VortexBeaterSchematic1]: {
    product: ItemId.VortexBeaterSchematic1,
    materials: {
      [ItemId.VortexBeaterSchematic]: 5,
    },
  },
  [ItemId.VortexBeaterSchematic2]: {
    product: ItemId.VortexBeaterSchematic2,
    materials: {
      [ItemId.VortexBeaterSchematic1]: 5,
    },
  },
  [ItemId.VortexBeaterSchematic3]: {
    product: ItemId.VortexBeaterSchematic3,
    materials: {
      [ItemId.VortexBeaterSchematic2]: 5,
    },
  },
  [ItemId.VortexBeaterSchematic4]: {
    product: ItemId.VortexBeaterSchematic4,
    materials: {
      [ItemId.VortexBeaterSchematic3]: 5,
    },
  },
  [ItemId.NightglowSchematic1]: {
    product: ItemId.NightglowSchematic1,
    materials: {
      [ItemId.NightglowSchematic]: 5,
    },
  },
  [ItemId.NightglowSchematic2]: {
    product: ItemId.NightglowSchematic2,
    materials: {
      [ItemId.NightglowSchematic1]: 5,
    },
  },
  [ItemId.NightglowSchematic3]: {
    product: ItemId.NightglowSchematic3,
    materials: {
      [ItemId.NightglowSchematic2]: 5,
    },
  },
  [ItemId.NightglowSchematic4]: {
    product: ItemId.NightglowSchematic4,
    materials: {
      [ItemId.NightglowSchematic3]: 5,
    },
  },
  [ItemId.TerraBladeSchematic1]: {
    product: ItemId.TerraBladeSchematic1,
    materials: {
      [ItemId.TerraBladeSchematic]: 5,
    },
  },
  [ItemId.TerraBladeSchematic2]: {
    product: ItemId.TerraBladeSchematic2,
    materials: {
      [ItemId.TerraBladeSchematic1]: 5,
    },
  },
  [ItemId.TerraBladeSchematic3]: {
    product: ItemId.TerraBladeSchematic3,
    materials: {
      [ItemId.TerraBladeSchematic2]: 5,
    },
  },
  [ItemId.TerraBladeSchematic4]: {
    product: ItemId.TerraBladeSchematic4,
    materials: {
      [ItemId.TerraBladeSchematic3]: 5,
    },
  },
  [ItemId.ClothOutfitSchematic2]: {
    product: ItemId.ClothOutfitSchematic2,
    materials: {
      [ItemId.ClothOutfitSchematic1]: 5,
    },
  },
  [ItemId.ClothOutfitSchematic3]: {
    product: ItemId.ClothOutfitSchematic3,
    materials: {
      [ItemId.ClothOutfitSchematic2]: 5,
    },
  },
  [ItemId.ClothOutfitSchematic4]: {
    product: ItemId.ClothOutfitSchematic4,
    materials: {
      [ItemId.ClothOutfitSchematic3]: 5,
    },
  },
  [ItemId.TropicalOutfitSchematic2]: {
    product: ItemId.TropicalOutfitSchematic2,
    materials: {
      [ItemId.TropicalOutfitSchematic1]: 5,
    },
  },
  [ItemId.TropicalOutfitSchematic3]: {
    product: ItemId.TropicalOutfitSchematic3,
    materials: {
      [ItemId.TropicalOutfitSchematic2]: 5,
    },
  },
  [ItemId.TropicalOutfitSchematic4]: {
    product: ItemId.TropicalOutfitSchematic4,
    materials: {
      [ItemId.TropicalOutfitSchematic3]: 5,
    },
  },
  [ItemId.TundraOutfitSchematic2]: {
    product: ItemId.TundraOutfitSchematic2,
    materials: {
      [ItemId.TundraOutfitSchematic1]: 5,
    },
  },
  [ItemId.TundraOutfitSchematic3]: {
    product: ItemId.TundraOutfitSchematic3,
    materials: {
      [ItemId.TundraOutfitSchematic2]: 5,
    },
  },
  [ItemId.TundraOutfitSchematic4]: {
    product: ItemId.TundraOutfitSchematic4,
    materials: {
      [ItemId.TundraOutfitSchematic3]: 5,
    },
  },
  [ItemId.PeltArmorSchematic2]: {
    product: ItemId.PeltArmorSchematic2,
    materials: {
      [ItemId.PeltArmorSchematic1]: 5,
    },
  },
  [ItemId.PeltArmorSchematic3]: {
    product: ItemId.PeltArmorSchematic3,
    materials: {
      [ItemId.PeltArmorSchematic2]: 5,
    },
  },
  [ItemId.PeltArmorSchematic4]: {
    product: ItemId.PeltArmorSchematic4,
    materials: {
      [ItemId.PeltArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantPeltArmorSchematic2]: {
    product: ItemId.HeatResistantPeltArmorSchematic2,
    materials: {
      [ItemId.HeatResistantPeltArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantPeltArmorSchematic3]: {
    product: ItemId.HeatResistantPeltArmorSchematic3,
    materials: {
      [ItemId.HeatResistantPeltArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantPeltArmorSchematic4]: {
    product: ItemId.HeatResistantPeltArmorSchematic4,
    materials: {
      [ItemId.HeatResistantPeltArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantPeltArmorSchematic2]: {
    product: ItemId.ColdResistantPeltArmorSchematic2,
    materials: {
      [ItemId.ColdResistantPeltArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantPeltArmorSchematic3]: {
    product: ItemId.ColdResistantPeltArmorSchematic3,
    materials: {
      [ItemId.ColdResistantPeltArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantPeltArmorSchematic4]: {
    product: ItemId.ColdResistantPeltArmorSchematic4,
    materials: {
      [ItemId.ColdResistantPeltArmorSchematic3]: 5,
    },
  },
  [ItemId.MetalArmorSchematic2]: {
    product: ItemId.MetalArmorSchematic2,
    materials: {
      [ItemId.MetalArmorSchematic1]: 5,
    },
  },
  [ItemId.MetalArmorSchematic3]: {
    product: ItemId.MetalArmorSchematic3,
    materials: {
      [ItemId.MetalArmorSchematic2]: 5,
    },
  },
  [ItemId.MetalArmorSchematic4]: {
    product: ItemId.MetalArmorSchematic4,
    materials: {
      [ItemId.MetalArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantMetalArmorSchematic2]: {
    product: ItemId.HeatResistantMetalArmorSchematic2,
    materials: {
      [ItemId.HeatResistantMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantMetalArmorSchematic3]: {
    product: ItemId.HeatResistantMetalArmorSchematic3,
    materials: {
      [ItemId.HeatResistantMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantMetalArmorSchematic4]: {
    product: ItemId.HeatResistantMetalArmorSchematic4,
    materials: {
      [ItemId.HeatResistantMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantMetalArmorSchematic2]: {
    product: ItemId.ColdResistantMetalArmorSchematic2,
    materials: {
      [ItemId.ColdResistantMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantMetalArmorSchematic3]: {
    product: ItemId.ColdResistantMetalArmorSchematic3,
    materials: {
      [ItemId.ColdResistantMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantMetalArmorSchematic4]: {
    product: ItemId.ColdResistantMetalArmorSchematic4,
    materials: {
      [ItemId.ColdResistantMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.RefinedMetalArmorSchematic2]: {
    product: ItemId.RefinedMetalArmorSchematic2,
    materials: {
      [ItemId.RefinedMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.RefinedMetalArmorSchematic3]: {
    product: ItemId.RefinedMetalArmorSchematic3,
    materials: {
      [ItemId.RefinedMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.RefinedMetalArmorSchematic4]: {
    product: ItemId.RefinedMetalArmorSchematic4,
    materials: {
      [ItemId.RefinedMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmorSchematic2]: {
    product: ItemId.HeatResistantRefinedMetalArmorSchematic2,
    materials: {
      [ItemId.HeatResistantRefinedMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmorSchematic3]: {
    product: ItemId.HeatResistantRefinedMetalArmorSchematic3,
    materials: {
      [ItemId.HeatResistantRefinedMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantRefinedMetalArmorSchematic4]: {
    product: ItemId.HeatResistantRefinedMetalArmorSchematic4,
    materials: {
      [ItemId.HeatResistantRefinedMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmorSchematic2]: {
    product: ItemId.ColdResistantRefinedMetalArmorSchematic2,
    materials: {
      [ItemId.ColdResistantRefinedMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmorSchematic3]: {
    product: ItemId.ColdResistantRefinedMetalArmorSchematic3,
    materials: {
      [ItemId.ColdResistantRefinedMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantRefinedMetalArmorSchematic4]: {
    product: ItemId.ColdResistantRefinedMetalArmorSchematic4,
    materials: {
      [ItemId.ColdResistantRefinedMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.PalMetalArmorSchematic2]: {
    product: ItemId.PalMetalArmorSchematic2,
    materials: {
      [ItemId.PalMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.PalMetalArmorSchematic3]: {
    product: ItemId.PalMetalArmorSchematic3,
    materials: {
      [ItemId.PalMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.PalMetalArmorSchematic4]: {
    product: ItemId.PalMetalArmorSchematic4,
    materials: {
      [ItemId.PalMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantPalMetalArmorSchematic2]: {
    product: ItemId.HeatResistantPalMetalArmorSchematic2,
    materials: {
      [ItemId.HeatResistantPalMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantPalMetalArmorSchematic3]: {
    product: ItemId.HeatResistantPalMetalArmorSchematic3,
    materials: {
      [ItemId.HeatResistantPalMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantPalMetalArmorSchematic4]: {
    product: ItemId.HeatResistantPalMetalArmorSchematic4,
    materials: {
      [ItemId.HeatResistantPalMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantPalMetalArmorSchematic2]: {
    product: ItemId.ColdResistantPalMetalArmorSchematic2,
    materials: {
      [ItemId.ColdResistantPalMetalArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantPalMetalArmorSchematic3]: {
    product: ItemId.ColdResistantPalMetalArmorSchematic3,
    materials: {
      [ItemId.ColdResistantPalMetalArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantPalMetalArmorSchematic4]: {
    product: ItemId.ColdResistantPalMetalArmorSchematic4,
    materials: {
      [ItemId.ColdResistantPalMetalArmorSchematic3]: 5,
    },
  },
  [ItemId.PlasteelArmorSchematic2]: {
    product: ItemId.PlasteelArmorSchematic2,
    materials: {
      [ItemId.PlasteelArmorSchematic1]: 5,
    },
  },
  [ItemId.PlasteelArmorSchematic3]: {
    product: ItemId.PlasteelArmorSchematic3,
    materials: {
      [ItemId.PlasteelArmorSchematic2]: 5,
    },
  },
  [ItemId.PlasteelArmorSchematic4]: {
    product: ItemId.PlasteelArmorSchematic4,
    materials: {
      [ItemId.PlasteelArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantPlasteelArmorSchematic2]: {
    product: ItemId.HeatResistantPlasteelArmorSchematic2,
    materials: {
      [ItemId.HeatResistantPlasteelArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantPlasteelArmorSchematic3]: {
    product: ItemId.HeatResistantPlasteelArmorSchematic3,
    materials: {
      [ItemId.HeatResistantPlasteelArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantPlasteelArmorSchematic4]: {
    product: ItemId.HeatResistantPlasteelArmorSchematic4,
    materials: {
      [ItemId.HeatResistantPlasteelArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantPlasteelArmorSchematic2]: {
    product: ItemId.ColdResistantPlasteelArmorSchematic2,
    materials: {
      [ItemId.ColdResistantPlasteelArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantPlasteelArmorSchematic3]: {
    product: ItemId.ColdResistantPlasteelArmorSchematic3,
    materials: {
      [ItemId.ColdResistantPlasteelArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantPlasteelArmorSchematic4]: {
    product: ItemId.ColdResistantPlasteelArmorSchematic4,
    materials: {
      [ItemId.ColdResistantPlasteelArmorSchematic3]: 5,
    },
  },
  [ItemId.LightweightPlasteelArmorSchematic2]: {
    product: ItemId.LightweightPlasteelArmorSchematic2,
    materials: {
      [ItemId.LightweightPlasteelArmorSchematic1]: 5,
    },
  },
  [ItemId.LightweightPlasteelArmorSchematic3]: {
    product: ItemId.LightweightPlasteelArmorSchematic3,
    materials: {
      [ItemId.LightweightPlasteelArmorSchematic2]: 5,
    },
  },
  [ItemId.LightweightPlasteelArmorSchematic4]: {
    product: ItemId.LightweightPlasteelArmorSchematic4,
    materials: {
      [ItemId.LightweightPlasteelArmorSchematic3]: 5,
    },
  },
  [ItemId.HexoliteArmorSchematic2]: {
    product: ItemId.HexoliteArmorSchematic2,
    materials: {
      [ItemId.HexoliteArmorSchematic1]: 5,
    },
  },
  [ItemId.HexoliteArmorSchematic3]: {
    product: ItemId.HexoliteArmorSchematic3,
    materials: {
      [ItemId.HexoliteArmorSchematic2]: 5,
    },
  },
  [ItemId.HexoliteArmorSchematic4]: {
    product: ItemId.HexoliteArmorSchematic4,
    materials: {
      [ItemId.HexoliteArmorSchematic3]: 5,
    },
  },
  [ItemId.HeatResistantHexoliteArmorSchematic2]: {
    product: ItemId.HeatResistantHexoliteArmorSchematic2,
    materials: {
      [ItemId.HeatResistantHexoliteArmorSchematic1]: 5,
    },
  },
  [ItemId.HeatResistantHexoliteArmorSchematic3]: {
    product: ItemId.HeatResistantHexoliteArmorSchematic3,
    materials: {
      [ItemId.HeatResistantHexoliteArmorSchematic2]: 5,
    },
  },
  [ItemId.HeatResistantHexoliteArmorSchematic4]: {
    product: ItemId.HeatResistantHexoliteArmorSchematic4,
    materials: {
      [ItemId.HeatResistantHexoliteArmorSchematic3]: 5,
    },
  },
  [ItemId.ColdResistantHexoliteArmorSchematic2]: {
    product: ItemId.ColdResistantHexoliteArmorSchematic2,
    materials: {
      [ItemId.ColdResistantHexoliteArmorSchematic1]: 5,
    },
  },
  [ItemId.ColdResistantHexoliteArmorSchematic3]: {
    product: ItemId.ColdResistantHexoliteArmorSchematic3,
    materials: {
      [ItemId.ColdResistantHexoliteArmorSchematic2]: 5,
    },
  },
  [ItemId.ColdResistantHexoliteArmorSchematic4]: {
    product: ItemId.ColdResistantHexoliteArmorSchematic4,
    materials: {
      [ItemId.ColdResistantHexoliteArmorSchematic3]: 5,
    },
  },
  [ItemId.LightweightHexoliteArmorSchematic2]: {
    product: ItemId.LightweightHexoliteArmorSchematic2,
    materials: {
      [ItemId.LightweightHexoliteArmorSchematic1]: 5,
    },
  },
  [ItemId.LightweightHexoliteArmorSchematic3]: {
    product: ItemId.LightweightHexoliteArmorSchematic3,
    materials: {
      [ItemId.LightweightHexoliteArmorSchematic2]: 5,
    },
  },
  [ItemId.LightweightHexoliteArmorSchematic4]: {
    product: ItemId.LightweightHexoliteArmorSchematic4,
    materials: {
      [ItemId.LightweightHexoliteArmorSchematic3]: 5,
    },
  },
  [ItemId.FeatheredHairBandSchematic2]: {
    product: ItemId.FeatheredHairBandSchematic2,
    materials: {
      [ItemId.FeatheredHairBandSchematic1]: 5,
    },
  },
  [ItemId.FeatheredHairBandSchematic3]: {
    product: ItemId.FeatheredHairBandSchematic3,
    materials: {
      [ItemId.FeatheredHairBandSchematic2]: 5,
    },
  },
  [ItemId.FeatheredHairBandSchematic4]: {
    product: ItemId.FeatheredHairBandSchematic4,
    materials: {
      [ItemId.FeatheredHairBandSchematic3]: 5,
    },
  },
  [ItemId.MetalHelmSchematic2]: {
    product: ItemId.MetalHelmSchematic2,
    materials: {
      [ItemId.MetalHelmSchematic1]: 5,
    },
  },
  [ItemId.MetalHelmSchematic3]: {
    product: ItemId.MetalHelmSchematic3,
    materials: {
      [ItemId.MetalHelmSchematic2]: 5,
    },
  },
  [ItemId.MetalHelmSchematic4]: {
    product: ItemId.MetalHelmSchematic4,
    materials: {
      [ItemId.MetalHelmSchematic3]: 5,
    },
  },
  [ItemId.RefinedMetalHelmSchematic2]: {
    product: ItemId.RefinedMetalHelmSchematic2,
    materials: {
      [ItemId.RefinedMetalHelmSchematic1]: 5,
    },
  },
  [ItemId.RefinedMetalHelmSchematic3]: {
    product: ItemId.RefinedMetalHelmSchematic3,
    materials: {
      [ItemId.RefinedMetalHelmSchematic2]: 5,
    },
  },
  [ItemId.RefinedMetalHelmSchematic4]: {
    product: ItemId.RefinedMetalHelmSchematic4,
    materials: {
      [ItemId.RefinedMetalHelmSchematic3]: 5,
    },
  },
  [ItemId.PalMetalHelmSchematic2]: {
    product: ItemId.PalMetalHelmSchematic2,
    materials: {
      [ItemId.PalMetalHelmSchematic1]: 5,
    },
  },
  [ItemId.PalMetalHelmSchematic3]: {
    product: ItemId.PalMetalHelmSchematic3,
    materials: {
      [ItemId.PalMetalHelmSchematic2]: 5,
    },
  },
  [ItemId.PalMetalHelmSchematic4]: {
    product: ItemId.PalMetalHelmSchematic4,
    materials: {
      [ItemId.PalMetalHelmSchematic3]: 5,
    },
  },
  [ItemId.PlasteelHelmetSchematic2]: {
    product: ItemId.PlasteelHelmetSchematic2,
    materials: {
      [ItemId.PlasteelHelmetSchematic1]: 5,
    },
  },
  [ItemId.PlasteelHelmetSchematic3]: {
    product: ItemId.PlasteelHelmetSchematic3,
    materials: {
      [ItemId.PlasteelHelmetSchematic2]: 5,
    },
  },
  [ItemId.PlasteelHelmetSchematic4]: {
    product: ItemId.PlasteelHelmetSchematic4,
    materials: {
      [ItemId.PlasteelHelmetSchematic3]: 5,
    },
  },
  [ItemId.HexoliteHelmetSchematic2]: {
    product: ItemId.HexoliteHelmetSchematic2,
    materials: {
      [ItemId.HexoliteHelmetSchematic1]: 5,
    },
  },
  [ItemId.HexoliteHelmetSchematic3]: {
    product: ItemId.HexoliteHelmetSchematic3,
    materials: {
      [ItemId.HexoliteHelmetSchematic2]: 5,
    },
  },
  [ItemId.HexoliteHelmetSchematic4]: {
    product: ItemId.HexoliteHelmetSchematic4,
    materials: {
      [ItemId.HexoliteHelmetSchematic3]: 5,
    },
  },
  [ItemId.HallowedMaskSchematic1]: {
    product: ItemId.HallowedMaskSchematic1,
    materials: {
      [ItemId.HallowedMaskSchematic]: 5,
    },
  },
  [ItemId.HallowedMaskSchematic2]: {
    product: ItemId.HallowedMaskSchematic2,
    materials: {
      [ItemId.HallowedMaskSchematic1]: 5,
    },
  },
  [ItemId.HallowedMaskSchematic3]: {
    product: ItemId.HallowedMaskSchematic3,
    materials: {
      [ItemId.HallowedMaskSchematic2]: 5,
    },
  },
  [ItemId.HallowedMaskSchematic4]: {
    product: ItemId.HallowedMaskSchematic4,
    materials: {
      [ItemId.HallowedMaskSchematic3]: 5,
    },
  },
  [ItemId.HallowedHeadgearSchematic1]: {
    product: ItemId.HallowedHeadgearSchematic1,
    materials: {
      [ItemId.HallowedHeadgearSchematic]: 5,
    },
  },
  [ItemId.HallowedHeadgearSchematic2]: {
    product: ItemId.HallowedHeadgearSchematic2,
    materials: {
      [ItemId.HallowedHeadgearSchematic1]: 5,
    },
  },
  [ItemId.HallowedHeadgearSchematic3]: {
    product: ItemId.HallowedHeadgearSchematic3,
    materials: {
      [ItemId.HallowedHeadgearSchematic2]: 5,
    },
  },
  [ItemId.HallowedHeadgearSchematic4]: {
    product: ItemId.HallowedHeadgearSchematic4,
    materials: {
      [ItemId.HallowedHeadgearSchematic3]: 5,
    },
  },
  [ItemId.HallowedHelmetSchematic1]: {
    product: ItemId.HallowedHelmetSchematic1,
    materials: {
      [ItemId.HallowedHelmetSchematic]: 5,
    },
  },
  [ItemId.HallowedHelmetSchematic2]: {
    product: ItemId.HallowedHelmetSchematic2,
    materials: {
      [ItemId.HallowedHelmetSchematic1]: 5,
    },
  },
  [ItemId.HallowedHelmetSchematic3]: {
    product: ItemId.HallowedHelmetSchematic3,
    materials: {
      [ItemId.HallowedHelmetSchematic2]: 5,
    },
  },
  [ItemId.HallowedHelmetSchematic4]: {
    product: ItemId.HallowedHelmetSchematic4,
    materials: {
      [ItemId.HallowedHelmetSchematic3]: 5,
    },
  },
  [ItemId.HallowedHoodSchematic1]: {
    product: ItemId.HallowedHoodSchematic1,
    materials: {
      [ItemId.HallowedHoodSchematic]: 5,
    },
  },
  [ItemId.HallowedHoodSchematic2]: {
    product: ItemId.HallowedHoodSchematic2,
    materials: {
      [ItemId.HallowedHoodSchematic1]: 5,
    },
  },
  [ItemId.HallowedHoodSchematic3]: {
    product: ItemId.HallowedHoodSchematic3,
    materials: {
      [ItemId.HallowedHoodSchematic2]: 5,
    },
  },
  [ItemId.HallowedHoodSchematic4]: {
    product: ItemId.HallowedHoodSchematic4,
    materials: {
      [ItemId.HallowedHoodSchematic3]: 5,
    },
  },
  [ItemId.HallowedPlateMailSchematic1]: {
    product: ItemId.HallowedPlateMailSchematic1,
    materials: {
      [ItemId.HallowedPlateMailSchematic]: 5,
    },
  },
  [ItemId.HallowedPlateMailSchematic2]: {
    product: ItemId.HallowedPlateMailSchematic2,
    materials: {
      [ItemId.HallowedPlateMailSchematic1]: 5,
    },
  },
  [ItemId.HallowedPlateMailSchematic3]: {
    product: ItemId.HallowedPlateMailSchematic3,
    materials: {
      [ItemId.HallowedPlateMailSchematic2]: 5,
    },
  },
  [ItemId.HallowedPlateMailSchematic4]: {
    product: ItemId.HallowedPlateMailSchematic4,
    materials: {
      [ItemId.HallowedPlateMailSchematic3]: 5,
    },
  },
  [ItemId.ElizabeeSStaff]: {
    product: ItemId.ElizabeeSStaff,
    materials: {
      [ItemId.Wood]: 1,
      [ItemId.Honey]: 1,
    },
  },
  [ItemId.BeegardeSSpear]: {
    product: ItemId.BeegardeSSpear,
    materials: {
      [ItemId.Wood]: 1,
      [ItemId.Honey]: 1,
    },
  },
  [ItemId.XenolordSHead]: {
    product: ItemId.XenolordSHead,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
  [ItemId.BeginnerFishingRodChillet]: {
    product: ItemId.BeginnerFishingRodChillet,
    materials: {
      [ItemId.PaldiumFragment]: 10,
      [ItemId.PalFluids]: 3,
      [ItemId.Ingot]: 8,
      [ItemId.Fiber]: 8,
    },
  },
  [ItemId.BeginnerFishingRodGumoss]: {
    product: ItemId.BeginnerFishingRodGumoss,
    materials: {
      [ItemId.PaldiumFragment]: 20,
      [ItemId.PalFluids]: 6,
      [ItemId.Ingot]: 16,
      [ItemId.Fiber]: 16,
      [ItemId.CoralumOre]: 3,
    },
  },
  [ItemId.IntermediateFishingRodCattiva]: {
    product: ItemId.IntermediateFishingRodCattiva,
    materials: {
      [ItemId.PaldiumFragment]: 30,
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.Cement]: 10,
      [ItemId.Fiber]: 30,
    },
  },
  [ItemId.IntermediateFishingRodCroajiro]: {
    product: ItemId.IntermediateFishingRodCroajiro,
    materials: {
      [ItemId.PaldiumFragment]: 60,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.Cement]: 20,
      [ItemId.Fiber]: 60,
      [ItemId.CoralumOre]: 10,
    },
  },
  [ItemId.AdvancedFishingRodPengullet]: {
    product: ItemId.AdvancedFishingRodPengullet,
    materials: {
      [ItemId.PaldiumFragment]: 70,
      [ItemId.HighQualityPalOil]: 20,
      [ItemId.PalMetalIngot]: 15,
      [ItemId.CarbonFiber]: 30,
    },
  },
  [ItemId.AdvancedFishingRodDepresso]: {
    product: ItemId.AdvancedFishingRodDepresso,
    materials: {
      [ItemId.PaldiumFragment]: 140,
      [ItemId.HighQualityPalOil]: 40,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.CarbonFiber]: 60,
      [ItemId.CoralumIngot]: 5,
    },
  },
  [ItemId.SimpleBait]: {
    product: ItemId.SimpleBait,
    materials: {
      [ItemId.PalFluids]: 2,
      [ItemId.RedBerries]: 4,
      [ItemId.Flour]: 2,
    },
  },
  [ItemId.HighQualityBait]: {
    product: ItemId.HighQualityBait,
    materials: {
      [ItemId.PalFluids]: 3,
      [ItemId.Tomato]: 4,
      [ItemId.Flour]: 3,
    },
  },
  [ItemId.DeluxeBait]: {
    product: ItemId.DeluxeBait,
    materials: {
      [ItemId.HighQualityPalOil]: 4,
      [ItemId.Onion]: 4,
      [ItemId.Carrot]: 3,
      [ItemId.Flour]: 4,
    },
  },
  [ItemId.BeginnerBait]: {
    product: ItemId.BeginnerBait,
    materials: {
      [ItemId.PalFluids]: 4,
      [ItemId.RedBerries]: 2,
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.SweetBait]: {
    product: ItemId.SweetBait,
    materials: {
      [ItemId.PalFluids]: 4,
      [ItemId.RedBerries]: 2,
      [ItemId.Flour]: 1,
    },
  },
  [ItemId.LuckyBait]: {
    product: ItemId.LuckyBait,
    materials: {
      [ItemId.PalFluids]: 6,
      [ItemId.Tomato]: 5,
      [ItemId.Flour]: 3,
    },
  },
  [ItemId.QuickBait]: {
    product: ItemId.QuickBait,
    materials: {
      [ItemId.PalFluids]: 6,
      [ItemId.Tomato]: 5,
      [ItemId.Flour]: 3,
    },
  },
  [ItemId.AlluringBait]: {
    product: ItemId.AlluringBait,
    materials: {
      [ItemId.HighQualityPalOil]: 10,
      [ItemId.CavernMushroom]: 1,
      [ItemId.Carrot]: 3,
      [ItemId.Flour]: 5,
    },
  },
  [ItemId.RiskyBait]: {
    product: ItemId.RiskyBait,
    materials: {
      [ItemId.HighQualityPalOil]: 8,
      [ItemId.CavernMushroom]: 3,
      [ItemId.Carrot]: 3,
      [ItemId.Flour]: 5,
    },
  },
  [ItemId.FishingMagnet]: {
    product: ItemId.FishingMagnet,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
  [ItemId.PowerfulFishingMagnet]: {
    product: ItemId.PowerfulFishingMagnet,
    materials: {
      [ItemId.Hexolite]: 1,
    },
  },
  [ItemId.Excalibur]: {
    product: ItemId.Excalibur,
    materials: {
      [ItemId.HallowedBar]: 30,
    },
  },
  [ItemId.Excalibur1]: {
    product: ItemId.Excalibur1,
    materials: {
      [ItemId.HallowedBar]: 45,
    },
  },
  [ItemId.Excalibur2]: {
    product: ItemId.Excalibur2,
    materials: {
      [ItemId.HallowedBar]: 90,
    },
  },
  [ItemId.Excalibur3]: {
    product: ItemId.Excalibur3,
    materials: {
      [ItemId.HallowedBar]: 180,
    },
  },
  [ItemId.Excalibur4]: {
    product: ItemId.Excalibur4,
    materials: {
      [ItemId.HallowedBar]: 360,
    },
  },
  [ItemId.Terraprisma]: {
    product: ItemId.Terraprisma,
    materials: {
      [ItemId.HallowedBar]: 40,
      [ItemId.PalMetalIngot]: 20,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.Terraprisma1]: {
    product: ItemId.Terraprisma1,
    materials: {
      [ItemId.HallowedBar]: 60,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.Terraprisma2]: {
    product: ItemId.Terraprisma2,
    materials: {
      [ItemId.HallowedBar]: 120,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.Terraprisma3]: {
    product: ItemId.Terraprisma3,
    materials: {
      [ItemId.HallowedBar]: 240,
      [ItemId.PalMetalIngot]: 120,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.Terraprisma4]: {
    product: ItemId.Terraprisma4,
    materials: {
      [ItemId.HallowedBar]: 480,
      [ItemId.PalMetalIngot]: 240,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.VortexBeater]: {
    product: ItemId.VortexBeater,
    materials: {
      [ItemId.HallowedBar]: 40,
      [ItemId.PalMetalIngot]: 20,
      [ItemId.ElectricOrgan]: 5,
    },
  },
  [ItemId.VortexBeater1]: {
    product: ItemId.VortexBeater1,
    materials: {
      [ItemId.HallowedBar]: 60,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.ElectricOrgan]: 10,
    },
  },
  [ItemId.VortexBeater2]: {
    product: ItemId.VortexBeater2,
    materials: {
      [ItemId.HallowedBar]: 120,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.ElectricOrgan]: 15,
    },
  },
  [ItemId.VortexBeater3]: {
    product: ItemId.VortexBeater3,
    materials: {
      [ItemId.HallowedBar]: 240,
      [ItemId.PalMetalIngot]: 120,
      [ItemId.ElectricOrgan]: 20,
    },
  },
  [ItemId.VortexBeater4]: {
    product: ItemId.VortexBeater4,
    materials: {
      [ItemId.HallowedBar]: 480,
      [ItemId.PalMetalIngot]: 240,
      [ItemId.ElectricOrgan]: 25,
    },
  },
  [ItemId.Nightglow]: {
    product: ItemId.Nightglow,
    materials: {
      [ItemId.HallowedBar]: 40,
      [ItemId.PalMetalIngot]: 20,
      [ItemId.AncientCivilizationParts]: 3,
    },
  },
  [ItemId.Nightglow1]: {
    product: ItemId.Nightglow1,
    materials: {
      [ItemId.HallowedBar]: 60,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.AncientCivilizationParts]: 5,
    },
  },
  [ItemId.Nightglow2]: {
    product: ItemId.Nightglow2,
    materials: {
      [ItemId.HallowedBar]: 120,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.AncientCivilizationParts]: 7,
    },
  },
  [ItemId.Nightglow3]: {
    product: ItemId.Nightglow3,
    materials: {
      [ItemId.HallowedBar]: 240,
      [ItemId.PalMetalIngot]: 120,
      [ItemId.AncientCivilizationParts]: 10,
    },
  },
  [ItemId.Nightglow4]: {
    product: ItemId.Nightglow4,
    materials: {
      [ItemId.HallowedBar]: 480,
      [ItemId.PalMetalIngot]: 240,
      [ItemId.AncientCivilizationParts]: 15,
    },
  },
  [ItemId.TerraBlade]: {
    product: ItemId.TerraBlade,
    materials: {
      [ItemId.HallowedBar]: 40,
      [ItemId.PalMetalIngot]: 20,
      [ItemId.PredatorCore]: 1,
    },
  },
  [ItemId.TerraBlade1]: {
    product: ItemId.TerraBlade1,
    materials: {
      [ItemId.HallowedBar]: 60,
      [ItemId.PalMetalIngot]: 30,
      [ItemId.PredatorCore]: 3,
    },
  },
  [ItemId.TerraBlade2]: {
    product: ItemId.TerraBlade2,
    materials: {
      [ItemId.HallowedBar]: 120,
      [ItemId.PalMetalIngot]: 60,
      [ItemId.PredatorCore]: 5,
    },
  },
  [ItemId.TerraBlade3]: {
    product: ItemId.TerraBlade3,
    materials: {
      [ItemId.HallowedBar]: 240,
      [ItemId.PalMetalIngot]: 120,
      [ItemId.PredatorCore]: 10,
    },
  },
  [ItemId.TerraBlade4]: {
    product: ItemId.TerraBlade4,
    materials: {
      [ItemId.HallowedBar]: 480,
      [ItemId.PalMetalIngot]: 240,
      [ItemId.PredatorCore]: 15,
    },
  },
  [ItemId.HallowedMask]: {
    product: ItemId.HallowedMask,
    materials: {
      [ItemId.HallowedBar]: 20,
    },
  },
  [ItemId.HallowedMask1]: {
    product: ItemId.HallowedMask1,
    materials: {
      [ItemId.HallowedBar]: 30,
    },
  },
  [ItemId.HallowedMask2]: {
    product: ItemId.HallowedMask2,
    materials: {
      [ItemId.HallowedBar]: 60,
    },
  },
  [ItemId.HallowedMask3]: {
    product: ItemId.HallowedMask3,
    materials: {
      [ItemId.HallowedBar]: 120,
    },
  },
  [ItemId.HallowedMask4]: {
    product: ItemId.HallowedMask4,
    materials: {
      [ItemId.HallowedBar]: 240,
    },
  },
  [ItemId.HallowedHeadgear]: {
    product: ItemId.HallowedHeadgear,
    materials: {
      [ItemId.HallowedBar]: 20,
    },
  },
  [ItemId.HallowedHeadgear1]: {
    product: ItemId.HallowedHeadgear1,
    materials: {
      [ItemId.HallowedBar]: 30,
    },
  },
  [ItemId.HallowedHeadgear2]: {
    product: ItemId.HallowedHeadgear2,
    materials: {
      [ItemId.HallowedBar]: 60,
    },
  },
  [ItemId.HallowedHeadgear3]: {
    product: ItemId.HallowedHeadgear3,
    materials: {
      [ItemId.HallowedBar]: 120,
    },
  },
  [ItemId.HallowedHeadgear4]: {
    product: ItemId.HallowedHeadgear4,
    materials: {
      [ItemId.HallowedBar]: 240,
    },
  },
  [ItemId.HallowedPlateMail]: {
    product: ItemId.HallowedPlateMail,
    materials: {
      [ItemId.HallowedBar]: 20,
    },
  },
  [ItemId.HallowedPlateMail1]: {
    product: ItemId.HallowedPlateMail1,
    materials: {
      [ItemId.HallowedBar]: 30,
    },
  },
  [ItemId.HallowedPlateMail2]: {
    product: ItemId.HallowedPlateMail2,
    materials: {
      [ItemId.HallowedBar]: 60,
    },
  },
  [ItemId.HallowedPlateMail3]: {
    product: ItemId.HallowedPlateMail3,
    materials: {
      [ItemId.HallowedBar]: 120,
    },
  },
  [ItemId.HallowedPlateMail4]: {
    product: ItemId.HallowedPlateMail4,
    materials: {
      [ItemId.HallowedBar]: 240,
    },
  },
  [ItemId.HallowedHelmet]: {
    product: ItemId.HallowedHelmet,
    materials: {
      [ItemId.HallowedBar]: 20,
    },
  },
  [ItemId.HallowedHelmet1]: {
    product: ItemId.HallowedHelmet1,
    materials: {
      [ItemId.HallowedBar]: 30,
    },
  },
  [ItemId.HallowedHelmet2]: {
    product: ItemId.HallowedHelmet2,
    materials: {
      [ItemId.HallowedBar]: 60,
    },
  },
  [ItemId.HallowedHelmet3]: {
    product: ItemId.HallowedHelmet3,
    materials: {
      [ItemId.HallowedBar]: 120,
    },
  },
  [ItemId.HallowedHelmet4]: {
    product: ItemId.HallowedHelmet4,
    materials: {
      [ItemId.HallowedBar]: 240,
    },
  },
  [ItemId.HallowedHood]: {
    product: ItemId.HallowedHood,
    materials: {
      [ItemId.HallowedBar]: 20,
    },
  },
  [ItemId.HallowedHood1]: {
    product: ItemId.HallowedHood1,
    materials: {
      [ItemId.HallowedBar]: 30,
    },
  },
  [ItemId.HallowedHood2]: {
    product: ItemId.HallowedHood2,
    materials: {
      [ItemId.HallowedBar]: 60,
    },
  },
  [ItemId.HallowedHood3]: {
    product: ItemId.HallowedHood3,
    materials: {
      [ItemId.HallowedBar]: 120,
    },
  },
  [ItemId.HallowedHood4]: {
    product: ItemId.HallowedHood4,
    materials: {
      [ItemId.HallowedBar]: 240,
    },
  },
  [ItemId.Meowmere]: {
    product: ItemId.Meowmere,
    materials: {
      [ItemId.Ingot]: 22,
      [ItemId.PaldiumFragment]: 22,
      [ItemId.Coal]: 22,
      [ItemId.PredatorCore]: 3,
    },
  },
  [ItemId.CelestialSigil]: {
    product: ItemId.CelestialSigil,
    materials: {
      [ItemId.HallowedBar]: 100,
    },
  },
  [ItemId.MoonLordMask]: {
    product: ItemId.MoonLordMask,
    materials: {
      [ItemId.HallowedBar]: 1,
    },
  },
  [ItemId.EyeOfCthulhuMask]: {
    product: ItemId.EyeOfCthulhuMask,
    materials: {
      [ItemId.HallowedBar]: 1,
    },
  },
  [ItemId.LegendaryMeowmere]: {
    product: ItemId.LegendaryMeowmere,
    materials: {
      [ItemId.HallowedBar]: 22,
      [ItemId.PaldiumFragment]: 22,
      [ItemId.Coal]: 22,
      [ItemId.PredatorCore]: 5,
    },
  },
  [ItemId.NutrientTonic]: {
    product: ItemId.NutrientTonic,
    materials: {
      [ItemId.CottonCandy]: 10,
      [ItemId.Onion]: 10,
      ["None"]: 5,
    },
  },
  [ItemId.HartalisSaddle]: {
    product: ItemId.HartalisSaddle,
    materials: {
      [ItemId.Leather]: 100,
      [ItemId.HighQualityCloth]: 40,
      [ItemId.CoralumIngot]: 40,
      [ItemId.PaldiumFragment]: 200,
    },
  },
  [ItemId.ZoeSHalloweenCostume]: {
    product: ItemId.ZoeSHalloweenCostume,
    materials: {
      [ItemId.Cloth]: 5,
      [ItemId.Leather]: 5,
    },
  },
  [ItemId.DepressoHelmet]: {
    product: ItemId.DepressoHelmet,
    materials: {
      [ItemId.HighQualityCloth]: 5,
      [ItemId.VenomGland]: 25,
    },
  },
  [ItemId.DepressoArmor]: {
    product: ItemId.DepressoArmor,
    materials: {
      [ItemId.HighQualityCloth]: 15,
      [ItemId.VenomGland]: 75,
    },
  },
  [ItemId.HartalisSlab]: {
    product: ItemId.HartalisSlab,
    materials: {
      [ItemId.HartalisSlabFragment]: 4,
    },
  },
  [ItemId.HartalisUltraSlab]: {
    product: ItemId.HartalisUltraSlab,
    materials: {
      [ItemId.HartalisUltraSlabFragment]: 4,
    },
  },
  [ItemId.CrownOfSalvation]: {
    product: ItemId.CrownOfSalvation,
    materials: {
      [ItemId.Ingot]: 1,
    },
  },
};

export function hasRecipe(product: ItemId | string): boolean {
  return product in _ITEM_RECIPES;
}

export function getRecipe(product: ItemId): Recipe | undefined {
  const recipe = _ITEM_RECIPES[product];
  if (!recipe) {
    return undefined;
  }
  return {
    product: recipe.product,
    materials: { ...recipe.materials },
  };
}

export function getRecipes(): Readonly<ItemRecipeMap> {
  return Object.fromEntries(
    Object.entries(_ITEM_RECIPES).map(([product, recipe]) => [
      product,
      {
        product: recipe.product,
        materials: { ...recipe.materials },
      },
    ]),
  ) as Readonly<ItemRecipeMap>;
}

export function getRecipeMaterials(product: ItemId): RecipeMaterialMap | undefined {
  const recipe = _ITEM_RECIPES[product];
  if (!recipe) {
    return undefined;
  }
  return { ...recipe.materials };
}
