<script>
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import { app } from '../firebase';
  
  const auth = getAuth(app);
  let email = '';
  let password = '';
  let errorMessage = '';

  async function login() {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // User is signed in
    const user = userCredential.user;
    console.log('Logged in user:', user);
    // Redirect or perform other actions upon successful login
  } catch (error) {
    errorMessage = error.message;
    console.error('Login error:', errorMessage);
  }
}
</script>

<style>
  /* Add your CSS styles here */
</style>

<h1>Login</h1>

{#if errorMessage}
  <p style="color: red;">{errorMessage}</p>
{/if}

<form on:submit|preventDefault={login}>
  <label for="email">Email:</label><br>
  <input type="email" id="email" bind:value={email}><br>

  <label for="password">Password:</label><br>
  <input type="password" id="password" bind:value={password}><br>

  <button type="submit">Login</button>
</form>
