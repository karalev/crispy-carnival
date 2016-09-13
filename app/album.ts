export class Album {
  id: number;
  title: string;
  thumbnail: string;
  photos: [Photo];
}

export class Photo {
      description: string;
      src: string;
      likes: number;
}
