import About from "../container/About";
import BackToTop from "../container/BackToTop";
import Brands from "../container/Brands";
import Contact from "../container/Contact";
import Footer from "../container/Footer";
import {Header} from "../container/Header";
import Hero from "../container/Hero";
import Portfolio from "../container/Portfolio";
import Skills from "../container/Skills";
import Testimonials from "../container/Testimonials";

export const TOTAL_SCREENS = [
    {
        screen_name : "Header",
        component : Header,
    },
    {
        screen_name : "Hero",
        component : Hero,
    },
    {
        screen_name : "Brands",
        component : Brands,
    },
    {
        screen_name : "About",
        component : About,
    },
    {
        screen_name : "Skills",
        component : Skills,
    },
    {
        screen_name : "Portfolio",
        component : Portfolio,
    },
    {
        screen_name : "Testimonials",
        component : Testimonials,
    },
    {
        screen_name : "Contact",
        component : Contact,
    },
    {
        screen_name : "Footer",
        component : Footer,
    },
    {
        screen_name : "BackToTop",
        component : BackToTop,
    }
]