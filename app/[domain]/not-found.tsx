import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div style={{padding:'1rem',display:'flex', justifyContent:'center',flexDirection:'column', textAlign:'center'}}>
      <h2>Page Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}