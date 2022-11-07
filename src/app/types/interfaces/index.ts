import { Brand } from "src/app/types/Brand";
import { Vehicles } from "src/app/types/Vehicles";

export interface IGetVehicles {
    vehicles: Vehicles[],
    count: number,
    message: string
  }

  export interface IGetBrands {
    brands: Brand[],
    count: number,
    message: string
  }
  export interface ILoginResponse{
    token: string
  }

  export interface IUserLogin{
    email: string
    password: string
  }