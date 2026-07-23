export const categories = [
  { id: "all", label: "Tất cả" },
  { id: "cli", label: "CLI" },
  { id: "context", label: "Context" },
  { id: "skills", label: "Skills" },
  { id: "automation", label: "Automation" },
  { id: "multi-agent", label: "Multi-agent" },
  { id: "learning", label: "Học tập" }
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
    keywords: ["anthropic", "claude", "terminal", "claude.md", "mcp"],
    useCases: [
      {
        title: "Debug lỗi production",
        description: "Paste stack trace hoặc error log vào session, Claude tự đọc codebase để truy vết nguyên nhân và đề xuất fix cụ thể."
      },
      {
        title: "Refactor module cũ",
        description: "Yêu cầu Claude tách một function 500+ dòng thành các module nhỏ, có interface rõ ràng và giữ nguyên behavior cũ."
      },
      {
        title: "Viết test tự động",
        description: "Đưa source file chưa có test, Claude phân tích logic và sinh unit test đầy đủ các edge case."
      }
    ]
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
    keywords: ["openai", "codex", "agents.md", "skills", "approval", "sandbox"],
    useCases: [
      {
        title: "Build feature end-to-end",
        description: "Mô tả yêu cầu feature mới, Codex tự tạo branch, code, viết test và mở PR sẵn sàng để review."
      },
      {
        title: "Review PR tự động",
        description: "Codex đọc toàn bộ diff, flag các vấn đề về logic, security và style trước khi người review xem."
      },
      {
        title: "Dựng project mới",
        description: "Khởi tạo boilerplate với ESLint, Prettier, CI pipeline và cấu trúc thư mục chuẩn chỉ trong một câu lệnh."
      }
    ]
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
    keywords: ["knowledge graph", "dashboard", "onboarding", "diff", "context"],
    useCases: [
      {
        title: "Onboarding dev mới",
        description: "Dev mới vào team dùng knowledge graph để hiểu kiến trúc tổng thể, các module chính và mối quan hệ giữa chúng trong vài giờ thay vì vài tuần."
      },
      {
        title: "Phân tích impact trước refactor",
        description: "Trước khi sửa một module, dùng graph để xem tất cả code phụ thuộc vào nó — tránh broken dependency."
      },
      {
        title: "Audit documentation gap",
        description: "Quét toàn bộ codebase để tìm function/class thiếu comment, README lỗi thời hoặc interface không được document."
      }
    ]
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
    keywords: ["gateway", "provider", "portal", "multi-tool", "subagent"],
    useCases: [
      {
        title: "Dựng chatbot nội bộ",
        description: "Tích hợp hermes-agent với Telegram/Discord để team có thể hỏi đáp về codebase, deployment status hoặc log ngay trong chat."
      },
      {
        title: "Pipeline tự động hóa",
        description: "Cấu hình nhiều sub-agent xử lý song song các bước: lint → test → build → deploy, mỗi bước bởi một provider/tool khác nhau."
      }
    ]
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
    keywords: ["proxy", "routing", "provider", "admin ui", "fcc"],
    useCases: [
      {
        title: "Code offline với model local",
        description: "Route Claude Code qua Ollama hoặc LM Studio khi làm việc trên máy bay, vùng không có Internet hoặc dự án nhạy cảm không muốn gửi code ra ngoài."
      },
      {
        title: "Giảm chi phí API",
        description: "Dùng OpenRouter để chọn model rẻ hơn cho task đơn giản (như format code, viết comment), chỉ dùng model mạnh cho task phức tạp."
      }
    ]
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
    keywords: ["token savings", "rewrite", "hook", "analytics", "shell"],
    useCases: [
      {
        title: "Làm việc với monorepo",
        description: "Trong monorepo 50+ package, output của `git status`, `ls`, `rg` cực lớn. RTK compact output trước khi gửi vào context, tiết kiệm 60-90% token."
      },
      {
        title: "Giảm chi phí hằng ngày",
        description: "Bật RTK hook cho Claude Code, mỗi command shell tự động được rewrite. Dùng `rtk gain --history` để xem mức tiết kiệm thực tế theo ngày."
      }
    ]
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
    keywords: ["skills", "playbook", "progressive disclosure", "best practices"],
    useCases: [
      {
        title: "Chuẩn hóa review code",
        description: "Áp dụng skill review cho mọi PR trong team — mỗi lần review đều theo cùng playbook: correctness → security → performance → readability."
      },
      {
        title: "Performance audit định kỳ",
        description: "Trước mỗi release, dùng webperf skill để audit Core Web Vitals, bundle size và rendering performance theo chuẩn có sẵn."
      }
    ]
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
    keywords: ["persona", "specialist", "division", "install", "roster"],
    useCases: [
      {
        title: "Review frontend chuyên sâu",
        description: "Gọi UI/UX specialist agent để review component library — kiểm tra tính nhất quán, accessibility, responsive và animation."
      },
      {
        title: "Security audit trước release",
        description: "Kích hoạt security division agent để rà các lỗ hổng phổ biến (XSS, injection, exposed secrets) trước khi merge lên production."
      }
    ]
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
    keywords: ["qa", "plan review", "browser", "ship", "release", "opinionated"],
    useCases: [
      {
        title: "Plan feature với góc nhìn CEO",
        description: "Trước khi code, chạy `/office-hours` để bóc tách requirement, rồi `/plan-ceo-review` để kiểm tra độ sắc của idea từ góc nhìn kinh doanh."
      },
      {
        title: "QA tự động staging",
        description: "Sau khi deploy lên staging, chạy `/qa` với URL staging để agent tự động kiểm tra UI, flow và báo cáo các vấn đề tìm thấy."
      }
    ]
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
    keywords: ["guidelines", "claude.md", "minimal changes", "goal-driven"],
    useCases: [
      {
        title: "Build MVP không overengineer",
        description: "Khi build tính năng mới, guideline buộc agent tập trung vào goal chính, tránh thêm abstraction không cần thiết và luôn hỏi 'cách đơn giản nhất là gì?'."
      },
      {
        title: "Code review ít assumption",
        description: "Agent phải nêu rõ trade-off của từng đề xuất, không assume requirement và buộc verify bằng test case cụ thể trước khi kết luận."
      }
    ]
  },
  {
    id: "ponytail",
    name: "ponytail",
    host: "Dietrich Gebert",
    category: "skills",
    cadence: "Khi agent hay overbuild",
    priority: "standard",
    accent: "orange",
    summary:
      "Plugin/skill pack ép coding agent nghĩ như một senior lười đúng chỗ: bỏ cái không cần, reuse cái sẵn có, ưu tiên stdlib và native platform trước khi viết thêm code.",
    bestFor: "Giảm overengineering, giữ diff nhỏ, chọn giải pháp native và vẫn không cắt safety rails.",
    sourceUrl: "https://github.com/DietrichGebert/ponytail",
    highlights: [
      "Dùng một ladder rất rõ: skip nếu không cần, reuse nếu đã có, rồi mới đến stdlib, native feature, dependency và code mới.",
      "Có mode `lite`, `full`, `ultra`, hook kích hoạt mỗi session và slash commands để đổi mức độ can thiệp.",
      "README công bố benchmark trên Claude Code thật: ít code hơn, rẻ hơn, nhanh hơn mà vẫn giữ đủ guard về validation, security và accessibility."
    ],
    quickCommands: [
      {
        label: "Add marketplace cho Codex",
        command: "codex plugin marketplace add DietrichGebert/ponytail",
        note: "Thêm nguồn plugin trước khi mở menu plugin trong Codex."
      },
      {
        label: "Cài trong Codex",
        command: "/plugins",
        note: "Mở plugin picker, chọn marketplace Ponytail rồi install."
      },
      {
        label: "Trust lifecycle hooks",
        command: "/hooks",
        note: "Review và trust 2 hook của Ponytail rồi mở thread mới để ruleset chạy luôn."
      },
      {
        label: "Bật chế độ gắt hơn",
        command: "/ponytail ultra",
        note: "Dùng khi agent có xu hướng dựng thêm abstraction, wrapper hoặc dependency không cần."
      },
      {
        label: "Review diff theo kiểu Ponytail",
        command: "/ponytail-review",
        note: "Hữu ích để soi chỗ nào còn thừa lớp, thừa package hoặc bỏ lỡ native feature."
      }
    ],
    keywords: ["overengineering", "yagni", "native feature", "minimal diff", "hooks", "lite", "full", "ultra"],
    useCases: [
      {
        title: "Chặn dependency thừa",
        description: "Thay vì cài thêm date picker hoặc color picker package, Ponytail đẩy agent kiểm tra native `<input>` và browser capability trước."
      },
      {
        title: "Giữ refactor ở mức tối thiểu",
        description: "Khi sửa bug nhỏ trong codebase lớn, Ponytail giúp agent tránh biến task thành cuộc đại tu component, service hay abstraction."
      },
      {
        title: "Review lại diff sau khi code xong",
        description: "Chạy review mode để tìm các phần còn verbose, wrapper không cần thiết hoặc chỗ đáng lẽ chỉ cần reuse code sẵn có."
      }
    ]
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
    keywords: ["methodology", "tdd", "plans", "review", "worktrees", "workflow"],
    useCases: [
      {
        title: "Refactor module phức tạp với TDD",
        description: "Trước khi chạm vào legacy code, superpowers tạo worktree riêng, viết test cho behavior hiện tại, refactor, rồi verify test vẫn pass."
      },
      {
        title: "Build feature có checkpoint rõ ràng",
        description: "Đi qua đủ bước: brainstorm → plan → code (TDD) → self-review → final review. Mỗi bước có artifact rõ ràng, không bỏ sót góc nhìn nào."
      }
    ]
  },
  {
    id: "ui-ux-pro-max-skill",
    name: "UI UX Pro Max",
    host: "nextlevelbuilder",
    category: "skills",
    cadence: "Khi cần dựng UI/UX nhanh, đúng chuẩn ngành",
    priority: "standard",
    accent: "ink",
    summary:
      "Skill design intelligence giúp agent tự sinh design system (pattern, màu, font, hiệu ứng, anti-pattern) theo đúng ngành sản phẩm trước khi code UI.",
    bestFor: "Landing page, dashboard hoặc app UI cần đúng phong cách ngành thay vì đoán màu/font thủ công.",
    sourceUrl: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
    highlights: [
      "161 reasoning rule theo ngành, 67 UI style, 161 color palette và 57 font pairing để sinh design system hoàn chỉnh chỉ từ một câu mô tả sản phẩm.",
      "Hỗ trợ 22 tech stack (React, Next.js, Vue, SwiftUI, Flutter, Laravel...) nên code sinh ra bám đúng stack đang dùng.",
      "Có pre-delivery checklist chống anti-pattern: contrast tối thiểu, cursor-pointer, focus state, prefers-reduced-motion, breakpoint responsive."
    ],
    quickCommands: [
      {
        label: "Add marketplace cho Claude",
        command: "/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill",
        note: "Thêm nguồn plugin trước khi cài."
      },
      {
        label: "Cài skill cho Claude",
        command: "/plugin install ui-ux-pro-max@ui-ux-pro-max-skill",
        note: "Chạy sau khi đã add marketplace."
      },
      {
        label: "Cài qua CLI cho host khác",
        command: "npm install -g ui-ux-pro-max-cli && uipro init --ai codex",
        note: "CLI hỗ trợ nhiều host: cursor, gemini, windsurf, kiro..."
      },
      {
        label: "Gợi ý prompt kích hoạt skill",
        command: "Build a landing page for my SaaS product",
        note: "Đây là mnemonic prompt tự nhiên, không phải shell command — skill tự activate khi nhận yêu cầu UI/UX."
      }
    ],
    keywords: ["ui/ux", "design system", "design tokens", "color palette", "typography", "reasoning rules"],
    useCases: [
      {
        title: "Dựng landing page theo ngành cụ thể",
        description: "Mô tả sản phẩm (spa, SaaS, fintech...), skill tự chọn pattern, màu, font và anti-pattern cần tránh đúng ngành đó rồi mới generate code."
      },
      {
        title: "Đồng bộ design system nhiều stack",
        description: "Khi team dùng nhiều framework (React, Vue, SwiftUI...), skill áp cùng bộ token và rule vào từng stack, giữ nhất quán UI giữa các platform."
      }
    ]
  },
  {
    id: "graphify",
    name: "Graphify",
    host: "Graphify Labs",
    category: "context",
    cadence: "Mỗi khi vào repo lạ hoặc cần tra cứu thay vì đọc file",
    priority: "standard",
    accent: "teal",
    summary:
      "Skill cho AI coding assistant (Claude Code, Codex, Cursor, Gemini CLI...) biến một thư mục code, schema SQL, docs, PDF, ảnh hay video thành knowledge graph có thể query thay vì phải grep từng file.",
    bestFor: "Tra cứu codebase lạ bằng query/path/explain thay vì đọc file thủ công, gom code + docs + schema vào cùng một graph.",
    sourceUrl: "https://github.com/Graphify-Labs/graphify",
    highlights: [
      "Code được parse local bằng tree-sitter AST — không cần LLM, không gửi code ra ngoài; chỉ phần docs/PDF/ảnh/video mới cần model để làm semantic pass.",
      "Mỗi cạnh trong graph được gắn nhãn EXTRACTED (đọc trực tiếp từ source) hoặc INFERRED (graphify suy luận ra), nên biết rõ đâu là chắc chắn, đâu là suy đoán.",
      "Không phải vector index — là graph thật để truy vết: hỏi query, tìm đường đi giữa hai khái niệm hoặc giải thích một node cụ thể."
    ],
    quickCommands: [
      {
        label: "Cài CLI",
        command: "uv tool install graphifyy",
        note: "Có thể dùng pipx install graphifyy thay thế."
      },
      {
        label: "Đăng ký skill cho AI assistant",
        command: "graphify install",
        note: "Mặc định cài cho Claude Code; thêm --platform để chọn host khác."
      },
      {
        label: "Build graph cho project hiện tại",
        command: "/graphify .",
        note: "Gõ trong AI assistant sau khi cài skill; Codex dùng $graphify thay vì dấu /."
      },
      {
        label: "Hỏi một câu về codebase",
        command: 'graphify query "How does auth work?"',
        note: "Trả về đúng subgraph liên quan thay vì đọc toàn bộ report."
      },
      {
        label: "Truy vết đường đi giữa 2 khái niệm",
        command: 'graphify path "FastAPI" "ModelField"',
        note: "In ra từng hop nối giữa hai node trong graph."
      }
    ],
    keywords: ["knowledge graph", "tree-sitter", "code map", "query", "graph.json", "context", "skill"],
    useCases: [
      {
        title: "Onboard vào repo lạ",
        description: "Chạy /graphify . để build graph.html và GRAPH_REPORT.md, xem god nodes và communities để nắm kiến trúc tổng thể trước khi đọc code chi tiết."
      },
      {
        title: "Trả lời câu hỏi về codebase mà không cần đọc hết file",
        description: "Dùng graphify query hoặc graphify explain để lấy đúng subgraph liên quan, thay vì grep hoặc mở từng file thủ công."
      }
    ]
  },
  {
    id: "ai-for-beginners",
    name: "AI for Beginners",
    host: "Microsoft",
    category: "learning",
    cadence: "Khi cần xây nền tảng AI trước khi dùng agent/LLM",
    priority: "standard",
    accent: "teal",
    summary:
      "Curriculum miễn phí 12 tuần, 24 bài của Microsoft dạy nền tảng AI — từ symbolic AI, neural network đến CV, NLP, GAN, RL, multi-agent và AI ethics.",
    bestFor: "Onboard người mới vào mảng AI/deep learning, hoặc tra cứu nhanh lý thuyết đứng sau một kỹ thuật cụ thể.",
    sourceUrl: "https://github.com/microsoft/AI-For-Beginners",
    highlights: [
      "24 bài học chia theo 12 tuần, mỗi bài có notebook thực hành song song PyTorch và TensorFlow/Keras.",
      "Có lab và quiz đi kèm hầu hết bài để tự kiểm tra trước khi qua bài tiếp theo.",
      "Dịch sẵn 50+ ngôn ngữ (có tiếng Việt) nên dùng được để đào tạo lại team, không chỉ tự học."
    ],
    quickCommands: [
      {
        label: "Clone repo đầy đủ",
        command: "git clone https://github.com/microsoft/AI-For-Beginners.git",
        note: "Kèm 50+ bản dịch nên khá nặng."
      },
      {
        label: "Clone gọn, bỏ qua bản dịch",
        command:
          "git clone --filter=blob:none --sparse https://github.com/microsoft/AI-For-Beginners.git && cd AI-For-Beginners && git sparse-checkout set --no-cone '/*' '!translations' '!translated_images'",
        note: "Nhẹ hơn nhiều, đủ dùng nếu chỉ học bản tiếng Anh."
      },
      {
        label: "Mở một notebook bài học",
        command: "jupyter notebook lessons/3-NeuralNetworks/03-Perceptron/Perceptron.ipynb",
        note: "Ví dụ mở bài Perceptron; đổi path theo bài đang học."
      },
      {
        label: "Cấu trúc khóa học",
        command: "12 tuần / 24 bài / mỗi bài có lesson + notebook + lab + quiz",
        note: "Đây là mnemonic tóm tắt lộ trình, không phải shell command."
      }
    ],
    keywords: ["ai curriculum", "deep learning", "pytorch", "tensorflow", "computer vision", "nlp", "microsoft learn", "khóa học"],
    useCases: [
      {
        title: "Onboard dev mới vào mảng AI",
        description: "Cho dev chưa có nền AI đi qua 24 bài theo tuần, mỗi bài có notebook, lab và quiz để tự kiểm tra trước khi nhận task AI thật."
      },
      {
        title: "Tra cứu nhanh một chủ đề cụ thể",
        description: "Cần hiểu nhanh Transformer, GAN hay Reinforcement Learning để review code hoặc thiết kế agent, mở thẳng lesson tương ứng thay vì đọc paper gốc."
      }
    ]
  },
  {
    id: "ai-engineering-from-scratch",
    name: "AI Engineering From Scratch",
    host: "rohitg00",
    category: "learning",
    cadence: "Khi cần lộ trình đầy đủ từ toán nền tới build agent production",
    priority: "standard",
    accent: "teal",
    summary:
      "Curriculum mã nguồn mở 20 phase, 503 bài, ~320 giờ — đi từ toán nền tảng, ML, deep learning qua CV/NLP/speech, LLM from scratch, đến agent engineering và multi-agent swarm, mỗi bài đều tự code lại thuật toán trước khi dùng framework.",
    bestFor: "Xây nền AI engineering thật sự (không chỉ gọi API), hoặc tra cứu nhanh một phase cụ thể như agent engineering, LLM from scratch khi cần hiểu sâu trước khi thiết kế hệ thống.",
    sourceUrl: "https://github.com/rohitg00/ai-engineering-from-scratch",
    highlights: [
      "20 phase xếp tuần tự từ math foundations, ML/deep learning core, CV/NLP/speech, transformer, generative AI, RL, đến LLM engineering, agent engineering và multi-agent swarm; phase cuối có 17 capstone project.",
      "Mỗi bài theo cấu trúc 6 nhịp cố định: motto → problem → concept → build it → use it → ship it, dùng Python, TypeScript, Rust và Julia tùy phase.",
      "Đi kèm 388 skill và 99 prompt cài trực tiếp cho Claude/Cursor/Codex qua npx skills, không chỉ đọc lý thuyết suông."
    ],
    quickCommands: [
      {
        label: "Clone repo",
        command: "git clone https://github.com/rohitg00/ai-engineering-from-scratch.git",
        note: "Repo đầy đủ 20 phase, có thể chỉ chạy từng phase cần dùng."
      },
      {
        label: "Chạy thử một bài",
        command: "python phases/01-math-foundations/01-linear-algebra-intuition/code/vectors.py",
        note: "Ví dụ bài đầu tiên; đổi path theo phase/lesson đang học."
      },
      {
        label: "Cài toàn bộ skill/prompt cho AI assistant",
        command: "npx skills add rohitg00/ai-engineering-from-scratch",
        note: "Thêm --phase 14 để chỉ cài skill của một phase (vd. agent engineering)."
      },
      {
        label: "Kiểm tra trình độ để bắt đầu đúng phase",
        command: "/find-your-level",
        note: "Gõ trong Claude/Cursor/Codex/Hermes sau khi cài skill, không phải shell command."
      }
    ],
    keywords: ["ai engineering", "llm from scratch", "agent engineering", "deep learning", "curriculum", "khóa học", "rust", "pytorch", "mcp"],
    useCases: [
      {
        title: "Học AI engineering từ gốc trước khi build agent production",
        description: "Đi từ phase toán nền, ML, deep learning core đến LLM engineering và agent engineering, mỗi bài tự code lại thuật toán trước khi dùng framework có sẵn."
      },
      {
        title: "Tra cứu nhanh một chủ đề để thiết kế hệ thống",
        description: "Cần hiểu sâu multi-agent swarm, MCP hay LLM from scratch trước khi review/kiến trúc một hệ thống thật, mở thẳng phase liên quan thay vì đọc paper rải rác."
      }
    ]
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
      "Khi muốn agent code gọn, bớt đoán và có plan rõ, đưa ponytail, karpathy-skills, superpowers hoặc agent-skills vào session. Mục tiêu là làm agent đi đúng nhịp, không chỉ trả lời hay."
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
