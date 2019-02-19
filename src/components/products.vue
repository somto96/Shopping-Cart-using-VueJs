<template>
    <div class="container">
        <div class="top-deck">
            <b-card-group columns class=" mb-3 mt-5 ">
                <b-card :title="product.title"
                        :img-src="product.image"
                        :img-alt="product.title"
                        img-top
                        tag="article" 
                        v-for="(product, index) in cards" 
                        :key="index" 
                        class="product"> 

                    <p class="card-text">
                        {{product.description}}
                    </p>
                    <b-button href="#" class="btn-buy" variant="outline-primary">Purchase</b-button>
                    <b-button class="btn-details" variant="primary" @click="details(product.id)">Specifications</b-button>
                </b-card>
                    
            </b-card-group>
        
       
        </div>
        
    </div>
</template>


<script>
// import uuid from "uuid";
export default {
    name: 'Products',
    methods: {
        details(id){
            this.$router.push({name: 'Details', params: {id:id}})
        }
    },
    data(){
        return{
            cards: [
                {
                    id: 1,
                    image: 'https://ng.jumia.is/7Gt9JvYcVgWWU-3aVDiSjwgbn8Y=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/33/46488/1.jpg?2908',
                    title: 'HP X1200 Flyer Red Wired Mouse',
                    description: 'Simplicity made stylish. Simply plug in and experience smooth control using documents, creating art, reviewing the web and more - regardless if you are left or right-handed.'
                },

                {
                    id: 2,
                    image: 'https://ng.jumia.is/69ODqSLUq4_OnAXZBSlMAG-l2zI=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/58/962452/1.jpg?5332',
                    title: 'Mi Redmi 6',
                    description: 
                    `   
                        Xiaomi Redmi 6 as a smartphone features 5.45 inch screen afford you a vivid and different visual experience.

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
                    description: '1x Luxury Glass Beads Door String Tassel Curtain Wedding Divider Panel Room Decor （not include the pendant)'
                },

            ]
        }
            
        

    }
}
</script>


<style scoped>
    .top-deck{
        margin-top: 10% !important;
    }

    .product{
        padding: 10px 10px;
        display: inline-block;
    }

    .btn-details{
        padding: 5px 5px;
        margin-left :10px;
    }

    /* .btn-details:hover{
        color: #007bff !important;
        border-color: #007bff !important;
        background-color: #ffffff !important;
    } */

    .btn-buy{
        padding: 5px 5px;
    }

   
</style>
