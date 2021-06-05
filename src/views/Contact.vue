<template>
    <div>
        <!-- Banner Section -->
        <section class="page-title" :style="{ backgroundImage : 'url('+require('../assets/images/background/banner/Untitled-1.jpg')+')'}" >
            <div class="content-outer">
                <div class="content-box">
                    <div class="content-wrapper">
                        <div class="title">
                            <h1>Contact Us</h1>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <!-- End Banner Section -->
        <!-- Contact Form section -->
        <section class="contact-form-section">
            <div class="auto-container">
                <div class="wrapper-box">
                    <div class="row">

                        <div class="col-lg-7 col-md-7">
                            <div class="contact-form-area">
                                <div class="sec-title mb-30">
                                    <h2 class="text-center"> Contact Me </h2>
                                </div>
                                <!--Contact Form-->
                                <div class="contact-form">
                                    <form method="post" action="" id="contact-form">
                                        <div class="row">
                                            <div class="form-group col-md-12">
                                                <input type="text" name="form_name" value="" placeholder="Your Name" required>
                                            </div>
                                            <div class="form-group col-md-12">
                                                <input type="text" name="email" value="" placeholder="Your Email" required>
                                            </div>
                                            <div class="form-group col-md-12">
                                                <input type="tel" name="phone" value="" placeholder="Phone Number" required>
                                            </div>
                                            <div class="form-group col-md-12">
                                                <textarea name="form_message" placeholder="Massage"></textarea>
                                            </div>
                                            <div class="form-group col-md-12">
                                                <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="">
                                                <button class="theme-btn btn-style-one" type="submit" data-loading-text="Please wait..."><span>Send Message</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5">
                            <div class="contact-info-block">
                                <h3 class=" mb-3">Official Address</h3>
                                <ul class="contact-info">
                                    <li>
                                        <div class="icon"><img src="../assets/images/icons/icon-1.png" alt=""></div>
                                        <div class="text"><strong>Visit Mayor Office</strong> 36 King Street, LaneWalk, <br> Governlia 030204 - US</div>
                                    </li>
                                    <li>
                                        <div class="icon"><img src="../assets/images/icons/icon-2.png" alt=""></div>
                                        <div class="text">
                                            <strong>Phone No.</strong>
                                            <a href="tel:+1(345)2067849">+ 1 (345) 206 7849</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon"><img src="../assets/images/icons/icon-3.png" alt=""></div>
                                        <div class="text">
                                            <strong>Email</strong>
                                            <a href="mailto:munciple@example.net">munciple@example.net</a>
                                        </div>
                                    </li>
                                </ul>
                                <h5 class=" mb-3 mt-4">Website, Webmail & ICT related Problems:</h5>
                                <ul class="contact-info">
                                    <li>
                                        <div class="icon"><img src="../assets/images/icons/icon-1.png" alt=""></div>
                                        <div class="text"><strong>Visit Mayor Office</strong> 36 King Street, LaneWalk, <br> Governlia 030204 - US</div>
                                    </li>
                                    <li>
                                        <div class="icon"><img src="../assets/images/icons/icon-2.png" alt=""></div>
                                        <div class="text">
                                            <strong>Phone No.</strong>
                                            <a href="tel:+1(345)2067849">+ 1 (345) 206 7849</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon"><img src="../assets/images/icons/icon-3.png" alt=""></div>
                                        <div class="text">
                                            <strong>Email</strong>
                                            <a href="mailto:munciple@example.net">munciple@example.net</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>
