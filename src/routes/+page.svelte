<script>
  import { fauth } from './firebase'; // Import the Firebase authentication object
  
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      // Sign in with email and password using Firebase authentication
      await fauth.signInWithEmailAndPassword(email, password);
      // Redirect to the desired route after successful login
      window.location('/dashboard'); // Replace '/dashboard' with your desired route
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle login error (e.g., display error message to the user)
    }
  };
export let year = new Date().getFullYear();
</script>


<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Log in | Webui</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta content="Responsive Bootstrap 5 Chat App" name="description" />
    <meta content="Netsmg" name="author" />
    <!-- App favicon -->
    
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <link href="./css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Icons Css -->
    <link href="./css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="./css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
  </head>

  <body>
    <div class="account-pages my-5 pt-sm-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="text-center mb-4">
              
              <h4>Sign in</h4>
              <p class="text-muted mb-4">Sign in to continue to Webui.</p>
            </div>

            <div class="card">
              <div class="card-body p-4">
                <div class="p-3">
                  <form on:submit={handleSubmit}>
                    <div class="mb-3">
                      <label class="form-label">Username</label>
                      <div class="input-group mb-3 bg-light-subtle rounded-3">
                        <span class="input-group-text text-muted" id="basic-addon3">
                          <i class="ri-user-2-line"></i>
                        </span>
                        <input
                          type="email" name="email"
                          class="form-control form-control-lg border-light bg-light-subtle"
                          placeholder="Enter Email"
                          aria-label="Enter Email"
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
                          type="password"
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
                Don't have an account ?{" "}
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

    <!-- JAVASCRIPT -->
  </body>
</html>



