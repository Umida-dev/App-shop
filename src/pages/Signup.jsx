import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore"; 

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !name || !password || !password2) {
      return setError("Barcha maydonlarni to‘ldiring");
    }

    if (password !== password2) {
      return setError("Parollar mos emas");
    }

    if (password.length < 6) {
      return setError("Parol kamida 6 belgidan iborat bo‘lishi kerak");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      const avatar = `https://api.dicebear.com/7.x/initials/svg?seed=${name}`;

      await addDoc(collection(db, "users"), {
        displayName: name,
        email: email,
        avatar: avatar,
      });


      localStorage.setItem(
        "user",
        JSON.stringify({
          name: name,
          email: email,
          avatar: avatar,
        })
      );

      navigate("/home");
    } catch (err) {
      console.log(err.message);
      if (err.message.includes("email-already-in-use")) {
        setError("Bu email allaqachon ro‘yxatdan o‘tgan");
      } else {
        setError("Ro‘yxatdan o‘tishda xatolik");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Ro‘yxatdan o‘tish</h2>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Ismingiz"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Parolni qayta kiriting"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Ro‘yxatdan o‘tish
        </button>
        <p className="mt-3">
          Siz royhatdan otgan bolsangiz{" "}
          <Link to="/login" className="text-blue-600 hover:underline font-bold">
            Login
          </Link>{" "}
          qilishingiz mumkin!
        </p>
      </form>
    </div>
  );
}

export default Signup;
