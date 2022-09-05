import Vue from "vue";
import Vuex, { StoreOptions} from 'vuex';
import {temp} from "./modules/temp/tempStore";

Vue.use(Vuex);

export interface RootState{
  version: string;
}

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    temp
  }
}

export default new Vuex.Store<RootState>(store);
