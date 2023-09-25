
import html from '../assets/images/svg/html.svg'
import illustrator from '../assets/images/svg/illustrator.svg'
import css from '../assets/images/svg/css.svg'
import angular from '../assets/images/svg/angular.svg'
import javascript from '../assets/images/svg/javascript.svg'
import react from '../assets/images/svg/react.svg'
import typescript from '../assets/images/svg/typescript.svg'
import bootstrap from '../assets/images/svg/bootstrap.svg'
import mysql from '../assets/images/svg/mysql.svg'
import tailwind from '../assets/images/svg/tailwind.svg'
import springboot from '../assets/images/svg/springboot.svg'
import nextjs from '../assets/images/svg/nextjs.svg'
import blueprism from '../assets/images/svg/blueprism.svg'
import java from '../assets/images/svg/java.svg'
import dart from '../assets/images/svg/dart.svg'
import firebase from '../assets/images/svg/firebase.svg'
import git from '../assets/images/svg/git.svg'

import flutter from '../assets/images/svg/flutter.svg'
import ionic from '../assets/images/svg/ionic.svg'





export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'illustrator':
            return illustrator;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mysql':
            return mysql;
        case 'tailwind':
            return tailwind;
        case 'spring boot':
            return springboot;
        case 'dart':
            return dart;
        case 'blue prism':
            return blueprism;
        case 'java':
            return java;
        case 'next js':
            return nextjs;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'flutter':
            return flutter;
        case 'ionic':
            return ionic;
        default:
            break;
    }
}