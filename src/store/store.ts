export class Store {
    private subscribers: Function[];
    private reducers: { [key: string]: Function };
    private state: { [key: string]: any };

    constructor(reducers = {}, initialState = {}) {
        this.reducers = reducers;
        this.state = this.reduce(initialState, {});
    }

    get value() {
        return this.state;
    }
    // console.log(store.value);

    dispatch(action) {
        console.log(action);
        this.state = this.reduce(this.state, action);
    }

    private reduce(state, action) {
        const newState = {};
        console.log(this.reducers);
        for (const prop in this.reducers) {
         //   newState.todos = this.reducers.todo()
            newState[prop] = this.reducers[prop](state[prop], action);
        }
        return newState;
    }
}