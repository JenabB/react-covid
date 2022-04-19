export interface ProvinceModel {
  id: string;
  name: string;
}

export interface CityModel {
  id: string;
  name: string;
}

export interface RoomModel {
  id: string;
  name: string;
  address: string;
  phone: string;
  queue: number;
  bed_availability: number;
  info: string;
}

export interface HospitalModel {
  hospitals: Array<RoomModel> | null;
  provinces: Array<ProvinceModel> | null;
  cities: Array<CityModel> | null;
}
