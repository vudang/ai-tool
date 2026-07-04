export const categories = [
  { id: "all", label: "Tất cả" },
  { id: "cli", label: "CLI" },
  { id: "context", label: "Context" },
  { id: "skills", label: "Skills" },
  { id: "automation", label: "Automation" },
  { id: "multi-agent", label: "Multi-agent" }
];

export const tools = [
  {
    id: "claude-cli",
    name: "Claude CLI",
    host: "Anthropic",
    category: "cli",
    cadence: "Dùng hằng ngày",
    priority: "featured",
    accent: "teal",
    summary:
      "CLI agent để đọc repo, giải thích code, sửa file và chạy workflow coding theo ngôn ngữ tự nhiên ngay trong terminal.",
    bestFor: "Khởi động task mới, rà repo nhanh, coding cộng tác, chỉnh sửa từng phần.",
    sourceUrl: "https://code.claude.com/docs/en/quickstart",
    highlights: [
      "Prompt trực tiếp trên codebase hiện tại, không cần dựng context thủ công.",
      "Có thể chạy one-shot query, resume session cũ hoặc giữ lịch sử theo thư mục.",
      "Mở rộng bằng CLAUDE.md, skills, hooks và MCP."
    ],
    quickCommands: [
      {
        label: "Bắt đầu session",
        command: "claude",
        note: "Mở interactive mode trong thư mục project."
      },
      {
        label: "Chạy một task nhanh",
        command: 'claude "fix the build error"',
        note: "Giao task trực tiếp rồi để agent xử lý."
      },
      {
        label: "Hỏi nhanh rồi thoát",
        command: 'claude -p "explain this function"',
        note: "Hữu ích khi chỉ cần đọc hiểu nhanh."
      },
      {
        label: "Tiếp tục cuộc hội thoại gần nhất",
        command: "claude -c",
        note: "Dùng lại context của thư mục hiện tại."
      }
    ],
    keywords: ["anthropic", "claude", "terminal", "claude.md", "mcp"]
  },
  {
    id: "codex-cli",
    name: "Codex CLI",
    host: "OpenAI",
    category: "cli",
    cadence: "Dùng hằng ngày",
    priority: "featured",
    accent: "ink",
    summary:
      "CLI/app coding agent của OpenAI để làm việc trực tiếp trong repo, có sandbox, approvals, slash commands và skills.",
    bestFor: "Triển khai task end-to-end, review diff, điều phối command và skills.",
    sourceUrl: "https://developers.openai.com/codex/quickstart",
    highlights: [
      "Làm việc theo thread trong project, có approval policy và writable roots rõ ràng.",
      "Slash commands giúp đổi model, plan mode, personality, usage và status ngay trong session.",
      "Hỗ trợ AGENTS.md, plugins, Sites, MCP và skills để chuyên môn hóa workflow."
    ],
    quickCommands: [
      {
        label: "Cài CLI",
        command: "npm install -g @openai/codex",
        note: "Có thể cài bằng script hoặc Homebrew nếu muốn."
      },
      {
        label: "Khởi động",
        command: "codex",
        note: "Mở session mới và đăng nhập bằng ChatGPT hoặc API key."
      },
      {
        label: "Đổi model",
        command: "/model",
        note: "Chọn model active cho thread hiện tại."
      },
      {
        label: "Kiểm tra session",
        command: "/status",
        note: "Xem model, approval policy, writable roots, token usage."
      },
      {
        label: "Bật plan mode",
        command: "/plan",
        note: "Chuyển sang mode lập kế hoạch trước khi code."
      }
    ],
    keywords: ["openai", "codex", "agents.md", "skills", "approval", "sandbox"]
  },
  {
    id: "understand-anything",
    name: "Understand Anything",
    host: "Egonex AI",
    category: "context",
    cadence: "Mỗi khi vào repo lạ",
    priority: "featured",
    accent: "orange",
    summary:
      "Plugin/skill để biến codebase hoặc knowledge base thành knowledge graph có thể explore, search và hỏi đáp.",
    bestFor: "Onboarding repo, phân tích kiến trúc, diff impact, domain flow, guided tour.",
    sourceUrl: "https://github.com/Egonex-AI/Understand-Anything",
    highlights: [
      "Sinh knowledge graph từ file, function, class và dependency.",
      "Có dashboard trực quan để pan, zoom, search và mở guided tour.",
      "Có nhóm lệnh chuyên biệt cho diff analysis, onboarding và domain extraction."
    ],
    quickCommands: [
      {
        label: "Phân tích codebase",
        command: "/understand",
        note: "Sinh graph nền cho repo hiện tại."
      },
      {
        label: "Mở dashboard",
        command: "/understand-dashboard",
        note: "Xem graph trực quan trong browser."
      },
      {
        label: "Hỏi về codebase",
        command: "/understand-chat How does the payment flow work?",
        note: "Tra cứu logic theo ngôn ngữ tự nhiên."
      },
      {
        label: "Xem ảnh hưởng của diff",
        command: "/understand-diff",
        note: "Hữu ích trước review hoặc commit."
      },
      {
        label: "Giải thích một file cụ thể",
        command: "/understand-explain src/auth/login.ts",
        note: "Đi sâu vào file/hàm cụ thể."
      }
    ],
    keywords: ["knowledge graph", "dashboard", "onboarding", "diff", "context"]
  },
  {
    id: "hermes-agent",
    name: "hermes-agent",
    host: "Nous Research",
    category: "multi-agent",
    cadence: "Khi cần dàn trải workflow",
    priority: "standard",
    accent: "teal",
    summary:
      "Agent shell đa năng có CLI, gateway và khả năng cấu hình tool/provider để mở rộng khỏi use case coding thuần.",
    bestFor: "Thiết lập agent tổng quát, multi-tool runtime, gateway cho chat/messaging, subagent parallelism.",
    sourceUrl: "https://github.com/nousresearch/hermes-agent",
    highlights: [
      "Có installer một lệnh và hỗ trợ nhiều môi trường chạy.",
      "Tách rõ provider, tools, gateway, setup và doctor command.",
      "Có thể mở rộng sang Telegram, Discord và các kênh khác qua gateway."
    ],
    quickCommands: [
      {
        label: "Cài nhanh",
        command: "curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash",
        note: "Installer chuẩn cho macOS/Linux/WSL."
      },
      {
        label: "Bắt đầu chat",
        command: "hermes",
        note: "Mở interactive CLI."
      },
      {
        label: "Chọn model",
        command: "hermes model",
        note: "Chuyển provider/model ngay trong CLI."
      },
      {
        label: "Quản lý tools",
        command: "hermes tools",
        note: "Bật tắt tool backend theo phiên."
      },
      {
        label: "Setup đầy đủ",
        command: "hermes setup --portal",
        note: "Dùng Nous Portal để đi nhanh hơn."
      }
    ],
    keywords: ["gateway", "provider", "portal", "multi-tool", "subagent"]
  },
  {
    id: "free-claude-code",
    name: "free-claude-code",
    host: "Alishahryar1",
    category: "automation",
    cadence: "Khi cần route qua provider khác",
    priority: "standard",
    accent: "orange",
    summary:
      "Local proxy/Admin UI để route Claude Code và Codex qua provider miễn phí, trả phí hoặc local model mà vẫn giữ client protocol gốc.",
    bestFor: "Route traffic Claude/Codex qua OpenRouter, Ollama, NIM hoặc provider riêng.",
    sourceUrl: "https://github.com/Alishahryar1/free-claude-code",
    highlights: [
      "Một proxy chung cho cả Anthropic Messages và OpenAI Responses.",
      "Có launcher riêng cho Claude (`fcc-claude`) và Codex (`fcc-codex`).",
      "Admin UI local để chỉnh port, auth token và model routing."
    ],
    quickCommands: [
      {
        label: "Cài proxy",
        command: 'curl -fsSL "https://github.com/Alishahryar1/free-claude-code/blob/main/scripts/install.sh?raw=1" | sh',
        note: "Installer cũng tự kéo Claude/Codex nếu thiếu."
      },
      {
        label: "Chạy server",
        command: "fcc-server",
        note: "Mở local proxy + Admin UI."
      },
      {
        label: "Mở Claude qua proxy",
        command: "fcc-claude",
        note: "Launch Claude Code với biến môi trường đã inject sẵn."
      },
      {
        label: "Mở Codex qua proxy",
        command: "fcc-codex",
        note: "Launch Codex với provider config tạm thời."
      }
    ],
    keywords: ["proxy", "routing", "provider", "admin ui", "fcc"]
  },
  {
    id: "rtk",
    name: "RTK",
    host: "rtk-ai",
    category: "automation",
    cadence: "Luôn bật nền",
    priority: "featured",
    accent: "ink",
    summary:
      "CLI proxy giảm lượng token bị đốt cho output shell bằng cách rewrite hoặc compact các lệnh dev phổ biến.",
    bestFor: "Giảm token khi agent chạy `git`, `ls`, `cargo`, `npm`, `rg` hoặc command có output dài.",
    sourceUrl: "https://github.com/rtk-ai/rtk",
    highlights: [
      "Hook hoặc plugin rewrite command trước khi agent thực thi.",
      "Có analytics để xem mức tiết kiệm token theo ngày, lịch sử và session.",
      "Hỗ trợ nhiều host như Claude, Codex, Cursor, Gemini, Hermes."
    ],
    quickCommands: [
      {
        label: "Cài nhanh",
        command: "brew install rtk",
        note: "Có thể dùng install script hoặc cargo install."
      },
      {
        label: "Khởi tạo cho Codex",
        command: "rtk init -g --codex",
        note: "Thiết lập RTK cho workflow Codex."
      },
      {
        label: "Xem mức tiết kiệm",
        command: "rtk gain",
        note: "Summary stats cho token savings."
      },
      {
        label: "Xem lịch sử gần đây",
        command: "rtk gain --history",
        note: "Audit các lệnh gần nhất."
      },
      {
        label: "Tự dùng explicit",
        command: "rtk git status",
        note: "Chạy command qua RTK ngay cả khi chưa có hook."
      }
    ],
    keywords: ["token savings", "rewrite", "hook", "analytics", "shell"]
  },
  {
    id: "agent-skills",
    name: "agent-skills",
    host: "Addy Osmani",
    category: "skills",
    cadence: "Khi cần best practices chuyên đề",
    priority: "standard",
    accent: "teal",
    summary:
      "Thư viện skill production-grade để AI coding agents tái sử dụng quy trình và kiến thức chuyên môn hóa.",
    bestFor: "Bổ sung playbook cho performance, refactor, testing, docs hoặc framework-specific work.",
    sourceUrl: "https://github.com/addyosmani/agent-skills",
    highlights: [
      "Thiết kế theo progressive disclosure để chỉ nạp context khi thật sự cần.",
      "Cài được trên nhiều host khác nhau: Claude, Cursor, Antigravity, Gemini.",
      "Phù hợp khi muốn cho agent follow cùng một chuẩn engineering lặp lại."
    ],
    quickCommands: [
      {
        label: "Chạy như plugin local cho Claude",
        command: "claude --plugin-dir /path/to/agent-skills",
        note: "Dễ thử nhanh trong local clone."
      },
      {
        label: "Cài cho Antigravity",
        command: "agy plugin install https://github.com/addyosmani/agent-skills.git",
        note: "Native plugin cho Antigravity CLI."
      },
      {
        label: "Cài cho Gemini",
        command: "gemini skills install https://github.com/addyosmani/agent-skills.git --path skills",
        note: "Import thẳng thư mục skills."
      }
    ],
    keywords: ["skills", "playbook", "progressive disclosure", "best practices"]
  },
  {
    id: "agency-agents",
    name: "agency-agents",
    host: "msitarzewski",
    category: "multi-agent",
    cadence: "Khi cần specialist persona",
    priority: "standard",
    accent: "orange",
    summary:
      "Bộ agent persona theo division như engineering, design, strategy, testing để kích hoạt chuyên gia theo tình huống.",
    bestFor: "Chọn đúng persona cho frontend, review, QA, onboarding hoặc design critique.",
    sourceUrl: "https://github.com/msitarzewski/agency-agents",
    highlights: [
      "Rất nhiều agent chia theo division với deliverable và style riêng.",
      "Có app cài đặt nhanh hoặc script install cho từng host.",
      "Cho phép cài theo tool và theo division để tránh overload."
    ],
    quickCommands: [
      {
        label: "Cài cho Claude Code",
        command: "./scripts/install.sh --tool claude-code",
        note: "Kéo toàn bộ agent vào thư mục Claude."
      },
      {
        label: "Cài cho Codex theo division",
        command: "./scripts/install.sh --tool codex --division engineering,security",
        note: "Chỉ cài nhóm đúng nhu cầu."
      },
      {
        label: "Xem danh sách teams",
        command: "./scripts/install.sh --list teams",
        note: "Rà roster trước khi cài."
      }
    ],
    keywords: ["persona", "specialist", "division", "install", "roster"]
  },
  {
    id: "gstack",
    name: "gstack",
    host: "garrytan",
    category: "skills",
    cadence: "Khi cần quy trình decision-heavy",
    priority: "standard",
    accent: "ink",
    summary:
      "Bộ setup và skill rất opinionated cho Claude Code, tập trung vào CEO review, plan review, QA, release và browser-first workflows.",
    bestFor: "Feature planning, executive review, web QA, ship checklist, release docs.",
    sourceUrl: "https://github.com/garrytan/gstack",
    highlights: [
      "Có slash skills cho office hours, review, QA, design review và shipping.",
      "Ép agent đi qua các checkpoint có góc nhìn khác nhau trước khi code hoặc release.",
      "Phù hợp khi muốn có nhịp làm việc gần với team product-engineering thật."
    ],
    quickCommands: [
      {
        label: "Cài vào Claude skills",
        command: "git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup",
        note: "Thiết lập local gstack skill pack."
      },
      {
        label: "Khởi động khám phá bài toán",
        command: "/office-hours",
        note: "Mô tả cái đang build và để gstack bóc requirement."
      },
      {
        label: "CEO review cho ý tưởng",
        command: "/plan-ceo-review",
        note: "Kiểm tra độ sắc của feature idea."
      },
      {
        label: "Review branch",
        command: "/review",
        note: "Dùng sau khi đã có code."
      },
      {
        label: "QA staging URL",
        command: "/qa",
        note: "Rà UI/flow khi có URL staging."
      }
    ],
    keywords: ["qa", "plan review", "browser", "ship", "release", "opinionated"]
  },
  {
    id: "karpathy-skills",
    name: "andrej-karpathy-skills",
    host: "multica-ai",
    category: "skills",
    cadence: "Khi muốn agent bớt đoán mò",
    priority: "standard",
    accent: "teal",
    summary:
      "Một bộ guideline/CLAUDE.md lấy cảm hứng từ quan sát của Andrej Karpathy về lỗi thường gặp khi LLM code.",
    bestFor: "Siết chặt behavior của agent: hỏi lại đúng lúc, tránh overengineering, ưu tiên goal + verification.",
    sourceUrl: "https://github.com/multica-ai/andrej-karpathy-skills",
    highlights: [
      "Nhấn mạnh giảm assumption sai và buộc agent nêu trade-off rõ ràng.",
      "Khuyến khích thay yêu cầu mơ hồ bằng success criteria có thể verify.",
      "Hợp để merge vào CLAUDE.md/agent rules của từng repo."
    ],
    quickCommands: [
      {
        label: "Cài plugin trong Claude",
        command: "/plugin install andrej-karpathy-skills@karpathy-skills",
        note: "Dùng sau khi đã add marketplace tương ứng."
      },
      {
        label: "Kéo guideline vào project",
        command: "curl -o CLAUDE.md https://raw.githubusercontent.com/multica-ai/andrej-karpathy-skills/main/CLAUDE.md",
        note: "Áp dụng theo kiểu per-project."
      },
      {
        label: "Tự nhắc nguyên tắc cốt lõi",
        command: "Mục tiêu trước, verify sau, thay đổi tối thiểu.",
        note: "Keyword mnemonic khi review prompt cho agent."
      }
    ],
    keywords: ["guidelines", "claude.md", "minimal changes", "goal-driven"]
  },
  {
    id: "superpowers",
    name: "superpowers",
    host: "obra",
    category: "skills",
    cadence: "Khi muốn quy trình dev chặt",
    priority: "standard",
    accent: "orange",
    summary:
      "Framework skill + methodology để buộc coding agent đi qua các bước brainstorming, worktrees, plan, TDD, review và finish branch.",
    bestFor: "Task phức tạp, refactor lớn, flow cần checkpoint rõ ràng và review discipline.",
    sourceUrl: "https://github.com/obra/superpowers",
    highlights: [
      "Không chỉ là skill lẻ mà là một phương pháp làm việc cho toàn vòng đời task.",
      "Có installation path cho Claude, Codex CLI, Cursor, Antigravity và nhiều host khác.",
      "Đặc biệt mạnh ở TDD, worktree isolation, plan writing và code review checkpoints."
    ],
    quickCommands: [
      {
        label: "Cài trên Claude marketplace",
        command: "/plugin install superpowers@claude-plugins-official",
        note: "Con đường gọn nhất cho Claude Code."
      },
      {
        label: "Cài trên Codex CLI",
        command: "/plugins",
        note: "Mở plugin search rồi tìm `superpowers` để cài."
      },
      {
        label: "Cài cho Antigravity",
        command: "agy plugin install https://github.com/obra/superpowers",
        note: "Native plugin install."
      }
    ],
    keywords: ["methodology", "tdd", "plans", "review", "worktrees", "workflow"]
  }
];

export const workflowSteps = [
  {
    title: "1. Chọn đúng host",
    body:
      "Nếu cần thao tác trực tiếp trong repo và shell, bắt đầu với Claude CLI hoặc Codex CLI. Nếu cần route model qua provider khác, chèn free-claude-code. Nếu muốn tiết kiệm token shell, bật RTK từ đầu."
  },
  {
    title: "2. Nạp context đủ sâu",
    body:
      "Vào repo lạ thì chạy Understand Anything trước để có graph, dashboard hoặc diff impact. Khi task mơ hồ hoặc có nhiều góc nhìn, gọi thêm specialist từ agency-agents hoặc gstack."
  },
  {
    title: "3. Siết workflow bằng skills",
    body:
      "Khi muốn agent code gọn, bớt đoán và có plan rõ, đưa karpathy-skills, superpowers hoặc agent-skills vào session. Mục tiêu là làm agent đi đúng nhịp, không chỉ trả lời hay."
  },
  {
    title: "4. Review và tối ưu vòng lặp",
    body:
      "Sau khi hoàn thành, dùng review mode của host hoặc specialist review, xem lại token savings bằng RTK, rồi cập nhật docs/cheatsheet nếu phát hiện command mới đáng giữ."
  }
];

export const docsGuide = [
  {
    file: "DESIGN.md",
    label: "Design source of truth",
    description:
      "Spec thị giác chính cho UI: layout docs shell, token màu, typography và component rules."
  },
  {
    file: "README.md",
    label: "Project overview",
    description:
      "Giải thích mục tiêu, cách chạy app, cấu trúc thư mục, cách cập nhật dữ liệu tool và quy trình bảo trì."
  },
  {
    file: "CLAUDE.md",
    label: "Claude-first guide",
    description:
      "Quy định cách Claude Code nên đọc repo, giới hạn scope, cách cập nhật UI/data và checklist verify trước khi chốt."
  },
  {
    file: "AGENTS.md",
    label: "Codex / general agent guide",
    description:
      "Tài liệu chuẩn cho agent dựa trên AGENTS.md: mục tiêu repo, cấu trúc source, quy tắc chỉnh sửa, QA và handoff."
  },
  {
    file: "AGENT.md",
    label: "Alias cho host chỉ đọc AGENT.md",
    description:
      "Bản mirror để các host hoặc workflow dùng tên file singular vẫn có cùng context vận hành."
  }
];
