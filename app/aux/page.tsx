"use client";
import * as React from "react"
import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { user } from "@/repository/user"

export default function CardWithForm() {
  const [erreur, setErreur] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === user.username && password === user.password) {
      setErreur("");
      window.location.href = "../";
    } else {
      setErreur("L'adresse e-mail ou le mot de passe est incorrect");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[350px] shadow">
        <CardHeader className="flex justify-center">
          <CardTitle className="flex justify-center text-3xl">Connexion</CardTitle>
          <CardDescription className="flex justify-center">To access Cinetica</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">E-mail Adress</Label>
                <Input id="name" type="email" placeholder="your e-mail adress" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="your password" value = {password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {erreur && <div className="text-red-500 text-sm">{erreur}</div>}
            </div>
            <CardFooter className="flex justify-center">
              <Button type="submit">Log in</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}