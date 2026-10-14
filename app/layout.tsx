import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
export const metadata: Metadata = { title: 'Nigeria Election Demo — Voting System MVP', description: 'A fictional mock-NIN Nigerian election voting demonstration.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><header className="topbar"><Link href="/" className="brandmark"><span className="logo">N</span><span>civic<span style={{color:'#3157d5'}}>vote</span></span></Link><nav className="nav"><Link href="/">Overview</Link><Link href="/admin/elections/new">Create election</Link><Link href="/vote/national-demo">Demo voter</Link></nav></header>{children}</body></html>; }
