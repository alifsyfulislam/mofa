import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Publication from '@/views/Publication'
import About from '@/views/About'
import Photos from '@/views/Photos'
import PhotosDetails from '@/views/PhotosDetails'
import Contact from '@/views/Contact'
import MediaCoverage from '@/views/MediaCoverage'
import Videos from '@/views/Videos'
import VideosDetails from '@/views/VediosDetails'
import NotFound from '@/views/NotFound'
import NewsDetails from '@/views/NewsDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/publication',
    name: 'Publication',
    component: Publication
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos
  },
  {
    path: '/photos-details',
    name: 'PhotosDetails',
    component: PhotosDetails
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/media-coverage',
    name: 'MediaCoverage',
    component: MediaCoverage
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/videos-details',
    name: 'VideosDetails',
    component: VideosDetails
  },
  {
    path: '/news-details',
    name: 'NewsDetails',
    component: NewsDetails
  },
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
