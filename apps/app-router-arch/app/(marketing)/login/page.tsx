import { login } from "@/app/actions";

export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto text-center">
      <h1 className="text-3xl font-bold text-stone-900">Admin Login</h1>
      <p className="mt-2 text-stone-600">
        This is a protected area. Please &quot;log in&quot; to continue.
      </p>
      <form action={login} className="mt-6">
        <button
          type="submit"
          className="w-full bg-stone-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-stone-900 transition-colors"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
