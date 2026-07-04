import { categories, docsGuide, tools, workflowSteps } from "./data/tools.js";

const state = {
  query: "",
  category: "all",
  selectedToolId: getInitialToolId()
};

const categoryDisplayLabels = {
  all: "Tất cả",
  cli: "CLI Tools",
  context: "Context",
  skills: "Skills",
  automation: "Automation",
  "multi-agent": "Agents"
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
const workflowGrid = document.querySelector("#workflow-grid");
const docsGrid = document.querySelector("#docs-grid");
const toast = document.querySelector("#toast");

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

function getInitialToolId() {
  const hashId = readToolIdFromHash();
  return tools.some((tool) => tool.id === hashId) ? hashId : tools[0]?.id ?? null;
}

function readToolIdFromHash() {
  const match = window.location.hash.match(/^#tool=([\w-]+)$/);
  return match?.[1] ?? null;
}

function writeToolIdToHash(toolId) {
  const nextHash = toolId ? `#tool=${toolId}` : "#top";

  if (window.location.hash === nextHash) {
    return;
  }

  history.replaceState(null, "", nextHash);
}

function selectTool(toolId) {
  state.selectedToolId = toolId;
  writeToolIdToHash(toolId);
  renderApp();
}

function getCategoryLabel(categoryId) {
  return categoryDisplayLabels[categoryId]
    ?? categories.find((category) => category.id === categoryId)?.label
    ?? categoryId;
}

function getFilteredTools() {
  const query = normalize(state.query);

  return tools.filter((tool) => {
    const inCategory = state.category === "all" || tool.category === state.category;
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

function syncSelectedTool(filteredTools) {
  if (!filteredTools.length) {
    state.selectedToolId = null;
    writeToolIdToHash(null);
    return null;
  }

  const allowedIds = new Set(filteredTools.map((tool) => tool.id));
  const hashId = readToolIdFromHash();

  if (hashId && allowedIds.has(hashId)) {
    state.selectedToolId = hashId;
  } else if (!state.selectedToolId || !allowedIds.has(state.selectedToolId)) {
    state.selectedToolId = filteredTools[0].id;
  }

  writeToolIdToHash(state.selectedToolId);
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

function renderFilters() {
  filterRow.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-pill ${category.id === state.category ? "active" : ""}"
          type="button"
          data-category="${category.id}"
        >
          ${getCategoryLabel(category.id)}
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

  libraryStatus.textContent = selectedTool
    ? `Đang xem: ${selectedTool.name}`
    : "Không có tool nào khớp bộ lọc hiện tại";
}

function renderToolGrid(filteredTools, selectedTool) {
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

  toolGrid.innerHTML = filteredTools
    .map(
      (tool) => `
        <button
          class="tool-card ${selectedTool?.id === tool.id ? "active" : ""}"
          type="button"
          data-tool-id="${tool.id}"
          data-accent="${tool.accent}"
          data-priority="${tool.priority}"
          aria-pressed="${selectedTool?.id === tool.id ? "true" : "false"}"
        >
          <div class="tool-card-frame">
            <div class="tool-card-head">
              <span class="tool-card-icon" aria-hidden="true">
                ${iconMap[tool.category] ?? iconMap.cli}
              </span>
              <span class="tool-card-host">${tool.host}</span>
            </div>

            <div class="tool-card-copy">
              <h3>${tool.name}</h3>
              <p>${tool.summary}</p>
            </div>

            <div class="tool-card-tags">
              <span class="tool-tag">${getCategoryLabel(tool.category)}</span>
              <span class="tool-tag muted">${tool.priority === "featured" ? "Featured" : tool.cadence}</span>
            </div>
          </div>
        </button>
      `
    )
    .join("");

  toolGrid.querySelectorAll("[data-tool-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectTool(button.dataset.toolId);
      document.querySelector("#tool-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
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

function buildCommandBundle(tool) {
  return tool.quickCommands
    .map((item) => `# ${item.label}\n${item.command}\n# ${item.note}`)
    .join("\n\n");
}

function renderSelectedTool(selectedTool, filteredTools) {
  if (!selectedTool) {
    selectedToolView.innerHTML = `
      <div class="empty-state detail-empty">
        <p class="section-label">Inspector</p>
        <h3>Chưa có tool nào để hiển thị</h3>
        <p>Query hiện tại không trả về kết quả. Hãy đổi bộ lọc để mở lại inspector.</p>
      </div>
    `;
    return;
  }

  const relatedTools = tools
    .filter((tool) => tool.id !== selectedTool.id && tool.category === selectedTool.category)
    .slice(0, 3);
  const firstCommand = selectedTool.quickCommands[0]?.command ?? "";
  const allCommands = buildCommandBundle(selectedTool);

  selectedToolView.innerHTML = `
    <article class="inspector-shell" data-accent="${selectedTool.accent}">
      <div class="inspector-ribbon"></div>

      <div class="inspector-header">
        <div class="inspector-tool">
          <span class="inspector-icon" aria-hidden="true">
            ${iconMap[selectedTool.category] ?? iconMap.cli}
          </span>
          <div>
            <h2>${selectedTool.name}</h2>
            <p>${selectedTool.host} / ${getCategoryLabel(selectedTool.category)} / ${selectedTool.cadence}</p>
          </div>
        </div>

        <div class="inspector-actions">
          <a class="button secondary" href="${selectedTool.sourceUrl}" target="_blank" rel="noreferrer">
            ${getSourceActionLabel(selectedTool.sourceUrl)}
          </a>
          <button
            class="button primary"
            type="button"
            data-copy="${encodeURIComponent(firstCommand)}"
          >
            ${getPrimaryActionLabel(selectedTool)}
          </button>
        </div>
      </div>

      <div class="inspector-grid">
        <article class="panel-card">
          <p class="panel-kicker">Tính năng nổi bật</p>
          <ul class="feature-list">
            ${selectedTool.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>

        <article class="panel-card">
          <p class="panel-kicker">Thông tin nhanh</p>
          <div class="meta-stack">
            <div class="meta-row">
              <span>Best for</span>
              <strong>${selectedTool.bestFor}</strong>
            </div>
            <div class="meta-row">
              <span>Host</span>
              <strong>${selectedTool.host}</strong>
            </div>
            <div class="meta-row">
              <span>Category</span>
              <strong>${getCategoryLabel(selectedTool.category)}</strong>
            </div>
            <div class="meta-row">
              <span>Kết quả hiện tại</span>
              <strong>${filteredTools.length} tool</strong>
            </div>
          </div>
        </article>
      </div>

      <section class="terminal-panel">
        <div class="terminal-head">
          <div>
            <p class="panel-kicker">Bảng lệnh cheatsheet</p>
            <h3>${selectedTool.name} command board</h3>
          </div>
          <button
            class="button ghost"
            type="button"
            data-copy="${encodeURIComponent(allCommands)}"
          >
            Copy tất cả
          </button>
        </div>

        <div class="terminal-window">
          <div class="terminal-topbar">
            <span class="terminal-lights" aria-hidden="true">
              <i></i><i></i><i></i>
            </span>
            <span class="terminal-title">${selectedTool.id}</span>
          </div>

          <div class="terminal-body">
            ${selectedTool.quickCommands
              .map(
                (item) => `
                  <article class="terminal-block">
                    <div class="terminal-block-head">
                      <p class="terminal-comment"># ${item.label}</p>
                      <button
                        class="terminal-copy"
                        type="button"
                        data-copy="${encodeURIComponent(item.command)}"
                      >
                        Copy
                      </button>
                    </div>
                    <div class="terminal-command-row">
                      <span class="terminal-prompt">›</span>
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

      <div class="inspector-footer-grid">
        <article class="panel-card">
          <p class="panel-kicker">Keywords</p>
          <div class="keyword-row">
            ${selectedTool.keywords.map((item) => `<span class="keyword-chip">${item}</span>`).join("")}
          </div>
        </article>

        <article class="panel-card">
          <p class="panel-kicker">Tool cùng nhóm</p>
          <div class="related-tool-row">
            ${
              relatedTools.length
                ? relatedTools
                    .map(
                      (tool) => `
                        <button
                          class="related-tool"
                          type="button"
                          data-tool-id="${tool.id}"
                        >
                          <strong>${tool.name}</strong>
                          <span>${tool.host}</span>
                        </button>
                      `
                    )
                    .join("")
                : '<p class="empty-inline">Chưa có gợi ý cùng nhóm khả dụng.</p>'
            }
          </div>
        </article>
      </div>
    </article>
  `;

  selectedToolView.querySelectorAll("[data-tool-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectTool(button.dataset.toolId);
    });
  });
}

function renderWorkflow() {
  workflowGrid.innerHTML = workflowSteps
    .map(
      (step, index) => `
        <article class="workflow-card">
          <span class="workflow-index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>${step.title}</h3>
            <p>${step.body}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDocs() {
  docsGrid.innerHTML = docsGuide
    .map(
      (doc) => `
        <article class="doc-card">
          <p class="panel-kicker">${doc.label}</p>
          <h3>${doc.file}</h3>
          <p>${doc.description}</p>
          <a href="./${doc.file}" target="_blank" rel="noreferrer">Mở file</a>
        </article>
      `
    )
    .join("");
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
  renderOverview(filteredTools, selectedTool);
  renderToolGrid(filteredTools, selectedTool);
  renderSelectedTool(selectedTool, filteredTools);
  renderWorkflow();
  renderDocs();
  attachCopyHandlers();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderApp();
});

window.addEventListener("hashchange", () => {
  const hashId = readToolIdFromHash();
  if (hashId && tools.some((tool) => tool.id === hashId)) {
    state.selectedToolId = hashId;
    renderApp();
  }
});

renderApp();
