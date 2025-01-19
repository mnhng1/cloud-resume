import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a className="mt-6 text-primary hover:underline">Go back to Home</a>
      </Link>
    </div>
  );
}