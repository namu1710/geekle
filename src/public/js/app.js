!function o(u,c,f){function l(t,e){if(!c[t]){if(!u[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(s)return s(t,!0);var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}var r=c[t]={exports:{}};u[t][0].call(r.exports,function(e){return l(u[t][1][e]||e)},r,r.exports,o,u,c,f)}return c[t].exports}for(var s="function"==typeof require&&require,e=0;e<f.length;e++)l(f[e]);return l}({1:[function(e,t,n){"use strict";$(document).ready(function(){$(".mob-menu").click(function(){$(this).toggleClass("mob-menu-active"),$(".header-menu").slideToggle()}),$(".main-content-mob-list").click(function(){$("#mob-list-items").slideToggle()}),$("#mob-list-items").children().click(function(){var e=$(this).text();$("#mob-list-p").text(e)})})},{}]},{},[1]);
//# sourceMappingURL=maps/app.js.map
