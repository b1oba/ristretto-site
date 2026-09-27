document.documentElement.classList.add("js");

// ---------- Меню из menu.js ----------

(function renderMenu() {
  var data = window.MENU;
  var tabsEl = document.querySelector("[data-menu-tabs]");
  var panelsEl = document.querySelector("[data-menu-panels]");
  if (!tabsEl || !panelsEl) return;

  if (!data || !data.categories || !data.categories.length) {
    panelsEl.innerHTML = '<p class="menu__empty">Меню не загрузилось. Проверьте, что файл menu.js лежит рядом с index.html.</p>';
    return;
  }

  // В боте названия категорий начинаются с эмодзи — на сайте они не нужны
  function cleanTitle(title) {
    return String(title).replace(/^[^\p{L}\p{N}]+/u, "").trim();
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  var currency = data.currency || "₽";
  var tabs = [];
  var panels = [];

  data.categories.forEach(function (cat, i) {
    var tabId = "tab-" + i;
    var panelId = "panel-" + i;

    var tab = el("button", "tab", cleanTitle(cat.title));
    tab.type = "button";
    tab.id = tabId;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", panelId);
    tab.appendChild(el("span", "tab__count", String(cat.items.length)));
    tabsEl.appendChild(tab);
    tabs.push(tab);

    var panel = el("div", "panel");
    panel.id = panelId;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tabId);

    cat.items.forEach(function (item) {
      var dish = el("article", "dish");
      var line = el("div", "dish__line");
      line.appendChild(el("h3", "dish__name", item.name));
      line.appendChild(el("span", "dish__dots"));
      // Объём берём из описания (например «250 / 350 мл»), чтобы не дублировать данные
      var vol = String(item.description || "").match(/\d+(?:\s*\/\s*\d+)?\s*мл/);
      if (vol) line.appendChild(el("span", "dish__vol", vol[0].replace(/\s*мл$/, " мл")));
      line.appendChild(el("span", "dish__price", item.price + " " + currency));
      dish.appendChild(line);
      if (item.description) dish.appendChild(el("p", "dish__desc", item.description));
      panel.appendChild(dish);
    });

    panelsEl.appendChild(panel);
    panels.push(panel);
  });

  function select(index, focus) {
    tabs.forEach(function (tab, i) {
      var on = i === index;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
      panels[i].hidden = !on;
      panels[i].classList.toggle("is-entering", on);
    });
    if (focus) tabs[index].focus();
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { select(i, false); });
    tab.addEventListener("keydown", function (e) {
      var next = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % tabs.length;
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + tabs.length) % tabs.length;
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = tabs.length - 1;
      if (next !== null) { e.preventDefault(); select(next, true); }
    });
  });

  select(0, false);
})();

// ---------- Открыто / закрыто (по московскому времени) ----------

(function openStatus() {
  var OPEN = 8 * 60;
  var CLOSE = 22 * 60;
  var nodes = document.querySelectorAll("[data-open-status]");
  if (!nodes.length) return;

  function moscowMinutes() {
    try {
      var parts = new Intl.DateTimeFormat("ru-RU", {
        timeZone: "Europe/Moscow", hour: "2-digit", minute: "2-digit", hour12: false
      }).formatToParts(new Date());
      var h = 0, m = 0;
      parts.forEach(function (p) {
        if (p.type === "hour") h = parseInt(p.value, 10) % 24;
        if (p.type === "minute") m = parseInt(p.value, 10);
      });
      return h * 60 + m;
    } catch (e) {
      return null;
    }
  }

  function update() {
    var now = moscowMinutes();
    if (now === null) return;
    var open = now >= OPEN && now < CLOSE;
    var text = open ? "Сейчас открыто, до 22:00" : "Сейчас закрыто, откроемся в 8:00";
    nodes.forEach(function (n) {
      n.textContent = text;
      n.classList.toggle("is-open", open);
    });
  }

  update();
  setInterval(update, 60 * 1000);
})();

// ---------- Кнопка брони внизу экрана на телефоне ----------

(function bookingDock() {
  var dock = document.querySelector("[data-dock]");
  var heroBtn = document.getElementById("hero-book");
  var contactsBtn = document.getElementById("contacts-book");
  if (!dock || !heroBtn) return;

  var link = dock.querySelector("a");
  var shown = false;
  var queued = false;

  // Показываем, когда кнопка первого экрана уже пролистана,
  // а кнопка в контактах ещё не видна
  function update() {
    queued = false;
    var pastHero = heroBtn.getBoundingClientRect().bottom < 0;
    var contactsVisible = false;
    if (contactsBtn) {
      var r = contactsBtn.getBoundingClientRect();
      contactsVisible = r.top < window.innerHeight && r.bottom > 0;
    }
    var show = pastHero && !contactsVisible;
    if (show === shown) return;
    shown = show;
    dock.classList.toggle("is-shown", show);
    dock.setAttribute("aria-hidden", show ? "false" : "true");
    link.tabIndex = show ? 0 : -1;
  }

  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  update();
})();

// ---------- Блоки проступают при прокрутке ----------

(function reveal() {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var groups = [
    [".section .h2, .about__lead, .menu__head, .tabs, .book, .map", "rv"],
    [".log, .fields, .marks", "rv-table"],
    [".photo", "rv-photo"],
    [".menu__panels", "rv-menu"]
  ];
  var targets = [];

  groups.forEach(function (g) {
    document.querySelectorAll(g[0]).forEach(function (node) {
      // Заголовок меню уже внутри .menu__head — не анимируем дважды
      if (g[1] === "rv" && node.closest(".menu__head") && node !== node.closest(".menu__head")) return;
      node.classList.add(g[1]);
      targets.push(node);
    });
  });

  // Строки таблиц вписываются по очереди (не больше шести шагов)
  document.querySelectorAll(".rv-table").forEach(function (table) {
    var rows = table.querySelectorAll(":scope > .log__row, :scope > .fields__row, :scope > .marks__item");
    rows.forEach(function (row, i) { row.style.setProperty("--i", Math.min(i, 6)); });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var node = entry.target;
      node.classList.add("is-in");
      io.unobserve(node);
      if (node.classList.contains("rv-menu")) {
        var panel = node.querySelector(".panel:not([hidden])");
        if (panel) {
          panel.classList.remove("is-entering");
          void panel.offsetWidth; // перезапуск анимации
          panel.classList.add("is-entering");
        }
      }
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });

  targets.forEach(function (node) { io.observe(node); });
})();
