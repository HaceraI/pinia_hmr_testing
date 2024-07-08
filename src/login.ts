import { defineStore, acceptHMRUpdate } from "pinia";

export interface ILoginStoreState {
  account: string | null;
  password: string | null;
}

export const useLoginStore = defineStore("app-root", {
  state: (): ILoginStoreState => {
    return {
      account: "",
      password: "",
    };
  },
  actions: {
    initial() {
      // const account = localStorage.getItem("account");
      // const password = localStorage.getItem("password");
      this.account = "admin";
      this.password = "123";
    },
    upgradeLocalStore(state: boolean, account: string, password: string) {
      console.log('Tip one')

      this.account = "root12111";
      if (state) {
        localStorage.setItem("account", account);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("account");
        localStorage.removeItem("password");
        this.account = "";
        this.password = "";
      }
    }
  }
});

/*if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot));
}*/
