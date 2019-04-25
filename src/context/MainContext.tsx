import { createContext } from 'react';

interface MainContext {
  data: {
    checkedInterests: Set<any>;
  };
  setCheckedInterests: (payload: Set<any>) => void;
}

export const mainContextInitialState: MainContext = {
  data: {
    checkedInterests: new Set()
  },
  setCheckedInterests(payload: any) {
    this.data.checkedInterests = payload;
  }
};

const MainContext = createContext(mainContextInitialState);

export default MainContext;
