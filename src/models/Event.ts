import { Interest } from './Interest';
import { Vote } from './Vote';

export interface Event {
  id: number;
  title: string;
  body: string;
  img: string;
  address: string;
  hashtag: string | null;
  createdAt: Date;
  deleted: boolean;
  startAt: Date;
  endAt: Date | null;
  lat: number;
  long: number;
  permanent: boolean;
  interest: Interest | null;
  votes: Vote[];
}
