<template>
  <div class="home">
<!--    style="background-image: url(../../assets/images/background/Banner.jpg);"-->
    <section class="page-title-home" :style="{ backgroundImage : 'url('+require('../assets/images/background/Banner.jpg')+')'}">
      <div class="content-outer">
        <div class="content-box justify-content-center">
          <div class="inner ">
            <h1>Dr. A.K. Abdul Momen </h1>
            <h3>Minister of Foreign Affairs </h3>


            <div class="text"> <span class="banner-span">The People's Republic of Bangladesh <br>
                        Member of Parliament for Sylhet-1</span> </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Banner Section -->
    <!-- News section two -->
    <section class="News-section-two">
      <div class="auto-container">
        <div class="row">
          <div class="col-lg-7 col-md-7">
            <div class="News-wrapper">
              <div class="News-block-two">
                <a href="/news-details">
                  <div class="inner-box">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-4 ">
                        <div class="image">
                          <img class="img-fluid" src="../assets/images/momen/3.jpg" alt="">

                        </div>
                      </div>
                      <div class="col-lg-8 col-md-8 col-sm-8">
                        <div class="content">
                          <h4>City Attractions And Food Festival</h4>
                          <ul>
                            <li><img src="../assets/images/icons/icon-5.png" alt=""> Jun 25, 2020</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="News-block-two">
                <a href="/news-details">
                  <div class="inner-box">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-4 ">
                        <div class="image">
                          <img src="../assets/images/momen/4.jpg" alt="">
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-8 col-sm-8">
                        <div class="content">
                          <h4>Covid-19: Precautions From Mayor</h4>
                          <ul>
                            <li><img src="../assets/images/icons/icon-5.png" alt="">Jun 25, 2020</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="all-events">
              <div class="link-btn"><a href="/" class="btn-style-one style-three"><span>View more News</span></a></div>
            </div>
          </div>
          <div class="col-lg-5 col-md-5">
            <div class="News-wrapper">
              <div class="inner-box-rights">
                <h2>Bangladesh Live</h2>
                <p><span>Follow</span><a href="#">@info.com</a></p>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-6">
                    <div class="image mt-3">
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsssantaa%2Fposts%2F3618395514895066&width=400&show_text=false&height=212&appId" width="100%" height="212" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>

                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-6">

                    <div class="image mt-3">
                      <img src="../assets/images/side_img.jpg" alt="">
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="scroll-to-top scroll-to-target"><span class="icon-arrow"></span></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header'

export default {
  name: 'Home',
  components: {
    // Header
  },
  data(){
    return{
      bannerImage : '../assets/images/background/Banner.jpg'
    }
  }
}
</script>
