<template>
    <div>
        <header class="main-header header-style-one">
            <div class="header-upper">
                <div class="auto-container">
                    <div class="inner-container">
                        <!--Nav Box-->
                        <div class="nav-outer">
                            <!--Mobile Navigation Toggler-->
                            <div class="mobile-nav-toggler">
                                <span class="fa fa-bars text-white" @click="openMobileMenu"></span>
                            </div>

                            <!-- Main Menu -->
                            <nav class="main-menu navbar-expand-md navbar-light">
                                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul class="navigation">
                                        <li class="dropdown"><a href="/">News</a>
                                            <ul>
                                                <li><a href="/">News Releases</a></li>
                                                <li><a href="/media-coverage">Media Coverage</a></li>

                                            </ul>
                                        </li>
                                        <li><a href="/about">About Me</a></li>
                                        <li class="dropdown"><a href="/photos">Photos & Videos </a>
                                            <ul>
                                                <li><a href="/photos">Photos</a></li>
                                                <li><a href="/videos">Videos</a></li>
                                            </ul>
                                        </li>
                                        <li ><a href="https://www.facebook.com/momenfoundation" target="_blank">Momen Foundation</a></li>
                                        <li ><a href="/publication">Publication</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="header-social">
                            <ul class="social-links">
                                <li><a href="https://www.youtube.com/channel/UCDX7rkoAMt5q070BI2yVK4w" target="_blank"><i class="fab fa-youtube"></i></a></li>
                                <li><a href="https://www.facebook.com/DrAbdulMomenSylhet1 " target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fas fa-envelope"></i></a></li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <!--End Header Upper-->

            <!-- Sticky Header  -->
            <div class="sticky-header">
                <div class="header-upper">
                    <div class="auto-container">
                        <div class="inner-container">
                            <!--Logo-->
                            <!-- <div class="logo-box">
                                <div class="logo"><a href="index-2.html"><img src="assets/images/momen_logo-1.png" alt="logo"></a></div>
                            </div> -->
                            <!--Nav Box-->
                            <div class="nav-outer">
                                <!--Mobile Navigation Toggler-->
                                <div class="mobile-nav-toggler">
                                    <span class="fa fa-bars text-white" @click="openMobileMenu"></span>
                                </div>
                                <!-- Main Menu -->
                                <nav class="main-menu navbar-expand-md navbar-light">
                                    <div class="collapse navbar-collapse show clearfix" >
                                        <ul class="navigation">
                                            <li class="dropdown"><a href="/">News</a>
                                                <ul>
                                                    <li><a href="/">News Releases</a></li>
                                                    <li><a href="/media-coverage">Media Coverage</a></li>

                                                </ul>
                                            </li>
                                            <li><a href="/about">About Me</a></li>
                                            <li class="dropdown"><a href="/photos">Photos & Videos </a>
                                                <ul>
                                                    <li><a href="/photos">Photos</a></li>
                                                    <li><a href="/videos">Videos</a></li>
                                                </ul>
                                            </li>
                                            <li ><a href="https://www.facebook.com/momenfoundation" target="_blank">Momen Foundation</a></li>
                                            <li ><a href="/publication">Publication</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>

                            </div>
                            <div class="header-social">
                                <ul class="social-links">
                                    <li><a href="https://www.youtube.com/channel/UCDX7rkoAMt5q070BI2yVK4w" target="_blank"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="https://www.facebook.com/DrAbdulMomenSylhet1 " target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fas fa-envelope"></i></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div><!-- End Sticky Menu -->

            <!-- Mobile Menu  -->
            <div class="mobile-menu">
                <div class="menu-backdrop"></div>
                <div class="close-btn"><span class="icon far fa-times-circle" @click="removeMobileMenu"></span></div>

                <nav class="menu-box">
                    <div class="nav-logo">
                        <!-- <a href="index-2.html"><img src="assets/images/momen_logo-1.png" alt="logo" title=""></a> -->
                    </div>
                    <div class="menu-outer"><div class="collapse navbar-collapse show clearfix" >
                        <ul class="navigation">
                            <li class="dropdown"><a href="/">News</a>
                                <ul>
                                    <li><a href="/">News Releases</a></li>
                                    <li><a href="/media-coverage">Media Coverage</a></li>

                                </ul>
                            </li>
                            <li><a href="/about">About Me</a></li>
                            <li class="dropdown"><a href="/photos">Photos & Videos </a>
                                <ul>
                                    <li><a href="/photos">Photos</a></li>
                                    <li><a href="/videos">Videos</a></li>
                                </ul>
                            </li>
                            <li ><a href="https://www.facebook.com/momenfoundation" target="_blank">Momen Foundation</a></li>
                            <li ><a href="/publication">Publication</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div></div>
                    <!--Social Links-->
                    <div class="social-links">
                        <ul class="clearfix">
                            <li><a href="https://www.youtube.com/channel/UCDX7rkoAMt5q070BI2yVK4w"><span class="fab fa-youtube-square"></span></a></li>
                            <li><a href="https://www.facebook.com/DrAbdulMomenSylhet1"><span class="fab fa-facebook-square"></span></a></li>
                            <li><a href="#"><span class="fas fa-envelope"></span></a></li>
                        </ul>
                    </div>
                </nav>
            </div><!-- End Mobile Menu -->

            <div class="nav-overlay">
                <div class="cursor"></div>
                <div class="cursor-follower"></div>
            </div>
        </header>
    </div>
</template>

<script>
    import $ from 'jquery'

    // let mainNavUL = $('.main-menu').find('.navigation');
    // dynamicCurrentMenuClass(mainNavUL);
    //
    // function dynamicCurrentMenuClass(selector) {
    //     let FileName = window.location.href.split('/').reverse()[0];
    //
    //     selector.find('li').each(function () {
    //         let anchor = $(this).find('a');
    //         if ($(anchor).attr('href') == FileName) {
    //             $(this).addClass('current');
    //         }
    //     });
    //     // if any li has .current elmnt add class
    //     selector.children('li').each(function () {
    //         if ($(this).find('.current').length) {
    //             $(this).addClass('current');
    //         }
    //     });
    //     // if no file name return
    //     if ('' == FileName) {
    //         selector.find('li').eq(0).addClass('current');
    //     }
    // }

    export default {
        name: "Header",

        methods:{
            openMobileMenu : function () {
               $('.page-wrapper').addClass('mobile-menu-visible')
            },

            removeMobileMenu : function () {
                $('.page-wrapper').removeClass('mobile-menu-visible')
            }
        }
    }
</script>

<style scoped>

</style>
