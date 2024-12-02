"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import '../style/headerCategori.css';

export default function Header() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <header className="header">
      <div className="header-content">
       
        <nav className="nav">
          <button className="nav-itemH2" onClick={() => navigateTo('/todo/1')}>Todo</button>
          <button className="nav-itemH2" onClick={() => navigateTo('/capilar/1')}>Cuidado capilar</button>
          <button className="nav-itemH2" onClick={() => navigateTo('/maquillaje/1')}>Maquillaje</button>
          <button className="nav-itemH2" onClick={() => navigateTo('/facial/1')}>Cuidado facial</button>
          <button className="nav-itemH2" onClick={() => navigateTo('/perfumeria/1')}>Perfumería</button>
        </nav>
      </div>
    </header>
  );
}
