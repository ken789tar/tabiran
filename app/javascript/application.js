// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery3
//= require popper
//= require bootstrap
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
            console.log("Hamburger menu clicked");
            $('.navigation').toggleClass('open');
            $(this).toggleClass('hamburger-menu--open');
            console.log($('.navigation').hasClass('open') ? "Menu is open" : "Menu is closed");
        });
    }

    // Google Maps の初期化
    const mapElement = document.getElementById("map");
    if (mapElement && typeof initMap === "function") {
        console.log("Initializing Google Maps");
        initMap();
    } else if (mapElement) {
        console.warn("initMap function not found or Google Maps script not loaded.");
    }

    // プロフィールテキストエリアの自動リサイズ
    const profileTextArea = document.querySelector('.auto-resize');
    if (profileTextArea) {
        const resizeTextArea = function () {
            this.style.height = 'auto';  // 高さをリセット
            this.style.height = `${this.scrollHeight}px`; // 必要な高さを設定
        };

        profileTextArea.addEventListener('input', resizeTextArea);
        resizeTextArea.call(profileTextArea); // 初期化時に実行
    }
}

// Turboページ遷移に対応
document.addEventListener("turbo:load", function () {
    initializePage();
});
