export class ProfileModel {
  first_name: string;
  last_name: string;
  image_url?: string;
  user: number;
}

export class FetchProfileModel {
  id: number;
  first_name: string;
  last_name: string;
  image_url?: string;
  user: number;
}

export class UpdateProfileModel {
  first_name: string;
  last_name: string;
  image_url?: string;
  user?: number;
}
