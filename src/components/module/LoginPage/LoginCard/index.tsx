import styles from "./index.module.scss";
import LogoLogin from "../../../../assets/images/logo-login.png";
import { FcGoogle } from "react-icons/fc";

const LoginCard = () => {
  return (
    <div className={styles.box}>
      <div className={styles.logoBox}>
        <img src={LogoLogin} />
        <span className={styles.text}>PNFT Market</span>
      </div>
      <div className={styles.nftTotal}>
        <span className={styles.text1}>NFT Access</span>
        <span className={styles.text2}>Please fill your detail to access your account.</span>
      </div>

      <div className={styles.inputBox}>
        <span className={styles.text1}>Email</span>
        <input type="text" placeholder="Username" required />
        <span className={styles.text2}>Password</span>
        <input type="text" placeholder="Password" required />
      </div>

      <div className={styles.rememberForgot}>
        <label><input type="checkbox" />Remember me</label>
        <a href="#">Forgot password?</a>
      </div>

      <button className={styles.submit1} type="submit">Sign in</button>
      <button className={styles.submit2} type="submit"> <FcGoogle />  Sign in with Google </button>

      <div className={styles.register}>
        <p>Don't have an account <a href="#">Sigh up</a></p> 
      </div>
    </div>
  );
};

export default LoginCard;
