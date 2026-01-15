/* Microbiology Practice Lab (GitHub Pages ready)
 * Author: you
 * Notes: No backend, all progress stored in localStorage.
 */

const VIEWS = ["home", "learn", "cases", "quiz", "lab", "progress"];
const STORAGE_KEY = "microbio_practice_progress_v1";

const content = {
  learn: [
    {
      id: "gram-basics",
      title: "Pewarnaan Gram: konsep inti",
      body:
        "Pewarnaan Gram membedakan bakteri berdasarkan struktur dinding sel. Gram positif: peptidoglikan tebal menahan crystal violet-iodine. Gram negatif: peptidoglikan tipis + membran luar, terdekolorisasi lalu mengambil counterstain (safranin).",
      tags: ["gram", "stain", "diagnostic"],
    },
    {
      id: "culture-blood-agar",
      title: "Blood agar: enriched & diferensial",
      body:
        "Blood agar mendukung pertumbuhan banyak bakteri dan membedakan hemolisis (alpha, beta, gamma). Interpretasi harus mempertimbangkan spesimen, flora normal, dan jumlah koloni.",
      tags: ["culture", "blood agar", "hemolysis"],
    },
    {
      id: "ast-basics",
      title: "Antimicrobial Susceptibility Testing (AST)",
      body:
        "AST menilai kerentanan bakteri terhadap antibiotik (mis. disk diffusion, MIC). Interpretasi mengacu ke breakpoint (CLSI/EUCAST). Kesalahan pra-analitik (inokulum, media, inkubasi) dapat mengubah zona/MIC.",
      tags: ["ast", "mic", "clsi", "eucast"],
    },
  ],

  cases: [
    {
      id: "case-uti",
      title: "ISK pada perempuan muda",
      level: "Dasar–Menengah",
      vignette:
        "Perempuan 23 tahun, disuria dan frekuensi berkemih meningkat 2 hari. Tidak demam. Nyeri suprapubik ringan. TTV: T 36,9°C, N 86, RR 16, TD 110/70. Urinalisis: leukosit esterase (+), nitrit (+), piuria. Tidak ada flank pain. Riwayat: tidak hamil, tanpa komorbid.",
      question: "Pemeriksaan mikrobiologi paling tepat untuk konfirmasi etiologi adalah?",
      choices: [
        { key: "A", text: "Kultur urin midstream + hitung CFU + identifikasi bakteri", correct: true,
          rationale: "Untuk ISK, kultur urin midstream kuantitatif dengan identifikasi membantu memastikan etiologi dan kontaminasi." },
        { key: "B", text: "Kultur darah aerob–anaerob dua set sebelum antibiotik", correct: false,
          rationale: "Kultur darah dipertimbangkan bila kecurigaan bakteremia/pyelonefritis berat, bukan sistitis tidak demam." },
        { key: "C", text: "Pewarnaan Ziehl–Neelsen pada sedimen urin", correct: false,
          rationale: "ZN untuk kecurigaan TB; skenario ini konsisten dengan bakteri enterik (nitrit+)." },
        { key: "D", text: "Rapid antigen Streptococcus group A dari swab tenggorok", correct: false,
          rationale: "Tidak relevan dengan ISK." },
        { key: "E", text: "Serologi IgM/IgG untuk Chlamydia trachomatis", correct: false,
          rationale: "Uretritis/servisitis lebih cocok dengan NAAT, bukan serologi, dan vignette mendukung sistitis bakteri." },
      ],
      competency: ["Pemilihan spesimen", "Kultur kuantitatif", "Interpretasi kontaminasi"],
    },

    {
      id: "case-pneumonia",
      title: "Pneumonia komunitas dengan sputum buruk kualitas",
      level: "Menengah",
      vignette:
        "Laki-laki 58 tahun, demam 3 hari, batuk produktif, sesak. TTV: T 38,6°C, N 104, RR 28, TD 135/80, SpO2 90% RA. Foto toraks: infiltrat lobar kanan bawah. Sputum pertama: banyak sel epitel skuamosa, sedikit PMN.",
      question: "Langkah mikrobiologi yang paling tepat terkait spesimen sputum adalah?",
      choices: [
        { key: "A", text: "Tolak spesimen; minta ulang sputum deep cough untuk kualitas lebih baik", correct: true,
          rationale: "Banyak sel epitel skuamosa menunjukkan kontaminasi saliva; perlu ulang agar kultur representatif." },
        { key: "B", text: "Langsung kultur sputum pada MacConkey saja", correct: false,
          rationale: "Pemilihan media harus komprehensif dan bergantung kualitas spesimen; masalah utama di sini adalah kualitas." },
        { key: "C", text: "Lakukan PCR TB pada sputum pertama tanpa evaluasi kualitas", correct: false,
          rationale: "Indikasi TB tidak jelas; dan untuk kultur bakteri pneumonia, kualitas sputum penting." },
        { key: "D", text: "Lakukan kultur darah saja karena sputum selalu tidak reliabel", correct: false,
          rationale: "Kultur darah membantu pada CAP berat, tetapi sputum berkualitas baik tetap bernilai." },
        { key: "E", text: "Lakukan serologi Mycoplasma segera sebagai konfirmasi etiologi utama", correct: false,
          rationale: "Serologi bukan konfirmasi cepat; etiologi CAP bervariasi. Prioritas: spesimen respiratorik yang layak." },
      ],
      competency: ["Kualitas spesimen", "Pra-analitik", "Rasional pemilihan uji"],
    },
  ],

  quiz: [
    {
      id: "q1",
      stem: "Pada pewarnaan Gram, fungsi iodine (mordant) terutama untuk…",
      options: [
        { key: "A", text: "Mengikat crystal violet membentuk kompleks yang lebih stabil", correct: true },
        { key: "B", text: "Menghilangkan lipid membran luar Gram negatif", correct: false },
        { key: "C", text: "Mewarnai sitoplasma menjadi merah muda", correct: false },
        { key: "D", text: "Melisiskan dinding sel Gram positif", correct: false },
        { key: "E", text: "Menetralisir efek dekolorisasi alkohol", correct: false },
      ],
      explain:
        "Iodine membentuk kompleks crystal violet–iodine yang lebih besar dan stabil sehingga lebih tertahan pada peptidoglikan tebal Gram positif.",
      tags: ["gram"],
    },
    {
      id: "q2",
      stem: "Parameter pra-analitik yang paling memengaruhi hasil disk diffusion adalah…",
      options: [
        { key: "A", text: "Kepadatan inokulum yang tidak sesuai (mis. bukan 0,5 McFarland)", correct: true },
        { key: "B", text: "Penggunaan tabung EDTA untuk darah lengkap", correct: false },
        { key: "C", text: "Penyimpanan media pada -20°C selama 24 jam", correct: false },
        { key: "D", text: "Penggunaan cover slip pada preparat basah", correct: false },
        { key: "E", text: "Penggantian safranin dengan methylene blue", correct: false },
      ],
      explain:
        "Inokulum terlalu pekat atau terlalu encer mengubah ukuran zona inhibisi sehingga interpretasi S/I/R bisa keliru.",
      tags: ["ast"],
    },
  ],

  lab: {
    title: "Gram Stain Simulation",
    steps: [
      {
        id: "s1",
        prompt: "Anda menerima spesimen pus. Apa langkah awal sebelum pewarnaan?",
        options: [
          { text: "Membuat sediaan apus tipis, kering udara, lalu fiksasi", next: "s2", score: 1,
            feedback: "Benar. Apus tipis dan fiksasi membantu melekatkan material ke kaca objek." },
          { text: "Langsung teteskan iodine tanpa membuat apus", next: "fail", score: 0,
            feedback: "Tidak tepat. Harus dibuat apus dan difiksasi dahulu." },
          { text: "Tambahkan alkohol 95% selama 5 menit", next: "fail", score: 0,
            feedback: "Dekolorisasi dilakukan setelah crystal violet dan iodine." },
        ],
      },
      {
        id: "s2",
        prompt: "Urutan reagen Gram stain yang benar adalah…",
        options: [
          { text: "Crystal violet → iodine → dekolorisasi alkohol/aseton → safranin", next: "s3", score: 1,
            feedback: "Benar. Ini urutan standar." },
          { text: "Safranin → crystal violet → iodine → alkohol/aseton", next: "fail", score: 0,
            feedback: "Urutan salah. Safranin adalah counterstain terakhir." },
          { text: "Iodine → crystal violet → safranin → alkohol/aseton", next: "fail", score: 0,
            feedback: "Urutan salah. Iodine mengikuti crystal violet." },
        ],
      },
      {
        id: "s3",
        prompt: "Setelah pewarnaan, Anda melihat kokus ungu berkelompok. Interpretasi paling konsisten adalah…",
        options: [
          { text: "Kokus Gram positif berkelompok (mis. Staphylococcus spp.)", next: "success", score: 1,
            feedback: "Interpretasi sesuai: Gram positif (ungu) dan berkelompok." },
          { text: "Basil Gram negatif (mis. Enterobacterales)", next: "fail", score: 0,
            feedback: "Morfologi dan warna tidak sesuai." },
          { text: "Spora jamur bersepta", next: "fail", score: 0,
            feedback: "Gram stain dapat mewarnai beberapa jamur, tetapi gambaran kokus berkelompok lebih konsisten bakteri." },
        ],
      },
    ],
  },
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { quizHistory: [], casesDone: {}, learnRead: {}, labRuns: 0 };
    const parsed = JSON.parse(raw);
    return {
      quizHistory: parsed.quizHistory ?? [],
      casesDone: parsed.casesDone ?? {},
      learnRead: parsed.learnRead ?? {},
      labRuns: parsed.labRuns ?? 0,
    };
  } catch {
    return { quizHistory: [], casesDone: {}, learnRead: {}, labRuns: 0 };
  }
}

function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

let progress = loadProgress();

/* ---------- Navigation ---------- */
const tabs = document.querySelectorAll(".tab");
const viewEls = Object.fromEntries(VIEWS.map(v => [v, document.getElementById(`view-${v}`)]));

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    const v = btn.dataset.view;
    setView(v);
  });
});

function setView(view) {
  tabs.forEach(t => t.classList.toggle("active", t.dataset.view === view));
  VIEWS.forEach(v => viewEls[v].classList.toggle("hidden", v !== view));
  if (view === "learn") renderLearn();
  if (view === "cases") renderCases();
  if (view === "quiz") renderQuizLanding();
  if (view === "lab") renderLab();
  if (view === "progress") renderProgress();
}

/* ---------- Learn ---------- */
const learnListEl = document.getElementById("learnList");
const learnSearchEl = document.getElementById("learnSearch");

learnSearchEl?.addEventListener("input", () => renderLearn());

function renderLearn() {
  const q = (learnSearchEl?.value ?? "").toLowerCase().trim();
  const items = content.learn.filter(x => {
    if (!q) return true;
    return (
      x.title.toLowerCase().includes(q) ||
      x.body.toLowerCase().includes(q) ||
      x.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  learnListEl.innerHTML = "";
  items.forEach(x => {
    const read = !!progress.learnRead[x.id];
    const el = document.createElement("div");
    el.className = "item";
    el.innerHTML = `
      <div class="row">
        <h3>${x.title}</h3>
        <div class="spacer"></div>
        <button class="btn ${read ? "" : "primary"}" data-learn="${x.id}">
          ${read ? "Dibaca" : "Tandai dibaca"}
        </button>
      </div>
      <p>${x.body}</p>
      <p class="mono">Tags: ${x.tags.join(", ")}</p>
    `;
    learnListEl.appendChild(el);
  });

  learnListEl.querySelectorAll("button[data-learn]").forEach(b => {
    b.addEventListener("click", () => {
      const id = b.getAttribute("data-learn");
      progress.learnRead[id] = true;
      saveProgress(progress);
      renderLearn();
    });
  });
}

/* ---------- Cases ---------- */
const caseSelectEl = document.getElementById("caseSelect");
const caseCardEl = document.getElementById("caseCard");
const caseActionsEl = document.getElementById("caseActions");
const caseFeedbackEl = document.getElementById("caseFeedback");

function renderCases() {
  caseSelectEl.innerHTML = "";
  content.cases.forEach((c, idx) => {
    const opt = document.createElement("option");
    const done = !!progress.casesDone[c.id];
    opt.value = c.id;
    opt.textContent = `${idx + 1}. ${c.title}${done ? " (done)" : ""}`;
    caseSelectEl.appendChild(opt);
  });

  const currentId = caseSelectEl.value || content.cases[0]?.id;
  caseSelectEl.value = currentId;
  caseSelectEl.onchange = () => showCase(caseSelectEl.value);

  showCase(currentId);
}

function showCase(caseId) {
  const c = content.cases.find(x => x.id === caseId);
  if (!c) return;

  caseCardEl.innerHTML = `
    <h3>${c.title}</h3>
    <div class="meta">Level: ${c.level} • Kompetensi: ${c.competency.join(" | ")}</div>
    <p>${c.vignette}</p>
    <p><b>Pertanyaan:</b> ${c.question}</p>
  `;

  caseActionsEl.innerHTML = "";
  caseFeedbackEl.className = "feedback";
  caseFeedbackEl.textContent = "Pilih jawaban untuk melihat umpan balik.";

  c.choices.forEach(ch => {
    const b = document.createElement("button");
    b.className = "choice";
    b.textContent = `${ch.key}. ${ch.text}`;
    b.addEventListener("click", () => gradeCase(c.id, ch));
    caseActionsEl.appendChild(b);
  });
}

function gradeCase(caseId, choice) {
  const good = !!choice.correct;
  caseFeedbackEl.className = `feedback ${good ? "good" : "bad"}`;
  caseFeedbackEl.innerHTML = `
    <p><b>${good ? "Benar" : "Belum tepat"}.</b> ${choice.rationale}</p>
  `;

  if (good) {
    progress.casesDone[caseId] = { doneAt: new Date().toISOString() };
    saveProgress(progress);
    // update dropdown label
    renderCases();
    caseSelectEl.value = caseId;
  }
}

/* ---------- Quiz ---------- */
const quizBoxEl = document.getElementById("quizBox");
const quizStartEl = document.getElementById("quizStart");
const quizResetEl = document.getElementById("quizReset");

let quizState = null;

quizStartEl?.addEventListener("click", () => startQuiz());
quizResetEl?.addEventListener("click", () => {
  quizState = null;
  renderQuizLanding();
});

function renderQuizLanding() {
  if (!quizState) {
    quizBoxEl.innerHTML = `
      <p>Tekan <b>Mulai Quiz</b> untuk mengerjakan ${content.quiz.length} soal.</p>
      <p class="mono">Skor akan disimpan pada riwayat progres.</p>
    `;
    return;
  }
  renderQuizQuestion();
}

function startQuiz() {
  quizState = {
    idx: 0,
    correct: 0,
    answers: [],
    startedAt: new Date().toISOString(),
    order: shuffle([...content.quiz.map(q => q.id)]),
  };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qid = quizState.order[quizState.idx];
  const q = content.quiz.find(x => x.id === qid);

  quizBoxEl.innerHTML = `
    <div class="row">
      <div class="mono">Soal ${quizState.idx + 1} / ${quizState.order.length}</div>
      <div class="spacer"></div>
      <div class="mono">Benar: ${quizState.correct}</div>
    </div>
    <h3 style="margin-top:10px">${q.stem}</h3>
    <div class="actions" id="quizOptions"></div>
    <div id="quizExplain" class="feedback"></div>
  `;

  const optWrap = document.getElementById("quizOptions");
  const explain = document.getElementById("quizExplain");
  explain.textContent = "Pilih satu opsi.";

  q.options.forEach(o => {
    const b = document.createElement("button");
    b.className = "choice";
    b.textContent = `${o.key}. ${o.text}`;
    b.addEventListener("click", () => {
      const isCorrect = !!o.correct;
      if (isCorrect) quizState.correct += 1;

      quizState.answers.push({ qid, picked: o.key, correct: isCorrect });

      explain.className = `feedback ${isCorrect ? "good" : "bad"}`;
      explain.innerHTML = `
        <p><b>${isCorrect ? "Benar" : "Salah"}.</b> ${q.explain}</p>
        <button id="quizNext" class="btn primary">Lanjut</button>
      `;

      document.getElementById("quizNext").addEventListener("click", () => {
        quizState.idx += 1;
        if (quizState.idx >= quizState.order.length) finishQuiz();
        else renderQuizQuestion();
      });

      // disable options after choose
      optWrap.querySelectorAll("button").forEach(btn => (btn.disabled = true));
    });
    optWrap.appendChild(b);
  });
}

function finishQuiz() {
  const total = quizState.order.length;
  const scorePct = Math.round((quizState.correct / total) * 100);
  const record = {
    finishedAt: new Date().toISOString(),
    total,
    correct: quizState.correct,
    scorePct,
    answers: quizState.answers,
  };

  progress.quizHistory.unshift(record);
  progress.quizHistory = progress.quizHistory.slice(0, 20); // keep last 20
  saveProgress(progress);

  quizBoxEl.innerHTML = `
    <h3>Quiz selesai</h3>
    <p>Skor Anda: <b>${quizState.correct}</b> / ${total} (<b>${scorePct}%</b>)</p>
    <button class="btn primary" id="quizAgain">Kerjakan Lagi</button>
  `;
  document.getElementById("quizAgain").addEventListener("click", () => startQuiz());
  quizState = null;
}

/* ---------- Virtual Lab ---------- */
const labBoxEl = document.getElementById("labBox");
const labRestartEl = document.getElementById("labRestart");

labRestartEl?.addEventListener("click", () => renderLab(true));

let labState = { stepId: content.lab.steps[0].id, score: 0, done: false };

function renderLab(restart = false) {
  if (restart) labState = { stepId: content.lab.steps[0].id, score: 0, done: false };

  const stepId = labState.stepId;

  if (stepId === "success") {
    progress.labRuns += 1;
    saveProgress(progress);
    labBoxEl.innerHTML = `
      <div class="feedback good">
        <p><b>Selesai.</b> Anda menyelesaikan simulasi dengan skor ${labState.score} / 3.</p>
        <p class="mono">Catatan: ini simulasi konsep; dalam praktik klinik, interpretasi selalu dikontekstualkan dengan spesimen, klinis, dan kontrol kualitas.</p>
      </div>
    `;
    return;
  }

  if (stepId === "fail") {
    labBoxEl.innerHTML = `
      <div class="feedback bad">
        <p><b>Simulasi berhenti.</b> Keputusan Anda menyebabkan langkah tidak valid.</p>
        <p>Tekan <b>Restart</b> untuk mencoba lagi.</p>
      </div>
    `;
    return;
  }

  const step = content.lab.steps.find(s => s.id === stepId);
  if (!step) return;

  labBoxEl.innerHTML = `
    <div class="row">
      <div class="mono">Skor: ${labState.score}</div>
      <div class="spacer"></div>
      <div class="mono">Langkah: ${step.id.toUpperCase()}</div>
    </div>
    <h3 style="margin-top:10px">${step.prompt}</h3>
    <div class="actions" id="labOptions"></div>
    <div id="labFeedback" class="feedback"></div>
  `;

  const optWrap = document.getElementById("labOptions");
  const fb = document.getElementById("labFeedback");
  fb.textContent = "Pilih tindakan.";

  step.options.forEach(o => {
    const b = document.createElement("button");
    b.className = "choice";
    b.textContent = o.text;
    b.addEventListener("click", () => {
      labState.score += (o.score || 0);
      fb.className = `feedback ${o.score ? "good" : "warn"}`;
      fb.innerHTML = `
        <p>${o.feedback}</p>
        <button id="labNext" class="btn primary">Lanjut</button>
      `;
      document.getElementById("labNext").addEventListener("click", () => {
        labState.stepId = o.next;
        renderLab(false);
      });

      optWrap.querySelectorAll("button").forEach(btn => (btn.disabled = true));
    });
    optWrap.appendChild(b);
  });
}

/* ---------- Progress ---------- */
const summaryEl = document.getElementById("progressSummary");
const quizEl = document.getElementById("progressQuiz");
const casesEl = document.getElementById("progressCases");
const wipeBtn = document.getElementById("wipeProgress");

wipeBtn?.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  progress = loadProgress();
  renderProgress();
});

function renderProgress() {
  const learnCount = Object.keys(progress.learnRead).length;
  const casesDone = Object.keys(progress.casesDone).length;
  const quizCount = progress.quizHistory.length;

  summaryEl.textContent = JSON.stringify(
    {
      learnRead: learnCount,
      casesDone,
      quizAttempts: quizCount,
      labRuns: progress.labRuns,
    },
    null,
    2
  );

  quizEl.textContent = progress.quizHistory.length
    ? JSON.stringify(
        progress.quizHistory.map(x => ({
          finishedAt: x.finishedAt,
          score: `${x.correct}/${x.total}`,
          pct: `${x.scorePct}%`,
        })),
        null,
        2
      )
    : "Belum ada riwayat quiz.";

  casesEl.textContent = Object.keys(progress.casesDone).length
    ? JSON.stringify(progress.casesDone, null, 2)
    : "Belum ada case yang ditandai selesai.";
}

/* ---------- Utilities ---------- */
function shuffle(arr) {
  // Fisher-Yates
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* Boot */
setView("home");
