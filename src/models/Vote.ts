import { Event } from './Event';
import { User } from './User';

export interface Vote {
  id: number;
  sign: number;
  createdAt: Date;
  event: Event | null;
  user: User | null;
}
