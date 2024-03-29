<script>
  import { onMount } from 'svelte/internal';
  import { getAuth } from 'firebase/auth';
  import { app } from '../firebase';
  import {goto} from '$app/navigation';

  const auth = getAuth(app);
  let user;

  onMount(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      user = currentUser;
      if (!user) {
        goto('/login'); // Redirect to login page if user is not logged in
        // Or update the URL directly: window.location.href = '/login';
      }
    });

    return unsubscribe;
  });

  function logout() {
    auth.signOut();
  }
</script>

<h1>Profile</h1>

{#if user}
  <p>Name: {user.displayName}</p>
  <p>Email: {user.email}</p>
  {#if user.photoURL}
    <img src="{user.photoURL}" alt="Profile Photo">
  {/if}
  <button on:click={logout}>Logout</button>
{:else}
  <p>Loading...</p>
{/if}
