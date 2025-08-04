import Link from "next/link"

export default function blog(){
    return (
        <>
        <h1>Blog</h1>
        <Link href="/blog/first">First Blog</Link>
        <Link href="/blog/second">Second Blog</Link>
        </>
    )

}