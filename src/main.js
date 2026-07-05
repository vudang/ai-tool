import { categories, tools } from "./data/tools.js";

const HOME_COPY = {
  title: "Trung tâm Công cụ AI của Tôi",
  description:
    "Quản lý, tìm kiếm và kích hoạt các công cụ dòng lệnh, agent và framework được tối ưu hóa cho quy trình phát triển hằng ngày."
};

const DETAIL_COPY = {
  title: "Thư viện Lệnh CLI & Cheatsheets",
  description:
    "Khám phá và quản lý các công cụ dòng lệnh được tích hợp sẵn. Lựa chọn công cụ để xem chi tiết tính năng và bảng lệnh tham khảo nhanh."
};

const uiCategories = [
  { id: "all", label: "Tất cả" },
  { id: "cli", label: "CLI Tools" },
  { id: "agents", label: "Agents" },
  { id: "frameworks", label: "Frameworks" }
];

const state = {
  query: "",
  category: "all",
  selectedToolId: getInitialToolId(),
  view: getInitialView()
};

const categoryDisplayLabels = {
  all: "Tất cả",
  cli: "CLI Tools",
  context: "Context",
  skills: "Skills",
  automation: "Automation",
  "multi-agent": "Agents",
  agents: "Agents",
  frameworks: "Frameworks"
};

const iconMap = {
  cli: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5"></rect>
      <path d="M7.5 10.5l2.8 2.5-2.8 2.5"></path>
      <path d="M12.5 15.5h4"></path>
    </svg>
  `,
  context: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <circle cx="12" cy="12" r="8"></circle>
      <path d="M12 8v4l2.5 2.5"></path>
    </svg>
  `,
  skills: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M8 7l4-4 4 4"></path>
      <path d="M8 17l4 4 4-4"></path>
      <path d="M4 12h16"></path>
    </svg>
  `,
  automation: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M12 3l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L6.2 7.2l4-.6z"></path>
      <path d="M12 13v8"></path>
    </svg>
  `,
  "multi-agent": `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <circle cx="8" cy="10" r="2.5"></circle>
      <circle cx="16.5" cy="8" r="2.5"></circle>
      <circle cx="15" cy="16.5" r="2.5"></circle>
      <path d="M10 10.8l4.2-1.5"></path>
      <path d="M9.8 11.8l3.9 3.3"></path>
    </svg>
  `
};

const searchInput = document.querySelector("#search-input");
const filterRow = document.querySelector("#filter-row");
const resultSummary = document.querySelector("#result-summary");
const libraryStatus = document.querySelector("#library-status");
const toolGrid = document.querySelector("#tool-grid");
const selectedToolView = document.querySelector("#selected-tool-view");
const toast = document.querySelector("#toast");
const heroTitle = document.querySelector("#hero-title");
const heroDescription = document.querySelector("#hero-description");
const contentStage = document.querySelector("#content-stage");
const libraryPanel = document.querySelector("#library");
const detailPanel = document.querySelector("#tool-detail");
const libraryHead = document.querySelector("#library-head");
const navDashboard = document.querySelector("#nav-dashboard");
const navLibrary = document.querySelector("#nav-library");

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function copyText(text) {
  return navigator.clipboard?.writeText(text);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.add("hidden");
  }, 1800);
}

function readRouteFromHash() {
  const match = window.location.hash.match(/^#tool=([\w-]+)$/);

  if (!match) {
    return { view: "home", toolId: null };
  }

  return { view: "detail", toolId: match[1] };
}

function getInitialView() {
  return readRouteFromHash().view;
}

function getInitialToolId() {
  const { toolId } = readRouteFromHash();
  return tools.some((tool) => tool.id === toolId) ? toolId : tools[0]?.id ?? null;
}

function writeRouteToHash() {
  const nextHash = state.view === "detail" && state.selectedToolId
    ? `#tool=${state.selectedToolId}`
    : "#top";

  if (window.location.hash !== nextHash) {
    history.replaceState(null, "", nextHash);
  }
}

function openToolDetail(toolId) {
  state.category = "all";
  state.selectedToolId = toolId;
  state.view = "detail";
  writeRouteToHash();
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getCategoryLabel(categoryId) {
  return categoryDisplayLabels[categoryId]
    ?? categories.find((category) => category.id === categoryId)?.label
    ?? categoryId;
}

function getFilteredTools() {
  const query = normalize(state.query);

  return tools.filter((tool) => {
    const inCategory = matchesUiCategory(tool, state.category);
    if (!inCategory) {
      return false;
    }

    if (!query) {
      return true;
    }

    const haystack = normalize(
      [
        tool.name,
        tool.host,
        tool.summary,
        tool.bestFor,
        ...tool.highlights,
        ...tool.keywords,
        ...tool.quickCommands.map((item) => item.label),
        ...tool.quickCommands.map((item) => item.command),
        ...tool.quickCommands.map((item) => item.note)
      ].join(" ")
    );

    return haystack.includes(query);
  });
}

function matchesUiCategory(tool, categoryId) {
  if (categoryId === "all") {
    return true;
  }

  if (categoryId === "cli") {
    return tool.category === "cli";
  }

  if (categoryId === "agents") {
    return tool.category === "context" || tool.category === "multi-agent";
  }

  if (categoryId === "frameworks") {
    return tool.category === "skills" || tool.category === "automation";
  }

  return tool.category === categoryId;
}

function syncSelectedTool(filteredTools) {
  if (!filteredTools.length) {
    state.selectedToolId = null;
    if (state.view === "detail") {
      state.view = "home";
      writeRouteToHash();
    }
    return null;
  }

  const allowedIds = new Set(filteredTools.map((tool) => tool.id));

  if (!state.selectedToolId || !allowedIds.has(state.selectedToolId)) {
    state.selectedToolId = filteredTools[0].id;
    if (state.view === "detail") {
      writeRouteToHash();
    }
  }

  return filteredTools.find((tool) => tool.id === state.selectedToolId) ?? filteredTools[0];
}

function getToolMetrics(selectedTool, filteredTools) {
  const featuredCount = tools.filter((tool) => tool.priority === "featured").length;

  return [
    {
      value: `${filteredTools.length}/${tools.length}`,
      label: "tool đang khớp bộ lọc"
    },
    {
      value: getCategoryLabel(state.category),
      label: "nhóm đang được xem"
    },
    {
      value: selectedTool ? `${selectedTool.quickCommands.length} lệnh` : "0 lệnh",
      label: "cheatsheet của tool active"
    },
    {
      value: `${featuredCount} featured`,
      label: "công cụ ưu tiên hằng ngày"
    }
  ];
}

function getSourceActionLabel(sourceUrl) {
  return sourceUrl.includes("github.com") ? "Xem trên GitHub" : "Xem docs";
}

function getPrimaryActionLabel(tool) {
  const firstLabel = normalize(tool.quickCommands[0]?.label ?? "");
  return firstLabel.includes("cai") || firstLabel.includes("install")
    ? "Cài đặt ngay"
    : "Copy lệnh mở đầu";
}

function getToolHandle(tool) {
  try {
    const url = new URL(tool.sourceUrl);

    if (url.hostname.includes("github.com")) {
      return url.pathname.replace(/^\/+/, "").split("/").slice(0, 2).join("/");
    }

    return `${tool.host} / ${url.hostname.replace(/^www\./, "")}`;
  } catch {
    return `${tool.host} / ${tool.id}`;
  }
}

function getToolBadges(tool) {
  return [
    getCategoryLabel(tool.category),
    tool.priority === "featured" ? "Featured" : tool.cadence
  ];
}

function getQuickInfo(selectedTool) {
  return [
    {
      label: "Host",
      value: selectedTool.host
    },
    {
      label: "Nhóm",
      value: getCategoryLabel(selectedTool.category)
    },
    {
      label: "Dùng khi",
      value: selectedTool.cadence
    }
  ];
}

function updateShell(selectedTool, filteredTools) {
  const isDetail = state.view === "detail";
  const copy = isDetail ? DETAIL_COPY : HOME_COPY;

  document.body.classList.toggle("route-detail", isDetail);
  document.body.classList.toggle("route-home", !isDetail);

  heroTitle.textContent = copy.title;
  heroDescription.textContent = copy.description;

  filterRow.hidden = isDetail;
  resultSummary.hidden = isDetail;
  libraryPanel.hidden = isDetail;
  detailPanel.hidden = !isDetail;
  contentStage.classList.toggle("detail-mode", isDetail);
  libraryPanel.classList.toggle("detail-aside", isDetail);
  detailPanel.classList.toggle("detail-card-panel", isDetail);
  libraryHead.hidden = isDetail;

  navDashboard.classList.toggle("active", !isDetail);
  navLibrary.classList.toggle("active", isDetail);
  navLibrary.setAttribute("href", isDetail && selectedTool ? `#tool=${selectedTool.id}` : "#library");

  libraryStatus.textContent = isDetail
    ? `${filteredTools.length} tool`
    : selectedTool
      ? `Đang xem: ${selectedTool.name}`
      : "Không có tool nào khớp bộ lọc hiện tại";
}

function renderFilters() {
  filterRow.innerHTML = uiCategories
    .map(
      (category) => `
        <button
          class="filter-pill ${category.id === state.category ? "active" : ""}"
          type="button"
          data-category="${category.id}"
        >
          ${category.label}
        </button>
      `
    )
    .join("");

  filterRow.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      renderApp();
    });
  });
}

function renderOverview(filteredTools, selectedTool) {
  resultSummary.innerHTML = getToolMetrics(selectedTool, filteredTools)
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `
    )
    .join("");
}

function renderHomeToolGrid(filteredTools, selectedTool) {
  if (!filteredTools.length) {
    toolGrid.innerHTML = `
      <article class="empty-state">
        <p class="section-label">No results</p>
        <h3>Không tìm thấy công cụ phù hợp</h3>
        <p>Thử đổi từ khóa tìm kiếm hoặc quay lại bộ lọc "Tất cả".</p>
      </article>
    `;
    return;
  }

  toolGrid.className = "tool-grid";
  toolGrid.innerHTML = filteredTools
    .map(
      (tool) => `
        <button
          class="tool-card"
          type="button"
          data-tool-id="${tool.id}"
          data-accent="${tool.accent}"
          data-priority="${tool.priority}"
          aria-pressed="false"
        >
          <div class="tool-card-frame">
            <div class="tool-card-titleline">
              <span class="tool-card-dot" aria-hidden="true"></span>
              <h3>${tool.name}</h3>
            </div>

            <div class="tool-card-copy">
              <p>${tool.summary}</p>
            </div>

            <div class="tool-card-tags">
              ${getToolBadges(tool)
                .map((badge, index) => `
                  <span class="tool-tag ${index === 0 ? "home-tag-accent" : "muted"}">${badge}</span>
                `)
                .join("")}
            </div>
          </div>
        </button>
      `
    )
    .join("");

  toolGrid.querySelectorAll("[data-tool-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openToolDetail(button.dataset.toolId);
    });
  });
}

function renderDetailToolList(filteredTools, selectedTool) {
  if (!filteredTools.length) {
    toolGrid.innerHTML = `
      <article class="empty-state detail-list-empty">
        <p class="section-label">No results</p>
        <h3>Không có tool phù hợp</h3>
        <p>Hãy thử keyword ngắn hơn để mở lại detail list.</p>
      </article>
    `;
    return;
  }

  toolGrid.className = "tool-list-stack";
  toolGrid.innerHTML = filteredTools
    .map(
      (tool) => `
        <button
          class="detail-tool-card ${selectedTool?.id === tool.id ? "active" : ""}"
          type="button"
          data-tool-id="${tool.id}"
          data-accent="${tool.accent}"
          aria-pressed="${selectedTool?.id === tool.id ? "true" : "false"}"
        >
          <div class="detail-tool-head">
            <span class="detail-tool-icon" aria-hidden="true">
              ${iconMap[tool.category] ?? iconMap.cli}
            </span>
            <h3>${tool.name}</h3>
          </div>
          <p>${tool.summary}</p>
          <div class="detail-tool-badges">
            ${getToolBadges(tool).map((badge, index) => `
              <span class="detail-badge ${index === 1 ? "detail-badge-accent" : ""}">${badge}</span>
            `).join("")}
          </div>
        </button>
      `
    )
    .join("");

  toolGrid.querySelectorAll("[data-tool-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openToolDetail(button.dataset.toolId);
    });
  });
}

function renderToolGrid(filteredTools, selectedTool) {
  if (state.view === "detail") {
    toolGrid.innerHTML = "";
    return;
  }

  renderHomeToolGrid(filteredTools, selectedTool);
}

function renderSelectedTool(selectedTool, filteredTools) {
  if (state.view !== "detail") {
    selectedToolView.innerHTML = "";
    return;
  }

  if (!selectedTool) {
    selectedToolView.innerHTML = `
      <div class="empty-state detail-empty">
        <p class="section-label">Detail</p>
        <h3>Chưa có tool nào để hiển thị</h3>
        <p>Bộ lọc hiện tại không còn tool nào trong detail route.</p>
      </div>
    `;
    return;
  }

  const firstCommand = selectedTool.quickCommands[0]?.command ?? "";

  selectedToolView.innerHTML = `
    <article class="tool-detail-shell" data-accent="${selectedTool.accent}">
      <div class="tool-detail-ribbon"></div>

      <div class="tool-detail-body">
        <header class="tool-detail-header">
          <div class="tool-detail-titleblock">
            <span class="tool-detail-iconframe" aria-hidden="true">
              <span class="tool-detail-icon">
                ${iconMap[selectedTool.category] ?? iconMap.cli}
              </span>
            </span>
            <div>
              <h2>${selectedTool.name}</h2>
              <p class="tool-detail-handle">${getToolHandle(selectedTool)}</p>
            </div>
          </div>

          <div class="tool-detail-actions">
            <a class="button secondary" href="${selectedTool.sourceUrl}" target="_blank" rel="noreferrer">
              ${getSourceActionLabel(selectedTool.sourceUrl)}
            </a>
            <button class="button primary" type="button" data-copy="${encodeURIComponent(firstCommand)}">
              ${getPrimaryActionLabel(selectedTool)}
            </button>
          </div>
        </header>

        <div class="tool-detail-columns">
          <article class="tool-detail-card">
            <div class="tool-detail-card-head">
              <span class="tool-detail-card-icon" aria-hidden="true">✦</span>
              <p>Tính năng nổi bật</p>
            </div>
            <ul class="tool-feature-list">
              ${selectedTool.highlights.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>

          <article class="tool-detail-card tool-detail-card-plain">
            <div class="tool-meta-list">
              ${getQuickInfo(selectedTool).map((item) => `
                <div class="tool-meta-item">
                  <span>${item.label}</span>
                  <strong>${item.value}</strong>
                </div>
              `).join("")}
            </div>
          </article>
        </div>

        <section class="tool-command-panel">
          <div class="tool-command-head">
            <span class="tool-command-icon" aria-hidden="true">⌘</span>
            <h3>Bảng lệnh Cheatsheet</h3>
          </div>

          <div class="terminal-window detail-terminal">
            <div class="terminal-topbar">
              <span class="terminal-lights" aria-hidden="true">
                <i></i><i></i><i></i>
              </span>
              <span class="terminal-title">-- ${selectedTool.id}</span>
            </div>

            <div class="terminal-body">
              ${selectedTool.quickCommands
                .map(
                  (item) => `
                    <article class="terminal-block detail-terminal-block" data-copy="${encodeURIComponent(item.command)}">
                      <div class="terminal-block-head">
                        <p class="terminal-comment"># ${item.label}</p>
                      </div>
                      <div class="terminal-command-row">
                        <span class="terminal-prompt">➜</span>
                        <code class="terminal-command">${item.command}</code>
                      </div>
                      <p class="terminal-note">${item.note}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </section>
      </div>
    </article>
  `;
}

function attachCopyHandlers() {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = decodeURIComponent(button.dataset.copy);

      try {
        await copyText(value);
        showToast(`Đã copy: ${value}`);
      } catch {
        showToast("Không copy được. Hãy thử copy thủ công từ command board.");
      }
    });
  });
}

function renderApp() {
  const filteredTools = getFilteredTools();
  const selectedTool = syncSelectedTool(filteredTools);

  renderFilters();
  updateShell(selectedTool, filteredTools);
  renderOverview(filteredTools, selectedTool);
  renderToolGrid(filteredTools, selectedTool);
  renderSelectedTool(selectedTool, filteredTools);
  attachCopyHandlers();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderApp();
});

window.addEventListener("hashchange", () => {
  const route = readRouteFromHash();
  state.view = route.view;

  if (route.toolId && tools.some((tool) => tool.id === route.toolId)) {
    state.selectedToolId = route.toolId;
  }

  renderApp();
});

renderApp();
