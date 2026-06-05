import { UserCard } from '@/features/user/components/UserCard';
import { mockUsers } from '@/features/user/mock/mock';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">スタッフ一覧</h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockUsers.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
