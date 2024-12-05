// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "jquery";
import "@hotwired/turbo-rails";
import "controllers";

// ページごとの初期化関数
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

  // Google Maps の初期化
  const mapElement = document.getElementById("map");
  if (mapElement && typeof initMap === "function") {
    initMap();
  }

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
