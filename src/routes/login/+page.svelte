
<script>
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import {goto} from '$app/navigation';
  import { app } from '../firebase';
  
  const auth = getAuth(app);
  let email = '';
  let password = '';
  let errorMessage = '';
async function login() {
    // Clear previous error message
    errorMessage = '';

    // Validate email
    if (!email.trim()) {
        errorMessage = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errorMessage = 'Email is invalid.';
    }

    // Validate password
    if (!password.trim()) {
        errorMessage = 'Password is required.';
    }

    // If there are validation errors, display error message and return
    if (errorMessage) {
        console.error('Login error:', errorMessage);
        return;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // User is signed in
        const user = userCredential.user;
        console.log('Logged in user:', user);
        goto('/');
    } catch (error) {
        errorMessage = error.message;
        console.error('Login error:', errorMessage);
    }
}
  

  export let year = new Date().getFullYear();
</script>



  <svelte:head>
    
    <title>Log in | Webui</title>
     <meta content="Login to get started.." name="description" />
    <meta content="Netsmg" name="author" />
    
  </svelte:head>

  
    <div class="account-pages my-5 pt-sm-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="text-center mb-4">
              
              <h4>Sign in</h4>
              <p class="text-muted mb-4">Sign in to continue to Webui.
              </p>
              {#if errorMessage}
  <p style="color: red;">{errorMessage}</p>
{/if}
            </div>

            <div class="card">
              <div class="card-body p-4">
                <div class="p-3">
                  <form on:submit|preventDefault={login}>
                    <div class="mb-3">
                      <label class="form-label">Username</label>
                      <div class="input-group mb-3 bg-light-subtle rounded-3">
                        <span class="input-group-text text-muted" id="basic-addon3">
                          <i class="ri-user-2-line"></i>
                        </span>
                        <input
                          type="email" id="email" bind:value={email}
                          class="form-control form-control-lg border-light bg-light-subtle"
                          placeholder="Enter Username"
                          aria-label="Enter Username"
                          aria-describedby="basic-addon3"
                        />
                      </div>
                    </div>

                    <div class="mb-4">
                      <div class="float-end">
                        <a href="./auth-recover" class="text-muted font-size-13">
                          Forgot password?
                        </a>
                      </div>
                      <label class="form-label">Password</label>
                      <div class="input-group mb-3 bg-light-subtle rounded-3">
                        <span class="input-group-text text-muted" id="basic-addon4">
                          <i class="ri-lock-2-line"></i>
                        </span>
                        <input
                          type="password" id="password" bind:value={password}
                          class="form-control form-control-lg border-light bg-light-subtle"
                          placeholder="Enter Password"
                          aria-label="Enter Password"
                          aria-describedby="basic-addon4"
                        />
                      </div>
                    </div>

                    <div class="form-check mb-4">
                      <input type="checkbox" class="form-check-input" id="remember-check" />
                      <label class="form-check-label" for="remember-check">Remember me</label>
                    </div>

                    <div class="d-grid">
                      <button class="btn btn-primary waves-effect waves-light" type="submit">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="mt-5 text-center">
              <p>
                Don&apos;t have an account ?{" "}
                <a href="./register" class="fw-medium text-primary">
                  Signup now
                </a>{" "}
              </p>
              <p>&copy; {year} Webui. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end account-pages -->

    
