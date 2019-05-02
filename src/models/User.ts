import { Vote } from './Vote';
import { UserInterest } from './UserInterest';

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  userInterests: UserInterest[];
  votes: Vote[];
}
