"use strict";

import Projects  from './projects.js';
import Exercises from './exercises.js';
import Modes from './modes.js';

class Dashboard {
    projects = {};
    exercises = {};
    modes = {};

    constructor() {
        this.projects = new Projects();
        this.exercises = new Exercises();
        this.modes = new Modes();

    // Search Hints Datalist
    const datalist = document.getElementById('search-hints');
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        const text = links[i].textContent.trim();
        if (text !== '') {
            const option = document.createElement('option');
            option.value = text;
            datalist.appendChild(option);
            } 
        } 
    }
}

export default Dashboard;