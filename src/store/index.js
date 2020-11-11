import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        productList: [
            {
                id: 1,
                title: "A",
                img:
                    "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
                category: "car",
                price: 100,
            },
            {
                id: 2,
                title: "AB",
                img:
                    "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
                category: "airplane",
                price: 200,
            },
            {
                id: 3,
                title: "ABC",
                // check if the picture works
                //  img:
                //     "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
                category: "car",
                // price: null,
            },
            {
                id: 4,
                title: "ABCD",
                img:
                    "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
                category: "airplane",
                price: 130,
            },
            {
                id: 5,
                title: "A",
                img:
                    "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
                category: "car",
                price: 140,
            },
            {
                id: 6,
                title: "AB",
                img:
                    "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
                category: "airplane",
                price: 150,
            },
            {
                id: 7,
                title: "ABC",
                // check if the picture works
                //  img:
                //     "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
                category: "car",
                // price: null,
            },
            {
                id: 8,
                title: "ABCD",
                img:
                    "https://www.jablotron.com/runtime/cache/ftpclientdata/23454/img1280/23454_maxi.png",
                category: "airplane",
                price: 160,
            },
        ],
        filteredList: [
        ],
        productCardView: [],
        testArr: []

    },
    mutations: {
        // **********************
        testFilter(state) {
            if (!state.filteredList.length) {
                state.testArr = state.productList
            } else {
                state.testArr = state.filteredList
            }
        },
        filterTitelText(state, text) {
            state.filteredList = state.productList.filter((el) =>
                el.title.toLowerCase().includes(text)
            )
        },

        // priceFilter(state, inputValues) {
        //     state.productList = state.productList.filter(el => el.price >= inputValues[0] && el.price <= inputValues[1])
        // },
        setCardView(state, id_number) {
            state.productCardView = [];
            state.productCardView = state.productList.find(el => el.id == id_number)
        },
        addNewProduct(state, obj) {
            state.productList.push(obj)
        }

    },
    actions: {
        filterTitle({ commit }, value) {
            commit('filterTitelText', value)
        },
        filterPrice({ commit }, newValues) {
            commit('priceFilter', newValues)
        },
        addProduct({ commit }, obj) {
            commit('addNewProduct', obj)
        }
    },
    getters:
    {
        showProductList: state => state.productList,
        getCardView: state => state.productCardView,
        getFilterProductList: state => state.filteredList,
        getTestArr: state => state.testArr
    },

    modules: {}
})

export default store