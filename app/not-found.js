import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='not-found-page-container'>
      <h2 className='fw-bold'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='btn btn-light' href="/">Return Home</Link>
    </div>
  );
}