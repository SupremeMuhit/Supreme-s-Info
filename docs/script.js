document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menuBtn");
  const closeSidebarBtn = document.getElementById("closeSidebar");
  const overlay = document.getElementById("overlay");

  function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling when sidebar is open
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", openSidebar);
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener("click", closeSidebar);
  }

  if (overlay) {
    overlay.addEventListener("click", closeSidebar);
  }

  // Close sidebar when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("active")) {
      closeSidebar();
    }
  });

  // Desktop Sidebar Toggle
  const desktopSidebarToggle = document.getElementById("desktopSidebarToggle");
  const appContainer = document.querySelector(".app-container");

  if (desktopSidebarToggle) {
    desktopSidebarToggle.addEventListener("click", () => {
      appContainer.classList.toggle("sidebar-collapsed");
    });
  }

  // Discord Copy to Clipboard
  const discordCard = document.getElementById("discordCard");
  const discordUsername = document.getElementById("discordUsername");
  const copyHint = document.querySelector(".copy-hint");

  if (discordCard && discordUsername) {
    discordCard.addEventListener("mouseenter", () => {
      if (copyHint) copyHint.style.display = "block";
    });

    discordCard.addEventListener("mouseleave", () => {
      if (copyHint) {
        copyHint.style.display = "none";
        copyHint.textContent = "Click to copy"; // Reset text
      }
    });

    discordCard.addEventListener("click", () => {
      const textToCopy = discordUsername.textContent;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          if (copyHint) copyHint.textContent = "Copied!";
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    });
  }

  // Secret Vault Password Logic
  const secretVaultCard = document.getElementById("secretVaultCard");
  const secretVaultSidebarLink = document.getElementById(
    "secretVaultSidebarLink"
  );

  // Inject Modal HTML
  if (!document.getElementById("passwordModal")) {
    const modalHTML = `
            <div id="passwordModal" class="modal">
                <div class="modal-content">
                    <h2 class="modal-title">Secret Vault</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Enter password to unlock</p>
                    <input type="password" id="vaultPassword" class="modal-input" placeholder="Password">
                    <p id="passwordError" class="error-msg">Incorrect password</p>
                    <div class="modal-buttons">
                        <button id="cancelBtn" class="modal-btn btn-cancel">Cancel</button>
                        <button id="unlockBtn" class="modal-btn btn-unlock">Unlock</button>
                    </div>
                </div>
            </div>
        `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }

  const modal = document.getElementById("passwordModal");
  const passwordInput = document.getElementById("vaultPassword");
  const unlockBtn = document.getElementById("unlockBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const errorMsg = document.getElementById("passwordError");

  const openModal = (e) => {
    e.preventDefault();
    modal.classList.add("active");
    passwordInput.value = "";
    errorMsg.style.display = "none";
    passwordInput.focus();
  };

  const closeModal = () => {
    modal.classList.remove("active");
  };

  const checkPassword = () => {
    if (passwordInput.value === "SupremeMuhit is goated") {
      window.location.href = "vault.html";
    } else {
      errorMsg.style.display = "block";
    }
  };

  if (secretVaultCard) secretVaultCard.addEventListener("click", openModal);
  if (secretVaultSidebarLink)
    secretVaultSidebarLink.addEventListener("click", openModal);

  if (unlockBtn) unlockBtn.addEventListener("click", checkPassword);
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);

  // Close on click outside
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Handle Enter key
  if (passwordInput) {
    passwordInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") checkPassword();
    });
  }
});
