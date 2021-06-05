<template>
    <div>
        <!-- Banner Section -->
        <section class="page-title" :style="{ backgroundImage : 'url('+require('../assets/images/background/banner/4.jpg')+')'}">
            <div class="content-outer">
                <div class="content-box">
                    <div class="content-wrapper">
                        <div class="title">
                            <h1>Photos</h1>
                        </div>
                        <ul class="bread-crumb">
                            <li><a href="index-2.html">Photos & Videos </a></li>
                            <li>Photos </li>
                            <li>Photos details </li>
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
                        <div class="xs-portfolio-grid-item col-lg-4 col-md-6 col-sm-6 col-12" v-for="(a_img,index) in momenImages" :key="index">

                                <img :src="a_img.src" alt="" @click="galleryArea=true, currentIndex = index">
<!--                                <div class="xs-portfolio-content">-->
<!--                                    <span class="icon-plus-button"></span>-->
<!--                                </div>-->
                            <!-- .xs-single-portfolio-item END -->
                            <LightBox style="z-index: 1000000 !important;"
                                      v-if="galleryArea"
                                      :startAt="currentIndex"
                                      :media="momenImages"
                                      :showCaption="true"
                                      @onClosed="closeGalleryArea"
                                      >
                            </LightBox>
                        </div>
                    </div>

                </div>
                <!-- .container end -->
            </div>
            <!-- End portfolio section -->
        </section>
    </div>
</template>

<script>
    import LightBox from 'vue-it-bigger'
    export default {
        name: "PhotosDetails",

        components:{
            LightBox
        },

        data(){
            return{
                currentIndex :'',
                galleryArea : false,
                momenImages: [
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

</style>
