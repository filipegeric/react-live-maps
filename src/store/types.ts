import { Event } from '../models/Event';
import { User } from '../models/User';

export interface Action {
  type: string;
  payload: any;
}

export interface ModalState {
  isActive: boolean;
  content: string;
}

export interface MainState {
  interests: Array<string | number>;
  modal: ModalState;
  focusedEvent: Event;
  user: User;
}
