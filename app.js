function toggleMenu() {
    const menu = document.getElementById('sidebarMenu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

function switchView(viewId) {
    document.querySelectorAll('.content-view').forEach(view => view.classList.add('hidden'));
    document.getElementById(`view-${viewId}`).classList.remove('hidden');
    if(viewId === 'aiboo') { startAiBooEngine(); }
}

function openTab(action) {
    alert(`Opening Viewport Layer: ${action}`);
    if(action === 'profile' || action === 'signup' || action === 'signin') {
        document.getElementById('socialNetworkBar').classList.remove('hidden');
    }
}

function connectFaceTime() {
    alert("Backend Isolation Matrix initializing secure FaceTime video link interface...");
}

let step = 0;
const aiConfig = { gender: '', language: '', personality: '' };

function startAiBooEngine() {
    step = 1;
    renderAiQuestion();
}

function renderAiQuestion() {
    const qEl = document.getElementById('ai-question');
    const wrap = document.getElementById('ai-input-wrapper');
    wrap.innerHTML = '';

    if (step === 1) {
        qEl.innerText = "Select AI Companion Profile Gender:";
        wrap.innerHTML = `
            <button onclick="saveAiChoice('Male')">Male</button>
            <button onclick="saveAiChoice('Female')">Female</button>
        `;
    } else if (step === 2) {
        qEl.innerText = "Select Native Language Vector:";
        wrap.innerHTML = `
            <select id="langSel" onchange="saveAiChoice(this.value)">
                <option value="">-- Dropdown Selection --</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
            </select>
        `;
    } else if (step === 3) {
        qEl.innerText = "Select Architectural Behavioral Matrix:";
        wrap.innerHTML = `
            <button onclick="saveAiChoice('Gangsta')">Gangsta</button>
            <button onclick="saveAiChoice('Mellow')">Mellow</button>
            <button onclick="saveAiChoice('Suck Up')">Suck Up</button>
            <button onclick="saveAiChoice('Funny')">Funny</button>
            <button onclick="saveAiChoice('Girly Girl')">Girly Girl</button>
            <button onclick="saveAiChoice('Manly')">Manly</button>
        `;
    } else if (step === 4) {
        qEl.innerText = "Sovereign Target Configuration Locked.";
        wrap.innerHTML = `<p style="color:#38bdf8;">Profile Synced to Internal Core: ${JSON.stringify(aiConfig)}</p>`;
    }
}

function saveAiChoice(val) {
    if(!val) return;
    if (step === 1) aiConfig.gender = val;
    else if (step === 2) aiConfig.language = val;
    else if (step === 3) aiConfig.personality = val;
    step++;
    renderAiQuestion();
}
