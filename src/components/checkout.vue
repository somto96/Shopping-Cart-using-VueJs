<template>
  <div>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col md="6" offset-md="3">
          <div>
            <div class="top-deck">
              <b-card
                :title="currentProduct.title"
                :img-src="currentProduct.image"
                :img-alt="currentProduct.title"
                img-left
                class="mb-2 text-center product_card"
              >
                <b-row>
                  <b-col md="6">
                    <p class="price">Price(₦) : {{currentProduct.price * selection.qty}}</p>
                  </b-col>
                </b-row>

                <div class="row qty text-center">
                  <b-col md="6">
                    <p>Quantity : {{selection.qty}}</p>
                  </b-col>

                  <b-col md="6">
                    <b-button class="btn-remove" variant="outline-primary" @click="decrease()">-</b-button>
                    <b-button class="btn-checkout" variant="primary" @click="increase()">+</b-button>
                  </b-col>
                </div>

                <b-row>
                  <b-col md="6" offset="3">
                    <b-button
                      class="btn__add-to-cart"
                      variant="outline-primary"
                      to="/Cart"
                      @click="cart()"
                    >Add to cart</b-button>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Checkout",

  data() {
    return {
      selection: {
        qty: 1
      }
    };
  },
  methods: {
    ...mapActions(["addProduct"]),
    increase() {
      this.selection.qty++;
      // selection.price = currentProduct.price * selection.qty
      // this.increaseQuantity()
    },

    decrease() {
      this.selection.qty--;
      //selection.price = currentProduct.price * selection.qty
      // this.decreaseQuantity()
    },

    cart() {
      this.addProduct(this.selection);
    }

    // price(){
    //   this.netPrice()
    // },
  },
  computed: {
    ...mapGetters({
      currentProduct: "getCurrentProduct"
    })
  },
  mounted() {
    this.selection = {
      ...this.selection,
      ...this.currentProduct
    };
  }
};
</script>

<style scoped>
.top-deck {
  margin-top: 10% !important;
}
.price {
  text-align: left;
  margin-left: 36%;
}

.product_card .card-img {
  width: 50% !important;
  margin-left: 25% !important;
}
.btn-remove,
.btn-checkout {
  border-radius: 50%;
}

.btn-checkout {
  margin-left: 20px;
}

.btn-checkout,
.btn-remove {
  line-height: 1.2;
}
</style>
