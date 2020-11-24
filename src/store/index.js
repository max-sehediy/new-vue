import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // oldProductList: [
        //     {
        //         id: 1,
        //         title: "A",
        //         img:
        //             "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
        //         category: "car",
        //         price: 100,
        //     },
        //     {
        //         id: 2,
        //         title: "AB",
        //         img:
        //             "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
        //         category: "airplane",
        //         price: 200,
        //     },
        //     {
        //         id: 3,
        //         title: "ABC",
        //         // check if the picture works
        //         //  img:
        //         //     "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
        //         category: "car",
        //         // price: null,
        //     },
        //     {
        //         id: 4,
        //         title: "ABCD",
        //         img:
        //             "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
        //         category: "airplane",
        //         price: 130,
        //     },
        //     {
        //         id: 5,
        //         title: "A",
        //         img:
        //             "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
        //         category: "car",
        //         price: 140,
        //     },
        //     {
        //         id: 6,
        //         title: "AB",
        //         img:
        //             "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
        //         category: "airplane",
        //         price: 150,
        //     },
        //     {
        //         id: 7,
        //         title: "ABC",
        //         // check if the picture works
        //         //  img:
        //         //     "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
        //         category: "car",
        //         // price: null,
        //     },
        //     {
        //         id: 8,
        //         title: "ABCD",
        //         img:
        //             "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
        //         category: "airplane",
        //         price: 160,
        //     },
        // ],
        filter: {
            title: null,
            price: null
        },
        productCardView: [],
        productList: []

    },
    mutations: {
        setProductsList(state, products) {
            state.productList = [...products]
        },
        filterTitelText(state, text) {
            state.filter.title = text

        },
        setCardView(state, id_number) {
            state.productCardView = [];
            state.productCardView = state.productList.find(el => el.id == id_number)
        },
        addNewProduct(state, obj) {
            state.productList.push(obj)
        }

    },
    actions: {
        loadDate({ commit }) {
            const db = firebase.firestore();
            db.collection("products")
                .get()
                .then((snap) => {
                    const products = [];
                    snap.forEach((doc) => {
                        products.push({ id: doc.id, ...doc.data() });
                    });
                    commit('setProductsList', products)
                });
        },
        addProduct({ dispatch }, { productData }) {
            console.log('productData');
            console.log(productData);
            const db = firebase.firestore();
            db.collection("products")
                .doc()
                .set({
                    title: productData.title,
                    subtitle: productData.subtitle,
                    category: productData.category,
                    price: productData.price,
                    image: productData.image,
                    description: productData.description,
                    features: productData.features
                })
                .then(function () {
                    console.log("Document successfully written!");
                    dispatch("loadData");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        },
        filterTitle({ commit }, value) {
            commit('filterTitelText', value)
        },
        filterPrice({ commit }, newValues) {
            commit('priceFilter', newValues)
        },
        addTest({ dispatch }) {
            const db = firebase.firestore()
            db.collection("products").add({
                name: "Tokyo",
                country: "Japan"
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    dispatch('loadDate')
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        }
    },
    getters:
    {
        showProductList: state => state.productList,
        getCardView: state => state.productCardView,
        getFilterProductList: state => state.productList.filter((el) =>
            ((state.filter.title === null || el.title.toLowerCase().includes(state.filter.title)) &&
                (state.filter.price === null || el.price === state.filter.price))),
        getTestArr: state => state.testArr
    },

    modules: {}
})

export default store