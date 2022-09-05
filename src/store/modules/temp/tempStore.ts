import { RootState } from "@/store";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

export interface TemperatureData{
	temperature: number;
	time: string;
	state: boolean;
}

export interface TemperatureState {
	temperatureData: TemperatureData[];
}


const state: TemperatureState = {
	temperatureData: []
}


const getters: GetterTree<TemperatureState, RootState> = {
	getTemperatureData(state): number[] {
		const temp: number[] = [];
		state.temperatureData.map(tempData => {
			temp.push(Number(tempData.temperature))
		})
		return temp;
	},
	getTemperatureTime(state): string[] {
		const temp: string[] = [];
		state.temperatureData.map(tempData => {
			temp.push(tempData.time)
		})
		return temp;
	},
	getFanState(state): boolean{
		return state.temperatureData[state.temperatureData.length-1].state;
	}
}

const mutations: MutationTree<TemperatureState> = {
	POP_TEMPERATURE_DATA(state) {
		state.temperatureData.shift();
	},
	UPDATE_TEMPERATURE_DATA(state, newTemperature: TemperatureData) {
		state.temperatureData.push(newTemperature);
	},
	INIT_TEMPERATURE_DATA(state, newTemperature: TemperatureData[]){
		state.temperatureData = newTemperature;
	}
};

const actions: ActionTree<TemperatureState, RootState> ={
	initTemperatureData({commit}, newTemperature: TemperatureData[]){
		commit('INIT_TEMPERATURE_DATA', newTemperature);
	},
	updateTemperatureData({commit}, newTemperature: number) {
		if(state.temperatureData.length < 50){
			commit('UPDATE_TEMPERATURE_DATA', newTemperature)
		}else{
			commit('POP_TEMPERATURE_DATA')
			commit('UPDATE_TEMPERATURE_DATA', newTemperature)
		}
	}
}

const namespaced = true;

export const temp: Module<TemperatureState, RootState> = {
	namespaced,
	state,
	getters,
	actions,
	mutations
}
