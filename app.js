// Padasalai.Net Interactive Application Engine
document.addEventListener('DOMContentLoaded', () => {
  // Application State
  let currentClass = '11th';
  let currentExamCategory = 'quarterly';
  let activeYearFilter = 'All';
  let savedBookmarks = JSON.parse(localStorage.getItem('padasalai_bookmarks') || '[]');

  // DOM Elements
  const classTabsContainer = document.getElementById('classTabsContainer');
  const schoolGuidesContainer = document.getElementById('schoolGuidesContainer');
  const subjectsGrid = document.getElementById('subjectsGrid');
  const examPillsContainer = document.getElementById('examPillsContainer');
  const examListContainer = document.getElementById('examListContainer');
  const competitiveExamsGrid = document.getElementById('competitiveExamsGrid');
  const popularPostsContainer = document.getElementById('popularPostsContainer');
  const tocListContainer = document.getElementById('tocListContainer');

  // Controls & Modals
  const searchInputHeader = document.getElementById('searchInputHeader');
  const searchInputSidebar = document.getElementById('searchInputSidebar');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const tocToggleBtn = document.getElementById('tocToggleBtn');
  const tocPopover = document.getElementById('tocPopover');
  const pdfModalBackdrop = document.getElementById('pdfModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalLink = document.getElementById('modalLink');
  const modalBookmarkBtn = document.getElementById('modalBookmarkBtn');

  // Profile Modal Elements
  const userProfileBtn = document.getElementById('userProfileBtn');
  const profileModalBackdrop = document.getElementById('profileModalBackdrop');
  const profileModalCloseBtn = document.getElementById('profileModalCloseBtn');
  const profileBookmarksList = document.getElementById('profileBookmarksList');

  // Initialize UI
  initTheme();
  renderClassTabs();
  renderSchoolGuides();
  renderSubjects();
  renderExamArchives();
  renderCompetitiveExams();
  renderPopularPosts();
  renderTOC();

  // Theme Handling
  function initTheme() {
    const savedTheme = localStorage.getItem('padasalai_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'dark' 
      ? '<i class="fas fa-sun"></i>' 
      : '<i class="fas fa-moon"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('padasalai_theme', next);
      updateThemeIcon(next);
      showToast(`${next.charAt(0).toUpperCase() + next.slice(1)} theme enabled`);
    });
  }

  // Render Class Selector Tabs (12th, 11th, 10th, 9th, etc.)
  function renderClassTabs() {
    if (!classTabsContainer) return;
    classTabsContainer.innerHTML = PADASALAI_DATA.classes.map(cls => `
      <button class="class-tab-pill ${cls.id === currentClass ? 'active' : ''}" data-class="${cls.id}">
        <i class="fas fa-graduation-cap"></i>
        <div style="display: flex; flex-direction: column; align-items: flex-start;">
          <span style="font-weight: 700;">${cls.name}</span>
          <span style="font-size: 0.7rem; opacity: 0.8; font-weight: 400;">${cls.count}</span>
        </div>
      </button>
    `).join('');

    classTabsContainer.querySelectorAll('.class-tab-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentClass = e.currentTarget.getAttribute('data-class');
        renderClassTabs();
        showToast(`Switched view to ${currentClass} Standard`);
      });
    });
  }

  // Render School Guides (Left Sidebar)
  function renderSchoolGuides() {
    if (!schoolGuidesContainer) return;
    schoolGuidesContainer.innerHTML = PADASALAI_DATA.schoolGuides.map(guide => `
      <a href="${guide.url}" target="_blank" class="guide-item-card" onclick="openPdfModal(event, '${guide.name}', 'School Guide', '${guide.url}')">
        <div class="guide-icon-box ${guide.color}">
          <i class="fas ${guide.icon}"></i>
        </div>
        <div class="guide-item-info">
          <span class="guide-item-name">${guide.name}</span>
          <span class="guide-item-sub">${guide.desc}</span>
          <span class="guide-badge">${guide.badge}</span>
        </div>
      </a>
    `).join('');
  }

  // Render 11th Subject Study Materials Grid
  function renderSubjects(filteredQuery = "") {
    if (!subjectsGrid) return;
    const list = PADASALAI_DATA.subjects["11th"] || [];
    
    const query = filteredQuery.trim().toLowerCase();
    const filtered = query === "" 
      ? list 
      : list.filter(sub => 
          sub.name.toLowerCase().includes(query) || 
          sub.nameTa.toLowerCase().includes(query) || 
          sub.desc.toLowerCase().includes(query)
        );

    if (filtered.length === 0) {
      subjectsGrid.innerHTML = `<p style="grid-column: 1/-1; padding: 20px; color: var(--text-muted); text-align: center;">No subjects found matching "${filteredQuery}"</p>`;
      return;
    }

    subjectsGrid.innerHTML = filtered.map(sub => `
      <div class="subject-card" onclick="openPdfModal(event, '11th ${sub.name} Study Materials', 'Subject Study Material', '${sub.url}')">
        <div class="subject-card-top">
          <div class="subject-icon-wrap ${sub.color}">
            <i class="fas ${sub.icon}"></i>
          </div>
          <div class="subject-titles">
            <span class="subject-name-en">${sub.name}</span>
            <span class="subject-name-ta">${sub.nameTa}</span>
          </div>
        </div>
        <p class="subject-desc">${sub.desc}</p>
        <span class="bullet-badge">Tamil & Eng Medium</span>
      </div>
    `).join('');
  }

  // Render Exam Archives (Quarterly, Half Yearly, Public)
  function renderExamArchives() {
    renderYearPills();
    renderExamList();
  }

  function renderYearPills() {
    if (!examPillsContainer) return;
    const years = ['All', '2027', '2026', '2025', '2024', '2023', '2022', '2021', '2019', 'Model'];
    examPillsContainer.innerHTML = years.map(yr => `
      <button class="year-pill ${yr === activeYearFilter ? 'active' : ''}" data-year="${yr}">
        ${yr === 'All' ? 'All Years' : yr}
      </button>
    `).join('');

    examPillsContainer.querySelectorAll('.year-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        activeYearFilter = e.currentTarget.getAttribute('data-year');
        renderYearPills();
        renderExamList();
      });
    });
  }

  function renderExamList(filteredQuery = "") {
    if (!examListContainer) return;
    const list = PADASALAI_DATA.examArchives["11th"][currentExamCategory] || [];
    
    let filtered = activeYearFilter === 'All' 
      ? list 
      : list.filter(item => item.year.includes(activeYearFilter));

    const query = filteredQuery.trim().toLowerCase();
    if (query !== "") {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.badge.toLowerCase().includes(query)
      );
    }

    if (filtered.length === 0) {
      examListContainer.innerHTML = `<p style="padding: 16px; color: var(--text-muted);">No exam papers found for year ${activeYearFilter}.</p>`;
      return;
    }

    examListContainer.innerHTML = filtered.map(item => `
      <li class="bullet-link-item ${item.highlight ? 'highlighted-exam-row' : ''}">
        <span class="bullet-dot"></span>
        <a href="${item.url}" target="_blank" class="bullet-link-text" onclick="openPdfModal(event, '${item.title}', 'Exam Question Paper', '${item.url}')">
          ${item.title}
        </a>
        <span class="bullet-badge">${item.badge}</span>
      </li>
    `).join('');
  }

  // Category Tab Selector for Exams (Quarterly / Half Yearly / Public)
  document.querySelectorAll('[data-exam-cat]').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('[data-exam-cat]').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentExamCategory = e.currentTarget.getAttribute('data-exam-cat');
      renderExamList();
    });
  });

  // Render Competitive Entrance Exams Section
  function renderCompetitiveExams() {
    if (!competitiveExamsGrid) return;
    competitiveExamsGrid.innerHTML = PADASALAI_DATA.competitiveExams.map(ex => `
      <div class="subject-card" onclick="openPdfModal(event, '${ex.name} Study Materials & Papers', 'Competitive Exam', '${ex.url}')">
        <div class="subject-card-top">
          <div class="subject-icon-wrap ${ex.color}">
            <i class="fas ${ex.icon}"></i>
          </div>
          <div class="subject-titles">
            <span class="subject-name-en">${ex.name}</span>
          </div>
        </div>
        <p class="subject-desc">${ex.desc}</p>
        <span class="bullet-badge" style="background: rgba(16,185,129,0.1); color: var(--accent-emerald);">Official Syllabus</span>
      </div>
    `).join('');
  }

  // Render Popular Posts Sidebar Section
  function renderPopularPosts() {
    if (!popularPostsContainer) return;
    popularPostsContainer.innerHTML = PADASALAI_DATA.quickLinksSection.slice(0, 5).map((link, idx) => `
      <div class="popular-item" onclick="openPdfModal(event, '${link.title}', 'Popular Post', '${link.url}')">
        <span class="popular-num">${idx + 1}</span>
        <div class="popular-info">
          <a href="${link.url}" target="_blank" class="popular-title">${link.title}</a>
        </div>
      </div>
    `).join('');
  }

  // Render Table of Contents Popover
  function renderTOC() {
    if (!tocListContainer) return;
    tocListContainer.innerHTML = PADASALAI_DATA.tableOfContents.map(toc => `
      <a href="#${toc.id}" class="toc-item-link" onclick="closeTOC()">
        <i class="fas ${toc.icon}" style="color: var(--accent-coral); width: 18px; text-align: center;"></i>
        <span>${toc.title}</span>
      </a>
    `).join('');
  }

  // Floating TOC Toggle
  if (tocToggleBtn && tocPopover) {
    tocToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      tocPopover.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!tocPopover.contains(e.target) && e.target !== tocToggleBtn) {
        tocPopover.classList.remove('show');
      }
    });
  }

  window.closeTOC = function() {
    if (tocPopover) tocPopover.classList.remove('show');
  };

  // Synchronized Dual Search Bars Functionality
  function performLiveSearch(query) {
    if (searchInputHeader && searchInputHeader.value !== query) {
      searchInputHeader.value = query;
    }
    if (searchInputSidebar && searchInputSidebar.value !== query) {
      searchInputSidebar.value = query;
    }

    renderSubjects(query);
    renderExamList(query);
  }

  if (searchInputHeader) {
    searchInputHeader.addEventListener('input', (e) => performLiveSearch(e.target.value));
  }
  if (searchInputSidebar) {
    searchInputSidebar.addEventListener('input', (e) => performLiveSearch(e.target.value));
  }

  // Interactive PDF Reader / Download Modal
  window.openPdfModal = function(event, title, category, url) {
    if (event) event.preventDefault();
    if (!pdfModalBackdrop) {
      window.open(url, '_blank');
      return;
    }

    modalTitle.textContent = title;
    modalCategory.textContent = category;
    modalLink.href = url;

    // Check if bookmarked
    const isSaved = savedBookmarks.some(b => b.url === url);
    modalBookmarkBtn.innerHTML = isSaved 
      ? '<i class="fas fa-bookmark" style="color:var(--accent-coral);"></i> Bookmarked' 
      : '<i class="far fa-bookmark"></i> Bookmark';

    modalBookmarkBtn.onclick = () => {
      toggleBookmark(title, category, url);
    };

    pdfModalBackdrop.classList.add('show');
  };

  if (modalCloseBtn && pdfModalBackdrop) {
    modalCloseBtn.addEventListener('click', () => {
      pdfModalBackdrop.classList.remove('show');
    });
    pdfModalBackdrop.addEventListener('click', (e) => {
      if (e.target === pdfModalBackdrop) {
        pdfModalBackdrop.classList.remove('show');
      }
    });
  }

  // Profile Modal & Bookmarks Viewer
  if (userProfileBtn && profileModalBackdrop && profileModalCloseBtn) {
    userProfileBtn.addEventListener('click', () => {
      renderBookmarkedList();
      profileModalBackdrop.classList.add('show');
    });

    profileModalCloseBtn.addEventListener('click', () => {
      profileModalBackdrop.classList.remove('show');
    });

    profileModalBackdrop.addEventListener('click', (e) => {
      if (e.target === profileModalBackdrop) {
        profileModalBackdrop.classList.remove('show');
      }
    });
  }

  function renderBookmarkedList() {
    if (!profileBookmarksList) return;
    
    if (savedBookmarks.length === 0) {
      profileBookmarksList.innerHTML = `
        <div style="text-align: center; padding: 24px; color: var(--text-muted);">
          <i class="far fa-bookmark" style="font-size: 2rem; margin-bottom: 10px; opacity: 0.5;"></i>
          <p>You haven't bookmarked any materials yet.</p>
          <p style="font-size: 0.75rem; margin-top: 4px;">Click the bookmark button inside any download modal to save it here.</p>
        </div>
      `;
      return;
    }

    profileBookmarksList.innerHTML = savedBookmarks.map((b, idx) => `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: var(--bg-card-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 8px; gap: 12px;">
        <div style="flex: 1; min-width: 0;">
          <span class="bullet-badge" style="font-size: 0.65rem; margin-bottom: 4px; display: inline-block;">${b.category}</span>
          <h4 style="font-size: 0.88rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--text-main);" title="${b.title}">${b.title}</h4>
        </div>
        <div style="display: flex; gap: 8px; flex-shrink: 0;">
          <a href="${b.url}" target="_blank" class="btn-download-primary" style="padding: 6px 12px; font-size: 0.8rem; border-radius: var(--radius-sm);">
            <i class="fas fa-external-link-alt"></i> Open
          </a>
          <button class="remove-bookmark-btn" data-url="${b.url}" style="background: rgba(239, 68, 68, 0.1); color: #ef4444; border: none; padding: 6px 10px; border-radius: var(--radius-sm); cursor: pointer; transition: 0.2s;">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    `).join('');

    profileBookmarksList.querySelectorAll('.remove-bookmark-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const url = e.currentTarget.getAttribute('data-url');
        const bookmark = savedBookmarks.find(b => b.url === url);
        if (bookmark) {
          toggleBookmark(bookmark.title, bookmark.category, url);
          renderBookmarkedList();
        }
      });
    });
  }

  function toggleBookmark(title, category, url) {
    const index = savedBookmarks.findIndex(b => b.url === url);
    if (index > -1) {
      savedBookmarks.splice(index, 1);
      showToast('Removed from Bookmarks');
    } else {
      savedBookmarks.push({ title, category, url });
      showToast('Saved to Bookmarks!');
    }
    localStorage.setItem('padasalai_bookmarks', JSON.stringify(savedBookmarks));

    if (pdfModalBackdrop && pdfModalBackdrop.classList.contains('show') && modalLink.href === url) {
      const isSaved = savedBookmarks.some(b => b.url === url);
      modalBookmarkBtn.innerHTML = isSaved 
        ? '<i class="fas fa-bookmark" style="color:var(--accent-coral);"></i> Bookmarked' 
        : '<i class="far fa-bookmark"></i> Bookmark';
    }
  }

  // Toast Feedback Notifications
  function showToast(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: #1e293b;
      color: #ffffff;
      padding: 10px 24px;
      border-radius: 9999px;
      font-size: 0.9rem;
      font-weight: 600;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 2100;
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      align-items: center;
      gap: 8px;
      border: 1px solid rgba(255,255,255,0.1);
    `;
    toast.innerHTML = `<i class="fas fa-info-circle" style="color: var(--accent-coral);"></i> <span>${msg}</span>`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 50);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
});