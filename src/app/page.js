'use client';
import Body from "@/components/Body";
import Image from "next/image";

import { useState } from 'react';
import Head from 'next/head';

import { GoogleGenAI } from '@google/genai';
import Header from '@/components/Header';
import ChatInterface from "@/components/ChatInterface";
export default function Home() {
  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const apiKey = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;

  const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY });
  return (
    <div className="box bg-black p-0.5">
      <Body />
      <div className='chatbot w-[80vw] h-[80vh] relative z-5 bottom-[500vh] right-[20vw]'>
          <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">Chat With Gemini</h1>
          <ChatInterface apiKey={apiKey} />
        </div>
    </div>
  )
}

