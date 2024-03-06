<script lang="ts">
  import FirebaseApp from "$lib/components/FirebaseApp.svelte";
  import { db as firestore, auth, rtdb, storage, analytics } from "./firebase.ts";
</script>

<FirebaseApp {auth} {firestore} {rtdb} {storage} {analytics}>
  <slot />
</FirebaseApp>
