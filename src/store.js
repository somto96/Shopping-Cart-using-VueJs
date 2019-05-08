import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: [
      {
          id: 1,
          price: 3000,
          quantity: 1,
          image: 'https://ng.jumia.is/7Gt9JvYcVgWWU-3aVDiSjwgbn8Y=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/33/46488/1.jpg?2908',
          title: 'HP X1200 Flyer Red Wired Mouse',
          description: 'Simplicity made stylish. Simply plug in and experience smooth control using documents, creating art, reviewing the web and more - regardless if you are left or right-handed.'
      },

      {
          id:2,
          price: 60000,
          quantity: 1,
          image: 'https://ng.jumia.is/69ODqSLUq4_OnAXZBSlMAG-l2zI=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/58/962452/1.jpg?5332',
          title: 'Mi Redmi 6',
          description: 
          `
            Xiaomi Redmi 6 as a smartphone features 5.45 inch screen afford you a vivid
            and different visual experience.
          `
      },

      {
          id:3,
          price: 3000,
          quantity: 1,
          image: 'https://ng.jumia.is/XyGBVa8meeBi-t8Xm7YpMbH1qMU=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/95/218412/1.jpg?9649',
          title: 'Card-three',
          description: 'Some quick example text'
      },

      {
          id:4,
          price: 250000,
          quantity: 1,
          image: 'https://ng.jumia.is/25NvPd0UkEH3rHsjd5v-InK3De0=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/07/642312/1.jpg?1958',
          title: 'Card-four',
          description: 'Lorem Ipsum',
      },

      {
          id:5,
          price: 120000,
          quantity: 1,
          // image: 'https://picsum.photos/600/300/?image=19',
          image:'https://ng.jumia.is/x3zqc7ZJyeLg5uYx1-iiEfKXhiw=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/35/842231/1.jpg?6559',
          title: 'Card-five',
          description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      },

      {
          id:6,
          price: 10000,
          quantity: 1,
          image: 'https://ng.jumia.is/7goojkIHRsNVeG3snVmTc1yEm-I=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/49/182581/1.jpg?5314',
          title: ` Generic 1 Luxury Glass Beads Door String Tassel Curtain Wedding Divider Panel Room Decor `,
          description: '1x Luxury Glass Beads Door String Tassel Curtain Wedding Divider Panel Room Decor （not include the pendant)'
      },

    ],

    cartProducts: [],
    currentProduct: {},
  },

  
  getters:{
    getProducts: state => state.product,
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
  },


  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    INCREMENT_QUANTITY: (state) => {
      state.currentProduct.quantity++ ;
    },
    DECREMENT_QUANTITY: (state) => {
      state.currentProduct.quantity-- ;
    },
  },
  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    increaseQuantity: (context) => {
      context.commit('INCREMENT_QUANTITY')
    },
    decreaseQuantity: (context) => {
      context.commit('DECREMENT_QUANTITY')
    },
  },
})
