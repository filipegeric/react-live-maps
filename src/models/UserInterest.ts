import { Interest } from './Interest';
import { User } from './User';

export interface UserInterest {
  id: number;
  interest: Interest | null;
  user: User | null;
}
