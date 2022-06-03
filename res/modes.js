"use strict";

class Modes {

    lightProps = [];
    darkProps = [];
    darkMode = {};
    lightMode = {};

    constructor() {

        this.darkMode  = document.getElementById('dark_mode');
        this.lightMode = document.getElementById('light_mode');
        this.setStyleProperty('base-transition', this.getStyleValue('base-enabled'));
        this.setStyleProperty('fast-transition', this.getStyleValue('fast-enabled'));

        const keys = [
            'dominant-color',
            'secondary-color',
            'special-color',
            'high-color',
            'middle-color',
            'low-color',
            'base-color',
            'nav-shadow',
            'nav-glow',
            'btn-box-shadow',
            'btn-box-glow',
            'btn-text-shadow',
            'btn-text-glow'
        ];

        keys.forEach(key => {
            this.lightProps[key] = this.getStyleValue(key);
            this.darkProps[key]  = this.getStyleValue('dark-' + key);
        });

        this.darkMode.addEventListener('click', () => {
            this.darkMode.classList.add('off');
            this.lightMode.classList.remove('off');
            document.documentElement.style.setProperty('color-scheme', 'dark');
            this.switchMode(this.darkProps);
        });

        this.lightMode.addEventListener('click', () => {
            this.lightMode.classList.add('off');
            this.darkMode.classList.remove('off');
            document.documentElement.style.setProperty('color-scheme', 'light');
            this.switchMode(this.lightProps);
        });

        const isDark = parseInt(this.getStyleValue('dark-mode'));
        if (isDark) {
            this.darkMode.classList.add('off');
            this.lightMode.classList.remove('off');
            document.documentElement.style.setProperty('color-scheme', 'dark');
            this.switchMode(this.dark);
        }


        /* Resizing */
        const nav = document.getElementsByTagName('nav')[0];
        window.addEventListener('resize', () => {
            if (window.innerHeight >= window.innerWidth) {
                nav.classList.add('shrunk');
            } else {
                nav.classList.remove('shrunk');
            }
        });

        const h1 = document.getElementsByTagName('h1')[0];
        h1.addEventListener('click', () => {
            nav.classList.toggle('shrunk');
        });

        const isMobile = parseInt(this.getStyleValue('mobile-view'));
        if (isMobile) {
            nav.classList.add('shrunk');
        }
    }

    switchMode(props) {
        for (let key in props) {
            this.setStyleValue(key, props[key]);
        }
    }

    getStyleValue(key) {
        const propKey = (key === 'color-scheme') ? key : '--' + key;
        return getComputedStyle(document.documentElement).getPropertyValue(propKey).trim();
    }

    setStyleValue(key, value) {
        const propKey = (key === 'color-scheme') ? key : '--' + key;
        document.documentElement.style.setProperty(propKey, value);
    }
}

export default Modes;