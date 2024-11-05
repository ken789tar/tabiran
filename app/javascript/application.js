// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery3
//= require popper
//= require bootstrap
import "jquery";
import "@hotwired/turbo-rails"
import "controllers"
import "./javascript";

$(function () {
    $('#js-hamburger-menu').on('click', function () {
      $('.navigation').toggleClass('open');
      $(this).toggleClass('hamburger-menu--open');
      console.log("Menu toggled");
    });
});