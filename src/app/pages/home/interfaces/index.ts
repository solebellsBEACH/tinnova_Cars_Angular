import { Vehicles } from "src/app/types/Vehicles";

export interface IGetVehicles {
    vehicles: Vehicles[],
    count: number,
    message: string
  }