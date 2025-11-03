import './global.css'
import styles from './App.module.css'
import landing_image from './assets/landing_image.avif'
import odin_logo from './assets/odin-lined.png'

function App() {

  return (
    <>
      <div className={styles.body}>
        <div>
          <img className={styles.landing_image} src={landing_image} />
          <div>
            <div></div>
            <div className={styles.odin_black_bar}>
              <div>
                <img className={styles.odin_logo} src={odin_logo} />
                <div>
                  ODIN
                </div>
              </div>
            </div>
            <div>Photo&nbsp;by&nbsp;<a className={styles.anchor_landing_image} href='https://unsplash.com/@haliewestphoto'>Halie&nbsp;West</a>&nbsp;on&nbsp;<a href='https://unsplash.com/' className={styles.anchor_landing_image}>Unsplash</a></div>
          </div>
        </div>

        <div className={styles.landing_content}>
          <div>
            <header>
              This is not a real online service! You know you need something like this in your life to help you realize your deepest dreams. Sign up <em>now</em> to get started.<br></br><br></br>You <em>know</em> you want to.
            </header>
            <div className={styles.input} >
              <div>
                Let's do this!
              </div>
              <div>
                <label for='firstName'>FIRST NAME</label>
                <input type='text' id='firstName' name='firstName' form='register'  />
              </div>
              <div>
                <label for='lastName'>LAST NAME</label>
                <input type='text' id='lastName' name='lastName' form='register' />
              </div>
              <div>
                <label for='email'>EMAIL</label>
                <input type='email' id='email' name='email' form='register'  />
              </div>
              <div>
                <label for='phone'>PHONE NUMBER</label>
                <input type='text' id='phone' name='phone' form='register'  />
              </div>
              <div>
                <label for='password'>PASSWORD</label>
                <input type='password' id='password' name='password' form='register' />
              </div>
              <div>
                <label for='confirmPass'>CONFIRM PASSWORD</label>
                <input type='password' id='confirmPass' name='confirmPassword' form='register' />
              </div>
              
            </div>
          </div>
          <div>
            <button type='submit' form='register' className={styles.registerBtn}>Create Account</button>
            <div style={{marginTop: '20px'}}>
              Already have an account? <a>Log in</a>
            </div>
          </div>


        </div>
      </div>
      <form id='register'></form>  {/* this form should be wrapping my <input> elements */}
    </>
  )
}

export default App
