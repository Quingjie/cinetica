"use client";
import * as React from "react"
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { user } from "@/repository/user";
import Image from "next/image";
import Logo from "./logo.webp";
import { Anton } from 'next/font/google';
import { Antonio } from 'next/font/google';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
});
const antonio = Antonio({
  subsets: ['latin'],
  weight: '400',
});

export default function CardWithForm() {
  const [isLogged, setIsLogged] = useState(false);
  const [erreur, setErreur] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === user.username && password === user.password) {
      setIsLogged(true);
      setErreur("");
      window.location.href="./login";
    }
    else {
      setErreur("L'adresse e-mail ou le mot de passe est incorrect");
      setIsLogged(false);
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[350px] shadow">
        <CardHeader className="flex justify-center items-center">
          <Image src={Logo} alt="Logo" className="w-24 h-24 items-center rounded-full" />
          <CardTitle className={`flex justify-center text-3xl ${anton.className}`}>Cinetica</CardTitle>
          <CardDescription className={`flex justify-center ${antonio.className}`}>Connexion</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 text-[#3E1212]">
                <Label className={antonio.className} htmlFor="name">E-mail Adress</Label>
                <Input className="bg-[#C9C9C9] rounded-full" id="name" type="email" placeholder="your e-mail adress" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5 text-[#3E1212]" >
                <Label className={antonio.className} htmlFor="password">Password</Label>
                <Input className="bg-[#C9C9C9] rounded-full" id="password" type="password" placeholder="your password" value = {password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {erreur && <div className="text-red-500 text-sm">{erreur}</div>}
            </div>
            <CardFooter className="flex justify-center mt-5">
              <Button className={`bg-[#8E8FC3] rounded-full text-[#000000] ${antonio.className}`} type="submit">Log in</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}