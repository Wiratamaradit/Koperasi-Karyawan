import React, { useState, useEffect } from 'react';
import './auth.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
	const [action, setAction] = useState("Sign Up");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	async function signUp() {
		let item = { name, email, password };
		console.warn(item);
		let result = await fetch("http://localhost:8000/api/register", {
			method: "POST",
			body: JSON.stringify(item),
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		});

		result = await result.json();
		console.log("result", result);
	}

	async function Login() {
		console.warn(email, password);
		let item = { email, password };
		let result = await fetch("http://localhost:8000/api/login", {
			method: "POST",
			body: JSON.stringify(item),
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		});
		result =  await result.json();
		localStorage.setItem("user-info", JSON.stringify(result));
		navigate("/home");
	}

	return (
		<div className='container'>
			<div className='header'>
				<div className='text'>{action}</div>
				<div className='underline'></div>
			</div>
			<div className='inputs'>
				{action === "Login" ? <div></div> : <div className='input'>
					<img src={user_icon} alt="" />
					<input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
				</div>}
				<div className='input'>
					<img src={email_icon} alt="" />
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
				</div>
				<div className='input'>
					<img src={password_icon} alt="" />
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
				</div>
			</div>
			{action === "Sign Up" ? <div></div> : <div className='forgot-password'>Forget your password?<span>Click Here</span></div>}
			<div className='submit-container'>
				{action === "Login" ? (
					<div className="submit" onClick={() => { setAction("Sign Up") }}>Sign Up</div>
				) : (
					<div className="submit" onClick={signUp}>Sign up</div>
				)}
				{action === "Sign Up" ? (
					<div className="submit gray" onClick={() => { setAction("Login") }}>Login</div>
				) : (
					<div className="submit gray" onClick={Login}>Login</div>
				)}
			</div>
		</div>
	);
}

export default Auth;
