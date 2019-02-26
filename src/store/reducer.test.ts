import reducer, { State, initialState } from "./reducer";
import * as actions from "./actions";

const getInitialState = (state?: Partial<State>) =>
  ({
    ...initialState,
    ...(state ? state : {})
  } as State);

describe("reducer", () => {
  describe("initialState", () => {
    it("has correct initialState", () => {
      const initialState = reducer(undefined, {} as any);
      expect(initialState).toMatchSnapshot();
    });
  });

  describe("signed", () => {
    it("toggles ON signed", () => {
      const initialState = getInitialState({ signed: false });
      expect(initialState.signed).toBeFalsy();
      const state = reducer(initialState, actions.toggleSigned());
      expect(state.signed).toBeTruthy();
    });

    it("toggles OFF signed", () => {
      const initialState = getInitialState({ signed: true });
      expect(initialState.signed).toBeTruthy();
      const state = reducer(initialState, actions.toggleSigned());
      expect(state.signed).toBeFalsy();
    });
  });

  describe("radix", () => {
    it("can set radix", () => {
      const initialState = getInitialState({ radix: "dec" });
      expect(initialState.radix).toEqual("dec");
      const state = reducer(initialState, actions.setRadix("hex"));
      expect(state.radix).toEqual("hex");
    });
  });

  describe("bitLength", () => {
    it("can set bitLength", () => {
      const initialState = getInitialState({ bitLength: 16 });
      expect(initialState.bitLength).toEqual(16);
      const state = reducer(initialState, actions.setBitLength(32));
      expect(state.bitLength).toEqual(32);
    });
  });

  describe("registers", () => {
    it("can set registers", () => {
      const initialState = getInitialState({ registers: { A: 2, B: 3 } });
      expect(initialState.registers.A).toEqual(2);
      expect(initialState.registers.B).toEqual(3);
      const state1 = reducer(initialState, actions.setRegister("A", 100));
      expect(state1.registers.A).toEqual(100);
      expect(state1.registers.B).toEqual(3);
      const state2 = reducer(state1, actions.setRegister("B", 200));
      expect(state2.registers.B).toEqual(200);
    });

    it("can swap registers", () => {
      const initialState = getInitialState({ registers: { A: 2, B: 3 } });
      const state = reducer(initialState, actions.swapRegisters());
      expect(state.registers.A).toEqual(3);
      expect(state.registers.B).toEqual(2);
    });

    it("can toggle nth bit of register", () => {
      const initialState = getInitialState({ registers: { A: 2, B: 3 } });
      const state1 = reducer(initialState, actions.toggleRegisterBit("A", 0));
      expect(state1.registers.A).toEqual(3);
      const state2 = reducer(state1, actions.toggleRegisterBit("B", 0));
      expect(state2.registers.B).toEqual(2);
    });
  });

  describe("history", () => {
    describe("adding items", () => {
      it("can add new items", () => {
        const initialState = getInitialState();
        expect(initialState.history).toHaveLength(0);
        const state = reducer(initialState, actions.historyAdd("add"));
        expect(state.history).toHaveLength(1);
      });

      it("new items are added at the front", () => {
        const initialState = getInitialState({
          history: [{ A: 0, B: 0, id: "initial", value: 0, op: "add" }]
        });
        expect(initialState.history[0].id).toEqual("initial");
        const state = reducer(initialState, actions.historyAdd("add"));
        expect(state.history).toHaveLength(2);
        expect(state.history[0].id !== "initial").toBeTruthy();
      });

      it("caps at 10 items", () => {
        const initialState = getInitialState({
          history: new Array(10).fill({
            A: 0,
            B: 0,
            id: "",
            value: 0,
            op: "add"
          })
        });
        expect(initialState.history).toHaveLength(10);
        const state = reducer(initialState, actions.historyAdd("add"));
        expect(state.history).toHaveLength(10);
        expect(state.history[0].id !== "").toBeTruthy();
      });
    });

    describe("removing items", () => {
      it("removes item given existing id", () => {
        const initialState = getInitialState({
          history: [{ A: 0, B: 0, id: "initial", value: 0, op: "add" }]
        });
        expect(initialState.history).toHaveLength(1);
        const state = reducer(initialState, actions.historyRemove("initial"));
        expect(state.history).toHaveLength(0);
      });

      it("does nothing if id does not exists", () => {
        const initialState = getInitialState({
          history: [{ A: 0, B: 0, id: "initial", value: 0, op: "add" }]
        });
        expect(initialState.history).toHaveLength(1);
        const state = reducer(
          initialState,
          actions.historyRemove("doesnt exists")
        );
        expect(state.history).toHaveLength(1);
      });
    });

    describe("clearing", () => {
      it("clears the history", () => {
        const initialState = getInitialState({
          history: new Array(10).fill({
            A: 0,
            B: 0,
            id: "",
            value: 0,
            op: "add"
          })
        });
        expect(initialState.history).toHaveLength(10);
        const state = reducer(initialState, actions.historyClear());
        expect(state.history).toHaveLength(0);
      });
    });

    describe("tutorial", () => {
      it("can be set to done", () => {
        const initialState = getInitialState({ tutorialDone: false });
        expect(initialState.tutorialDone).toBeFalsy();
        const state = reducer(initialState, actions.setTutorialDone(true));
        expect(state.tutorialDone).toBeTruthy();
      });

      it("can be set to not done", () => {
        const initialState = getInitialState({ tutorialDone: true });
        expect(initialState.tutorialDone).toBeTruthy();
        const state = reducer(initialState, actions.setTutorialDone(false));
        expect(state.tutorialDone).toBeFalsy();
      });
    });
  });
});
