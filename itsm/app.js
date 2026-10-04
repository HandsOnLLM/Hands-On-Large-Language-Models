(() => {
  "use strict";

  const STORE_KEY = "northstar-itsm-v1";
  const now = Date.now();
  const ago = (hours) => new Date(now - hours * 3600000).toISOString();
  const ahead = (hours) => new Date(now + hours * 3600000).toISOString();
  const id = (prefix, number) => `${prefix}${String(number).padStart(6, "0")}`;

  const iconPaths = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    alert: '<path d="M10.3 4.4 2.8 17.2A2 2 0 0 0 4.5 20h15a2 2 0 0 0 1.7-2.8L13.7 4.4a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4m0 3h.01"/>',
    inbox: '<path d="M4 4h16l2 10v5H2v-5L4 4Z"/><path d="M2 14h5l2 3h6l2-3h5"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    box: '<path d="m12 3 9 5v9l-9 5-9-5V8l9-5Z"/><path d="m3.5 8.5 8.5 5 8.5-5M12 14v8"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22V4.5Z"/><path d="M4 18a2.5 2.5 0 0 1 2.5-2.5H20M8 6h8"/>',
    check: '<path d="m5 12 4 4L19 6"/><circle cx="12" cy="12" r="9"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.5 2.5 0 1 1 4.2 1.8c-1.1 1-1.8 1.2-1.8 3.2m0 3h.01"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12a2 2 0 0 0 4 0"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    filter: '<path d="M4 6h16M7 12h10m-7 6h4"/>',
    laptop: '<rect x="4" y="4" width="16" height="12" rx="2"/><path d="M2 20h20l-2-4H4l-2 4Z"/>',
    wifi: '<path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0m-5 3a2 2 0 0 1 2 0"/>',
    bolt: '<path d="m13 2-3 9h7l-6 11 2-9H6l7-11Z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6M8 13h8m-8 4h8"/>'
  };
  const svgIcon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.doc}</svg>`;
  document.querySelectorAll("[data-icon]").forEach((node) => { node.innerHTML = svgIcon(node.dataset.icon); });

  function seedData() {
    return {
      incidents: [
        { id: "INC004281", title: "VPN connection dropping intermittently", description: "Several employees are losing their VPN connection every few minutes while working remotely. Reconnecting temporarily restores access.", category: "Network", priority: "High", status: "In progress", assignee: "Alex Morgan", requester: "Priya Shah", createdAt: ago(1.3), dueAt: ahead(2.7), source: "Email" },
        { id: "INC004280", title: "Finance shared drive is unavailable", description: "The Finance team cannot access the shared drive. File server reports elevated disk latency.", category: "Infrastructure", priority: "Critical", status: "Open", assignee: "Sam Carter", requester: "Marcus Lee", createdAt: ago(2), dueAt: ago(.2), source: "Portal" },
        { id: "INC004279", title: "Unable to access new expense portal", description: "SSO loops back to the sign-in page after employees approve their MFA prompt.", category: "Access", priority: "Medium", status: "Open", assignee: "Unassigned", requester: "Taylor Kim", createdAt: ago(5), dueAt: ahead(19), source: "Portal" },
        { id: "INC004278", title: "Laptop running unusually slow", description: "Device performance has degraded significantly after the latest endpoint update.", category: "Hardware", priority: "Low", status: "Resolved", assignee: "Alex Morgan", requester: "Nina Patel", createdAt: ago(26), dueAt: ahead(8), source: "Phone" },
        { id: "INC004277", title: "Teams audio cuts out during meetings", description: "Intermittent audio quality issues reported in conference room B-12.", category: "Software", priority: "Medium", status: "In progress", assignee: "Jamie Chen", requester: "Owen Brooks", createdAt: ago(9), dueAt: ahead(15), source: "Portal" }
      ],
      requests: [
        { id: "REQ001842", title: "New starter equipment — Design team", description: "MacBook Pro, external display, and standard design software for a new team member starting next Monday.", category: "Hardware", priority: "Medium", status: "Pending approval", requester: "Sofia Martinez", assignee: "Procurement", createdAt: ago(3), dueAt: ahead(45) },
        { id: "REQ001841", title: "Adobe Creative Cloud access", description: "Full Creative Cloud license for the product design team.", category: "Software access", priority: "Low", status: "In progress", requester: "Noah Wilson", assignee: "IT Support", createdAt: ago(14), dueAt: ahead(34) },
        { id: "REQ001840", title: "Request access to Analytics workspace", description: "Read-only access to the quarterly business intelligence workspace.", category: "Access", priority: "Low", status: "Approved", requester: "Maya Thompson", assignee: "Unassigned", createdAt: ago(22), dueAt: ahead(50) },
        { id: "REQ001839", title: "Replace damaged laptop charger", description: "USB-C charger stopped working; requesting a replacement.", category: "Hardware", priority: "Medium", status: "Fulfilled", requester: "Ethan Wright", assignee: "Procurement", createdAt: ago(50), dueAt: ahead(20) }
      ],
      problems: [
        { id: "PRB000318", title: "Recurring authentication timeouts", description: "Root cause investigation for recurring SSO timeouts across internal applications.", category: "Access", priority: "High", status: "Investigation", assignee: "Alex Morgan", requester: "Service desk", createdAt: ago(38), dueAt: ahead(74) },
        { id: "PRB000317", title: "Print spooler failures — 4th floor", description: "Printer queue service stops unexpectedly after overnight maintenance.", category: "Hardware", priority: "Medium", status: "Known error", assignee: "Jamie Chen", requester: "Facilities", createdAt: ago(76), dueAt: ahead(96) },
        { id: "PRB000316", title: "Intermittent latency in HR portal", description: "Slowness is isolated to large employee search requests.", category: "Software", priority: "Low", status: "Resolved", assignee: "Sam Carter", requester: "HR team", createdAt: ago(126), dueAt: ahead(34) }
      ],
      changes: [
        { id: "CHG000426", title: "Upgrade core network switches — Building A", description: "Upgrade access switches to the latest approved firmware. Expected impact: a short interruption to wired connectivity.", category: "Infrastructure", priority: "High", status: "Awaiting approval", assignee: "Sam Carter", requester: "Network team", createdAt: ago(6), dueAt: ahead(42), scheduledAt: ahead(72), risk: "Medium" },
        { id: "CHG000425", title: "Deploy endpoint security update 6.4", description: "Phased rollout to the standard laptop fleet, beginning with the IT pilot group.", category: "Software", priority: "Medium", status: "Scheduled", assignee: "Alex Morgan", requester: "Security team", createdAt: ago(18), dueAt: ahead(54), scheduledAt: ahead(26), risk: "Low" },
        { id: "CHG000424", title: "Migrate marketing shared mailbox", description: "Move the marketing shared mailbox to the new tenant.", category: "Infrastructure", priority: "Low", status: "Implemented", assignee: "Jamie Chen", requester: "Marketing", createdAt: ago(65), dueAt: ago(10), scheduledAt: ago(14), risk: "Low" }
      ],
      assets: [
        { id: "AST000821", title: "MacBook Pro 14″ — Jordan Davis", description: "Apple MacBook Pro 14-inch, M3 Pro, 18 GB memory. Assigned to Jordan Davis.", category: "Laptop", priority: "Low", status: "In use", assignee: "Jordan Davis", requester: "Workplace IT", createdAt: ago(920), dueAt: ahead(8700), serial: "FVFQ2N7LQ6" },
        { id: "AST000820", title: "Core switch — Building A · Floor 2", description: "Cisco Catalyst 9300 access switch. Rack A2-04, Building A.", category: "Network", priority: "High", status: "Operational", assignee: "Sam Carter", requester: "Infrastructure", createdAt: ago(2100), dueAt: ahead(6650), serial: "FCW2418L0K3" },
        { id: "AST000819", title: "ProBook 440 G10 — Taylor Kim", description: "HP ProBook 440 G10, 16 GB memory. Assigned to Taylor Kim.", category: "Laptop", priority: "Low", status: "In use", assignee: "Taylor Kim", requester: "Workplace IT", createdAt: ago(510), dueAt: ahead(8170), serial: "5CD4128P9X" },
        { id: "AST000818", title: "Print server — HQ-PRINT-01", description: "Windows Server 2022 print management host for HQ devices.", category: "Server", priority: "Medium", status: "Operational", assignee: "Jamie Chen", requester: "Infrastructure", createdAt: ago(4500), dueAt: ahead(4260), serial: "VM-HQ-PR-01" }
      ],
      approvals: [
        { id: "APR000154", title: "New starter equipment — Design team", description: "MacBook Pro, external display, and standard design software for a new team member starting next Monday.", category: "Service request", priority: "Medium", status: "Pending", assignee: "Jordan Davis", requester: "Sofia Martinez", createdAt: ago(3), dueAt: ahead(21), relatedId: "REQ001842" },
        { id: "APR000153", title: "Upgrade core network switches — Building A", description: "Upgrade access switches to the latest approved firmware. Expected impact: a short interruption to wired connectivity.", category: "Change", priority: "High", status: "Pending", assignee: "Jordan Davis", requester: "Network team", createdAt: ago(6), dueAt: ahead(18), relatedId: "CHG000426" },
        { id: "APR000152", title: "Analytics workspace access", description: "Read-only access to the quarterly business intelligence workspace.", category: "Service request", priority: "Low", status: "Approved", assignee: "Jordan Davis", requester: "Maya Thompson", createdAt: ago(22), dueAt: ago(2), relatedId: "REQ001840" }
      ],
      automations: [
        { id: "auto-priority", title: "Priority-based assignment", description: "Route critical incidents to the on-call engineer and notify the service lead.", trigger: "When a P1 incident is created", enabled: true, runs: 42 },
        { id: "auto-approval", title: "Access request approvals", description: "Create a manager approval for software and privileged access requests.", trigger: "When an access request is submitted", enabled: true, runs: 28 },
        { id: "auto-sla", title: "SLA breach escalation", description: "Notify the service desk manager when a response target is at risk.", trigger: "15 minutes before an SLA target", enabled: true, runs: 16 },
        { id: "auto-survey", title: "Resolution follow-up", description: "Send a short satisfaction survey after an incident is resolved.", trigger: "When an incident is resolved", enabled: false, runs: 64 },
        { id: "auto-change", title: "Change calendar reminder", description: "Remind the change owner and stakeholders before scheduled work begins.", trigger: "24 hours before implementation", enabled: true, runs: 11 },
        { id: "auto-asset", title: "Asset warranty notification", description: "Create a renewal task when an assigned asset nears warranty expiry.", trigger: "30 days before warranty expiry", enabled: false, runs: 7 }
      ],
      articles: [
        { id: "KB000284", title: "Troubleshoot your VPN connection", category: "Network", summary: "Quick checks to restore a secure connection from home or while travelling.", updated: "Updated 2 days ago", views: 184, body: "Start by confirming your internet connection is stable. Disconnect from the VPN, restart the Northstar Secure Connect client, and reconnect using your company credentials. If your MFA prompt is delayed, wait for the current prompt to expire before requesting another. On Windows, open Settings → Network & Internet → VPN and remove any duplicate company profiles. Still having trouble? Submit an incident with your device name and approximate connection time." },
        { id: "KB000283", title: "Set up a new company laptop", category: "Hardware", summary: "A step-by-step checklist for getting your new device ready for work.", updated: "Updated 5 days ago", views: 126, body: "Connect your laptop to power and a trusted network. Sign in with your company account, then complete multi-factor authentication. Allow the device enrollment and security policies to finish before installing apps. Your standard applications will appear in the Company Portal; request additional software through Service requests. Contact the service desk if setup has not completed within 30 minutes." },
        { id: "KB000282", title: "Reset your password and MFA", category: "Access", summary: "Recover access safely with self-service password reset.", updated: "Updated 1 week ago", views: 97, body: "Visit the company identity portal and choose Forgot password. Verify your identity using your registered authentication method. After changing your password, update any saved credentials on your phone and desktop. If you have lost access to your authenticator, open an access incident so the identity team can verify your account before resetting MFA." },
        { id: "KB000281", title: "Prepare for a video conference", category: "Software", summary: "Improve audio, camera, and screen sharing before an important call.", updated: "Updated 2 weeks ago", views: 81, body: "Connect a headset before joining the meeting and select it in your audio settings. Use the preview to check camera framing and lighting. Close applications that may use high bandwidth. For conference room equipment, select the room system from the device list and join with room audio only to prevent echo." },
        { id: "KB000280", title: "Request software and application access", category: "Access", summary: "Find approved applications and understand access request approvals.", updated: "Updated 3 weeks ago", views: 74, body: "Browse the approved software catalog in Service requests. Choose the application and include a business reason; your manager may need to approve the request. Requests are assigned to the application owner after approval. Standard tools are usually provisioned within one business day." },
        { id: "KB000279", title: "Connect to a shared printer", category: "Hardware", summary: "Add a supported office printer on Windows or macOS.", updated: "Updated 1 month ago", views: 62, body: "On a company-managed device, open the Company Portal and choose Printers. Search by building and floor, then select Add. Print a test page. If the printer is offline, check the status panel and raise an incident with the printer asset name and location." }
      ],
      activity: [
        { person: "Alex Morgan", initials: "AM", text: 'assigned <strong>INC004281</strong> to the network queue', time: ago(.15) },
        { person: "Jordan Davis", initials: "JD", text: 'approved <strong>REQ001840</strong>', time: ago(1.2) },
        { person: "Jamie Chen", initials: "JC", text: 'resolved <strong>INC004278</strong>', time: ago(2.6) },
        { person: "Sam Carter", initials: "SC", text: 'scheduled <strong>CHG000425</strong> for tomorrow', time: ago(4) }
      ],
      counters: { incident: 4281, request: 1842, problem: 318, change: 426, asset: 821, approval: 154 },
      settings: {}
    };
  }

  let state;
  let currentPage = "dashboard";
  let activeStatusFilter = "All";
  let listSearch = "";
  const content = document.getElementById("page-content");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modal = document.getElementById("modal");
  const toastRegion = document.getElementById("toast-region");
  const searchResults = document.createElement("div");
  searchResults.className = "search-results";
  searchResults.hidden = true;
  document.querySelector(".topbar").append(searchResults);

  const pageNames = {
    dashboard: "Overview", incidents: "Incidents", requests: "Service requests",
    problems: "Problems", changes: "Changes", assets: "CMDB & assets",
    knowledge: "Knowledge", approvals: "Approvals", slas: "SLA & automation"
  };
  const collectionByPage = {
    incidents: "incidents", requests: "requests", problems: "problems",
    changes: "changes", assets: "assets", approvals: "approvals"
  };
  const configByPage = {
    incidents: { prefix: "INC", noun: "incident", title: "Incidents", subtitle: "Track, prioritize, and resolve disruptions to service.", category: ["Network", "Software", "Hardware", "Access", "Infrastructure"] },
    requests: { prefix: "REQ", noun: "service request", title: "Service requests", subtitle: "Fulfill employee requests for hardware, software, and access.", category: ["Hardware", "Software access", "Access", "Other"] },
    problems: { prefix: "PRB", noun: "problem", title: "Problems", subtitle: "Find root causes and prevent recurring service disruptions.", category: ["Network", "Software", "Hardware", "Access", "Infrastructure"] },
    changes: { prefix: "CHG", noun: "change", title: "Changes", subtitle: "Plan, assess, and approve changes to your services.", category: ["Infrastructure", "Software", "Network", "Hardware"] },
    assets: { prefix: "AST", noun: "asset", title: "asset", subtitle: "Manage configuration items, ownership, and lifecycle.", category: ["Laptop", "Desktop", "Network", "Server", "Software", "Mobile"] },
    approvals: { prefix: "APR", noun: "approval", title: "Approvals", subtitle: "Review decisions waiting on your team.", category: ["Service request", "Change", "Access"] }
  };
  const statusOptions = {
    incidents: ["Open", "In progress", "On hold", "Resolved", "Closed"],
    requests: ["Pending approval", "Approved", "In progress", "Fulfilled", "Cancelled"],
    problems: ["Investigation", "Known error", "Resolved", "Closed"],
    changes: ["Draft", "Awaiting approval", "Scheduled", "In progress", "Implemented", "Cancelled"],
    assets: ["In use", "Operational", "In stock", "Under maintenance", "Retired"],
    approvals: ["Pending", "Approved", "Rejected"]
  };
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
  const safeClass = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  function persist() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (error) {
      showToast(`Changes could not be saved in this browser: ${error.message}`);
    }
  }
  function loadState() {
    try {
      const saved = localStorage.getItem(STORE_KEY);
      if (!saved) return seedData();
      const data = JSON.parse(saved);
      const seed = seedData();
      for (const key of Object.keys(seed)) {
        if (!Array.isArray(seed[key])) continue;
        if (!Array.isArray(data[key])) data[key] = seed[key];
      }
      data.counters = { ...seed.counters, ...(data.counters || {}) };
      data.settings = data.settings || {};
      return data;
    } catch (error) {
      showToast(`Saved workspace data could not be loaded: ${error.message}`);
      return seedData();
    }
  }
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    toastRegion.append(toast);
    window.setTimeout(() => toast.remove(), 3400);
  }
  function dateLabel(value, includeTime) {
    if (!value) return "—";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "—";
    return new Intl.DateTimeFormat(undefined, includeTime
      ? { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }
      : { month: "short", day: "numeric" }).format(date);
  }
  function dateTimeLocalValue(value) {
    const date = new Date(value);
    const pad = (part) => String(part).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }
  function relativeLabel(value) {
    const hours = Math.round((new Date(value).getTime() - Date.now()) / 3600000);
    if (hours < -24) return `${Math.floor(-hours / 24)}d overdue`;
    if (hours < 0) return `${Math.abs(hours)}h overdue`;
    if (hours === 0) return "Due now";
    if (hours < 24) return `In ${hours}h`;
    return `In ${Math.floor(hours / 24)}d`;
  }
  function pill(value, type) {
    const className = type === "priority" ? `priority-${safeClass(value)}` : `status-${safeClass(value)}`;
    return `<span class="${type === "priority" ? "priority-pill" : "status-pill"} ${className}">${esc(value)}</span>`;
  }
  function titleHeader(eyebrow, title, subtitle, actions) {
    return `<div class="page-heading"><div><p class="eyebrow">${esc(eyebrow)}</p><h1>${esc(title)}</h1><p class="page-subtitle">${esc(subtitle)}</p></div>${actions ? `<div class="heading-actions">${actions}</div>` : ""}</div>`;
  }
  function metricCard(label, value, caption, icon, color, trend) {
    return `<article class="metric-card"><div class="metric-top"><span>${esc(label)}</span><span class="metric-icon ${color}">${svgIcon(icon)}</span></div><div class="metric-value">${esc(value)}</div><div class="metric-caption">${trend ? `<span class="metric-trend">${esc(trend)}</span>` : ""}${esc(caption)}</div></article>`;
  }
  function statusCount(items, statuses) {
    return items.filter((item) => statuses.includes(item.status)).length;
  }
  function activeIncidents() {
    return state.incidents.filter((item) => !["Resolved", "Closed"].includes(item.status));
  }
  function pendingApprovals() {
    return state.approvals.filter((item) => item.status === "Pending");
  }
  function addActivity(person, initials, text) {
    state.activity.unshift({ person, initials, text, time: new Date().toISOString() });
    state.activity = state.activity.slice(0, 8);
  }
  function renderDashboard() {
    const openIncidents = activeIncidents();
    const critical = openIncidents.filter((item) => item.priority === "Critical").length;
    const pending = pendingApprovals().length;
    const activeRequests = state.requests.filter((item) => !["Fulfilled", "Cancelled"].includes(item.status)).length;
    const topIncidents = [...openIncidents].sort((a, b) => {
      const rank = { Critical: 0, High: 1, Medium: 2, Low: 3 };
      return rank[a.priority] - rank[b.priority] || new Date(b.createdAt) - new Date(a.createdAt);
    }).slice(0, 5);
    const priorities = ["Critical", "High", "Medium", "Low"].map((priority) => ({
      priority, count: openIncidents.filter((item) => item.priority === priority).length
    }));
    const max = Math.max(1, ...priorities.map((item) => item.count));
    const tableRows = topIncidents.map((item) => incidentRow(item)).join("");
    const activities = state.activity.slice(0, 4).map((item) =>
      `<div class="activity-item"><span class="activity-avatar">${esc(item.initials)}</span><div class="activity-copy"><strong>${esc(item.person)}</strong> ${item.text}<span class="activity-time">${dateLabel(item.time, true)}</span></div></div>`
    ).join("");
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
    const today = new Intl.DateTimeFormat(undefined, { weekday: "long", month: "long", day: "numeric" }).format(new Date()).toUpperCase();
    content.innerHTML = `
      ${titleHeader(today, `${greeting}, Jordan 👋`, "Here’s what’s happening across your service desk today.", `<button class="button" data-action="export">${svgIcon("doc")} Export</button><button class="button button-primary" data-action="new" data-type="incident">${svgIcon("plus")} New incident</button>`)}
      <section class="metric-grid">
        ${metricCard("Open incidents", openIncidents.length, `${critical} critical need attention`, "alert", "blue", critical ? "↑" : "✓")}
        ${metricCard("Active requests", activeRequests, "Across your service catalog", "inbox", "orange", "")}
        ${metricCard("Pending approvals", pending, "Waiting for your decision", "check", "purple", "")}
        ${metricCard("SLA compliance", `${slaCompliance()}%`, "Response targets met this month", "clock", "green", "↑ 2.4%")}
      </section>
      <section class="dashboard-grid">
        <article class="panel chart-panel">
          <div class="panel-header"><div><h2 class="panel-title">Service desk overview</h2><p class="panel-description">Incidents opened vs. resolved over the last 7 days</p></div><div class="chart-legend"><span><i class="legend-dot"></i>Opened</span><span><i class="legend-dot resolved"></i>Resolved</span><select class="select-control" aria-label="Chart period"><option>Last 7 days</option><option>Last 30 days</option></select></div></div>
          <div class="chart-wrap"><svg viewBox="0 0 640 160" role="img" aria-label="Incidents opened and resolved chart">
            <defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#6174eb" stop-opacity=".15"/><stop offset="100%" stop-color="#6174eb" stop-opacity="0"/></linearGradient></defs>
            <line class="chart-grid" x1="45" y1="20" x2="630" y2="20"/><line class="chart-grid" x1="45" y1="57" x2="630" y2="57"/><line class="chart-grid" x1="45" y1="94" x2="630" y2="94"/><line class="chart-grid" x1="45" y1="131" x2="630" y2="131"/>
            <text class="chart-label" x="8" y="23">16</text><text class="chart-label" x="14" y="60">12</text><text class="chart-label" x="20" y="97">8</text><text class="chart-label" x="20" y="134">4</text>
            <path class="chart-area" d="M55 82 L145 67 L235 91 L325 48 L415 59 L505 32 L595 48 L595 132 L55 132 Z"/>
            <path class="chart-line" d="M55 82 L145 67 L235 91 L325 48 L415 59 L505 32 L595 48"/>
            <path class="chart-line-2" d="M55 105 L145 91 L235 101 L325 77 L415 87 L505 64 L595 72"/>
            <circle class="chart-point" cx="55" cy="82" r="3"/><circle class="chart-point" cx="145" cy="67" r="3"/><circle class="chart-point" cx="235" cy="91" r="3"/><circle class="chart-point" cx="325" cy="48" r="3"/><circle class="chart-point" cx="415" cy="59" r="3"/><circle class="chart-point" cx="505" cy="32" r="3"/><circle class="chart-point" cx="595" cy="48" r="3"/>
            <text class="chart-label" x="43" y="153">Mon</text><text class="chart-label" x="133" y="153">Tue</text><text class="chart-label" x="223" y="153">Wed</text><text class="chart-label" x="313" y="153">Thu</text><text class="chart-label" x="403" y="153">Fri</text><text class="chart-label" x="493" y="153">Sat</text><text class="chart-label" x="583" y="153">Sun</text>
          </svg></div>
        </article>
        <article class="panel">
          <div class="panel-header"><div><h2 class="panel-title">Incidents by priority</h2><p class="panel-description">Current open workload</p></div><button class="text-link" data-navigate="incidents">View all</button></div>
          <div class="priority-content"><div class="priority-total"><strong>${openIncidents.length}</strong><span>open incidents</span></div>
            ${priorities.map((item) => `<div class="priority-row"><div class="priority-label"><span>${esc(item.priority)}</span><strong>${item.count}</strong></div><div class="progress-track"><div class="progress-fill fill-${safeClass(item.priority)}" style="width:${Math.max(item.count ? 12 : 0, Math.round(item.count / max * 100))}%"></div></div></div>`).join("")}
          </div>
        </article>
      </section>
      <section class="lower-grid">
        <article class="table-card"><div class="table-header"><div><h2 class="table-heading">Priority incidents</h2><p class="panel-description">Incidents that may need your attention</p></div><button class="text-link" data-navigate="incidents">All incidents →</button></div><div class="table-scroll"><table><thead><tr><th>NUMBER</th><th>SHORT DESCRIPTION</th><th>PRIORITY</th><th>ASSIGNEE</th><th>STATUS</th></tr></thead><tbody>${tableRows || `<tr><td colspan="5"><div class="empty-state"><strong>All clear</strong>No open incidents need attention.</div></td></tr>`}</tbody></table></div></article>
        <article class="panel activity-panel"><div class="panel-header"><div><h2 class="panel-title">Recent activity</h2><p class="panel-description">Updates from your service desk</p></div><button class="text-link" data-action="activity">See all</button></div><div class="activity-list">${activities}</div></article>
      </section>`;
  }

  function incidentRow(item) {
    return `<tr><td><button class="record-link" data-record-id="${esc(item.id)}" data-record-type="incidents">${esc(item.id)}</button></td><td><span class="record-title">${esc(item.title)}</span></td><td>${pill(item.priority, "priority")}</td><td>${esc(item.assignee)}</td><td>${pill(item.status)}</td></tr>`;
  }
  function rowFor(page, item) {
    const link = `<button class="record-link" data-record-id="${esc(item.id)}" data-record-type="${esc(collectionByPage[page])}">${esc(item.id)}</button>`;
    if (page === "incidents") return `<tr><td>${link}</td><td><span class="record-title">${esc(item.title)}</span></td><td>${pill(item.priority, "priority")}</td><td>${esc(item.category)}</td><td>${esc(item.assignee)}</td><td>${pill(item.status)}</td><td>${dateLabel(item.createdAt)}</td></tr>`;
    if (page === "requests") return `<tr><td>${link}</td><td><span class="record-title">${esc(item.title)}</span></td><td>${esc(item.requester)}</td><td>${esc(item.category)}</td><td>${pill(item.status)}</td><td>${dateLabel(item.createdAt)}</td></tr>`;
    if (page === "problems") return `<tr><td>${link}</td><td><span class="record-title">${esc(item.title)}</span></td><td>${pill(item.priority, "priority")}</td><td>${esc(item.assignee)}</td><td>${pill(item.status)}</td><td>${dateLabel(item.createdAt)}</td></tr>`;
    if (page === "changes") return `<tr><td>${link}</td><td><span class="record-title">${esc(item.title)}</span></td><td>${pill(item.priority, "priority")}</td><td>${esc(item.risk || "Low")}</td><td>${dateLabel(item.scheduledAt || item.dueAt)}</td><td>${esc(item.assignee)}</td><td>${pill(item.status)}</td></tr>`;
    if (page === "assets") return `<tr><td>${link}</td><td><span class="record-title">${esc(item.title)}</span></td><td>${esc(item.serial || "—")}</td><td>${esc(item.assignee)}</td><td>${esc(item.category)}</td><td>${pill(item.status)}</td></tr>`;
    return `<tr><td>${link}</td><td><span class="record-title">${esc(item.title)}</span></td><td>${esc(item.category)}</td><td>${esc(item.requester)}</td><td>${dateLabel(item.dueAt)}</td><td>${item.status === "Pending" ? `<div class="approval-actions"><button class="button button-small" data-approval="Approved" data-id="${esc(item.id)}">Approve</button><button class="button button-small button-danger" data-approval="Rejected" data-id="${esc(item.id)}">Reject</button></div>` : pill(item.status)}</td></tr>`;
  }
  function renderListPage(page) {
    const config = configByPage[page];
    const items = state[collectionByPage[page]];
    const isApproval = page === "approvals";
    const title = config.title === "asset" ? "CMDB & assets" : config.title;
    const newButton = !isApproval && page !== "assets"
      ? `<button class="button button-primary" data-action="new" data-type="${esc(config.noun)}">${svgIcon("plus")} New ${esc(config.noun)}</button>`
      : page === "assets" ? `<button class="button button-primary" data-action="new" data-type="asset">${svgIcon("plus")} Register asset</button>` : "";
    const filtersByPage = {
      incidents: ["All", "Open", "In progress", "On hold", "Resolved", "Closed"],
      requests: ["All", "Pending approval", "Approved", "In progress", "Fulfilled", "Cancelled"],
      problems: ["All", "Investigation", "Known error", "Resolved", "Closed"],
      changes: ["All", "Awaiting approval", "Scheduled", "In progress", "Implemented", "Cancelled"],
      assets: ["All", "In use", "Operational", "In stock", "Under maintenance", "Retired"],
      approvals: ["All", "Pending", "Approved", "Rejected"]
    };
    const filters = filtersByPage[page];
    let filtered = items.filter((item) => {
      const matchesStatus = activeStatusFilter === "All" || item.status.toLowerCase().includes(activeStatusFilter.toLowerCase());
      const query = listSearch.trim().toLowerCase();
      const matchesQuery = !query || [item.id, item.title, item.description, item.category, item.status, item.assignee, item.requester].join(" ").toLowerCase().includes(query);
      return matchesStatus && matchesQuery;
    });
    const columns = {
      incidents: ["NUMBER", "SHORT DESCRIPTION", "PRIORITY", "CATEGORY", "ASSIGNED TO", "STATE", "OPENED"],
      requests: ["NUMBER", "SHORT DESCRIPTION", "REQUESTED FOR", "CATALOG ITEM", "STATE", "OPENED"],
      problems: ["NUMBER", "SHORT DESCRIPTION", "PRIORITY", "ASSIGNED TO", "STATE", "OPENED"],
      changes: ["NUMBER", "SHORT DESCRIPTION", "PRIORITY", "RISK", "PLANNED START", "CHANGE OWNER", "STATE"],
      assets: ["ASSET ID", "CONFIGURATION ITEM", "SERIAL NUMBER", "ASSIGNED TO", "CLASS", "STATE"],
      approvals: ["NUMBER", "SHORT DESCRIPTION", "TYPE", "REQUESTED BY", "DUE", "DECISION"]
    }[page];
    content.innerHTML = `${titleHeader("SERVICE OPERATIONS", title, config.subtitle, newButton)}
      <div class="metric-grid">
        ${pageMetrics(page, items)}
      </div>
      <section class="table-card table-page-card">
        <div class="table-header"><div><h2 class="table-heading">${isApproval ? "Approval queue" : page === "assets" ? "Configuration items" : title}</h2><p class="panel-description">${filtered.length} records · updated just now</p></div>
          <div class="table-tools"><input class="table-search" id="list-search" type="search" placeholder="Filter records..." value="${esc(listSearch)}"><button class="button button-small" data-action="export">${svgIcon("doc")} Export</button></div>
        </div>
        <div class="filter-row">${filters.map((filter) => `<button class="filter-chip ${activeStatusFilter === filter ? "active" : ""}" data-filter="${esc(filter)}">${esc(filter)}</button>`).join("")}</div>
        <div class="table-scroll"><table><thead><tr>${columns.map((column) => `<th>${column}</th>`).join("")}</tr></thead><tbody>${filtered.length ? filtered.map((item) => rowFor(page, item)).join("") : `<tr><td colspan="${columns.length}"><div class="table-empty"><strong>No matching records</strong>Try another filter or create a new ${esc(config.noun)}.</div></td></tr>`}</tbody></table></div>
      </section>`;
  }
  function pageMetrics(page, items) {
    if (page === "incidents") {
      const active = items.filter((item) => !["Resolved", "Closed"].includes(item.status));
      const overdue = active.filter((item) => new Date(item.dueAt) < Date.now());
      return metricCard("Open incidents", active.length, "Across all assignment groups", "alert", "blue", "") +
        metricCard("Critical / high", active.filter((item) => ["Critical", "High"].includes(item.priority)).length, "Priority 1 and 2", "bolt", "orange", "") +
        metricCard("SLA at risk", overdue.length, "Past their resolution target", "clock", "purple", "") +
        metricCard("Resolved incidents", statusCount(items, ["Resolved"]), "Ready to close", "check", "green", "");
    }
    if (page === "requests") return metricCard("Total requests", items.length, "In the service catalog", "inbox", "blue", "") +
      metricCard("Awaiting approval", statusCount(items, ["Pending approval"]), "Needs a decision", "clock", "orange", "") +
      metricCard("In progress", statusCount(items, ["In progress"]), "Being fulfilled", "bolt", "purple", "") +
      metricCard("Fulfilled", statusCount(items, ["Fulfilled"]), "Completed requests", "check", "green", "");
    if (page === "problems") return metricCard("Active problems", items.filter((item) => !["Resolved", "Closed"].includes(item.status)).length, "Under investigation", "layers", "blue", "") +
      metricCard("Known errors", statusCount(items, ["Known error"]), "Workarounds documented", "doc", "orange", "") +
      metricCard("High priority", items.filter((item) => item.priority === "High" && !["Resolved", "Closed"].includes(item.status)).length, "Root cause focus", "alert", "purple", "") +
      metricCard("Resolved", statusCount(items, ["Resolved", "Closed"]), "This month", "check", "green", "");
    if (page === "changes") return metricCard("Total changes", items.length, "Change records", "calendar", "blue", "") +
      metricCard("Awaiting approval", statusCount(items, ["Awaiting approval"]), "CAB decision needed", "clock", "orange", "") +
      metricCard("Scheduled", statusCount(items, ["Scheduled"]), "Upcoming implementations", "calendar", "purple", "") +
      metricCard("Implemented", statusCount(items, ["Implemented"]), "Successfully completed", "check", "green", "");
    if (page === "assets") return metricCard("Configuration items", items.length, "Tracked in your CMDB", "box", "blue", "") +
      metricCard("In use", statusCount(items, ["In use"]), "Assigned to employees", "user", "green", "") +
      metricCard("Infrastructure", items.filter((item) => ["Network", "Server"].includes(item.category)).length, "Servers and network", "layers", "purple", "") +
      metricCard("Needs attention", statusCount(items, ["Under maintenance"]), "Maintenance state", "alert", "orange", "");
    return metricCard("Pending approval", statusCount(items, ["Pending"]), "Requiring your attention", "clock", "orange", "") +
      metricCard("Approved", statusCount(items, ["Approved"]), "Decisions completed", "check", "green", "") +
      metricCard("Rejected", statusCount(items, ["Rejected"]), "Returned to requester", "alert", "blue", "") +
      metricCard("Due today", items.filter((item) => item.status === "Pending" && new Date(item.dueAt) < Date.now() + 86400000).length, "Review your queue", "calendar", "purple", "");
  }
  function slaCompliance() {
    const resolved = state.incidents.filter((item) => ["Resolved", "Closed"].includes(item.status));
    if (!resolved.length) return 98;
    const met = resolved.filter((item) => !item.slaBreached).length;
    return Math.round(met / resolved.length * 100);
  }
  function renderKnowledge() {
    const query = listSearch.toLowerCase().trim();
    const articles = state.articles.filter((item) => !query || `${item.id} ${item.title} ${item.category} ${item.summary}`.toLowerCase().includes(query));
    content.innerHTML = `${titleHeader("SELF-SERVICE", "Knowledge base", "Helpful answers and practical guides to get your team back to work.", `<button class="button" data-action="knowledge-request">${svgIcon("plus")} Suggest an article</button>`)}
      <section class="panel" style="padding:20px;margin-bottom:17px;background:linear-gradient(115deg,#f2f3ff 0%,#fbfaff 62%,#eff8f5 100%);border-color:#e9eafd">
        <p class="eyebrow" style="color:#7278bf">HOW CAN WE HELP?</p><h2 style="font:700 18px Manrope,sans-serif;color:#303b57;margin:0 0 6px">Find a quick answer</h2><p class="page-subtitle" style="margin-bottom:14px">Search guides written by your IT team.</p>
        <div style="display:flex;gap:8px;max-width:560px"><input class="form-control" id="knowledge-search" type="search" placeholder="Try “VPN”, “password”, or “laptop”..." value="${esc(listSearch)}"><button class="button button-primary" data-action="knowledge-search">Search</button></div>
      </section>
      <div class="page-heading" style="margin-bottom:13px"><div><h2 class="table-heading">Popular guides</h2><p class="panel-description">A little help goes a long way</p></div><span class="inline-note">${articles.length} articles</span></div>
      <section class="article-grid">${articles.length ? articles.map((item) => `<article class="panel article-card" data-article-id="${esc(item.id)}" tabindex="0" role="button"><span class="article-tag">${esc(item.category)}</span><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p><div class="article-meta"><span>${esc(item.id)} · ${esc(item.updated)}</span><span>${item.views} reads</span></div></article>`).join("") : `<div class="table-empty" style="grid-column:1/-1">No guides match that search.</div>`}</section>`;
  }
  function renderSlaPage() {
    const incidents = activeIncidents();
    const breached = incidents.filter((item) => new Date(item.dueAt) < Date.now());
    const atRisk = incidents.filter((item) => {
      const left = new Date(item.dueAt) - Date.now();
      return left >= 0 && left < 4 * 3600000;
    });
    const automationCards = state.automations.map((item) => `<article class="panel automation-card"><div class="automation-top"><span class="automation-icon">${svgIcon("bolt")}</span><button class="toggle" role="switch" aria-checked="${item.enabled}" aria-label="Toggle ${esc(item.title)}" data-toggle-automation="${esc(item.id)}"></button></div><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><div class="automation-footer"><span>${esc(item.trigger)}</span><span>${item.runs} runs</span></div></article>`).join("");
    const slaRows = incidents.map((item) => `<tr><td><button class="record-link" data-record-id="${esc(item.id)}" data-record-type="incidents">${esc(item.id)}</button></td><td><span class="record-title">${esc(item.title)}</span></td><td>${pill(item.priority, "priority")}</td><td>${esc(item.assignee)}</td><td>${dateLabel(item.dueAt, true)}</td><td><span class="${new Date(item.dueAt) < Date.now() ? "status-pill status-on-hold" : "status-pill status-in-progress"}">${relativeLabel(item.dueAt)}</span></td></tr>`).join("");
    content.innerHTML = `${titleHeader("SERVICE DELIVERY", "SLA & automation", "Keep response commitments visible and automate the work behind them.", `<button class="button button-primary" data-action="automation-run">${svgIcon("bolt")} Run automations</button>`)}
      <section class="sla-grid">
        <article class="panel sla-card"><div class="sla-card-top"><span>RESPONSE SLA COMPLIANCE</span><span>THIS MONTH</span></div><strong>${slaCompliance()}%</strong><small>Target 95% · Based on resolved incidents</small><div class="sla-meter"><span style="width:${slaCompliance()}%"></span></div></article>
        <article class="panel sla-card"><div class="sla-card-top"><span>BREACHED TARGETS</span><span>OPEN INCIDENTS</span></div><strong style="color:${breached.length ? "#ca5962" : "#29364e"}">${breached.length}</strong><small>Requires immediate service owner review</small><div class="sla-meter"><span style="width:${Math.max(breached.length ? 8 : 0, breached.length / Math.max(incidents.length, 1) * 100)}%;background:#dc6a70"></span></div></article>
        <article class="panel sla-card"><div class="sla-card-top"><span>AT RISK</span><span>NEXT 4 HOURS</span></div><strong style="color:${atRisk.length ? "#c48937" : "#29364e"}">${atRisk.length}</strong><small>Open incidents approaching target</small><div class="sla-meter"><span style="width:${Math.max(atRisk.length ? 8 : 0, atRisk.length / Math.max(incidents.length, 1) * 100)}%;background:#e0a64e"></span></div></article>
      </section>
      <section class="table-card"><div class="table-header"><div><h2 class="table-heading">Incident resolution targets</h2><p class="panel-description">Time remaining is calculated from the configured resolution target</p></div><button class="text-link" data-navigate="incidents">All incidents →</button></div><div class="table-scroll"><table><thead><tr><th>NUMBER</th><th>SHORT DESCRIPTION</th><th>PRIORITY</th><th>ASSIGNED TO</th><th>RESOLUTION TARGET</th><th>TIME LEFT</th></tr></thead><tbody>${slaRows || `<tr><td colspan="6"><div class="empty-state"><strong>No open incidents</strong>You’re all caught up.</div></td></tr>`}</tbody></table></div></section>
      <div class="page-heading" style="margin:24px 0 13px"><div><h2 class="table-heading">Flow automation</h2><p class="panel-description">Automate routine work across your service desk</p></div><button class="button button-small" data-action="automation-run">${svgIcon("bolt")} Run enabled flows</button></div><section class="automation-grid">${automationCards}</section>`;
  }
  function render() {
    document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.page === currentPage));
    document.getElementById("breadcrumb-current").textContent = pageNames[currentPage];
    document.getElementById("incident-nav-count").textContent = activeIncidents().length;
    document.getElementById("approval-nav-count").textContent = pendingApprovals().length;
    if (currentPage === "dashboard") renderDashboard();
    else if (collectionByPage[currentPage]) renderListPage(currentPage);
    else if (currentPage === "knowledge") renderKnowledge();
    else if (currentPage === "slas") renderSlaPage();
  }
  function navigate(page) {
    if (!pageNames[page]) return;
    currentPage = page;
    activeStatusFilter = "All";
    listSearch = "";
    document.getElementById("sidebar").classList.remove("open");
    window.history.replaceState(null, "", `#${page}`);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function nextRecordId(type) {
    const key = type === "service request" ? "request" : type;
    state.counters[key] += 1;
    const prefix = configByPage[collectionByPageForType(type)]?.prefix || "REC";
    return id(prefix, state.counters[key]);
  }
  function collectionByPageForType(type) {
    return { incident: "incidents", "service request": "requests", problem: "problems", change: "changes", asset: "assets", approval: "approvals" }[type];
  }
  function formField(label, name, value, full, placeholder, type) {
    const control = type === "textarea"
      ? `<textarea class="form-control" name="${name}" placeholder="${esc(placeholder || "")}" ${name === "description" ? "required" : ""}>${esc(value || "")}</textarea>`
      : type === "select"
        ? `<select class="form-control" name="${name}">${(value || []).map((option) => `<option value="${esc(option)}">${esc(option)}</option>`).join("")}</select>`
        : `<input class="form-control" name="${name}" value="${esc(value || "")}" placeholder="${esc(placeholder || "")}" ${name === "title" ? "required" : ""}>`;
    return `<div class="form-field ${full ? "full" : ""}"><label>${esc(label)}</label>${control}</div>`;
  }
  function openCreateModal(type) {
    const collection = collectionByPageForType(type);
    const config = configByPage[collection];
    if (!config) return;
    const statusDefault = type === "incident" ? "Open" : type === "change" ? "Awaiting approval" : type === "service request" ? "In progress" : type === "asset" ? "In use" : "Investigation";
    let fields = formField("Short description", "title", "", true, `Briefly describe the ${type}`);
    fields += `<div class="form-field"><label>${type === "asset" ? "Asset class" : "Category"}</label><select class="form-control" name="category">${config.category.map((item) => `<option>${esc(item)}</option>`).join("")}</select></div>`;
    if (type !== "asset") fields += `<div class="form-field"><label>Priority</label><select class="form-control" name="priority">${["Low", "Medium", "High", "Critical"].map((item) => `<option ${item === "Medium" ? "selected" : ""}>${item}</option>`).join("")}</select></div>`;
    if (type === "asset") fields += formField("Serial number", "serial", "", false, "Enter the device serial number");
    if (type === "change") fields += `<div class="form-field"><label>Risk</label><select class="form-control" name="risk"><option>Low</option><option selected>Medium</option><option>High</option></select></div>`;
    fields += `<div class="form-field"><label>${type === "asset" ? "Assigned to" : "Requested by"}</label><input class="form-control" name="${type === "asset" ? "assignee" : "requester"}" required value="${type === "asset" ? "Unassigned" : "Jordan Davis"}"></div>`;
    if (type !== "asset") fields += `<div class="form-field"><label>Assign to</label><input class="form-control" name="assignee" value="${type === "service request" ? "IT Support" : "Unassigned"}"></div>`;
    fields += formField("Description", "description", "", true, "Add details that will help the team take action.", "textarea");
    if (type === "change") fields += `<div class="form-field full"><label>Planned start</label><input class="form-control" name="scheduledAt" type="datetime-local" value="${dateTimeLocalValue(Date.now() + 86400000)}"></div>`;
    modal.innerHTML = `<div class="modal-header"><div><h2 id="modal-title">Create ${esc(type)}</h2><p>Capture the details so the right team can take action.</p></div><button class="icon-button" data-close-modal aria-label="Close">×</button></div><form id="create-form" data-type="${esc(type)}"><div class="modal-body"><div class="form-grid">${fields}</div></div><div class="modal-footer"><button class="button" type="button" data-close-modal>Cancel</button><button class="button button-primary" type="submit">Create ${esc(type)}</button></div></form>`;
    modalBackdrop.hidden = false;
    const firstInput = modal.querySelector("input[name=title]");
    if (firstInput) firstInput.focus();
  }
  function createRecord(form) {
    const type = form.dataset.type;
    const collection = collectionByPageForType(type);
    const config = configByPage[collection];
    const values = Object.fromEntries(new FormData(form).entries());
    const recordId = nextRecordId(type);
    const item = {
      id: recordId, title: values.title.trim(), description: values.description.trim(),
      category: values.category, priority: values.priority || "Low",
      status: values.status || (type === "incident" ? "Open" : type === "service request" ? "Pending approval" : type === "change" ? "Awaiting approval" : type === "asset" ? "In use" : "Investigation"),
      assignee: values.assignee || "Unassigned", requester: values.requester || "Jordan Davis",
      createdAt: new Date().toISOString(), dueAt: ahead(type === "incident" ? ({ Critical: 1, High: 4, Medium: 24, Low: 72 }[values.priority] || 24) : 72),
      source: "Portal"
    };
    if (type === "asset") item.serial = values.serial || "Pending";
    if (type === "change") {
      item.risk = values.risk;
      item.scheduledAt = values.scheduledAt ? new Date(values.scheduledAt).toISOString() : ahead(24);
    }
    state[collection].unshift(item);
    addActivity("Jordan Davis", "JD", `created <strong>${esc(recordId)}</strong>`);
    if (["change", "service request"].includes(type)) {
      const approvalId = nextRecordId("approval");
      state.approvals.unshift({
        id: approvalId, title: item.title, description: item.description,
        category: type === "change" ? "Change" : "Service request",
        priority: item.priority, status: "Pending", assignee: "Jordan Davis",
        requester: item.requester, createdAt: item.createdAt,
        dueAt: ahead(24), relatedId: item.id
      });
      item.status = "Pending approval";
      addActivity("Northstar Flow", "NF", `requested approval <strong>${esc(approvalId)}</strong> for ${esc(recordId)}`);
    }
    persist();
    modalBackdrop.hidden = true;
    currentPage = collection === "requests" ? "requests" : collection;
    render();
    showToast(`${config.noun[0].toUpperCase()}${config.noun.slice(1)} ${recordId} created.`);
  }
  function openRecord(type, recordId) {
    const collection = type;
    const item = state[collection]?.find((record) => record.id === recordId);
    if (!item) return;
    const canChangeStatus = collection !== "approvals";
    const statusField = canChangeStatus ? `<div class="form-field"><label>Update state</label><select class="form-control" id="detail-status">${(statusOptions[collection] || [item.status]).map((status) => `<option ${item.status === status ? "selected" : ""}>${esc(status)}</option>`).join("")}</select></div>` : "";
    const approvalActions = collection === "approvals" && item.status === "Pending" ? `<button class="button button-danger" data-approval="Rejected" data-id="${esc(item.id)}">Reject</button><button class="button button-primary" data-approval="Approved" data-id="${esc(item.id)}">Approve</button>` : "";
    const saveButton = canChangeStatus ? `<button class="button button-primary" data-action="save-status" data-record-type="${esc(collection)}" data-record-id="${esc(item.id)}">Save changes</button>` : "";
    modal.innerHTML = `<div class="modal-header"><div><p class="eyebrow" style="margin:0 0 5px">${esc(item.id)}</p><h2 id="modal-title">${esc(item.title)}</h2></div><button class="icon-button" data-close-modal aria-label="Close">×</button></div>
      <div class="detail-block"><div class="detail-meta">${item.priority ? pill(item.priority, "priority") : ""}${pill(item.status)}<span class="type-pill">${esc(item.category)}</span></div>
        <h3>Description</h3><p>${esc(item.description)}</p><div class="form-grid">
        <div class="form-field"><label>Requested by</label><span class="inline-note">${esc(item.requester || "—")}</span></div>
        <div class="form-field"><label>Assigned to</label><span class="inline-note">${esc(item.assignee || "—")}</span></div>
        <div class="form-field"><label>Opened</label><span class="inline-note">${dateLabel(item.createdAt, true)}</span></div>
        <div class="form-field"><label>${collection === "assets" ? "Serial number" : "Target date"}</label><span class="inline-note">${collection === "assets" ? esc(item.serial || "—") : dateLabel(item.dueAt, true)}</span></div>
        ${collection === "changes" ? `<div class="form-field"><label>Risk</label><span class="inline-note">${esc(item.risk || "—")}</span></div><div class="form-field"><label>Planned start</label><span class="inline-note">${dateLabel(item.scheduledAt, true)}</span></div>` : ""}
        ${collection === "approvals" ? `<div class="form-field"><label>Related record</label><span class="inline-note">${esc(item.relatedId || "—")}</span></div>` : ""}
        ${statusField}
        </div></div><div class="modal-footer"><button class="button" data-close-modal>Close</button>${approvalActions}${saveButton}</div>`;
    modalBackdrop.hidden = false;
  }
  function updateStatus(collection, recordId) {
    const item = state[collection]?.find((record) => record.id === recordId);
    const status = document.getElementById("detail-status")?.value;
    if (!item || !status) return;
    item.status = status;
    if (collection === "incidents" && ["Resolved", "Closed"].includes(status)) item.slaBreached = new Date(item.dueAt) < Date.now();
    addActivity("Jordan Davis", "JD", `updated <strong>${esc(recordId)}</strong> to ${esc(status.toLowerCase())}`);
    persist();
    modalBackdrop.hidden = true;
    render();
    showToast(`${recordId} updated to ${status}.`);
  }
  function decideApproval(recordId, status) {
    const item = state.approvals.find((record) => record.id === recordId);
    if (!item || item.status !== "Pending") return;
    item.status = status;
    const related = ["requests", "changes"].flatMap((collection) => state[collection].map((record) => ({ collection, record }))).find(({ record }) => record.id === item.relatedId);
    if (related) {
      related.record.status = status === "Approved"
        ? (related.collection === "requests" ? "In progress" : "Scheduled")
        : "Cancelled";
    }
    addActivity("Jordan Davis", "JD", `${status.toLowerCase()} <strong>${esc(item.relatedId || item.id)}</strong>`);
    persist();
    if (!modalBackdrop.hidden) modalBackdrop.hidden = true;
    render();
    showToast(`${item.id} ${status.toLowerCase()}.`);
  }
  function openArticle(articleId) {
    const article = state.articles.find((item) => item.id === articleId);
    if (!article) return;
    article.views += 1;
    persist();
    modal.innerHTML = `<div class="modal-header"><div><span class="article-tag">${esc(article.category)}</span><h2 id="modal-title" style="margin-top:10px">${esc(article.title)}</h2><p>${esc(article.id)} · ${esc(article.updated)} · ${article.views} reads</p></div><button class="icon-button" data-close-modal aria-label="Close">×</button></div><div class="detail-block"><p style="font-size:12px">${esc(article.body)}</p></div><div class="modal-footer"><button class="button" data-close-modal>Close</button><button class="button button-primary" data-action="article-helpful">This helped</button></div>`;
    modalBackdrop.hidden = false;
  }
  function globalSearch(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      searchResults.hidden = true;
      return;
    }
    const all = ["incidents", "requests", "problems", "changes", "assets", "approvals"].flatMap((collection) =>
      state[collection].map((record) => ({ ...record, collection })).filter((record) =>
        `${record.id} ${record.title} ${record.description} ${record.category}`.toLowerCase().includes(normalized)
      )
    ).slice(0, 6);
    searchResults.innerHTML = all.length ? all.map((item) => `<button class="search-result" data-record-id="${esc(item.id)}" data-record-type="${esc(item.collection)}"><span class="search-result-id">${esc(item.id)}</span><span class="search-result-title">${esc(item.title)}</span><span>${pill(item.status)}</span></button>`).join("") : `<div class="search-no-results">No matching records</div>`;
    searchResults.hidden = false;
  }
  function exportCurrent() {
    const collection = collectionByPage[currentPage] || "incidents";
    const rows = state[collection] || state.incidents;
    const keys = ["id", "title", "category", "priority", "status", "requester", "assignee", "createdAt"];
    const csv = [keys.join(","), ...rows.map((row) => keys.map((key) => `"${String(row[key] || "").replace(/"/g, '""')}"`).join(","))].join("\r\n");
    const link = document.createElement("a");
    const downloadUrl = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    link.href = downloadUrl;
    link.download = `${collection}-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
    showToast(`${rows.length} ${collection} exported as CSV.`);
  }
  function runAutomation() {
    const enabled = state.automations.filter((item) => item.enabled);
    if (!enabled.length) {
      showToast("No flows are enabled. Turn on a flow to run it.");
      return;
    }
    enabled.forEach((item) => { item.runs += 1; });
    addActivity("Northstar Flow", "NF", `ran <strong>${enabled.length} enabled automations</strong>`);
    persist();
    render();
    showToast(`${enabled.length} enabled ${enabled.length === 1 ? "flow" : "flows"} ran successfully.`);
  }

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    const nav = target.closest("[data-page]");
    if (nav) { event.preventDefault(); navigate(nav.dataset.page); return; }
    const navigateTarget = target.closest("[data-navigate]");
    if (navigateTarget) { navigate(navigateTarget.dataset.navigate); return; }
    const filter = target.closest("[data-filter]");
    if (filter) { activeStatusFilter = filter.dataset.filter; render(); return; }
    const record = target.closest("[data-record-id]");
    if (record && !record.dataset.action) { openRecord(record.dataset.recordType, record.dataset.recordId); searchResults.hidden = true; return; }
    const article = target.closest("[data-article-id]");
    if (article) { openArticle(article.dataset.articleId); return; }
    const approval = target.closest("[data-approval]");
    if (approval) { decideApproval(approval.dataset.id, approval.dataset.approval); return; }
    const toggle = target.closest("[data-toggle-automation]");
    if (toggle) {
      const flow = state.automations.find((item) => item.id === toggle.dataset.toggleAutomation);
      if (!flow) return;
      flow.enabled = !flow.enabled;
      persist(); render();
      showToast(`${flow.title} ${flow.enabled ? "enabled" : "paused"}.`);
      return;
    }
    const action = target.closest("[data-action]");
    if (action) {
      const name = action.dataset.action;
      if (name === "new") openCreateModal(action.dataset.type);
      else if (name === "export") exportCurrent();
      else if (name === "save-status") updateStatus(action.dataset.recordType, action.dataset.recordId);
      else if (name === "automation-run") runAutomation();
      else if (name === "activity") showToast("You’re viewing the latest service desk activity.");
      else if (name === "knowledge-search") {
        listSearch = document.getElementById("knowledge-search")?.value || "";
        renderKnowledge();
      } else if (name === "knowledge-request") showToast("Article suggestions can be added by a knowledge manager.");
      else if (name === "article-helpful") { modalBackdrop.hidden = true; showToast("Thanks for your feedback."); }
      return;
    }
    if (target.closest("[data-close-modal]")) { modalBackdrop.hidden = true; return; }
  });
  document.addEventListener("submit", (event) => {
    if (event.target.id !== "create-form") return;
    event.preventDefault();
    createRecord(event.target);
  });
  document.addEventListener("input", (event) => {
    if (event.target.id === "list-search") {
      const selectionStart = event.target.selectionStart;
      listSearch = event.target.value;
      renderListPage(currentPage);
      const input = document.getElementById("list-search");
      input.focus(); input.setSelectionRange(selectionStart, selectionStart);
    }
    if (event.target.id === "global-search") globalSearch(event.target.value);
    if (event.target.id === "knowledge-search") {
      const selectionStart = event.target.selectionStart;
      listSearch = event.target.value;
      renderKnowledge();
      const input = document.getElementById("knowledge-search");
      input.focus(); input.setSelectionRange(selectionStart, selectionStart);
    }
  });
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      document.getElementById("global-search").focus();
    }
    if (event.key === "Escape") {
      modalBackdrop.hidden = true;
      searchResults.hidden = true;
      document.getElementById("sidebar").classList.remove("open");
    }
    if (event.target.matches("[data-article-id]") && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault(); openArticle(event.target.dataset.articleId);
    }
  });
  document.getElementById("mobile-menu").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
  document.getElementById("help-button").addEventListener("click", () => showToast("Need help? Search the knowledge base for quick answers."));
  document.getElementById("notification-button").addEventListener("click", () => {
    const count = pendingApprovals().length;
    showToast(count ? `You have ${count} approval${count === 1 ? "" : "s"} waiting for review.` : "You’re all caught up.");
  });
  document.getElementById("profile-button").addEventListener("click", () => showToast("Signed in as Jordan Davis · Service desk manager."));
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".global-search") && !event.target.closest(".search-results")) searchResults.hidden = true;
  });
  modalBackdrop.addEventListener("click", (event) => { if (event.target === modalBackdrop) modalBackdrop.hidden = true; });

  state = loadState();
  const initialPage = window.location.hash.slice(1);
  if (pageNames[initialPage]) currentPage = initialPage;
  render();
})();
