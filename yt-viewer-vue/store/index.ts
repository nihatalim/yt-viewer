/* eslint-disable @typescript-eslint/no-unused-vars */
interface GeneralBox {
  loggedIn: boolean;
  username: string | null;
  token: string | null;
}

export const state = (): GeneralBox => ({
  loggedIn: false,
  username: null,
  token: null,
});

export const mutations = {
  login(state: GeneralBox, username: string, token: string) {
    state.token = token;
    state.username = username;
    state.loggedIn = true;
  },

  logout(state: GeneralBox) {
    state.loggedIn = false;
    state.token = null;
    state.username = null;
  },
};

export const getters = {
  isLoggedIn(state: GeneralBox) {
    return state.loggedIn;
  },

  getToken(state: GeneralBox) {
    return state.token;
  },

  getUsername(state: GeneralBox) {
    return state.username;
  },
};

export const actions = {
  async login(context: any, payload: any) {
    console.log(this);

    const response = await fetch('http://45.147.45.253:9098/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mail: payload.username,
        password: payload.password,
      }),
    }).then((res) => res.json());

    console.log('LOGIN RESPONSE', response);
  },
};
