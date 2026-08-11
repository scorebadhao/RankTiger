import{a as e,i as t,n,r,t as i}from"./toast-B59cOO0K.js";function a(e,t){e.querySelectorAll(`button, input, select`).forEach(e=>{e.disabled=t})}function o(){let e=[...document.querySelectorAll(`[data-auth-tab]`)],t=document.getElementById(`signInForm`),n=document.getElementById(`signUpForm`);!e.length||!t||!n||e.forEach(r=>{r.addEventListener(`click`,()=>{let i=r.dataset.authTab;e.forEach(e=>{let t=e===r;e.classList.toggle(`active`,t),e.setAttribute(`aria-selected`,String(t))}),t.classList.toggle(`hidden`,i!==`signin`),n.classList.toggle(`hidden`,i!==`signup`)})})}function s({onAuthenticated:e}={}){let t=document.getElementById(`signInForm`),r=document.getElementById(`signUpForm`);t?.addEventListener(`submit`,async t=>{t.preventDefault();let r=t.currentTarget;if(!r.reportValidity())return;let o=new FormData(r);a(r,!0);let s=i.loading(`Signing in…`);try{let t=await n.signIn({email:o.get(`email`),password:o.get(`password`)});s.close(),i.success(`Signed in successfully.`),r.reset(),await e?.(t.user)}catch(e){s.close(),i.error(e.message)}finally{a(r,!1)}}),r?.addEventListener(`submit`,async t=>{t.preventDefault();let r=t.currentTarget;if(!r.reportValidity())return;let o=new FormData(r);a(r,!0);let s=i.loading(`Creating account…`);try{let t=await n.signUp({fullName:o.get(`fullName`),mobile:o.get(`mobile`),email:o.get(`email`),password:o.get(`password`)});s.close(),i.success(t.user?.confirmed_at?`Account created and signed in.`:`Account created. Check your email if confirmation is enabled.`),r.reset(),t.session&&await e?.(t.user)}catch(e){s.close(),i.error(e.message)}finally{a(r,!1)}})}var c=`${r.cacheVersion}:pending-test-id`,l={setupNotice:document.getElementById(`setupNotice`),publicLoading:document.getElementById(`publicLoading`),publicView:document.getElementById(`publicView`),publicTestList:document.getElementById(`publicTestList`),publicFeaturedTests:document.getElementById(`publicFeaturedTests`),publicTestTypes:document.getElementById(`publicTestTypes`),publicScopes:document.getElementById(`publicScopes`)},u=!1,d=[],f={boards:[],exams:[],settings:{},stats:{}};function p(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function m(e,t=3,n=!1){e&&(e.innerHTML=Array.from({length:t},()=>`<div class="skeleton ${n?`skeleton-compact`:``}" aria-hidden="true"></div>`).join(``))}function h(e){return{PYQ_FULL:`Previous Paper`,PYQ_SECTIONAL:`Sectional PYQ`,TOPIC_PRACTICE:`Topic Practice`,FULL_MOCK:`Full Mock`,SECTIONAL_MOCK:`Sectional Mock`,DAILY_QUIZ:`Daily Quiz`,BOOKMARK_REVISION:`Bookmark Revision`,MISTAKE_REVISION:`Mistake Revision`,PERSONALIZED_TEST:`Personalized Test`}[e]||e}function g(e){return e===`PYQ_FULL`?`i-file`:e===`FULL_MOCK`?`i-target`:`i-layers`}function _(){l.publicLoading?.classList.add(`hidden`),l.publicView?.classList.remove(`hidden`)}function v(){u||(u=!0,window.location.replace(`./student.html`))}function y(e){e?.querySelectorAll(`[data-start-test]`).forEach(e=>{e.addEventListener(`click`,()=>{sessionStorage.setItem(c,e.dataset.startTest),document.getElementById(`authCard`)?.scrollIntoView({behavior:`smooth`,block:`start`}),i.info(`Sign in to start this test.`)})})}function b(e,{compact:t=!1}={}){let n=[e.exam_date,e.shift_no?`Shift ${e.shift_no}`:``].filter(Boolean).join(` · `),i=h(e.test_type);return t?`
      <article class="mini-test-row">
        <span class="mini-test-icon"><svg class="icon"><use href="#${g(e.test_type)}"></use></svg></span>
        <span class="mini-test-copy"><strong>${p(e.test_name)}</strong><small>${p(i)} · ${p(e.question_count)} questions</small></span>
        <button class="icon-button mini-test-action" data-start-test="${p(e.test_id)}" type="button" aria-label="Sign in to start ${p(e.test_name)}"><svg class="icon"><use href="#i-arrow"></use></svg></button>
      </article>
    `:`
    <article class="catalogue-test-card test-card">
      <div class="test-card-topline">
        <span class="eyebrow">${p(i)}</span>
        <span class="access-badge ${e.is_free?`free`:`premium`}">${e.is_free?`Free`:`Premium`}</span>
      </div>
      <div class="test-card-heading">
        <span class="test-type-icon"><svg class="icon"><use href="#${g(e.test_type)}"></use></svg></span>
        <div>
          <h3>${p(e.test_name)}</h3>
          <p>${p(e.boards?.board_name||r.name)} ${e.exams?.exam_name?`· ${p(e.exams.exam_name)}`:``}</p>
        </div>
      </div>
      <div class="test-meta">
        ${e.subjects?.subject_name?`<span class="chip">${p(e.subjects.subject_name)}</span>`:``}
        ${n?`<span class="chip">${p(n)}</span>`:``}
        <span class="chip">${p(e.question_count)} questions</span>
        <span class="chip">${p(e.duration_minutes||0)} min</span>
      </div>
      <div class="test-card-facts">
        <span><b>${p(e.marks_per_question??1)}</b> mark/question</span>
        <span><b>${p(e.negative_marks??0)}</b> negative</span>
      </div>
      <button class="button button-primary test-card-action" data-start-test="${p(e.test_id)}" type="button">
        <span>Sign in to start</span><svg class="icon"><use href="#i-arrow"></use></svg>
      </button>
    </article>
  `}function x(e){if(!e.length){l.publicTestList.innerHTML=`
      <div class="empty-state catalogue-empty">
        <span class="empty-icon"><svg class="icon"><use href="#i-grid"></use></svg></span>
        <h3>No published tests yet</h3>
        <p>Reviewed tests will appear here as soon as the ${r.name} administrator publishes them.</p>
      </div>
    `;return}l.publicTestList.innerHTML=e.map(e=>b(e)).join(``),y(l.publicTestList)}function S(e){if(!l.publicFeaturedTests)return;let t=e.slice(0,3);if(!t.length){l.publicFeaturedTests.innerHTML=`<div class="empty-inline">No featured tests yet.</div>`;return}l.publicFeaturedTests.innerHTML=t.map(e=>b(e,{compact:!0})).join(``),y(l.publicFeaturedTests)}function C(e){if(!l.publicTestTypes)return;let t=new Map;e.forEach(e=>t.set(e.test_type,(t.get(e.test_type)||0)+1));let n=[...t.entries()].sort((e,t)=>t[1]-e[1]);if(!n.length){l.publicTestTypes.innerHTML=`<div class="empty-inline">No active test series yet.</div>`;return}l.publicTestTypes.innerHTML=n.map(([e,t])=>`
    <div class="compact-list-row">
      <span class="compact-list-icon"><svg class="icon"><use href="#${g(e)}"></use></svg></span>
      <span><strong>${p(h(e))}</strong><small>Published practice</small></span>
      <b>${t}</b>
    </div>
  `).join(``)}function w(e){if(!l.publicScopes)return;let t=new Map;(e.exams||[]).forEach(e=>{t.has(e.board_id)||t.set(e.board_id,[]),t.get(e.board_id).push(e)});let n=(e.boards||[]).map(e=>{let n=t.get(e.board_id)||[];return`
      <div class="compact-list-row scope-row">
        <span class="compact-list-icon"><svg class="icon"><use href="#i-target"></use></svg></span>
        <span><strong>${p(e.board_name)}</strong><small>${p(n.map(e=>e.exam_name).join(` · `)||`Active board`)}</small></span>
        <svg class="icon row-arrow"><use href="#i-arrow"></use></svg>
      </div>
    `});l.publicScopes.innerHTML=n.join(``)||`<div class="empty-inline">No active exam scope.</div>`}async function T(){f=await n.getPublicConfiguration();let t=e(f.settings||{});document.getElementById(`brandName`).textContent=t.appName,document.getElementById(`brandTagline`).textContent=t.tagline,document.getElementById(`scopeBadge`).textContent=t.scopeBadge,document.getElementById(`heroTitle`).textContent=t.heroTitle,document.getElementById(`heroSubtitle`).textContent=t.heroSubtitle;let r=f.stats||{};document.getElementById(`statQuestions`).textContent=r.published_questions??0,document.getElementById(`statPapers`).textContent=r.pyq_papers??0,document.getElementById(`statTests`).textContent=r.published_tests??0,document.getElementById(`statAttempts`).textContent=r.student_attempts??0,w(f)}async function E(){m(l.publicTestList,3),m(l.publicFeaturedTests,2,!0),m(l.publicTestTypes,3,!0);try{d=await n.listTests({pageSize:50}),x(d),S(d),C(d)}catch(e){l.publicTestList.innerHTML=`
      <div class="empty-state catalogue-empty error">
        <h3>Tests could not be loaded</h3>
        <p>${p(e.message)}</p>
        <button id="retryPublicTests" class="button button-ghost" type="button">Retry</button>
      </div>
    `,document.getElementById(`retryPublicTests`)?.addEventListener(`click`,E)}}function D(){let e=document.getElementById(`syncState`),t=()=>{if(!e)return;let t=navigator.onLine;e.innerHTML=`<span class="sync-dot"></span>${t?`Online`:`Offline`}`,e.classList.toggle(`offline`,!t)};window.addEventListener(`online`,t),window.addEventListener(`offline`,t),t()}function O(){o(),s({onAuthenticated:v}),D(),document.querySelectorAll(`[data-scroll-to]`).forEach(e=>{e.addEventListener(`click`,()=>{document.getElementById(e.dataset.scrollTo)?.scrollIntoView({behavior:`smooth`,block:`start`})})}),document.getElementById(`refreshPublicTests`)?.addEventListener(`click`,E)}async function k(){if(O(),!t){l.setupNotice?.classList.remove(`hidden`),_(),x([]),S([]),C([]),w(f);return}try{if(await n.getUser()){v();return}}catch(e){i.error(e.message)}_(),m(l.publicTestList,3),await Promise.allSettled([T().catch(e=>i.error(e.message)),E()]),n.onAuthStateChange((e,t)=>{e===`SIGNED_IN`&&t?.user&&v()}),new URLSearchParams(window.location.search).get(`reason`)===`signin`&&i.info(`Sign in to access your ${r.name} student dashboard.`)}k();