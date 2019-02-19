<template>
    <div>
      <b-container fluid class="bv-example-row">
       
            <b-row>
              <b-col md="6" offset-md="3">
                <div v-for="(product,index) in cards" :key="index">
                  <div v-if="id == product.id" >
                    <b-card :title="product.title"
                            :img-src="product.image"
                            :img-alt="product.title"
                            img-top
                            tag="article"
                            class="mb-2 text-center">

                      <p class="card-text">
                        {{product.description}}
                      </p>
                      <div class="btn">
                        <b-button class="btn-return" variant="outline-primary" @click="returnHome()">Return</b-button>
                        <b-button class="btn-checkout" variant="primary" @click="checkOut(id)">Check out</b-button>
                      </div>
                    
                    </b-card>
                  </div>
                </div>
              </b-col>
            </b-row>
         
        
      </b-container>
      
    </div>
    
</template>

<script>
// import uuid from "uuid";
export default {
  name: "Details",
  methods:{
    returnHome(){
      this.$router.push({name: "home"})
    },

    checkOut(id){
      this.$router.push({name: 'Checkout', params: {id:id}})
    }
  },
  data(){
    return{
      id: this.$route.params.id,
      cards: [
          {
            id: 1,
            image: 'https://ng.jumia.is/7Gt9JvYcVgWWU-3aVDiSjwgbn8Y=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/33/46488/1.jpg?2908',
            title: 'HP X1200 Flyer Red Wired Mouse',
            description:
            ` 
              The dual functionality allows ease of use for left or right-hand control.
              Simply plug in and use with a USB connection - no software installation or set-up required. 
              No mouse pad is required to take advantage of the smooth and accurate control of the 1200 cpi optical tracking technology.
              Complement your computer with your choice of three bold colors - Sparkling Black, Revolutionary Blue or Flyer Red.
              Smoothly move through documents and web pages with 3 buttons and rubber scroll wheel.
                        
            ` 
          },

          {
            id: 2,
            image: 'https://ng.jumia.is/69ODqSLUq4_OnAXZBSlMAG-l2zI=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/58/962452/1.jpg?5332',
            title: 'Mi Redmi 6',
            description: 
            `
              5.45 inch 1440 x 720 pixels screen, Helio P22 octa core 2.0GHz,
              Android 8.1, 3GB RAM + 32GB ROM, 12.0MP + 5.0MP rear cameras and 5.0MP front camera,
              dual SIM dual standby, 2 x Nano SIM card

            `
          },

          {
            id: 3,
            image: 'https://picsum.photos/600/300/?image=24',
            title: 'Card-three',
            description: 'Some quick example text'
          },

          {
            id: 4,
            image: 'https://picsum.photos/600/300/?image=20',
            title: 'Card-four',
            description: 'Lorem Ipsum'
          },

          {
            id: 5,
            image: 'https://picsum.photos/600/300/?image=19',
            title: 'Card-five',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
          },

          {
            id: 6,
            image: 'https://ng.jumia.is/7goojkIHRsNVeG3snVmTc1yEm-I=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/49/182581/1.jpg?5314',
            title: ` Generic 1 Luxury Glass Beads Door String Tassel Curtain Wedding Divider Panel Room Decor `,
            description: 
            `
              Format:Bead Rope,
              Opening and Closing Method:Left and Right Biparting Open,
              Use:Home,Hotel,Cafe,Office
              Plane uniform, bright color, excellent polishing effect! Refraction effect super good! Do not fade, not black

            `
          },
      ]     
        
    }
  }
}
</script>

<style scoped>
  .bv-example-row{
    margin: 5% 0 !important;
    /* align-items:center !important;
    justify-content: center !important;   */
  }

  .btn{
    padding: 5px 5px;
  }

  .btn-return{
    margin-right: 5px;
  }

  .btn-buy{
    margin-left: 10px;
  }


</style>
