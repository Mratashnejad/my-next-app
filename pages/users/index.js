import Link from 'next/link';

export default function UserPage() {
    const users = [
        { id: 1, username: 'ali' },
        { id: 2, username: 'reza' },
        { id: 3, username: 'xashi' },
        { id: 4, username: 'sogand' },
        { id: 5, username: 'afshin' },
        { id: 6, username: 'melika' },
    ];

    return (
        <div>
            <h2>User Page</h2>
            <ul>
                <li><Link href="/users/ali">ALi</Link></li>
                <li><Link href="/users/admin">admin</Link></li>
                {users.map(user => (
                    <li key={user.id}>
                        <Link 
                            href={{
                                pathname: '/users/[id]',
                                query: { id: user.id },
                            }}
                        >
                            {user.username}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
