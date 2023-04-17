import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap"

export default ({}, inject) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(MotionPathPlugin)
  inject('gsap', gsap)
}