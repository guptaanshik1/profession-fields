export enum Role {
  USER,
  ADMIN,
}

export interface User {
  name: string;
  email: string;
  isClient?: Boolean;
  isServiceProvider?: Boolean;
  isActive?: Boolean;
  role?: Role;
  personalAddress: string;
  city: string;
  pincode: string;
}

export enum Profession {
  DOCTOR,
  BARBER,
  LOCAL_MARTS,
  DENTIST,
  LAND_LORD,
  GENERIC,
}
