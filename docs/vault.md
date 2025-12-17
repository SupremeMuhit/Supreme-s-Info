<script setup>
import { ref } from 'vue'

const password = ref('')
const isUnlocked = ref(false)
const error = ref('')

function checkPassword() {
  if (password.value === 'SupremeMuhit is goated' || password.value === 'SupremeMuhit is really goated') {
    isUnlocked.value = true
    error.value = ''
  } else {
    error.value = 'Incorrect password'
    password.value = ''
  }
}
</script>

# Secret Vault

<div v-if="!isUnlocked" class="vault-login">
  <div class="lock-icon">🔒</div>
  <h2>Security Check</h2>
  <p>The content in this vault is sensitive. Please enter the password.</p>
  
  <div class="input-group">
    <input 
      v-model="password" 
      type="password" 
      placeholder="Enter Password" 
      @keyup.enter="checkPassword"
      class="vault-input"
    >
    <button @click="checkPassword" class="vault-btn">Unlock</button>
  </div>
  
  <p v-if="error" class="error-msg">{{ error }}</p>
</div>

<div v-else class="vault-content">
  <div class="success-banner">
    <h3>🔓 Access Granted</h3>
    <p>Welcome to the secret area, Agent.</p>
  </div>

  <div class="card-grid">
     <div class="card">
        <h3>Top Secret Content</h3>
        <p>This content is only visible to those who know the password.</p>
        <p><em>(More secrets coming soon...)</em></p>
     </div>
  </div>
</div>

<style>
.vault-login {
  text-align: center;
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.lock-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.vault-input {
  flex: 1;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.vault-btn {
  padding: 8px 16px;
  border-radius: 6px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  cursor: pointer;
}

.vault-btn:hover {
  background: var(--vp-c-brand-dark);
}

.error-msg {
  color: #f87171;
  font-size: 0.9rem;
}

.success-banner {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  text-align: center;
}

.card-grid {
  display: grid;
  gap: 1.5rem;
}

.card {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
</style>
