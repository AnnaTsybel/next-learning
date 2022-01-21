import Link from 'next/link';

export default function Error(){
    return(
        <>
            <h1>Page 404</h1>
            <p><Link href='/'>Go to home page!</Link></p>
        </>
    )
}