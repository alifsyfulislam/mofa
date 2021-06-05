<template>
    <div>
        <section class="page-title" :style="{ backgroundImage : 'url('+require('../assets/images/background/banner/4.jpg')+')'}">
            <div class="content-outer">
                <div class="content-box">
                    <div class="content-wrapper">
                        <div class="title">
                            <h1>Publication </h1>
                        </div>
                        <ul class="bread-crumb">
                            <li>Publication</li>

                        </ul>
                    </div>
                </div>
            </div>

        </section>
        <!-- End Banner Section -->
        <section>
            <!-- portfolio section -->
            <div class="xs-content-section-padding">
                <div class="container">
                    <div class="xs-portfolio-grid row">
                        <div class="xs-portfolio-grid-item col-lg-4 col-md-6 col-sm-6 col-12" v-for="(a_book,index) in bookCovers" :key="index">
                            <figure>
                                <img :src="a_book.src" alt="" @click="galleryArea=true, currentIndex=index">
                                <figcaption>{{a_book.caption}}</figcaption>
                            </figure>
<!--                                <div class="xs-portfolio-content">-->
<!--                                    <span class="icon-plus-button"></span>-->
<!--                                </div>-->
                        </div>
                        <LightBox style="z-index: 1000000"
                                  v-if="galleryArea"
                                  :media="bookCovers"
                                  :startAt="currentIndex"
                                  :showCaption="true"
                                  @onClosed="closeGalleryArea">
                        </LightBox>
                    </div>
                </div>
            </div>
                <!-- .container end -->
            <!-- End portfolio section -->
        </section>
    </div>
</template>

<script>
    // import VueEasyLightbox from 'vue-easy-lightbox'
    import LightBox from 'vue-it-bigger'
    import('vue-it-bigger/dist/vue-it-bigger.min.css') // when using webpack
    export default {
        name: "Publication",

        components:{
            // VueEasyLightbox
            LightBox
        },

        data(){
            return{
                galleryArea : false,
                currentIndex : '',
                bookCovers : [
                    { // For an image
                        type: 'image', // Can be omitted for image
                        thumb: 'https://dcassetcdn.com/design_img/2502979/515298/515298_13309998_2502979_fcdeeace_image.jpg',
                        src: 'https://dcassetcdn.com/design_img/2502979/515298/515298_13309998_2502979_fcdeeace_image.jpg',
                        caption: 'Caption to display. HTML <b>enabled</b>', // Optional
                    },
                    { // For a YouTube video
                        type: 'image',
                        thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/7598ae72954413.5bf949574f204.jpg',
                        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/7598ae72954413.5bf949574f204.jpg',
                        caption: 'HTML <b>enabled</b> caption to display' // Optional
                    }
                    // 'https://dcassetcdn.com/design_img/2502979/515298/515298_13309998_2502979_fcdeeace_image.jpg',
                    // 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/7598ae72954413.5bf949574f204.jpg'
                ]
            }
        },

        methods:{
            closeGalleryArea() {
                console.log("ho");
                this.galleryArea = false;
            }
        }
    }
</script>

<style scoped>
    figure figcaption {
        /*border: 1px dotted black;*/
        text-align: center;
    }
</style>
