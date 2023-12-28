import{ GoogleAuthProvider, signInWithPopup, signInWithCredential, signOut } from'firebase/auth'
import { auth } from '@/firebase-config.js';

export default {
    namespaced: true,
    state: {
        user: null,

        loading: false,
        error: null,
    },
    getters: {
        getUser: (state) =>state.user,
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setLoading(state, loading) {
            state.loading = loading
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        async saveLoginUserData({ commit }, loginResult) {
            console.log('loginResult')
            console.log(loginResult)
            //--------- user data -------
            const user = loginResult?.user // об'єкткористувача
            commit('setUser', user)
            //user.displayName - ім'яакаунту
            //user.photoURL - аватаракаунту
            //user.email - електроннаадресаакаунту

            //--------- user access token -------
            // This gives you a Google Access Token. You can use it to access the Google API.
            let credential = GoogleAuthProvider.credentialFromResult(loginResult)

            localStorage.setItem('authCredential', JSON.stringify(credential))
        },
        loginWithGoogle({ commit, dispatch }) {
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
                .then((loginResult) => {
                    dispatch('saveLoginUserData', loginResult)
                })
                .catch((error) => {
                    commit('setError', error)
                })
        },
        async loginWithCredential({ commit, dispatch }) {
            return new Promise((resolve, reject) => {
                let credential = localStorage.getItem('authCredential')

                if (credential) {
                    credential = JSON.parse(credential)

                    credential = GoogleAuthProvider.credential(credential.idToken)

                    signInWithCredential(auth, credential)
                        .then((loginResult) => {
                            dispatch('saveLoginUserData', loginResult)
                            resolve(loginResult)
                        })
                        .catch((error) => {
                            console.log(error)
                            commit('setError', error)
                            // Handle Errors here.
                            //varerrorCode = error.code
                            //varerrorMessage = error.message
                            // The email of the user's account used.
                            //var email = error.email
                            reject(false)
                        })
                } else resolve(false)
            })
        },
        logout({ commit }) {
            signOut(auth)
                .then(() => {
                    localStorage.removeItem('authCredential')
                    commit('setUser', null)
                })
                .catch((error) => {
                    commit('setError', error)
                })
        },
    },
}

