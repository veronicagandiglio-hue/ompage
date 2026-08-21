/*
  OMPAGE — FAQ ACCORDION
  Vanilla JS, nessuna libreria esterna.
  Apre una domanda alla volta: aprendone una nuova, le altre si chiudono.

  Nota performance: lo script è caricato con "defer", quindi il DOM è
  già pronto quando questo file viene eseguito. Non serve più avvolgere
  il codice in un listener DOMContentLoaded: una IIFE basta a mantenere
  le variabili fuori dallo scope globale.
*/

(function () {
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var button = item.querySelector('.faq-item__question');
    var answer = item.querySelector('.faq-item__answer');

    button.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      closeAllFaqItems(faqItems);

      if (!isOpen) {
        openFaqItem(item, button, answer);
      }
    });
  });

  function openFaqItem(item, button, answer) {
    item.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
    answer.setAttribute('aria-hidden', 'false');
  }

  function closeFaqItem(item, button, answer) {
    item.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    answer.setAttribute('aria-hidden', 'true');
  }

  function closeAllFaqItems(items) {
    items.forEach(function (item) {
      var button = item.querySelector('.faq-item__question');
      var answer = item.querySelector('.faq-item__answer');
      closeFaqItem(item, button, answer);
    });
  }

  /* ==========================================================
     MODALI FOOTER (Privacy Policy, Termini, Contatti)
     ========================================================== */

  document.querySelectorAll('[data-modal-open]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var modal = document.getElementById('modal-' + trigger.getAttribute('data-modal-open'));
      if (modal) {
        modal.showModal();
        document.body.classList.add('has-modal-open');
      }
    });
  });

  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.querySelectorAll('[data-modal-close]').forEach(function (closeButton) {
      closeButton.addEventListener('click', function () {
        modal.close();
      });
    });

    // Chiude il modale cliccando fuori dal contenuto (sul backdrop)
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.close();
      }
    });

    // Il <dialog> emette sempre 'close', qualunque sia la causa (bottone
    // X, click sul backdrop sopra, o tasto ESC gestito nativamente dal
    // browser): un solo listener basta per riabilitare lo scroll.
    modal.addEventListener('close', function () {
      document.body.classList.remove('has-modal-open');
    });
  });

  /* ==========================================================
     COOKIE BAR
     Mostra il banner al primo accesso, salva la scelta in
     localStorage e non lo ripropone più una volta scelto.
     ========================================================== */

  var COOKIE_CONSENT_KEY = 'ompage_cookie_consent';
  var cookieBar = document.getElementById('cookie-bar');

  if (cookieBar) {
    var acceptButton = document.getElementById('cookie-accept');
    var rejectButton = document.getElementById('cookie-reject');

    var getCookieConsent = function () {
      try {
        return localStorage.getItem(COOKIE_CONSENT_KEY);
      } catch (e) {
        return null;
      }
    };

    var setCookieConsent = function (value) {
      try {
        localStorage.setItem(COOKIE_CONSENT_KEY, value);
      } catch (e) {
        // localStorage non disponibile (es. modalità privata): il banner
        // ricomparirà ai prossimi accessi, ma non blocchiamo l'interazione.
      }
    };

    var hideCookieBar = function () {
      cookieBar.classList.remove('is-visible');
    };

    if (!getCookieConsent()) {
      window.requestAnimationFrame(function () {
        cookieBar.classList.add('is-visible');
      });
    }

    if (acceptButton) {
      acceptButton.addEventListener('click', function () {
        setCookieConsent('accepted');
        hideCookieBar();
      });
    }

    if (rejectButton) {
      rejectButton.addEventListener('click', function () {
        setCookieConsent('rejected');
        hideCookieBar();
      });
    }
  }

  /* ==========================================================
     VELOCITÀ VIDEO DEMO (2x)
     ========================================================== */
  var demoVideo = document.querySelector('.demo-showcase__video');
  if (demoVideo) {
    demoVideo.defaultPlaybackRate = 2.0;
    demoVideo.playbackRate = 2.0;
    demoVideo.addEventListener('play', function () {
      demoVideo.playbackRate = 2.0;
    });
    demoVideo.addEventListener('loadedmetadata', function () {
      demoVideo.playbackRate = 2.0;
    });
  }
})();
