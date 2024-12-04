// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "jquery";
import "@hotwired/turbo-rails";
import "controllers";

let mapInitialized = false; // Google Map初期化済みフラグ

// Google Maps 初期化関数
function initGoogleMap() {
  const mapElement = document.getElementById("map");
  if (mapElement) {
    // 地図がすでに初期化されている場合はリサイズを実行
    if (mapInitialized) {
      google.maps.event.trigger(mapElement, "resize");
      return;
    }
    // 新たに地図を初期化
    initMap();
    mapInitialized = true;
  }
}

// Turboページごとの初期化関数
function initializePage() {
  console.log("Page initialized");

  // ハンバーガーメニューの処理
  const hamburgerMenu = $('#js-hamburger-menu');
  if (hamburgerMenu.length) {
    hamburgerMenu.off('click').on('click', function () {
      $('.navigation').toggleClass('open');
      $(this).toggleClass('hamburger-menu--open');
    });
  }

  // Google Maps 初期化処理
  initGoogleMap();

  // プロフィールテキストエリアの自動リサイズ
  const profileTextArea = document.querySelector('.auto-resize');
  if (profileTextArea) {
    const resizeTextArea = function () {
      this.style.height = 'auto';
      this.style.height = `${this.scrollHeight}px`;
    };
    profileTextArea.addEventListener('input', resizeTextArea);
    resizeTextArea.call(profileTextArea);
  }
}

// Turboページ遷移に対応
document.addEventListener("turbo:load", initializePage);

// Google Maps APIが非同期でロードされる場合の対応
window.initMap = function () {
  console.log("Google Maps initialized");
  initializePage(); // 初期化関数を再実行
};
