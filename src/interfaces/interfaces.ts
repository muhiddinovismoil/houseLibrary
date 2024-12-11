export interface IUpdatePassword {
  oldPassword: string;
  newPassword: string;
}

export interface Artist {
  id: string;
  name: string;
  grammy: boolean;
}

export interface Favorites {
  artists: string[];
  albums: string[];
  tracks: string[];
}
