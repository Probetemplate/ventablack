<script>
  import { onMount } from 'svelte';
  
  import { app } from '../firebase';
  
  const auth = getAuth(app);
  
  let user = $auth.user;

  onMount(() => {
    // Ensure user data is loaded
    $auth.subscribe(value => {
      user = value.user;
    });
  });
</script>

<h1>Profile</h1>

{#if user}
  <p>Name: {user.displayName}</p>
  <p>Email: {user.email}</p>
  {#if user.photoURL}
    <img src="{user.photoURL}" alt="Profile Photo">
  {/if}
{:else}
  <p>Loading...</p>
{/if}
