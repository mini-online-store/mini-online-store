
import React , { useState } from "react";


const Signup=()=>{
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    setLoading(true);

    return(
        <>
        

        </form>
        </>
    )

    

  };
}

export default Signup;