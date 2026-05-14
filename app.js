// ===== Bot Data =====
const COMMANDS = {
  Economy: [
    { name: 'f!additem', desc: 'Add an item to the shop' },
    { name: 'f!balance', desc: 'Check your balance' },
    { name: 'f!blackjack', desc: 'Play a game of blackjack' },
    { name: 'f!buy', desc: 'Buy an item from the shop' },
    { name: 'f!coinflip', desc: 'Flip a coin and bet on the outcome' },
    { name: 'f!crash', desc: 'Play the crash gambling game' },
    { name: 'f!daily', desc: 'Claim your daily reward' },
    { name: 'f!deposit', desc: 'Deposit coins into your bank' },
    { name: 'f!dicegame', desc: 'Roll dice and bet on the result' },
    { name: 'f!fish', desc: 'Go fishing for coins' },
    { name: 'f!gamble', desc: 'Gamble your coins' },
    { name: 'f!highlow', desc: 'Play a high-low guessing game' },
    { name: 'f!hunt', desc: 'Go hunting for coins' },
    { name: 'f!inventory', desc: 'View your inventory' },
    { name: 'f!richest', desc: 'View the richest members' },
    { name: 'f!pay', desc: 'Transfer coins to another user' },
    { name: 'f!removeitem', desc: 'Remove an item from the shop' },
    { name: 'f!rob', desc: 'Attempt to rob another user' },
    { name: 'f!roulette', desc: 'Play a game of roulette' },
    { name: 'f!scratch', desc: 'Scratch a lottery ticket' },
    { name: 'f!shop', desc: 'Browse the server shop' },
    { name: 'f!slots', desc: 'Play the slot machine' },
    { name: 'f!withdraw', desc: 'Withdraw coins from your bank' },
    { name: 'f!work', desc: 'Work to earn coins' }
  ],
  Fun: [
    { name: 'f!8ball', desc: 'Ask the magic 8-ball a question' },
    { name: 'f!choose', desc: 'Choose between multiple options' },
    { name: 'f!compliment', desc: 'Give someone a compliment' },
    { name: 'f!dare', desc: 'Get a random dare' },
    { name: 'f!dice', desc: 'Roll a dice' },
    { name: 'f!fact', desc: 'Get a random fun fact' },
    { name: 'f!howgay', desc: 'Find out how gay someone is' },
    { name: 'f!joke', desc: 'Get a random joke' },
    { name: 'f!meme', desc: 'Get a random meme' },
    { name: 'f!numberguess', desc: 'Play a number guessing game' },
    { name: 'f!pp', desc: 'Measure PP size' },
    { name: 'f!rate', desc: 'Rate something out of 10' },
    { name: 'f!roast', desc: 'Roast someone' },
    { name: 'f!rps', desc: 'Play rock-paper-scissors' },
    { name: 'f!ship', desc: 'Ship two users together' },
    { name: 'f!tictactoe', desc: 'Play tic-tac-toe with someone' },
    { name: 'f!trivia', desc: 'Answer a trivia question' },
    { name: 'f!truth', desc: 'Get a random truth question' },
    { name: 'f!wyr', desc: 'Would you rather' }
  ],
  General: [
    { name: 'f!avatar', desc: 'Get a user\'s avatar' },
    { name: 'f!banner', desc: 'Get a user\'s banner' },
    { name: 'f!botinfo', desc: 'View bot information' },
    { name: 'f!channelinfo', desc: 'View channel information' },
    { name: 'f!emojiinfo', desc: 'View emoji information' },
    { name: 'f!help', desc: 'Show bot help' },
    { name: 'f!membercount', desc: 'View server member count' },
    { name: 'f!ping', desc: 'Check bot latency' },
    { name: 'f!roleinfo', desc: 'View role information' },
    { name: 'f!servericon', desc: 'Get the server icon' },
    { name: 'f!serverinfo', desc: 'View server information' },
    { name: 'f!userinfo', desc: 'View user information' }
  ],
  Giveaways: [
    { name: 'f!giveaway start', desc: 'Start a giveaway with duration, winners, and prize' },
    { name: 'f!giveaway end', desc: 'End a giveaway early' },
    { name: 'f!giveaway reroll', desc: 'Reroll giveaway winner(s)' },
    { name: 'f!giveaway pause', desc: 'Pause a giveaway' },
    { name: 'f!giveaway resume', desc: 'Resume a paused giveaway' },
    { name: 'f!giveaway delete', desc: 'Cancel and delete a giveaway' },
    { name: 'f!giveaway drop', desc: 'Instant giveaway \u2014 first to react wins' },
    { name: 'f!giveaway list', desc: 'List active giveaways' }
  ],
  Leveling: [
    { name: 'f!leaderboard', desc: 'View the XP leaderboard' },
    { name: 'f!levelconfig', desc: 'Configure leveling settings' },
    { name: 'f!rank', desc: 'View your rank card' },
    { name: 'f!resetlevel', desc: 'Reset a user\'s level' },
    { name: 'f!setlevel', desc: 'Set a user\'s level' },
    { name: 'f!setxp', desc: 'Set a user\'s XP' }
  ],
  Moderation: [
    { name: 'f!ban', desc: 'Ban a member from the server' },
    { name: 'f!clearwarns', desc: 'Clear all warnings for a user' },
    { name: 'f!hackban', desc: 'Ban a user by ID (even if not in server)' },
    { name: 'f!kick', desc: 'Kick a member from the server' },
    { name: 'f!lock', desc: 'Lock a channel' },
    { name: 'f!mute', desc: 'Mute a member' },
    { name: 'f!nick', desc: 'Change a member\'s nickname' },
    { name: 'f!nuke', desc: 'Nuke a channel (clone and delete)' },
    { name: 'f!purge', desc: 'Bulk delete messages' },
    { name: 'f!removewarn', desc: 'Remove a specific warning from a user' },
    { name: 'f!role', desc: 'Add or remove a role from a member' },
    { name: 'f!slowmode', desc: 'Set channel slowmode' },
    { name: 'f!softban', desc: 'Softban a member (ban and unban to clear messages)' },
    { name: 'f!unban', desc: 'Unban a user' },
    { name: 'f!unlock', desc: 'Unlock a channel' },
    { name: 'f!unmute', desc: 'Unmute a member' },
    { name: 'f!warn', desc: 'Warn a member' },
    { name: 'f!warnings', desc: 'View warnings for a user' }
  ],
  Text: [
    { name: 'f!ascii', desc: 'Convert text to ASCII art' },
    { name: 'f!base64decode', desc: 'Decode base64 text' },
    { name: 'f!base64encode', desc: 'Encode text to base64' },
    { name: 'f!binary', desc: 'Convert text to binary' },
    { name: 'f!capitalize', desc: 'Capitalize text' },
    { name: 'f!emojify', desc: 'Convert text to emoji letters' },
    { name: 'f!length', desc: 'Get the length of text' },
    { name: 'f!lowercase', desc: 'Convert text to lowercase' },
    { name: 'f!mock', desc: 'Mock text (aLtErNaTiNg CaSe)' },
    { name: 'f!reverse', desc: 'Reverse text' },
    { name: 'f!uppercase', desc: 'Convert text to uppercase' }
  ],
  Tickets: [
    { name: 'f!new', desc: 'Create a new support ticket' },
    { name: 'f!ticket', desc: 'Manage a ticket (close, add user, etc.)' },
    { name: 'f!ticketconfig', desc: 'Configure the ticket system' }
  ],
  Utility: [
    { name: 'f!afk', desc: 'Set your AFK status' },
    { name: 'f!calculate', desc: 'Evaluate a math expression' },
    { name: 'f!color', desc: 'Preview a hex color' },
    { name: 'f!editsnipe', desc: 'View the last edited message' },
    { name: 'f!embed', desc: 'Create a custom embed' },
    { name: 'f!invite', desc: 'Get the bot invite link' },
    { name: 'f!poll', desc: 'Create a poll' },
    { name: 'f!prefix', desc: 'Change the bot prefix' },
    { name: 'f!remind', desc: 'Set a reminder' },
    { name: 'f!say', desc: 'Make the bot say something' },
    { name: 'f!snipe', desc: 'View the last deleted message' },
    { name: 'f!timer', desc: 'Set a countdown timer' },
    { name: 'f!uptime', desc: 'View bot uptime' }
  ]
};

// ===== Discord OAuth2 Config =====
const API_URL = 'https://web-production-98221.up.railway.app';

let userGuilds = [];

const MOCK_CHANNELS = [
  { id: 'c1', name: 'general', type: 'text' },
  { id: 'c2', name: 'commands', type: 'text' },
  { id: 'c3', name: 'mod-logs', type: 'text' },
  { id: 'c4', name: 'tickets', type: 'text' },
  { id: 'c5', name: 'General', type: 'voice' }
];

const PERM_CATEGORIES = {
  Economy: ['additem', 'balance', 'blackjack', 'buy', 'coinflip', 'crash', 'daily', 'deposit', 'dicegame', 'fish', 'gamble', 'highlow', 'hunt', 'inventory', 'richest', 'pay', 'removeitem', 'rob', 'roulette', 'scratch', 'shop', 'slots', 'withdraw', 'work'],
  Fun: ['8ball', 'choose', 'compliment', 'dare', 'dice', 'fact', 'howgay', 'joke', 'meme', 'numberguess', 'pp', 'rate', 'roast', 'rps', 'ship', 'tictactoe', 'trivia', 'truth', 'wyr'],
  General: ['avatar', 'banner', 'botinfo', 'channelinfo', 'emojiinfo', 'help', 'membercount', 'ping', 'roleinfo', 'servericon', 'serverinfo', 'userinfo'],
  Giveaways: ['giveaway start', 'giveaway end', 'giveaway reroll', 'giveaway pause', 'giveaway resume', 'giveaway delete', 'giveaway drop', 'giveaway list'],
  Leveling: ['leaderboard', 'levelconfig', 'rank', 'resetlevel', 'setlevel', 'setxp'],
  Moderation: ['ban', 'clearwarns', 'hackban', 'kick', 'lock', 'mute', 'nick', 'nuke', 'purge', 'removewarn', 'role', 'slowmode', 'softban', 'unban', 'unlock', 'unmute', 'warn', 'warnings'],
  Text: ['ascii', 'base64decode', 'base64encode', 'binary', 'capitalize', 'emojify', 'length', 'lowercase', 'mock', 'reverse', 'uppercase'],
  Tickets: ['new', 'ticket', 'ticketconfig'],
  Utility: ['afk', 'calculate', 'color', 'editsnipe', 'embed', 'invite', 'poll', 'prefix', 'remind', 'say', 'snipe', 'timer', 'uptime']
};

const CATEGORY_ICONS = {
  Economy: 'fas fa-coins',
  Fun: 'fas fa-gamepad',
  General: 'fas fa-info-circle',
  Giveaways: 'fas fa-gift',
  Leveling: 'fas fa-chart-line',
  Moderation: 'fas fa-shield-alt',
  Text: 'fas fa-font',
  Tickets: 'fas fa-ticket-alt',
  Utility: 'fas fa-wrench'
};

// ===== State =====
let currentUser = null;
let currentPage = 'home';
let currentServer = null;
let currentTab = 'permissions';
let currentRole = null;
let permState = {};
let channelOverrides = {};
let hasUnsaved = false;
let lastApiError = null;

// ===== Bot Presence Check =====
async function refreshBotPresence() {
  lastApiError = null;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const resp = await fetch(API_URL + '/api/bot/guilds', { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!resp.ok) throw new Error('API returned status ' + resp.status);
    const data = await resp.json();
    const botGuildIds = new Set(data.guild_ids || []);
    userGuilds.forEach(g => {
      g.botIn = botGuildIds.has(g.id);
    });
    localStorage.setItem('discord_guilds', JSON.stringify(userGuilds));
  } catch (err) {
    lastApiError = err.message || 'Unknown error';
    console.warn('Could not check bot presence:', err.message);
  }
}

// Refresh guilds button
document.getElementById('refresh-guilds-btn')?.addEventListener('click', async () => {
  const btn = document.getElementById('refresh-guilds-btn');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
  try {
    await refreshBotPresence();
    renderDashboard();
    toast('Server list refreshed', 'success');
  } catch (e) {
    toast('Failed to refresh: ' + (e.message || 'Unknown error'), 'error');
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh Servers';
  }
});

// Initialize permission state for a guild using its real roles
function initPermState(guildId) {
  if (permState[guildId]) return;
  permState[guildId] = {};
  channelOverrides[guildId] = {};
  const guild = userGuilds.find(g => g.id === guildId);
  const roles = (guild && guild.roles) || [];
  roles.forEach(role => {
    permState[guildId][role.id] = {};
    channelOverrides[guildId][role.id] = {};
    Object.entries(PERM_CATEGORIES).forEach(([cat, cmds]) => {
      cmds.forEach(cmd => {
        permState[guildId][role.id][cmd] = true;
      });
    });
  });
}

// ===== Navigation =====
function navigateTo(page, data) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#sidebar-menu-main .menu-item').forEach(m => m.classList.remove('active'));

  // Show/hide server sidebar
  if (page !== 'server') {
    hideServerSidebar();
  }

  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    currentPage = page;
  }

  const menuItem = document.querySelector(`#sidebar-menu-main .menu-item[data-page="${page}"]`);
  if (menuItem) menuItem.classList.add('active');

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('active');

  if (page === 'commands') renderCommands();
  if (page === 'dashboard') renderDashboard();
  if (page === 'server' && data) openServer(data);
}

document.querySelectorAll('#sidebar-menu-main .menu-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const page = item.dataset.page;
    navigateTo(page);
  });
});

document.getElementById('hero-dashboard-btn').addEventListener('click', () => {
  navigateTo('dashboard');
});

document.getElementById('back-to-dashboard').addEventListener('click', () => {
  hideServerSidebar();
  navigateTo('dashboard');
});

// Mobile sidebar
document.getElementById('mobile-toggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('active');
});
document.getElementById('sidebar-overlay').addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('active');
});

// ===== Discord OAuth2 Login (Authorization Code Flow) =====
async function discordLogin() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    await fetch(API_URL + '/', { signal: controller.signal });
    clearTimeout(timeoutId);
    window.location.href = API_URL + '/login';
  } catch (err) {
    toast('Login server is currently unavailable. The bot backend is not running or the API URL has expired.', 'error');
  }
}

function getInitials(name) {
  return name.split(/\s+/).map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

function handleOAuthCallback() {
  // Check for OAuth code in URL query params (Discord redirects here with ?code=...)
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  if (code) {
    // Forward the code to backend for exchange
    window.location.href = API_URL + '/auth/callback?code=' + encodeURIComponent(code);
    return;
  }

  const hash = window.location.hash.substring(1);
  if (!hash) return;

  // Auth data transferred via window.name from backend HTML page
  if (hash === 'auth_complete' && window.name) {
    try {
      const data = JSON.parse(window.name);
      window.name = '';
      currentUser = {
        name: data.user.username,
        avatar: data.user.avatar,
        avatarIsUrl: true,
        color: '#5865F2'
      };
      userGuilds = data.guilds.map(g => ({
        id: g.id,
        name: g.name,
        members: 0,
        icon: g.icon || null,
        initials: getInitials(g.name),
        botIn: !!g.botIn,
        roles: g.roles || []
      }));
      localStorage.setItem('discord_user', JSON.stringify(currentUser));
      localStorage.setItem('discord_guilds', JSON.stringify(userGuilds));
      history.replaceState(null, '', window.location.pathname);
      updateUserUI();
      toast('Logged in as ' + currentUser.name, 'success');
      navigateTo('dashboard');
    } catch (e) {
      console.error('Auth parse error:', e);
      toast('Login failed', 'error');
    }
    return;
  }

  if (hash.startsWith('error=')) {
    const msg = decodeURIComponent(hash.substring(6));
    history.replaceState(null, '', window.location.pathname);
    toast('Login failed: ' + msg, 'error');
  }
}

function restoreSession() {
  const user = localStorage.getItem('discord_user');
  const guilds = localStorage.getItem('discord_guilds');
  if (user && guilds) {
    currentUser = JSON.parse(user);
    userGuilds = JSON.parse(guilds);
    updateUserUI();
  }
}

document.getElementById('login-btn').addEventListener('click', discordLogin);
document.getElementById('dashboard-login-btn')?.addEventListener('click', discordLogin);

function doLogout() {
  currentUser = null;
  userGuilds = [];
  localStorage.removeItem('discord_user');
  localStorage.removeItem('discord_guilds');
  hideServerSidebar();
  updateUserUI();
  navigateTo('home');
  toast('Logged out', 'info');
}

document.getElementById('logout-btn').addEventListener('click', doLogout);
document.getElementById('topbar-logout-btn').addEventListener('click', doLogout);

// ===== Theme Toggle =====
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  if (icon && label) {
    if (theme === 'light') {
      icon.className = 'fas fa-sun';
      label.textContent = 'Dark Mode';
    } else {
      icon.className = 'fas fa-moon';
      label.textContent = 'Light Mode';
    }
  }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

document.getElementById('theme-toggle-btn').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

function updateUserUI() {
  const loginEl = document.getElementById('sidebar-login');
  const userEl = document.getElementById('sidebar-user');
  const topbar = document.getElementById('topbar');
  const refreshBtn = document.getElementById('refresh-guilds-btn');
  if (currentUser) {
    loginEl.style.display = 'none';
    userEl.style.display = 'block';
    topbar.style.display = 'flex';
    if (refreshBtn) refreshBtn.style.display = 'inline-flex';
    document.getElementById('user-name').textContent = currentUser.name;
    document.getElementById('topbar-name').textContent = currentUser.name;
    const av = document.getElementById('user-avatar');
    const topAv = document.getElementById('topbar-avatar');
    if (currentUser.avatarIsUrl) {
      av.textContent = '';
      av.style.background = `url(${currentUser.avatar}) center/cover`;
      topAv.textContent = '';
      topAv.style.background = `url(${currentUser.avatar}) center/cover`;
    } else {
      av.textContent = currentUser.avatar;
      av.style.background = currentUser.color;
      topAv.textContent = currentUser.avatar || currentUser.name.charAt(0);
      topAv.style.background = currentUser.color;
    }
  } else {
    loginEl.style.display = 'block';
    userEl.style.display = 'none';
    topbar.style.display = 'none';
    if (refreshBtn) refreshBtn.style.display = 'none';
  }
}

// ===== Commands Page =====
function renderCommands(filter = '') {
  const container = document.getElementById('commands-container');
  const lf = filter.toLowerCase();
  let html = '';
  Object.entries(COMMANDS).forEach(([cat, cmds]) => {
    const filtered = cmds.filter(c => !lf || c.name.toLowerCase().includes(lf) || c.desc.toLowerCase().includes(lf));
    if (filtered.length === 0) return;
    html += `<div class="command-category"><h2><i class="${CATEGORY_ICONS[cat] || 'fas fa-folder'}"></i> ${cat}</h2><div class="command-list">`;
    filtered.forEach(c => {
      html += `<div class="command-item"><div><span class="command-name">${c.name}</span></div><span class="command-desc">${c.desc}</span></div>`;
    });
    html += '</div></div>';
  });
  if (!html) html = '<div class="loading">No commands found.</div>';
  container.innerHTML = html;
}

document.getElementById('command-search').addEventListener('input', e => renderCommands(e.target.value));

// ===== Dashboard Page =====
function renderDashboard() {
  const container = document.getElementById('guilds-container');
  const prompt = document.getElementById('dashboard-login-prompt');
  if (!currentUser) {
    container.innerHTML = '';
    prompt.style.display = 'block';
    return;
  }
  prompt.style.display = 'none';
  if (userGuilds.length === 0) {
    container.innerHTML = '<div class="login-prompt"><i class="fas fa-server"></i><h2>No Servers Found</h2><p>You don\'t have Manage Server permission in any servers, or no servers were returned.</p></div>';
    return;
  }
  let html = '';
  // Try to refresh bot presence from API
  refreshBotPresence().then(() => {
    renderGuildCards(container);
  }).catch(() => {
    renderGuildCards(container);
  });
}

function renderGuildCards(container) {
  let html = '';
  const apiReachable = !lastApiError;
  if (lastApiError) {
    html += `<div class="status-banner warning" style="grid-column:1/-1;">
      <i class="fas fa-exclamation-triangle"></i>
      <div class="status-banner-content">
        <strong>Could not verify bot presence</strong>
        The bot API is unreachable. Server status shown may be outdated. Possible reasons:
        <ul>
          <li>The bot backend server is not running</li>
          <li>The API URL has changed or the tunnel has expired</li>
          <li>Network connectivity issues</li>
        </ul>
      </div>
    </div>`;
  }
  userGuilds.forEach(g => {
    const iconLarge = g.icon ? g.icon.replace('size=64', 'size=128') : '';
    html += `
      <div class="guild-card ${g.botIn ? 'bot-in' : 'bot-out'}" data-guild="${g.id}">
        <div class="guild-card-body">
          <div class="guild-icon">${iconLarge ? `<img src="${iconLarge}" alt="">` : g.initials}</div>
        </div>
        <div class="guild-card-footer">
          <h3>${g.name}</h3>
          <span class="guild-status ${g.botIn ? 'active' : 'inactive'}">${g.botIn ? 'Manage' : 'Invite Bot'}</span>
        </div>
      </div>`;
  });
  container.innerHTML = html;

  container.querySelectorAll('.guild-card').forEach(card => {
    card.addEventListener('click', () => {
      const guild = userGuilds.find(g => g.id === card.dataset.guild);
      if (!guild) return;
      if (!guild.botIn) {
        window.open('https://discord.com/oauth2/authorize?client_id=1503968081519837184&permissions=8&scope=bot%20applications.commands&guild_id=' + guild.id, '_blank');
        return;
      }
      navigateTo('server', guild);
    });
  });
}

// ===== Server Config =====
function showServerSidebar(guild) {
  document.getElementById('sidebar-menu-main').style.display = 'none';
  document.getElementById('sidebar-menu-server').style.display = 'flex';
  document.getElementById('sidebar-server-name').textContent = guild.name;
  document.querySelectorAll('.server-tab-item').forEach(t => t.classList.toggle('active', t.dataset.tab === 'permissions'));
}

function hideServerSidebar() {
  document.getElementById('sidebar-menu-main').style.display = 'flex';
  document.getElementById('sidebar-menu-server').style.display = 'none';
}

function openServer(guild) {
  currentServer = guild;
  currentTab = 'permissions';
  const roles = guild.roles || [];
  currentRole = roles.length > 0 ? roles[0].id : null;
  hasUnsaved = false;
  initPermState(guild.id);

  document.getElementById('server-name').textContent = guild.name;
  document.getElementById('server-info').textContent = guild.members.toLocaleString() + ' members';
  const icon = document.getElementById('server-icon');
  icon.textContent = guild.initials;

  showServerSidebar(guild);
  document.getElementById('page-server').classList.add('active');

  renderTab('permissions');
}

// Server tab items in sidebar
document.querySelectorAll('.server-tab-item').forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    currentTab = tab.dataset.tab;
    document.querySelectorAll('.server-tab-item').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderTab(currentTab);
    // Close mobile sidebar after selection
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('active');
  });
});

// Back button in server sidebar
document.getElementById('sidebar-back-btn').addEventListener('click', (e) => {
  e.preventDefault();
  hideServerSidebar();
  navigateTo('dashboard');
});

function renderTab(tab) {
  const el = document.getElementById('server-content');
  switch (tab) {
    case 'permissions': renderPermissions(el); break;
    case 'general': renderGeneral(el); break;
    case 'moderation': renderModeration(el); break;
    case 'logging': renderLogging(el); break;
    case 'leveling': renderLeveling(el); break;
    case 'economy': renderEconomy(el); break;
    default: el.innerHTML = '<div class="loading">Coming soon...</div>';
  }
}

// ===== PERMISSIONS TAB =====
function renderPermissions(el) {
  const guildId = currentServer.id;
  let html = '';

  // Role selector dropdown
  const roles = currentServer.roles || [];
  html += '<div class="config-section"><h3><i class="fas fa-users"></i> Select Role</h3>';
  html += '<p class="config-section-desc">Choose a role to edit its command permissions. Changes apply per-server.</p>';
  if (roles.length === 0) {
    html += `<div class="status-banner warning">
      <i class="fas fa-exclamation-triangle"></i>
      <div class="status-banner-content">
        <strong>Could not load server roles</strong>
        This can happen for several reasons:
        <ul>
          <li>The bot API server is not running or unreachable</li>
          <li>The bot has not been added to this server yet</li>
          <li>The bot does not have permission to view roles in this server</li>
          <li>Your login session has expired &mdash; try logging out and back in</li>
          <li>The Discord API returned an error &mdash; try refreshing in a few minutes</li>
        </ul>
      </div>
    </div>`;
  } else {
    html += '<select class="role-dropdown" id="role-select">';
    roles.forEach(role => {
      html += `<option value="${role.id}" ${role.id === currentRole ? 'selected' : ''} style="color:${role.color}">${role.name}</option>`;
    });
    html += '</select>';
  }
  html += '</div>';

  if (!currentRole || !permState[guildId] || !permState[guildId][currentRole]) {
    if (roles.length > 0) {
      html += '<div class="config-section"><p style="color:var(--text-muted);">Select a role above to manage permissions.</p></div>';
    }
    el.innerHTML = html;
    bindPermEvents(el);
    return;
  }

  // Command permissions by category
  html += '<div class="config-section"><h3><i class="fas fa-key"></i> Command Permissions</h3>';
  html += '<p class="config-section-desc">Toggle commands on or off for the selected role. Green = allowed, red = denied.</p>';

  Object.entries(PERM_CATEGORIES).forEach(([cat, cmds]) => {
    const allOn = cmds.every(c => permState[guildId][currentRole][c]);
    const allOff = cmds.every(c => !permState[guildId][currentRole][c]);
    html += `<div class="perm-category open" data-cat="${cat}">`;
    html += `<div class="perm-category-header">
      <i class="${CATEGORY_ICONS[cat]}"></i>
      <h4>${cat} <span style="color:var(--text-muted);font-weight:400;font-size:0.75rem;">(${cmds.length} commands)</span></h4>
      <button class="btn btn-xs ${allOn ? 'btn-danger' : 'btn-success'}" data-toggle-all="${cat}">${allOn ? 'Deny All' : 'Allow All'}</button>
      <i class="fas fa-chevron-down perm-category-toggle"></i>
    </div>`;
    html += '<div class="perm-list">';
    cmds.forEach(cmd => {
      const on = permState[guildId][currentRole][cmd];
      html += `<div class="perm-item">
        <div class="perm-item-info">
          <div>
            <div class="perm-item-name">/${cmd}</div>
          </div>
        </div>
        <div class="perm-item-controls">
          <div class="perm-toggle ${on ? 'active' : 'denied'}" data-cmd="${cmd}"></div>
        </div>
      </div>`;
    });
    html += '</div></div>';
  });
  html += '</div>';

  // Channel overrides
  html += '<div class="config-section"><h3><i class="fas fa-hashtag"></i> Channel Overrides</h3>';
  html += '<p class="config-section-desc">Override permissions for specific channels. Leave neutral to inherit from the role setting.</p>';

  if (!channelOverrides[guildId][currentRole]) channelOverrides[guildId][currentRole] = {};

  MOCK_CHANNELS.forEach(ch => {
    const icon = ch.type === 'voice' ? 'fas fa-volume-up' : 'fas fa-hashtag';
    const overrides = channelOverrides[guildId][currentRole][ch.id] || {};
    const overrideCount = Object.keys(overrides).length;
    html += `<div class="channel-override">
      <h4><i class="${icon}"></i> ${ch.name} ${overrideCount > 0 ? `<span style="color:var(--warning);font-size:0.7rem;">(${overrideCount} override${overrideCount > 1 ? 's' : ''})</span>` : ''}</h4>
      <div class="form-group">
        <label class="form-label">Disable specific commands in this channel</label>
        <select class="form-select channel-cmd-select" data-channel="${ch.id}">
          <option value="">+ Add command override...</option>`;
    Object.entries(PERM_CATEGORIES).forEach(([cat, cmds]) => {
      cmds.forEach(cmd => {
        if (!overrides[cmd]) {
          html += `<option value="${cmd}">/${cmd} (${cat})</option>`;
        }
      });
    });
    html += `</select>
      </div>`;
    Object.entries(overrides).forEach(([cmd, state]) => {
      html += `<div class="channel-row">
        <span><i class="fas fa-terminal" style="font-size:0.7rem;"></i> /${cmd}</span>
        <div style="display:flex;gap:0.4rem;align-items:center;">
          <span style="font-size:0.72rem;color:${state ? 'var(--success)' : 'var(--error)'};">${state ? 'Allowed' : 'Denied'}</span>
          <div class="perm-toggle ${state ? 'active' : 'denied'}" data-channel-cmd="${cmd}" data-channel-id="${ch.id}" style="width:30px;height:16px;"></div>
          <button class="btn btn-xs" data-remove-override="${cmd}" data-remove-channel="${ch.id}" style="color:var(--text-muted);font-size:0.7rem;"><i class="fas fa-times"></i></button>
        </div>
      </div>`;
    });
    html += '</div>';
  });
  html += '</div>';

  // Save bar
  html += `<div class="save-bar" id="save-bar" style="${hasUnsaved ? '' : 'display:none;'}">
    <p><span class="unsaved-dot"></span>You have unsaved changes</p>
    <div>
      <button class="btn btn-secondary btn-sm" id="discard-btn">Discard</button>
      <button class="btn btn-success btn-sm" id="save-btn"><i class="fas fa-save"></i> Save</button>
    </div>
  </div>`;

  el.innerHTML = html;
  bindPermEvents(el);
}

function bindPermEvents(el) {
  const guildId = currentServer.id;

  // Role dropdown
  const roleSelect = el.querySelector('#role-select');
  if (roleSelect) {
    roleSelect.addEventListener('change', () => {
      currentRole = roleSelect.value;
      renderPermissions(el);
    });
  }

  // Category collapse
  el.querySelectorAll('.perm-category-header').forEach(header => {
    header.addEventListener('click', e => {
      if (e.target.closest('[data-toggle-all]')) return;
      header.closest('.perm-category').classList.toggle('open');
    });
  });

  // Toggle all
  el.querySelectorAll('[data-toggle-all]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const cat = btn.dataset.toggleAll;
      const cmds = PERM_CATEGORIES[cat];
      const allOn = cmds.every(c => permState[guildId][currentRole][c]);
      cmds.forEach(c => permState[guildId][currentRole][c] = !allOn);
      markUnsaved();
      renderPermissions(el);
    });
  });

  // Individual toggles
  el.querySelectorAll('.perm-toggle[data-cmd]').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const cmd = toggle.dataset.cmd;
      permState[guildId][currentRole][cmd] = !permState[guildId][currentRole][cmd];
      toggle.classList.toggle('active', permState[guildId][currentRole][cmd]);
      toggle.classList.toggle('denied', !permState[guildId][currentRole][cmd]);
      markUnsaved();
    });
  });

  // Channel override select
  el.querySelectorAll('.channel-cmd-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const cmd = sel.value;
      const chId = sel.dataset.channel;
      if (!cmd) return;
      if (!channelOverrides[guildId][currentRole][chId]) channelOverrides[guildId][currentRole][chId] = {};
      channelOverrides[guildId][currentRole][chId][cmd] = false;
      markUnsaved();
      renderPermissions(el);
    });
  });

  // Channel override toggles
  el.querySelectorAll('.perm-toggle[data-channel-cmd]').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const cmd = toggle.dataset.channelCmd;
      const chId = toggle.dataset.channelId;
      channelOverrides[guildId][currentRole][chId][cmd] = !channelOverrides[guildId][currentRole][chId][cmd];
      markUnsaved();
      renderPermissions(el);
    });
  });

  // Remove overrides
  el.querySelectorAll('[data-remove-override]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.removeOverride;
      const chId = btn.dataset.removeChannel;
      delete channelOverrides[guildId][currentRole][chId][cmd];
      if (Object.keys(channelOverrides[guildId][currentRole][chId]).length === 0) {
        delete channelOverrides[guildId][currentRole][chId];
      }
      markUnsaved();
      renderPermissions(el);
    });
  });

  // Save / Discard
  const saveBtn = document.getElementById('save-btn');
  const discardBtn = document.getElementById('discard-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      hasUnsaved = false;
      document.getElementById('save-bar').style.display = 'none';
      toast('Permissions saved for ' + currentServer.name, 'success');
    });
  }
  if (discardBtn) {
    discardBtn.addEventListener('click', () => {
      hasUnsaved = false;
      initPermState(guildId);
      permState[guildId] = {};
      channelOverrides[guildId] = {};
      initPermState(guildId);
      renderPermissions(el);
      toast('Changes discarded', 'info');
    });
  }
}

function markUnsaved() {
  hasUnsaved = true;
  const bar = document.getElementById('save-bar');
  if (bar) bar.style.display = 'flex';
}

// ===== GENERAL TAB =====
function renderGeneral(el) {
  el.innerHTML = `
    <div class="config-section">
      <h3><i class="fas fa-cog"></i> General Settings</h3>
      <div class="form-group">
        <label class="form-label">Bot Prefix</label>
        <input type="text" class="form-input" value="f!" placeholder="Enter prefix">
      </div>
      <div class="form-group">
        <label class="form-label">Language</label>
        <select class="form-select">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
        </select>
      </div>
      <div class="toggle-row">
        <div class="toggle-info"><div class="toggle-label">Embed Responses</div><div class="toggle-desc">Send bot responses as embeds</div></div>
        <div class="toggle active" onclick="this.classList.toggle('active')"></div>
      </div>
      <div class="toggle-row">
        <div class="toggle-info"><div class="toggle-label">Delete Command Messages</div><div class="toggle-desc">Auto-delete the user's command message</div></div>
        <div class="toggle" onclick="this.classList.toggle('active')"></div>
      </div>
    </div>
    <div class="config-section">
      <h3><i class="fas fa-bell"></i> Notifications</h3>
      <div class="toggle-row">
        <div class="toggle-info"><div class="toggle-label">Welcome Messages</div><div class="toggle-desc">Send a message when a new member joins</div></div>
        <div class="toggle active" onclick="this.classList.toggle('active')"></div>
      </div>
      <div class="form-group" style="margin-top:1rem;">
        <label class="form-label">Welcome Channel</label>
        <select class="form-select">
          <option>Select channel...</option>
          <option># general</option>
          <option># welcome</option>
        </select>
      </div>
      <div class="toggle-row">
        <div class="toggle-info"><div class="toggle-label">Goodbye Messages</div><div class="toggle-desc">Send a message when a member leaves</div></div>
        <div class="toggle" onclick="this.classList.toggle('active')"></div>
      </div>
    </div>`;
}

// ===== MODERATION TAB =====
function renderModeration(el) {
  el.innerHTML = `
    <div class="config-section">
      <h3><i class="fas fa-shield-alt"></i> Moderation Settings</h3>
      <div class="toggle-row">
        <div class="toggle-info"><div class="toggle-label">Auto-Mod</div><div class="toggle-desc">Automatically moderate messages</div></div>
        <div class="toggle active" onclick="this.classList.toggle('active')"></div>
      </div>
      <div class="toggle-row">
        <div class="toggle-info"><div class="toggle-label">Anti-Spam</div><div class="toggle-desc">Detect and prevent spam messages</div></div>
        <div class="toggle active" onclick="this.classList.toggle('active')"></div>
      </div>
      <div class="toggle-row">
        <div class="toggle-info"><div class="toggle-label">Anti-Link</div><div class="toggle-desc">Block links from non-permitted users</div></div>
        <div class="toggle" onclick="this.classList.toggle('active')"></div>
      </div>
      <div class="toggle-row">
        <div class="toggle-info"><div class="toggle-label">Anti-Invite</div><div class="toggle-desc">Block Discord invite links</div></div>
        <div class="toggle active" onclick="this.classList.toggle('active')"></div>
      </div>
    </div>
    <div class="config-section">
      <h3><i class="fas fa-exclamation-triangle"></i> Warning Thresholds</h3>
      <p class="config-section-desc">Set automatic actions when a member reaches a certain number of warnings.</p>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">3 Warnings</label>
          <select class="form-select"><option>Mute (1 hour)</option><option>Kick</option><option>Nothing</option></select>
        </div>
        <div class="form-group">
          <label class="form-label">5 Warnings</label>
          <select class="form-select"><option>Ban</option><option>Kick</option><option>Mute (24 hours)</option></select>
        </div>
      </div>
    </div>
    <div class="config-section">
      <h3><i class="fas fa-ban"></i> Banned Words</h3>
      <div class="form-group">
        <label class="form-label">Add words or phrases (comma separated)</label>
        <input type="text" class="form-input" placeholder="word1, word2, phrase...">
      </div>
    </div>`;
}

// ===== LOGGING TAB =====
function renderLogging(el) {
  el.innerHTML = `
    <div class="config-section">
      <h3><i class="fas fa-file-alt"></i> Logging Settings</h3>
      <div class="form-group">
        <label class="form-label">Log Channel</label>
        <select class="form-select">
          <option>Select channel...</option>
          <option># mod-logs</option>
          <option># audit-log</option>
        </select>
      </div>
    </div>
    <div class="config-section">
      <h3><i class="fas fa-list"></i> Events to Log</h3>
      <div class="toggle-row"><div class="toggle-info"><div class="toggle-label">Message Deletes</div></div><div class="toggle active" onclick="this.classList.toggle('active')"></div></div>
      <div class="toggle-row"><div class="toggle-info"><div class="toggle-label">Message Edits</div></div><div class="toggle active" onclick="this.classList.toggle('active')"></div></div>
      <div class="toggle-row"><div class="toggle-info"><div class="toggle-label">Member Joins</div></div><div class="toggle active" onclick="this.classList.toggle('active')"></div></div>
      <div class="toggle-row"><div class="toggle-info"><div class="toggle-label">Member Leaves</div></div><div class="toggle active" onclick="this.classList.toggle('active')"></div></div>
      <div class="toggle-row"><div class="toggle-info"><div class="toggle-label">Bans / Unbans</div></div><div class="toggle active" onclick="this.classList.toggle('active')"></div></div>
      <div class="toggle-row"><div class="toggle-info"><div class="toggle-label">Role Changes</div></div><div class="toggle" onclick="this.classList.toggle('active')"></div></div>
      <div class="toggle-row"><div class="toggle-info"><div class="toggle-label">Voice State Changes</div></div><div class="toggle" onclick="this.classList.toggle('active')"></div></div>
      <div class="toggle-row"><div class="toggle-info"><div class="toggle-label">Channel Updates</div></div><div class="toggle" onclick="this.classList.toggle('active')"></div></div>
    </div>`;
}

// ===== LEVELING TAB =====
function renderLeveling(el) {
  el.innerHTML = `
    <div class="config-section">
      <h3><i class="fas fa-chart-line"></i> Leveling System</h3>
      <div class="toggle-row">
        <div class="toggle-info"><div class="toggle-label">Enable Leveling</div><div class="toggle-desc">Members earn XP by chatting</div></div>
        <div class="toggle active" onclick="this.classList.toggle('active')"></div>
      </div>
      <div class="form-row" style="margin-top:1rem;">
        <div class="form-group">
          <label class="form-label">Min XP per Message</label>
          <input type="number" class="form-input" value="15" min="1" max="100">
        </div>
        <div class="form-group">
          <label class="form-label">Max XP per Message</label>
          <input type="number" class="form-input" value="25" min="1" max="100">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Level-Up Channel</label>
        <select class="form-select"><option># general</option><option>Current Channel</option><option>DM</option><option>Disabled</option></select>
      </div>
    </div>
    <div class="config-section">
      <h3><i class="fas fa-award"></i> Role Rewards</h3>
      <p class="config-section-desc">Assign roles automatically when members reach a certain level.</p>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Level 5</label><select class="form-select"><option>@Member</option><option>None</option></select></div>
        <div class="form-group"><label class="form-label">Level 10</label><select class="form-select"><option>None</option><option>@Active</option></select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Level 25</label><select class="form-select"><option>None</option><option>@Veteran</option></select></div>
        <div class="form-group"><label class="form-label">Level 50</label><select class="form-select"><option>None</option><option>@Legend</option></select></div>
      </div>
    </div>`;
}

// ===== ECONOMY TAB =====
function renderEconomy(el) {
  el.innerHTML = `
    <div class="config-section">
      <h3><i class="fas fa-coins"></i> Economy Settings</h3>
      <div class="toggle-row">
        <div class="toggle-info"><div class="toggle-label">Enable Economy</div><div class="toggle-desc">Members can earn and spend coins</div></div>
        <div class="toggle active" onclick="this.classList.toggle('active')"></div>
      </div>
      <div class="form-group" style="margin-top:1rem;">
        <label class="form-label">Currency Name</label>
        <input type="text" class="form-input" value="Coins" placeholder="e.g., Coins, Gems, Gold">
      </div>
      <div class="form-group">
        <label class="form-label">Currency Symbol</label>
        <input type="text" class="form-input" value="$" placeholder="e.g., $, C, G" style="max-width:100px;">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Daily Reward</label>
          <input type="number" class="form-input" value="100" min="1">
        </div>
        <div class="form-group">
          <label class="form-label">Starting Balance</label>
          <input type="number" class="form-input" value="0" min="0">
        </div>
      </div>
    </div>
    <div class="config-section">
      <h3><i class="fas fa-dice"></i> Gambling</h3>
      <div class="toggle-row">
        <div class="toggle-info"><div class="toggle-label">Enable Gambling</div><div class="toggle-desc">Allow members to gamble coins</div></div>
        <div class="toggle active" onclick="this.classList.toggle('active')"></div>
      </div>
      <div class="form-row" style="margin-top:1rem;">
        <div class="form-group">
          <label class="form-label">Min Bet</label>
          <input type="number" class="form-input" value="10" min="1">
        </div>
        <div class="form-group">
          <label class="form-label">Max Bet</label>
          <input type="number" class="form-input" value="10000" min="1">
        </div>
      </div>
    </div>`;
}

// ===== Toast =====
function toast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  const icons = { success: 'fas fa-check-circle', error: 'fas fa-exclamation-circle', info: 'fas fa-info-circle' };
  el.innerHTML = `<i class="${icons[type] || icons.info}" style="color:var(--${type === 'info' ? 'accent' : type});"></i> ${msg}`;
  container.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(100%)'; setTimeout(() => el.remove(), 300); }, 3000);
}

// ===== Init =====
renderCommands();
restoreSession();
handleOAuthCallback();
